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
              I-BACK CLINIC
            </p>
            <p style={{ margin: 0 }}>
              아이백의원 · 대표자 백승렬 · 사업자등록번호 131-65-00735
              <br />
              서울시 강남구 테헤란로 121 원빌딩 6층 · TEL 02-569-0107 · FAX 02-569-0108
            </p>
            <p style={{ margin: '14px 0 0', color: '#8f857c' }}>© 2026 I-BACK CLINIC. All rights reserved.</p>
          </div>
          <div style={{ display: 'flex', gap: 'clamp(24px,4vw,52px)', flexWrap: 'wrap' }}>
            <div style={{ display: 'grid', gap: 9 }}>
              <Link href="/#about">소개</Link>
              <Link href="/i-back-clear">아이백클리어</Link>
              <Link href="/dark-circle">다크서클</Link>
              <Link href="/#treatment">색소</Link>
            </div>
            <div style={{ display: 'grid', gap: 9 }}>
              <Link href="/#treatment">리프팅</Link>
              <Link href="/#treatment">모공</Link>
              <Link href="/#treatment">쁘띠</Link>
              <Link href="/board/before-after">전후사진</Link>
            </div>
            <div style={{ display: 'grid', gap: 9 }}>
              <a href="https://www.youtube.com/@아이백의원" target="_blank" rel="noopener">
                유튜브
              </a>
              <a href="https://www.instagram.com/ibackclinic/" target="_blank" rel="noopener">
                인스타그램
              </a>
              <a href="https://blog.naver.com/ibackclinic" target="_blank" rel="noopener">
                블로그
              </a>
              <Link href="/#contact">개인정보처리방침</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
