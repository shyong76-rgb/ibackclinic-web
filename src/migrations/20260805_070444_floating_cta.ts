import type { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_floating_cta_buttons_style" AS ENUM('dark', 'accent', 'light');
  CREATE TYPE "public"."enum_floating_cta_buttons_action" AS ENUM('link', 'wechat');
  CREATE TABLE "floating_cta_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"visible" boolean DEFAULT true,
  	"style" "enum_floating_cta_buttons_style" DEFAULT 'dark',
  	"action" "enum_floating_cta_buttons_action" DEFAULT 'link',
  	"href" varchar
  );
  
  CREATE TABLE "floating_cta" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "floating_cta_buttons" ADD CONSTRAINT "floating_cta_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."floating_cta"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "floating_cta_buttons_order_idx" ON "floating_cta_buttons" USING btree ("_order");
  CREATE INDEX "floating_cta_buttons_parent_id_idx" ON "floating_cta_buttons" USING btree ("_parent_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "floating_cta_buttons" CASCADE;
  DROP TABLE "floating_cta" CASCADE;
  DROP TYPE "public"."enum_floating_cta_buttons_style";
  DROP TYPE "public"."enum_floating_cta_buttons_action";`)
}
