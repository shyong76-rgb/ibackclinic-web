'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Hoverable } from './Hoverable'
import { DEFAULT_NAV, type NavItem } from '@/lib/site-config'

// Claude Design 산출물(클링에스테틱 홈페이지 리디자인1/*.dc.html) 헤더를 그대로 이식.
// 반응형 전환은 Tailwind의 min-[1180px]: 브레이크포인트로 처리(원본은 JS resize 리스너 사용).
export function SiteHeader({ nav = DEFAULT_NAV }: { nav?: NavItem[] }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 78,
          zIndex: 100,
          background: 'rgba(255,255,255,.82)',
          backdropFilter: 'blur(24px)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 clamp(18px,4vw,48px)',
        }}
      >
        <nav
          className="hidden min-[1180px]:flex"
          style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', gap: 'clamp(10px,1.6vw,22px)', alignItems: 'center' }}
        >
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{ fontSize: 13.5, letterSpacing: '-.01em', whiteSpace: 'nowrap', color: isActive(item.href) ? '#d08c81' : undefined }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/" style={{ fontSize: 15, fontWeight: 600, letterSpacing: '.22em', whiteSpace: 'nowrap' }}>
          CLING
        </Link>

        <div id="util" className="hidden min-[1180px]:flex" style={{ marginLeft: 'auto', alignItems: 'center' }}>
          <Hoverable
            as={Link}
            href="/reservation"
            css="font-size:13.5px;letter-spacing:.02em;padding:12px 26px;border:1px solid #331b0f;white-space:nowrap"
            hoverCss="background:#2d1c14;color:#fff;border-color:#2d1c14"
          >
            예약 문의하기
          </Hoverable>
        </div>

        <button
          aria-label="메뉴"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex min-[1180px]:hidden"
          style={{
            marginLeft: 'auto',
            background: 'none',
            border: 0,
            padding: 10,
            flexDirection: 'column',
            gap: 5,
            width: 44,
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ display: 'block', width: 22, height: 1, background: '#331b0f' }} />
          <span style={{ display: 'block', width: 22, height: 1, background: '#331b0f' }} />
          <span style={{ display: 'block', width: 22, height: 1, background: '#331b0f' }} />
        </button>
      </header>

      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            background: '#fff',
            padding: '96px clamp(22px,7vw,44px) 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
            overflowY: 'auto',
          }}
        >
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{ fontSize: 19, padding: '15px 0', borderBottom: '1px solid #f1eeeb', color: isActive(item.href) ? '#d08c81' : undefined }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/reservation"
            onClick={() => setMobileOpen(false)}
            style={{ marginTop: 26, textAlign: 'center', fontSize: 16, padding: 18, background: '#331b0f', color: '#fff' }}
          >
            예약 문의하기
          </Link>
        </div>
      )}
    </>
  )
}
