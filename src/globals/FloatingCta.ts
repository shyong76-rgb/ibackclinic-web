import type { GlobalConfig } from 'payload'

export const FloatingCta: GlobalConfig = {
  slug: 'floating-cta',
  label: '플로팅 버튼',
  admin: {
    group: '설정',
    description: '홈페이지 우측 하단에 항상 떠있는 버튼(카톡문의 등). 순서는 아래 목록을 드래그해서 바꿀 수 있음',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'buttons',
      type: 'array',
      label: '버튼 목록',
      admin: { description: '위에서부터 순서대로 쌓임. 드래그해서 순서 변경 가능' },
      fields: [
        { name: 'label', type: 'text', label: '버튼 텍스트', required: true },
        { name: 'visible', type: 'checkbox', label: '노출 여부', defaultValue: true },
        {
          name: 'style',
          type: 'select',
          label: '색상',
          defaultValue: 'dark',
          options: [
            { label: '진한색(다크브라운)', value: 'dark' },
            { label: '포인트색(베이지골드)', value: 'accent' },
            { label: '화이트(테두리)', value: 'light' },
          ],
        },
        {
          name: 'action',
          type: 'select',
          label: '동작',
          defaultValue: 'link',
          options: [
            { label: '링크로 이동', value: 'link' },
            { label: '위챗 QR 팝업 열기', value: 'wechat' },
          ],
        },
        {
          name: 'href',
          type: 'text',
          label: '링크 주소',
          admin: {
            description: '카카오톡·네이버예약 링크 등. 사이트 내부 페이지면 /로 시작(예: /login)',
            condition: (_, siblingData) => siblingData.action === 'link',
          },
        },
      ],
    },
  ],
}
