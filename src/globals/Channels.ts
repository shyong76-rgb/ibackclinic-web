import type { GlobalConfig } from 'payload'

export const Channels: GlobalConfig = {
  slug: 'channels',
  label: '채널 연동',
  admin: { group: '설정' },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'kakaoChannelKey', type: 'text', label: '카카오 플러스친구 키' },
    { name: 'kakaoActive', type: 'checkbox', label: '카카오 채널 활성화' },
    { name: 'naverTalkKey', type: 'text', label: '네이버 톡톡 키' },
    { name: 'naverActive', type: 'checkbox', label: '네이버 톡톡 활성화' },
  ],
}
