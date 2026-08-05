import type { Block } from 'payload'

export const VideoEmbedBlock: Block = {
  slug: 'videoEmbed',
  labels: { singular: '동영상', plural: '동영상' },
  fields: [
    {
      name: 'url',
      type: 'text',
      label: '영상 URL (유튜브·비메오)',
      required: true,
      admin: { description: '예: https://www.youtube.com/watch?v=xxxx 또는 https://youtu.be/xxxx' },
    },
  ],
}
