import type { Metadata } from 'next'
import { cssObj } from '@/lib/css'
import { getPayloadClient } from '@/lib/payload'
import { Reveal } from '@/components/site/Reveal'
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

  const rows = [
    { num: '1/', title: '카카오톡 문의', desc: '사진과 함께 고민을 보내주시면 관리 방향을 먼저 안내드립니다. 영업시간 중 순차 답변.', href: channels.kakaoUrl, external: true },
    { num: '2/', title: '네이버 예약하기', desc: '원하는 날짜와 시간을 직접 선택하실 수 있습니다. 첫 방문은 상담 시간을 포함해 예약해 주세요.', href: channels.naverBookingUrl, external: true },
    { num: '3/', title: '전화 문의', desc: `${channels.phone} · 월~금 10:00–20:00 / 토 10:00–16:00 (일요일 정기휴무)`, href: `tel:${channels.phone}`, external: false },
  ]

  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={cssObj(`padding:calc(78px + clamp(52px,9vw,110px)) clamp(22px,6vw,48px) clamp(50px,7vw,90px);text-align:center`)}>
        <div style={cssObj(`max-width:900px;margin:0 auto`)}>
          <Reveal as="p" style={cssObj(`margin:0 0 clamp(18px,2.6vw,26px);font-size:11.5px;letter-spacing:.3em;color:#d08c81`)}>
            RESERVATION
          </Reveal>
          <Reveal as="h1" style={cssObj(`margin:0;font-size:clamp(32px,6vw,72px);font-weight:600;line-height:1.06;letter-spacing:-.02em`)}>
            예약 문의하기
          </Reveal>
          <Reveal as="p" style={cssObj(`margin:clamp(18px,2.4vw,26px) auto 0;max-width:30em;font-size:clamp(16px,2.1vw,22px);line-height:1.6;color:#4b4b4b`)}>
            편한 채널로 문의해 주세요. 피부 상태와 원하시는 방향을 먼저 확인한 뒤 관리 시간을 안내드립니다.
          </Reveal>
        </div>
      </section>

      <section style={cssObj(`padding:0 clamp(22px,6vw,48px) clamp(60px,9vw,120px)`)}>
        <div style={cssObj(`max-width:1200px;margin:0 auto;display:grid;gap:0`)}>
          {rows.map((row, i, arr) => (
            <Reveal
              key={row.title}
              as="a"
              href={row.href}
              target={row.external ? '_blank' : undefined}
              rel={row.external ? 'noopener' : undefined}
              style={cssObj(
                `display:flex;flex-wrap:wrap;align-items:baseline;gap:clamp(14px,3vw,40px);padding:clamp(28px,4vw,48px) clamp(4px,1.5vw,20px);border-top:1px solid #e8e4e1${i === arr.length - 1 ? ';border-bottom:1px solid #e8e4e1' : ''}`,
              )}
            >
              <span style={cssObj(`font-size:clamp(30px,4.4vw,54px);font-weight:500;line-height:1;color:#d08c81;min-width:2.6em`)}>{row.num}</span>
              <span style={cssObj(`flex:0 1 12em;font-size:clamp(18px,2.2vw,26px);font-weight:500`)}>{row.title}</span>
              <span style={cssObj(`flex:1 1 280px;font-size:14.5px;line-height:2;color:#4b4b4b`)}>{row.desc}</span>
              <span style={{ color: '#d08c81', fontSize: 16 }}>→</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={cssObj(`background:#f7f5f3;padding:clamp(60px,9vw,120px) clamp(22px,6vw,48px)`)}>
        <div style={cssObj(`max-width:900px;margin:0 auto`)}>
          <Reveal as="p" style={cssObj(`margin:0;font-size:11.5px;letter-spacing:.3em;color:#d08c81`)}>
            BEFORE YOU VISIT
          </Reveal>
          <Reveal as="h2" style={cssObj(`margin:clamp(16px,2.2vw,24px) 0 clamp(24px,3vw,36px);font-size:clamp(22px,3vw,36px);font-weight:500;line-height:1.4`)}>
            방문 전 안내
          </Reveal>
          <Reveal as="ul" style={cssObj(`margin:0;padding:0;list-style:none;display:grid;gap:0`)}>
            {[
              '첫 방문은 상담 시간이 포함되어 관리 시간이 조금 더 길어집니다.',
              '가격은 피부 상태와 관리 방향에 따라 달라져 상담 후 안내드립니다.',
              '레이저·시술을 최근 받으셨다면 예약 시 미리 알려주세요.',
              '관리 효과는 개인의 피부 상태에 따라 차이가 있을 수 있습니다.',
            ].map((text, i, arr) => (
              <li
                key={text}
                style={cssObj(
                  `display:flex;gap:12px;font-size:15px;line-height:1.95;color:#4b4b4b;padding:16px 0;border-top:1px solid #e8e4e1${i === arr.length - 1 ? ';border-bottom:1px solid #e8e4e1' : ''}`,
                )}
              >
                <span style={cssObj(`flex:none;width:4px;height:4px;margin-top:11px;border-radius:50%;background:#d08c81`)} />
                <span>{text}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </section>
    </div>
  )
}
