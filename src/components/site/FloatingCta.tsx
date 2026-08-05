'use client'

import { useState } from 'react'
import { Hoverable } from './Hoverable'
import { CHANNELS } from '@/lib/site-config'

// dc.html 플로팅 CTA 3종(카톡/네이버예약/위챗QR) + 위챗 모달 재현.
export function FloatingCta() {
  const [wechatOpen, setWechatOpen] = useState(false)

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
        <Hoverable
          as="a"
          href={CHANNELS.kakaoUrl}
          target="_blank"
          rel="noopener"
          css="display:flex;align-items:center;min-height:44px;padding:13px 22px;white-space:nowrap;border-radius:999px;background:#443a35;color:#fff;font-size:13.5px;letter-spacing:.02em;box-shadow:0 8px 24px rgba(68,58,53,.2)"
          hoverCss="background:#aa9371"
        >
          카톡 문의
        </Hoverable>
        <Hoverable
          as="a"
          href={CHANNELS.naverMapUrl}
          target="_blank"
          rel="noopener"
          css="display:flex;align-items:center;min-height:44px;padding:13px 22px;white-space:nowrap;border-radius:999px;background:#aa9371;color:#fff;font-size:13.5px;letter-spacing:.02em;box-shadow:0 8px 24px rgba(68,58,53,.2)"
          hoverCss="background:#443a35;color:#fff"
        >
          네이버 예약
        </Hoverable>
        <button
          onClick={() => setWechatOpen(true)}
          style={{
            display: 'flex',
            alignItems: 'center',
            minHeight: 44,
            padding: '13px 22px',
            whiteSpace: 'nowrap',
            borderRadius: 999,
            background: '#fff',
            border: '1px solid #ddd3c2',
            color: '#443a35',
            fontSize: 13.5,
            boxShadow: '0 8px 24px rgba(68,58,53,.12)',
          }}
        >
          위챗 QR
        </button>
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
