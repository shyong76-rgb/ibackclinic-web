import type { GlobalConfig } from 'payload'

export const CodeSnippets: GlobalConfig = {
  slug: 'code-snippets',
  label: '코드 삽입',
  admin: { group: '설정' },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'snippets',
      type: 'array',
      label: '코드 목록',
      fields: [
        { name: 'name', type: 'text', label: '이름(GA4, 메타픽셀 등)' },
        {
          name: 'placement',
          type: 'select',
          label: '삽입 위치',
          options: [
            { label: '헤더', value: 'header' },
            { label: '푸터', value: 'footer' },
            { label: '본문', value: 'body' },
          ],
        },
        { name: 'code', type: 'code', label: '코드' },
        { name: 'active', type: 'checkbox', label: '활성화', defaultValue: true },
      ],
    },
  ],
}
