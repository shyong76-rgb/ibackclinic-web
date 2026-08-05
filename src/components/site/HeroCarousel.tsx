'use client'

import { useEffect, useState } from 'react'
import { Reveal } from './Reveal'

type Slide = { src: string; alt: string }

// dc.html의 #heroTrack 자동 슬라이드(4.2초 간격, cubic-bezier)를 그대로 재현.
export function HeroCarousel({ slides, height }: { slides: Slide[]; height: string }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 4200)
    return () => clearInterval(timer)
  }, [slides.length])

  const step = 100 / slides.length

  return (
    <Reveal
      style={{
        position: 'relative',
        width: '100%',
        height,
        overflow: 'hidden',
        background: '#f8f5ef',
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: `${slides.length * 100}%`,
          transform: `translateX(-${index * step}%)`,
          transition: index === 0 ? 'none' : 'transform 1.1s cubic-bezier(.4,0,.2,1)',
        }}
      >
        {slides.map((s, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={s.src}
            alt={s.alt}
            style={{ width: `${step}%`, height: '100%', flex: 'none', objectFit: 'cover', display: 'block' }}
          />
        ))}
      </div>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 'clamp(16px,2.4vw,28px)',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 8,
        }}
      >
        {slides.map((_, i) => (
          <span
            key={i}
            style={{ width: 26, height: 1, background: '#fff', opacity: i === index ? 1 : 0.35, transition: 'opacity .3s' }}
          />
        ))}
      </div>
    </Reveal>
  )
}
