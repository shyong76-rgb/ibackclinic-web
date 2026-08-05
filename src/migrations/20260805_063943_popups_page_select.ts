import type { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_popups_show_on_paths" AS ENUM('*', '/', '/i-back-clear', '/dark-circle', '/login', '/board/before-after', '/board/*');
  CREATE TABLE "popups_show_on_paths" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_popups_show_on_paths",
  	"id" serial PRIMARY KEY NOT NULL
  );

  ALTER TABLE "code_snippets_snippets" ADD COLUMN IF NOT EXISTS "show_on_paths" varchar DEFAULT '*';
  ALTER TABLE "popups_show_on_paths" ADD CONSTRAINT "popups_show_on_paths_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."popups"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "popups_show_on_paths_order_idx" ON "popups_show_on_paths" USING btree ("order");
  CREATE INDEX "popups_show_on_paths_parent_idx" ON "popups_show_on_paths" USING btree ("parent_id");
  ALTER TABLE "popups" DROP COLUMN IF EXISTS "show_on_paths";`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE IF EXISTS "popups_show_on_paths" CASCADE;
  ALTER TABLE "popups" ADD COLUMN IF NOT EXISTS "show_on_paths" varchar DEFAULT '*';
  ALTER TABLE "code_snippets_snippets" DROP COLUMN IF EXISTS "show_on_paths";
  DROP TYPE IF EXISTS "public"."enum_popups_show_on_paths";`)
}
