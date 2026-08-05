'use client'

import { useEffect, useRef } from 'react'

// innerHTML로 넣은 <script>는 브라우저가 실행 안 시켜주므로, 태그를 새로 만들어
// 교체하는 방식으로 실제 실행되게 함. GA4/픽셀 등 서드파티 삽입 코드 전용.
export function RawHtml({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container || !html) return
    container.innerHTML = html

    const scripts = Array.from(container.querySelectorAll('script'))
    scripts.forEach((oldScript) => {
      const newScript = document.createElement('script')
      Array.from(oldScript.attributes).forEach((attr) => newScript.setAttribute(attr.name, attr.value))
      newScript.textContent = oldScript.textContent
      oldScript.replaceWith(newScript)
    })

    return () => {
      container.innerHTML = ''
    }
  }, [html])

  return <div ref={ref} style={{ display: 'contents' }} />
}
