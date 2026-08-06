import type { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'

// 아이백의원 → 클링에스테틱 리브랜딩: Procedures 컬렉션에 구성/시술순서/효과/대상/전후사진/제품사진
// 필드를 추가하고, category enum에 클링에스테틱 분류값을 더한다. 기존(아이백의원) enum 값은
// 더 이상 쓰지 않지만 지우지 않음(ALTER TYPE ... DROP VALUE가 없어 재생성이 더 위험함).
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_procedures_category" ADD VALUE IF NOT EXISTS 'cling-signature';
  ALTER TYPE "public"."enum_procedures_category" ADD VALUE IF NOT EXISTS 'wave-on-lifting';
  ALTER TYPE "public"."enum_procedures_category" ADD VALUE IF NOT EXISTS 'acne-care';
  ALTER TYPE "public"."enum_procedures_category" ADD VALUE IF NOT EXISTS 'hydration-care';
  ALTER TYPE "public"."enum_procedures_category" ADD VALUE IF NOT EXISTS 'collagen-velvet';
  ALTER TYPE "public"."enum_procedures_category" ADD VALUE IF NOT EXISTS 'peeling';
  ALTER TYPE "public"."enum_procedures_category" ADD VALUE IF NOT EXISTS 'revelook';`)

  await db.execute(sql`
   CREATE TABLE "procedures_composition" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL
  );

  CREATE TABLE "procedures_procedure_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"image_id" integer
  );

  CREATE TABLE "procedures_effects" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );

  CREATE TABLE "procedures_target_audience" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );

  CREATE TABLE "procedures_before_after_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"before_id" integer,
  	"after_id" integer,
  	"caption" varchar
  );

  CREATE TABLE "procedures_product_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar
  );

  ALTER TABLE "procedures_composition" ADD CONSTRAINT "procedures_composition_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."procedures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "procedures_procedure_steps" ADD CONSTRAINT "procedures_procedure_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."procedures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "procedures_procedure_steps" ADD CONSTRAINT "procedures_procedure_steps_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "procedures_effects" ADD CONSTRAINT "procedures_effects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."procedures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "procedures_target_audience" ADD CONSTRAINT "procedures_target_audience_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."procedures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "procedures_before_after_images" ADD CONSTRAINT "procedures_before_after_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."procedures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "procedures_before_after_images" ADD CONSTRAINT "procedures_before_after_images_before_id_media_id_fk" FOREIGN KEY ("before_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "procedures_before_after_images" ADD CONSTRAINT "procedures_before_after_images_after_id_media_id_fk" FOREIGN KEY ("after_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "procedures_product_images" ADD CONSTRAINT "procedures_product_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."procedures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "procedures_product_images" ADD CONSTRAINT "procedures_product_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;

  CREATE INDEX "procedures_composition_order_idx" ON "procedures_composition" USING btree ("_order");
  CREATE INDEX "procedures_composition_parent_id_idx" ON "procedures_composition" USING btree ("_parent_id");
  CREATE INDEX "procedures_procedure_steps_order_idx" ON "procedures_procedure_steps" USING btree ("_order");
  CREATE INDEX "procedures_procedure_steps_parent_id_idx" ON "procedures_procedure_steps" USING btree ("_parent_id");
  CREATE INDEX "procedures_procedure_steps_image_idx" ON "procedures_procedure_steps" USING btree ("image_id");
  CREATE INDEX "procedures_effects_order_idx" ON "procedures_effects" USING btree ("_order");
  CREATE INDEX "procedures_effects_parent_id_idx" ON "procedures_effects" USING btree ("_parent_id");
  CREATE INDEX "procedures_target_audience_order_idx" ON "procedures_target_audience" USING btree ("_order");
  CREATE INDEX "procedures_target_audience_parent_id_idx" ON "procedures_target_audience" USING btree ("_parent_id");
  CREATE INDEX "procedures_before_after_images_order_idx" ON "procedures_before_after_images" USING btree ("_order");
  CREATE INDEX "procedures_before_after_images_parent_id_idx" ON "procedures_before_after_images" USING btree ("_parent_id");
  CREATE INDEX "procedures_before_after_images_before_idx" ON "procedures_before_after_images" USING btree ("before_id");
  CREATE INDEX "procedures_before_after_images_after_idx" ON "procedures_before_after_images" USING btree ("after_id");
  CREATE INDEX "procedures_product_images_order_idx" ON "procedures_product_images" USING btree ("_order");
  CREATE INDEX "procedures_product_images_parent_id_idx" ON "procedures_product_images" USING btree ("_parent_id");
  CREATE INDEX "procedures_product_images_image_idx" ON "procedures_product_images" USING btree ("image_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "procedures_composition" CASCADE;
  DROP TABLE "procedures_procedure_steps" CASCADE;
  DROP TABLE "procedures_effects" CASCADE;
  DROP TABLE "procedures_target_audience" CASCADE;
  DROP TABLE "procedures_before_after_images" CASCADE;
  DROP TABLE "procedures_product_images" CASCADE;`)
  // enum에 추가한 값(cling-signature 등)은 Postgres가 ALTER TYPE ... DROP VALUE를 지원하지
  // 않아 롤백하지 않음 — 남아있어도 무해함(코드의 select options만 실제로 강제됨).
}
