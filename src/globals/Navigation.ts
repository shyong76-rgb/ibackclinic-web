import type { GlobalConfig } from 'payload'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  label: '메뉴 설정',
  admin: { group: '설정' },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      label: '메뉴 항목',
      fields: [
        { name: 'label', type: 'text', label: '메뉴명', required: true },
        { name: 'href', type: 'text', label: '링크', required: true },
        { name: 'order', type: 'number', label: '정렬 순서' },
        { name: 'visible', type: 'checkbox', label: '노출 여부', defaultValue: true },
        {
          name: 'children',
          type: 'array',
          label: '하위 메뉴',
          fields: [
            { name: 'label', type: 'text', label: '메뉴명', required: true },
            { name: 'href', type: 'text', label: '링크', required: true },
          ],
        },
      ],
    },
  ],
}
