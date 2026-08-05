'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { matchesPath } from '@/lib/path-match'

type Slide = {
  image?: { url?: string } | string | null
  text?: string | null
  ctaLabel?: string | null
  ctaHref?: string | null
}

export type PopupData = {
  id: string
  name: string
  type: 'single' | 'slide' | 'bottom-bar' | 'modal'
  slides?: Slide[] | null
  trigger: 'immediate' | 'delay' | 'scroll' | 'exit-intent'
  delaySeconds?: number | null
  scrollPercent?: number | null
  showOnPaths?: string | null
  startAt?: string | null
  endAt?: string | null
  frequency: 'every-visit' | 'first-visit-only' | 'once-per-day'
  device: 'all' | 'mobile' | 'desktop'
}

function seenKey(id: string) {
  return `popup-seen:${id}`
}

function isDismissedByFrequency(popup: PopupData): boolean {
  if (typeof window === 'undefined') return true
  if (popup.frequency === 'every-visit') return false
  const raw = localStorage.getItem(seenKey(popup.id))
  if (!raw) return false
  if (popup.frequency === 'first-visit-only') return true
  // once-per-day
  const last = Number(raw)
  return Date.now() - last < 24 * 60 * 60 * 1000
}

function markSeen(id: string) {
  localStorage.setItem(seenKey(id), String(Date.now()))
}

function matchesDevice(device: PopupData['device']): boolean {
  if (device === 'all' || typeof window === 'undefined') return true
  const isMobile = window.innerWidth < 768
  return device === 'mobile' ? isMobile : !isMobile
}

function withinDateRange(popup: PopupData): boolean {
  const now = Date.now()
  if (popup.startAt && now < new Date(popup.startAt).getTime()) return false
  if (popup.endAt && now > new Date(popup.endAt).getTime()) return false
  return true
}

function imgUrl(image: Slide['image']): string | undefined {
  if (!image) return undefined
  if (typeof image === 'string') return image
  return image.url ?? undefined
}

export function PopupRenderer({ popups }: { popups: PopupData[] }) {
  const pathname = usePathname()
  const [active, setActive] = useState<PopupData | null>(null)
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const eligible = popups.filter(
      (p) => withinDateRange(p) && matchesPath(p.showOnPaths, pathname) && matchesDevice(p.device) && !isDismissedByFrequency(p),
    )
    if (eligible.length === 0) return

    let cancelled = false
    const show = (p: PopupData) => {
      if (!cancelled) setActive(p)
    }

    const cleanups: Array<() => void> = []

    eligible.forEach((p) => {
      if (p.trigger === 'immediate') {
        show(p)
      } else if (p.trigger === 'delay') {
        const t = setTimeout(() => show(p), (p.delaySeconds ?? 3) * 1000)
        cleanups.push(() => clearTimeout(t))
      } else if (p.trigger === 'scroll') {
        const onScroll = () => {
          const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
          if (pct >= (p.scrollPercent ?? 50)) {
            show(p)
            window.removeEventListener('scroll', onScroll)
          }
        }
        window.addEventListener('scroll', onScroll)
        cleanups.push(() => window.removeEventListener('scroll', onScroll))
      } else if (p.trigger === 'exit-intent') {
        const onLeave = (e: MouseEvent) => {
          if (e.clientY <= 0) {
            show(p)
            document.removeEventListener('mouseleave', onLeave)
          }
        }
        document.addEventListener('mouseleave', onLeave)
        cleanups.push(() => document.removeEventListener('mouseleave', onLeave))
      }
    })

    return () => {
      cancelled = true
      cleanups.forEach((fn) => fn())
    }
  }, [popups, pathname])

  if (!active) return null

  const close = () => {
    markSeen(active.id)
    setActive(null)
    setSlideIndex(0)
  }

  const slides = active.slides ?? []
  const slide = slides[slideIndex]

  if (active.type === 'bottom-bar') {
    return (
      <div
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 110,
          background: '#443a35',
          color: '#f6f2ea',
          padding: '14px clamp(16px,4vw,40px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          flexWrap: 'wrap',
        }}
      >
        <span style={{ fontSize: 14 }}>{slide?.text}</span>
        {slide?.ctaLabel && (
          <a href={slide.ctaHref ?? '#'} style={{ fontSize: 13, padding: '8px 18px', background: '#aa9371', color: '#fff', borderRadius: 999 }}>
            {slide.ctaLabel}
          </a>
        )}
        <button onClick={close} aria-label="닫기" style={{ background: 'none', border: 0, color: '#f6f2ea', fontSize: 18, cursor: 'pointer' }}>
          ×
        </button>
      </div>
    )
  }

  // single / slide / modal 공통 오버레이 레이아웃
  return (
    <div
      onClick={close}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 110,
        background: 'rgba(58,50,46,.55)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ background: '#fff', maxWidth: 380, width: '100%', position: 'relative', textAlign: 'center' }}
      >
        <button
          onClick={close}
          aria-label="닫기"
          style={{ position: 'absolute', top: 8, right: 8, background: 'none', border: 0, fontSize: 20, cursor: 'pointer', color: '#443a35' }}
        >
          ×
        </button>
        {slide && (
          <div style={{ padding: '40px 28px 32px' }}>
            {imgUrl(slide.image) && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={imgUrl(slide.image)} alt="" style={{ width: '100%', display: 'block', marginBottom: 20 }} />
            )}
            {slide.text && <p style={{ margin: '0 0 16px', fontSize: 15, lineHeight: 1.8, color: '#443a35' }}>{slide.text}</p>}
            {slide.ctaLabel && (
              <a
                href={slide.ctaHref ?? '#'}
                style={{ display: 'inline-block', fontSize: 14, padding: '13px 28px', background: '#443a35', color: '#fff' }}
              >
                {slide.ctaLabel}
              </a>
            )}
          </div>
        )}
        {active.type === 'slide' && slides.length > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, paddingBottom: 20 }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                aria-label={`슬라이드 ${i + 1}`}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  border: 0,
                  padding: 0,
                  cursor: 'pointer',
                  background: i === slideIndex ? '#aa9371' : '#e5ded1',
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
