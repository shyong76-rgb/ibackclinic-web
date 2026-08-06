'use client'

import { useState } from 'react'
import { Hoverable } from './Hoverable'

export type FloatingCtaButton = {
  id?: string
  label: string
  visible?: boolean | null
  style: 'dark' | 'accent' | 'light'
  action: 'link' | 'wechat'
  href?: string | null
}

const STYLE_CSS: Record<FloatingCtaButton['style'], { css: string; hoverCss: string }> = {
  dark: {
    css: 'display:flex;align-items:center;min-height:44px;padding:13px 22px;white-space:nowrap;background:#331b0f;color:#fff;font-size:13.5px',
    hoverCss: 'background:#d08c81',
  },
  accent: {
    css: 'display:flex;align-items:center;min-height:44px;padding:13px 22px;white-space:nowrap;background:#d08c81;color:#fff;font-size:13.5px',
    hoverCss: 'background:#2d1c14;color:#fff',
  },
  light: {
    css: 'display:flex;align-items:center;min-height:44px;padding:13px 22px;white-space:nowrap;background:#fff;border:1px solid #e8e4e1;color:#331b0f;font-size:13.5px',
    hoverCss: 'border-color:#d08c81;color:#d08c81',
  },
}

// dc.html 플로팅 CTA 재현. 버튼 목록은 관리자(플로팅 버튼)에서 추가·삭제·순서변경 가능.
export function FloatingCta({ buttons }: { buttons: FloatingCtaButton[] }) {
  const [wechatOpen, setWechatOpen] = useState(false)
  const visibleButtons = buttons.filter((b) => b.visible !== false)

  if (visibleButtons.length === 0) return null

  return (
    <>
      <div
        style={{
          position: 'fixed',
          right: 'clamp(14px,2vw,26px)',
          bottom: 'clamp(14px,2vw,26px)',
          zIndex: 90,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          alignItems: 'flex-end',
        }}
      >
        {visibleButtons.map((btn, i) => {
          const { css, hoverCss } = STYLE_CSS[btn.style] ?? STYLE_CSS.dark
          if (btn.action === 'wechat') {
            return (
              <Hoverable key={btn.id ?? i} as="button" onClick={() => setWechatOpen(true)} css={css} hoverCss={hoverCss}>
                {btn.label}
              </Hoverable>
            )
          }
          const isExternal = !!btn.href && !btn.href.startsWith('tel:') && !btn.href.startsWith('/')
          return (
            <Hoverable
              key={btn.id ?? i}
              as="a"
              href={btn.href || '#'}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener' : undefined}
              css={css}
              hoverCss={hoverCss}
            >
              {btn.label}
            </Hoverable>
          )
        })}
      </div>

      {wechatOpen && (
        <div
          onClick={() => setWechatOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 120,
            background: 'rgba(58,50,46,.55)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
          }}
        >
          <div style={{ background: '#fff', padding: 34, textAlign: 'center', maxWidth: 320 }}>
            <p style={{ margin: '0 0 20px', fontSize: 15, letterSpacing: '.02em' }}>WeChat QR</p>
            <div
              style={{
                width: 200,
                height: 200,
                margin: '0 auto',
                background: 'repeating-linear-gradient(135deg,#f2eee5 0 8px,#e8e1d4 8px 16px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontFamily: 'ui-monospace,Menlo,monospace', fontSize: 10.5, color: '#8d8071' }}>QR IMAGE</span>
            </div>
            <p style={{ margin: '20px 0 0', fontSize: 12.5, color: '#8a7f72' }}>화면을 눌러 닫기</p>
          </div>
        </div>
      )}
    </>
  )
}
