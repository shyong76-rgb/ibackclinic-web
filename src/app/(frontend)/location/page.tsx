import type { Metadata } from 'next'
import { cssObj } from '@/lib/css'
import { Reveal } from '@/components/site/Reveal'
import { HoverLink } from '@/components/site/HoverLink'

export const metadata: Metadata = {
  title: '오시는길 | 클링 에스테틱 — 왕십리 에스테틱',
  description: '클링 에스테틱 오시는길 — 서울 성동구 왕십리로 369, 2호선 왕십리역·상왕십리역 도보권',
}

export default function LocationPage() {
  return (
    <div style={cssObj(`min-height:100vh;padding:calc(85px + clamp(60px,9vw,100px)) clamp(22px,6vw,80px) clamp(80px,10vw,140px)`)}>
      <div style={cssObj(`max-width:760px;margin:0 auto;text-align:center`)}>
        <Reveal as="p" style={cssObj(`font-family:Poppins,sans-serif;font-size:12px;letter-spacing:.3em;color:var(--color-accent);margin:0 0 20px`)}>
          LOCATION
        </Reveal>
        <Reveal as="h1" style={cssObj(`margin:0;font-size:clamp(30px,5vw,52px);font-weight:400`)}>
          오시는길
        </Reveal>

        <div style={cssObj(`margin:clamp(44px,6vw,64px) auto 0;text-align:left;display:grid;gap:22px;font-size:15px;line-height:1.9;color:var(--color-ink-soft)`)}>
          <div>
            <p style={cssObj(`margin:0 0 6px;font-size:12px;letter-spacing:.2em;color:var(--color-accent)`)}>ADDRESS</p>
            <p style={cssObj(`margin:0`)}>서울 성동구 왕십리로 369 동인레반트오피스텔 1층</p>
            <p style={cssObj(`margin:6px 0 0;font-size:13px;color:var(--color-caption)`)}>2호선 왕십리역·상왕십리역에서 도보권. 건물 뒤편 기계식 주차장 이용 가능(대형 SUV·승합차는 방문 전 문의 권장).</p>
          </div>
          <div>
            <p style={cssObj(`margin:0 0 6px;font-size:12px;letter-spacing:.2em;color:var(--color-accent)`)}>HOURS</p>
            <p style={cssObj(`margin:0`)}>월~금 10:00 ~ 20:00</p>
            <p style={cssObj(`margin:0`)}>토요일 10:00 ~ 16:00</p>
            <p style={cssObj(`margin:0`)}>일요일 정기휴무</p>
          </div>
          <div>
            <p style={cssObj(`margin:0 0 6px;font-size:12px;letter-spacing:.2em;color:var(--color-accent)`)}>TEL</p>
            <p style={cssObj(`margin:0`)}>0507-1386-2479</p>
          </div>
        </div>

        <div style={cssObj(`margin-top:clamp(40px,6vw,60px)`)}>
          <HoverLink
            href="/reservation"
            css="display:inline-block;font-size:15px;padding:17px 40px;background:var(--color-dark);color:#fff"
            hoverCss="background:var(--color-accent)"
          >
            예약 문의하기 →
          </HoverLink>
        </div>
      </div>
    </div>
  )
}
