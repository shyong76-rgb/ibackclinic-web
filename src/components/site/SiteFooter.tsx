import Link from 'next/link'
import { cssObj } from '@/lib/css'

// Claude Design 산출물의 푸터를 그대로 이식: 초대형 CLING 워드마크 + 예약 채널 컬럼 +
// nav 8개 링크 + 주소/영업시간 안내, 맨 아래는 색 반전된 독립 저작권 스트립.
export function SiteFooter({
  kakaoUrl = 'http://pf.kakao.com/_cling',
  naverBookingUrl = 'https://map.naver.com/',
  phone = '0507-1386-2479',
}: {
  kakaoUrl?: string
  naverBookingUrl?: string
  phone?: string
}) {
  return (
    <footer style={cssObj(`background:#f7f5f3;color:#4b4b4b;padding:clamp(56px,8vw,96px) clamp(22px,6vw,48px) 0;font-size:13px;line-height:1.9`)}>
      <div style={cssObj(`max-width:1200px;margin:0 auto`)}>
        <div style={cssObj(`display:flex;flex-wrap:wrap;gap:clamp(24px,4vw,48px);justify-content:space-between;align-items:flex-start`)}>
          <p style={cssObj(`margin:0;font-size:clamp(56px,11vw,150px);font-weight:600;letter-spacing:.02em;line-height:.9;color:#331b0f`)}>CLING</p>
          <div style={cssObj(`display:grid;gap:10px;min-width:180px`)}>
            <p style={cssObj(`margin:0;font-size:11.5px;letter-spacing:.24em;color:#8a7f78`)}>RESERVATION</p>
            <Link href="/reservation">예약 문의하기 →</Link>
            <a href={kakaoUrl} target="_blank" rel="noopener">
              카카오톡 문의
            </a>
            <a href={naverBookingUrl} target="_blank" rel="noopener">
              네이버 예약
            </a>
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
        </div>

        <div style={cssObj(`margin-top:clamp(34px,5vw,56px);padding-top:clamp(24px,3vw,34px);border-top:1px solid #e8e4e1;display:flex;flex-wrap:wrap;gap:clamp(14px,2.4vw,30px)`)}>
          <Link href="/procedures/cling-signature" style={{ fontSize: 13 }}>
            클링시그니쳐
          </Link>
          <Link href="/procedures/wave-on-lifting" style={{ fontSize: 13 }}>
            웨이브온 리프팅
          </Link>
          <Link href="/procedures/acne-care" style={{ fontSize: 13 }}>
            여드름 관리
          </Link>
          <Link href="/procedures/hydration-care" style={{ fontSize: 13 }}>
            수분관리
          </Link>
          <Link href="/procedures/collagen-velvet" style={{ fontSize: 13 }}>
            콜라겐 벨벳 관리
          </Link>
          <Link href="/procedures/peeling" style={{ fontSize: 13 }}>
            필링
          </Link>
          <Link href="/procedures/revelook" style={{ fontSize: 13 }}>
            리베룩
          </Link>
          <Link href="/location" style={{ fontSize: 13 }}>
            오시는길
          </Link>
        </div>

        <div style={cssObj(`margin-top:clamp(24px,3vw,34px);padding-bottom:clamp(34px,4vw,52px);display:grid;gap:6px;color:#8a7f78;font-size:12.5px`)}>
          <p style={{ margin: 0 }}>클링 에스테틱 · 서울 성동구 왕십리로 369 동인레반트오피스텔 1층</p>
          <p style={{ margin: 0 }}>TEL {phone} · 월~금 10:00–20:00 / 토 10:00–16:00 / 일요일 정기휴무</p>
          <p style={{ margin: 0 }}>※ 관리 효과는 개인의 피부 상태에 따라 차이가 있을 수 있습니다. 가격은 상담 후 안내드립니다.</p>
        </div>
      </div>

      <div style={cssObj(`background:#2d1c14;color:#b9aca6;margin:0 calc(-1 * clamp(22px,6vw,48px));padding:20px clamp(22px,6vw,48px) 108px;font-size:12px`)}>
        <div style={cssObj(`max-width:1200px;margin:0 auto;display:flex;flex-wrap:wrap;gap:16px;justify-content:space-between`)}>
          <span>© 2026 Cling Aesthetic. All rights reserved.</span>
          <span>왕십리 에스테틱 · 왕십리 피부관리</span>
        </div>
      </div>
    </footer>
  )
}
