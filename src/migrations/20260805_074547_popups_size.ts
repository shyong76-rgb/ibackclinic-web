import type { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_popups_size" AS ENUM('small', 'medium', 'large');
  ALTER TABLE "popups" ADD COLUMN "size" "enum_popups_size" DEFAULT 'small';`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "popups" DROP COLUMN "size";
  DROP TYPE "public"."enum_popups_size";`)
}
