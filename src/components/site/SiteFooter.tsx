import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer
      style={{
        background: '#3a322e',
        color: '#bcb2a7',
        padding: 'clamp(50px,7vw,80px) clamp(22px,6vw,80px) 140px',
        fontSize: 13,
        lineHeight: 1.9,
      }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gap: 'clamp(28px,4vw,44px)' }}>
        <p
          style={{
            margin: 0,
            paddingBottom: 22,
            borderBottom: '1px solid rgba(246,242,234,.12)',
            color: '#9d938a',
            fontSize: 12.5,
          }}
        >
          ※ 본 시술의 효과는 개인의 상태에 따라 차이가 있을 수 있으며, 부작용이 발생할 수 있습니다. 시술 전 충분한 상담을 권장합니다.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px,4vw,54px)', justifyContent: 'space-between' }}>
          <div>
            <p style={{ margin: '0 0 16px', fontFamily: 'Poppins,sans-serif', letterSpacing: '.16em', fontSize: 14, color: '#f6f2ea' }}>
              CLING AESTHETIC
            </p>
            <p style={{ margin: 0 }}>
              클링 에스테틱 · 서울 성동구 왕십리로 369 동인레반트오피스텔 1층
              <br />
              TEL 0507-1386-2479 · 월~금 10:00~20:00 · 토 10:00~16:00 · 일요일 정기휴무
            </p>
            <p style={{ margin: '14px 0 0', color: '#8f857c' }}>© 2026 CLING AESTHETIC. All rights reserved.</p>
          </div>
          <div style={{ display: 'flex', gap: 'clamp(24px,4vw,52px)', flexWrap: 'wrap' }}>
            <div style={{ display: 'grid', gap: 9 }}>
              <Link href="/procedures/cling-signature">클링시그니쳐</Link>
              <Link href="/procedures/wave-on-lifting">웨이브온 리프팅</Link>
              <Link href="/procedures/acne-care">여드름 관리</Link>
              <Link href="/procedures/hydration-care">수분관리</Link>
            </div>
            <div style={{ display: 'grid', gap: 9 }}>
              <Link href="/procedures/collagen-velvet">콜라겐 벨벳 관리</Link>
              <Link href="/procedures/peeling">필링</Link>
              <Link href="/procedures/revelook">리베룩</Link>
              <Link href="/location">오시는길</Link>
            </div>
            <div style={{ display: 'grid', gap: 9 }}>
              <Link href="/reservation">예약 문의하기</Link>
              <Link href="/board/before-after">전후사진</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
