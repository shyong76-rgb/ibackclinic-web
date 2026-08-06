import type { Metadata } from 'next'
import { cssObj } from '@/lib/css'
import { getPayloadClient } from '@/lib/payload'
import { Reveal } from '@/components/site/Reveal'
import { Hoverable } from '@/components/site/Hoverable'
import { CHANNELS_FALLBACK } from '@/lib/site-config'

export const metadata: Metadata = {
  title: '예약 문의하기 | 클링 에스테틱',
  description: '클링 에스테틱 예약 문의 — 카카오톡 상담, 네이버 예약, 전화 문의',
}

async function loadChannels() {
  try {
    const payload = await getPayloadClient()
    const g = await payload.findGlobal({ slug: 'channels' })
    return {
      kakaoUrl: g?.kakaoUrl || CHANNELS_FALLBACK.kakaoUrl,
      naverBookingUrl: g?.naverBookingUrl || CHANNELS_FALLBACK.naverBookingUrl,
      phone: g?.phone || CHANNELS_FALLBACK.phone,
    }
  } catch {
    return CHANNELS_FALLBACK
  }
}

export default async function ReservationPage() {
  const channels = await loadChannels()

  return (
    <div style={cssObj(`min-height:100vh;padding:calc(85px + clamp(60px,9vw,100px)) clamp(22px,6vw,80px) clamp(80px,10vw,140px);text-align:center`)}>
      <Reveal as="p" style={cssObj(`font-family:Poppins,sans-serif;font-size:12px;letter-spacing:.3em;color:var(--color-accent);margin:0 0 20px`)}>
        RESERVATION
      </Reveal>
      <Reveal as="h1" style={cssObj(`margin:0;font-size:clamp(30px,5vw,52px);font-weight:400`)}>
        예약 문의하기
      </Reveal>
      <Reveal as="p" style={cssObj(`margin:20px auto 0;max-width:32em;font-size:15px;line-height:1.9;color:var(--color-ink-soft)`)}>
        원하시는 방법으로 편하게 문의해 주세요. 1:1 상담 후 피부 상태에 맞는 관리를 안내해 드립니다.
      </Reveal>

      <div style={cssObj(`max-width:420px;margin:clamp(44px,6vw,64px) auto 0;display:grid;gap:14px`)}>
        <Hoverable
          as="a"
          href={channels.kakaoUrl}
          target="_blank"
          rel="noopener"
          css="display:block;font-size:16px;padding:20px;background:#391b0f;color:#fff"
          hoverCss="background:#d08c81"
        >
          카카오톡 문의
        </Hoverable>
        <Hoverable
          as="a"
          href={channels.naverBookingUrl}
          target="_blank"
          rel="noopener"
          css="display:block;font-size:16px;padding:20px;border:1px solid #d08c81;color:#d08c81"
          hoverCss="background:#d08c81;color:#fff"
        >
          네이버 예약하기
        </Hoverable>
        <Hoverable
          as="a"
          href={`tel:${channels.phone}`}
          css="display:block;font-size:16px;padding:20px;border:1px solid var(--color-hairline);color:var(--color-ink)"
          hoverCss="border-color:#d08c81;color:#d08c81"
        >
          전화 문의 {channels.phone}
        </Hoverable>
      </div>

      <p style={cssObj(`margin:clamp(40px,6vw,60px) 0 0;font-size:13px;color:var(--color-caption)`)}>
        서울 성동구 왕십리로 369 동인레반트오피스텔 1층 · 월~금 10:00~20:00 · 토 10:00~16:00 · 일요일 정기휴무
      </p>
    </div>
  )
}
