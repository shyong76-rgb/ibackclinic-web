import type { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'

// Claude Design 산출물 브릿지: ABOUT THE CARE 헤드라인, 전후사진 촬영 안내, 제품/기기 설명
// 텍스트를 담을 컬럼 추가.
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "procedures" ADD COLUMN "about_headline" varchar;
  ALTER TABLE "procedures" ADD COLUMN "photo_note" varchar;
  ALTER TABLE "procedures" ADD COLUMN "product_note" varchar;
  ALTER TABLE "procedures" ADD COLUMN "hero_stat_number" varchar;
  ALTER TABLE "procedures" ADD COLUMN "hero_stat_caption" varchar;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "procedures" DROP COLUMN IF EXISTS "about_headline";
  ALTER TABLE "procedures" DROP COLUMN IF EXISTS "photo_note";
  ALTER TABLE "procedures" DROP COLUMN IF EXISTS "product_note";
  ALTER TABLE "procedures" DROP COLUMN IF EXISTS "hero_stat_number";
  ALTER TABLE "procedures" DROP COLUMN IF EXISTS "hero_stat_caption";`)
}
