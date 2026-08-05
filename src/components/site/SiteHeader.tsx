'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Hoverable } from './Hoverable'
import { CHANNELS, DEFAULT_NAV, type NavItem } from '@/lib/site-config'

// dc.html 헤더(고정 GNB+드롭다운+버거) 재현. 반응형 전환은 JS resize 리스너 대신
// Tailwind의 min-[1180px]: 브레이크포인트로 CSS만으로 처리(원본은 JS로 처리했음).
export function SiteHeader({ nav = DEFAULT_NAV }: { nav?: NavItem[] }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 85,
          zIndex: 100,
          background: 'rgba(255,255,255,.94)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 clamp(18px,4vw,56px)',
        }}
      >
        <Link
          href="/"
          style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 400, letterSpacing: '.16em', fontSize: 15, whiteSpace: 'nowrap' }}
        >
          I&#8209;BACK<span style={{ color: '#aa9371' }}> CLINIC</span>
        </Link>

        <nav className="hidden min-[1180px]:flex" style={{ margin: '0 auto', gap: 'clamp(12px,2.4vw,34px)', alignItems: 'center' }}>
          {nav.map((item) => (
            <div key={item.label} className="group" style={{ position: 'relative', padding: '32px 0' }}>
              <Link href={item.href} style={{ fontSize: 15 }}>
                {item.label}
              </Link>
              {item.children && item.children.length > 0 && (
                <div
                  className="opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    transition: 'opacity .3s',
                    background: '#fff',
                    padding: '14px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                    whiteSpace: 'nowrap',
                    boxShadow: '0 12px 30px rgba(68,58,53,.08)',
                  }}
                >
                  {item.children.map((child) => (
                    <Link key={child.label} href={child.href} style={{ fontSize: 13.5, color: '#6b6058' }}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden min-[1180px]:flex" style={{ alignItems: 'center', gap: 18, marginLeft: 'auto' }}>
          <Link href="/login" style={{ fontSize: 13, color: '#8a7f75', whiteSpace: 'nowrap' }}>
            로그인
          </Link>
          <a href={CHANNELS.kakaoUrl} target="_blank" rel="noopener" style={{ fontSize: 13, color: '#8a7f75', whiteSpace: 'nowrap' }}>
            카카오 문의
          </a>
          <Hoverable
            as={Link}
            href="/#contact"
            css="font-size:13px;letter-spacing:.02em;padding:11px 22px;border:1px solid #aa9371;color:#aa9371;white-space:nowrap"
            hoverCss="background:#aa9371;color:#fff"
          >
            상담문의
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
          <span style={{ display: 'block', width: 22, height: 1, background: '#443a35' }} />
          <span style={{ display: 'block', width: 22, height: 1, background: '#443a35' }} />
          <span style={{ display: 'block', width: 22, height: 1, background: '#443a35' }} />
        </button>
      </header>

      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            background: '#fff',
            padding: '100px clamp(22px,7vw,48px) 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            overflowY: 'auto',
          }}
        >
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{ fontSize: 20, padding: '16px 0', borderBottom: '1px solid #f0ebe2' }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            style={{ marginTop: 28, textAlign: 'center', fontSize: 16, padding: 18, background: '#aa9371', color: '#fff' }}
          >
            상담문의
          </Link>
        </div>
      )}
    </>
  )
}
