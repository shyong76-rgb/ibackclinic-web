import type { CSSProperties } from 'react'

// dc.html 원본의 style="prop:value;..." 문자열을 그대로 React style 객체로 변환.
// Claude Design 산출물의 인라인 스타일을 값 손실 없이 옮기기 위한 브릿지 유틸.
export function cssObj(str: string): CSSProperties {
  const result: Record<string, string> = {}
  str.split(';').forEach((decl) => {
    const trimmed = decl.trim()
    if (!trimmed) return
    const idx = trimmed.indexOf(':')
    if (idx === -1) return
    const prop = trimmed.slice(0, idx).trim()
    const value = trimmed.slice(idx + 1).trim()
    if (!prop || !value) return
    const camel = prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())
    result[camel] = value
  })
  return result as CSSProperties
}
