'use client'

import { useState, type ElementType, type ReactNode } from 'react'
import { cssObj } from '@/lib/css'

// dc.html의 style / style-hover 쌍을 그대로 재현하는 범용 호버 컴포넌트.
export function Hoverable({
  as = 'a',
  css,
  hoverCss,
  children,
  ...rest
}: {
  as?: ElementType
  css: string
  hoverCss?: string
  children?: ReactNode
  [key: string]: unknown
}) {
  const [hover, setHover] = useState(false)
  const Tag = as as ElementType
  const style = { ...cssObj(css), ...(hover && hoverCss ? cssObj(hoverCss) : {}) }
  return (
    <Tag
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {children}
    </Tag>
  )
}
