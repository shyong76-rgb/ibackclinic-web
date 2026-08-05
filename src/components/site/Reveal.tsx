'use client'

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from 'react'

// dc.html의 data-reveal 스크롤 인터섹션 애니메이션을 1:1로 재현.
export function Reveal({
  as = 'div',
  style,
  className,
  children,
  ...rest
}: {
  as?: ElementType
  style?: CSSProperties
  className?: string
  children?: ReactNode
  [key: string]: unknown
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    const safety = setTimeout(() => setShown(true), 1400)
    return () => {
      io.disconnect()
      clearTimeout(safety)
    }
  }, [])

  const Tag = as as ElementType
  return (
    <Tag
      ref={ref}
      className={className}
      {...rest}
      style={{
        ...style,
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : 'translateY(18px)',
        transition: 'opacity .8s ease, transform .8s ease',
      }}
    >
      {children}
    </Tag>
  )
}
