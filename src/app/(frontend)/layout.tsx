import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { FloatingCta, type FloatingCtaButton } from '@/components/site/FloatingCta'
import { PopupRenderer, type PopupData } from '@/components/site/PopupRenderer'
import { CodeSnippets, type SnippetData } from '@/components/site/CodeSnippets'
import { getPayloadClient } from '@/lib/payload'
import { DEFAULT_NAV, DEFAULT_FLOATING_CTA, type NavItem } from '@/lib/site-config'
import './globals.css'

// Navigation·Popups는 Payload 관리자에서 실시간으로 편집되므로 빌드 시점에
// 정적으로 굳어지면 안 됨 (관리자에서 수정해도 재배포 전까지 반영 안 되는 문제 방지).
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: '아이백의원 | I-BACK CLINIC',
  description: '강남 아이백의원 — 완전 비절개 눈밑지방재배치 아이백클리어, 다크서클 진료',
}

type RawNavItem = {
  label: string
  href: string
  order?: number | null
  visible?: boolean | null
  children?: { label: string; href: string }[] | null
}

async function loadNav(): Promise<NavItem[]> {
  try {
    const payload = await getPayloadClient()
    const nav = await payload.findGlobal({ slug: 'navigation' })
    const items = ((nav?.items ?? []) as RawNavItem[])
    if (!items.length) return DEFAULT_NAV
    return items
      .filter((item: RawNavItem) => item.visible !== false)
      .sort((a: RawNavItem, b: RawNavItem) => (a.order ?? 0) - (b.order ?? 0))
      .map((item: RawNavItem) => ({
        label: item.label,
        href: item.href,
        children: item.children?.map((c: { label: string; href: string }) => ({ label: c.label, href: c.href })),
      }))
  } catch {
    return DEFAULT_NAV
  }
}

async function loadPopups(): Promise<PopupData[]> {
  try {
    const payload = await getPayloadClient()
    const res = await payload.find({ collection: 'popups', where: { active: { equals: true } }, limit: 20 })
    return res.docs as unknown as PopupData[]
  } catch {
    return []
  }
}

async function loadSnippets(): Promise<SnippetData[]> {
  try {
    const payload = await getPayloadClient()
    const g = await payload.findGlobal({ slug: 'code-snippets' })
    return (g?.snippets ?? []) as SnippetData[]
  } catch {
    return []
  }
}

async function loadFloatingCta(): Promise<FloatingCtaButton[]> {
  try {
    const payload = await getPayloadClient()
    const g = await payload.findGlobal({ slug: 'floating-cta' })
    const buttons = (g?.buttons ?? []) as FloatingCtaButton[]
    return buttons.length ? buttons : DEFAULT_FLOATING_CTA
  } catch {
    return DEFAULT_FLOATING_CTA
  }
}

export default async function FrontendLayout({ children }: { children: React.ReactNode }) {
  const [nav, popups, snippets, ctaButtons] = await Promise.all([loadNav(), loadPopups(), loadSnippets(), loadFloatingCta()])
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ minHeight: '100vh', margin: 0 }}>
        <CodeSnippets snippets={snippets} placement="header" />
        <SiteHeader nav={nav} />
        <CodeSnippets snippets={snippets} placement="body" />
        {children}
        <SiteFooter />
        <FloatingCta buttons={ctaButtons} />
        <PopupRenderer popups={popups} />
        <CodeSnippets snippets={snippets} placement="footer" />
      </body>
    </html>
  )
}
