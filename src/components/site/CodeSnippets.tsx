'use client'

import { usePathname } from 'next/navigation'
import { matchesPath } from '@/lib/path-match'
import { RawHtml } from './RawHtml'

export type SnippetData = {
  id?: string
  name?: string | null
  placement?: 'header' | 'footer' | 'body' | null
  code?: string | null
  active?: boolean | null
  showOnPaths?: string | null
}

// 헤더/본문/푸터 위치별로 layout에서 각각 렌더. 실제 <head> 태그 안에 넣는 게
// 아니라 body 안에서 위치만 다르게 두는 것(GA4/픽셀류는 이걸로 충분히 동작함).
export function CodeSnippets({ snippets, placement }: { snippets: SnippetData[]; placement: 'header' | 'footer' | 'body' }) {
  const pathname = usePathname()
  const active = snippets.filter(
    (s) => s.active !== false && s.placement === placement && !!s.code && matchesPath(s.showOnPaths, pathname),
  )
  if (!active.length) return null
  return (
    <>
      {active.map((s, i) => (
        <RawHtml key={s.id ?? i} html={s.code!} />
      ))}
    </>
  )
}
