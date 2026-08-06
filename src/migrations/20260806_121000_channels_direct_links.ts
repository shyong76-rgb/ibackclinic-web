import type { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'

// Channels 글로벌을 "실시간 채팅 위젯 키"(미연동 상태로 방치되어 있었음)에서
// 헤더 CTA·플로팅 버튼·/reservation 페이지가 바로 쓰는 직접 링크 필드로 교체.
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "channels" DROP COLUMN IF EXISTS "kakao_channel_key";
  ALTER TABLE "channels" DROP COLUMN IF EXISTS "kakao_active";
  ALTER TABLE "channels" DROP COLUMN IF EXISTS "naver_talk_key";
  ALTER TABLE "channels" DROP COLUMN IF EXISTS "naver_active";
  ALTER TABLE "channels" ADD COLUMN "kakao_url" varchar;
  ALTER TABLE "channels" ADD COLUMN "naver_booking_url" varchar;
  ALTER TABLE "channels" ADD COLUMN "phone" varchar;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "channels" DROP COLUMN IF EXISTS "kakao_url";
  ALTER TABLE "channels" DROP COLUMN IF EXISTS "naver_booking_url";
  ALTER TABLE "channels" DROP COLUMN IF EXISTS "phone";
  ALTER TABLE "channels" ADD COLUMN "kakao_channel_key" varchar;
  ALTER TABLE "channels" ADD COLUMN "kakao_active" boolean;
  ALTER TABLE "channels" ADD COLUMN "naver_talk_key" varchar;
  ALTER TABLE "channels" ADD COLUMN "naver_active" boolean;`)
}
