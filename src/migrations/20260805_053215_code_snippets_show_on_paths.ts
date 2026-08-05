import type { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "code_snippets_snippets" ADD COLUMN IF NOT EXISTS "show_on_paths" varchar DEFAULT '*';
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "code_snippets_snippets" DROP COLUMN IF EXISTS "show_on_paths";
  `)
}
