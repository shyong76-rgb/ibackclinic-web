import type { CollectionConfig } from 'payload'
import { SITE_PAGE_OPTIONS } from '@/lib/site-config'

// 팝업 풀세트: 타입/노출조건(트리거·페이지·기간·빈도·디바이스)을 프론트에서 판정해 렌더.
export const Popups: CollectionConfig = {
  slug: 'popups',
  labels: { singular: '팝업', plural: '팝업' },
  admin: { useAsTitle: 'name', group: '마케팅' },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'name', type: 'text', label: '팝업 이름(관리용)', required: true },
    { name: 'active', type: 'checkbox', label: '활성화', defaultValue: true },
    {
      name: 'type',
      type: 'select',
      label: '형태',
      defaultValue: 'single',
      options: [
        { label: '개별', value: 'single' },
        { label: '슬라이드', value: 'slide' },
        { label: '하단바', value: 'bottom-bar' },
        { label: '전면', value: 'modal' },
      ],
    },
    {
      name: 'size',
      type: 'select',
      label: '크기',
      defaultValue: 'small',
      options: [
        { label: '작게 (380px)', value: 'small' },
        { label: '보통 (480px)', value: 'medium' },
        { label: '크게 (600px)', value: 'large' },
      ],
      admin: {
        description: '개별·슬라이드·전면 팝업에만 적용 (하단바는 항상 화면 전체 너비)',
        condition: (_, siblingData) => siblingData.type !== 'bottom-bar',
      },
    },
    {
      name: 'slides',
      type: 'array',
      label: '내용(슬라이드)',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', label: '이미지' },
        { name: 'text', type: 'text', label: '문구' },
        { name: 'ctaLabel', type: 'text', label: '버튼 텍스트' },
        { name: 'ctaHref', type: 'text', label: '버튼 링크' },
      ],
    },
    {
      name: 'trigger',
      type: 'select',
      label: '노출 트리거',
      defaultValue: 'immediate',
      options: [
        { label: '즉시', value: 'immediate' },
        { label: 'N초 후', value: 'delay' },
        { label: '스크롤 %', value: 'scroll' },
        { label: '이탈 시도', value: 'exit-intent' },
      ],
    },
    { name: 'delaySeconds', type: 'number', label: '지연 시간(초)', admin: { condition: (_, siblingData) => siblingData.trigger === 'delay' } },
    { name: 'scrollPercent', type: 'number', label: '스크롤 비율(%)', admin: { condition: (_, siblingData) => siblingData.trigger === 'scroll' } },
    {
      name: 'showOnPaths',
      type: 'select',
      label: '노출 페이지',
      hasMany: true,
      defaultValue: ['*'],
      options: SITE_PAGE_OPTIONS,
      admin: { description: '이 팝업을 띄울 페이지를 골라줘. 여러 개 선택 가능' },
    },
    { name: 'startAt', type: 'date', label: '시작일' },
    { name: 'endAt', type: 'date', label: '종료일' },
    {
      name: 'frequency',
      type: 'select',
      label: '노출 빈도',
      defaultValue: 'every-visit',
      options: [
        { label: '매번', value: 'every-visit' },
        { label: '첫 방문만', value: 'first-visit-only' },
        { label: '하루 안 보기', value: 'once-per-day' },
      ],
    },
    {
      name: 'device',
      type: 'select',
      label: '노출 디바이스',
      defaultValue: 'all',
      options: [
        { label: '전체', value: 'all' },
        { label: '모바일', value: 'mobile' },
        { label: '데스크톱', value: 'desktop' },
      ],
    },
  ],
}
