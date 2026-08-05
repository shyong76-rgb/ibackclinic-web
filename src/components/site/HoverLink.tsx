'use client'

import { useState, type ReactNode } from 'react'
import Link from 'next/link'
import { cssObj } from '@/lib/css'

// Hoverable의 내부링크 전용 버전. next/link(함수)를 Server Component에서
// Client Component로 직접 넘기면 RSC 직렬화 에러가 나므로, href 문자열만 받아
// 이 컴포넌트 내부에서 Link를 사용한다.
export function HoverLink({
  href,
  css,
  hoverCss,
  children,
}: {
  href: string
  css: string
  hoverCss?: string
  children?: ReactNode
}) {
  const [hover, setHover] = useState(false)
  const style = { ...cssObj(css), ...(hover && hoverCss ? cssObj(hoverCss) : {}) }
  return (
    <Link href={href} style={style} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {children}
    </Link>
  )
}
