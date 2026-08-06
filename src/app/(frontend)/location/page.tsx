import type { Metadata } from 'next'
import { cssObj } from '@/lib/css'
import { getPayloadClient } from '@/lib/payload'
import { Reveal } from '@/components/site/Reveal'
import { HoverLink } from '@/components/site/HoverLink'
import { CHANNELS_FALLBACK } from '@/lib/site-config'

export const metadata: Metadata = {
  title: '오시는길 | 클링 에스테틱 — 왕십리 에스테틱',
  description: '클링 에스테틱 오시는길 — 서울 성동구 왕십리로 369, 2호선 왕십리역·상왕십리역 도보권',
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

export default async function LocationPage() {
  const channels = await loadChannels()

  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={cssObj(`padding:calc(78px + clamp(52px,9vw,110px)) clamp(22px,6vw,48px) clamp(44px,6vw,74px);text-align:center`)}>
        <div style={cssObj(`max-width:900px;margin:0 auto`)}>
          <Reveal as="p" style={cssObj(`margin:0 0 clamp(18px,2.6vw,26px);font-size:11.5px;letter-spacing:.3em;color:#d08c81`)}>
            VISIT
          </Reveal>
          <Reveal as="h1" style={cssObj(`margin:0;font-size:clamp(32px,6vw,72px);font-weight:600;line-height:1.06;letter-spacing:-.02em`)}>
            오시는길
          </Reveal>
          <Reveal as="p" style={cssObj(`margin:clamp(18px,2.4vw,26px) auto 0;max-width:30em;font-size:clamp(16px,2.1vw,22px);line-height:1.6;color:#4b4b4b`)}>
            동인레반트오피스텔 1층. 지하철·버스 모두 도보로 이동하실 수 있습니다.
          </Reveal>
        </div>
      </section>

      <Reveal style={cssObj(`width:100%;height:clamp(220px,32vw,420px);overflow:hidden`)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/visit.png" alt="클링 에스테틱 관리실" style={cssObj(`width:100%;height:100%;object-fit:cover;object-position:center center;display:block`)} />
      </Reveal>

      <section style={cssObj(`padding:clamp(60px,9vw,120px) clamp(22px,6vw,48px)`)}>
        <div style={cssObj(`max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:clamp(34px,5vw,72px);align-items:start`)}>
          <Reveal>
            <dl style={{ margin: 0 }}>
              <div style={cssObj(`display:flex;gap:18px;padding:15px 0;border-top:1px solid #e8e4e1`)}>
                <dt style={cssObj(`margin:0;width:5.5em;flex:none;font-size:13px;color:#8a7f78`)}>주소</dt>
                <dd style={cssObj(`margin:0;font-size:15px;line-height:1.8`)}>
                  서울 성동구 왕십리로 369
                  <br />
                  동인레반트오피스텔 1층
                </dd>
              </div>
              <div style={cssObj(`display:flex;gap:18px;padding:15px 0;border-top:1px solid #e8e4e1`)}>
                <dt style={cssObj(`margin:0;width:5.5em;flex:none;font-size:13px;color:#8a7f78`)}>영업시간</dt>
                <dd style={cssObj(`margin:0;font-size:15px;line-height:1.9`)}>
                  월~금 10:00–20:00
                  <br />토 10:00–16:00
                  <br />
                  <span style={{ color: '#8a7f78' }}>일요일 정기휴무</span>
                </dd>
              </div>
              <div style={cssObj(`display:flex;gap:18px;padding:15px 0;border-top:1px solid #e8e4e1`)}>
                <dt style={cssObj(`margin:0;width:5.5em;flex:none;font-size:13px;color:#8a7f78`)}>전화</dt>
                <dd style={cssObj(`margin:0;font-size:15px`)}>
                  <a href={`tel:${channels.phone}`} style={{ borderBottom: '1px solid #e8e4e1' }}>
                    {channels.phone}
                  </a>
                </dd>
              </div>
              <div style={cssObj(`display:flex;gap:18px;padding:15px 0;border-top:1px solid #e8e4e1;border-bottom:1px solid #e8e4e1`)}>
                <dt style={cssObj(`margin:0;width:5.5em;flex:none;font-size:13px;color:#8a7f78`)}>예약</dt>
                <dd style={cssObj(`margin:0;font-size:15px;display:flex;flex-wrap:wrap;gap:14px`)}>
                  <a href={channels.kakaoUrl} target="_blank" rel="noopener" style={{ borderBottom: '1px solid #e8e4e1' }}>
                    카카오톡 문의
                  </a>
                  <a href={channels.naverBookingUrl} target="_blank" rel="noopener" style={{ borderBottom: '1px solid #e8e4e1' }}>
                    네이버 예약
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal
            as="a"
            href={channels.naverBookingUrl}
            target="_blank"
            rel="noopener"
            style={cssObj(`display:flex;width:100%;aspect-ratio:4/3;background:#ece8e4;align-items:center;justify-content:center`)}
          >
            <span style={cssObj(`font-family:ui-monospace,Menlo,monospace;font-size:11px;letter-spacing:.06em;color:#a09790;text-align:center;line-height:1.7`)}>
              MAP · 네이버 지도 임베드
              <br />
              왕십리로 369
            </span>
          </Reveal>
        </div>
      </section>

      <section style={cssObj(`background:#2d1c14;color:#f6f1ee;padding:clamp(70px,10vw,130px) clamp(22px,6vw,48px);text-align:center`)}>
        <Reveal as="h2" style={cssObj(`margin:0;font-size:clamp(24px,3.6vw,42px);font-weight:400;line-height:1.45`)}>
          방문 전, 편하게
          <br />
          먼저 문의해 주세요.
        </Reveal>
        <Reveal style={cssObj(`display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:clamp(28px,3.6vw,42px)`)}>
          <HoverLink href="/reservation" css="font-size:15px;padding:17px 34px;background:#d08c81;color:#fff;min-height:44px" hoverCss="background:#f6f1ee;color:#2d1c14">
            예약 문의하기
          </HoverLink>
          <a
            href={`tel:${channels.phone}`}
            style={cssObj(`font-size:15px;padding:17px 34px;border:1px solid rgba(246,241,238,.4);color:#f6f1ee;min-height:44px;display:inline-flex;align-items:center;justify-content:center`)}
          >
            {channels.phone}
          </a>
        </Reveal>
      </section>
    </div>
  )
}
