import Link from 'next/link'
import { cssObj } from '@/lib/css'
import { Reveal } from '@/components/site/Reveal'
import { HoverLink } from '@/components/site/HoverLink'
import { getPayloadClient } from '@/lib/payload'

type MediaLike = { url?: string | null } | string | null | undefined
const imgUrl = (m: MediaLike) => (typeof m === 'string' ? m : m?.url ?? undefined)

async function loadProcedures() {
  try {
    const payload = await getPayloadClient()
    const res = await payload.find({ collection: 'procedures', depth: 1, limit: 20, sort: 'createdAt' })
    return res.docs
  } catch {
    return []
  }
}

const CARD_ORDER = ['wave-on-lifting', 'acne-care', 'hydration-care', 'collagen-velvet', 'peeling', 'revelook']

export default async function HomePage() {
  const procedures = await loadProcedures()
  const bySlug = new Map(procedures.map((p) => [p.slug as string, p]))
  const cards = CARD_ORDER.map((slug) => bySlug.get(slug)).filter(Boolean)
  const signature = bySlug.get('cling-signature')
  const signatureSteps = (signature?.procedureSteps ?? []) as { title: string; description?: string | null }[]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '클링 에스테틱',
    image: '/assets/hero-still-30s.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '왕십리로 369 동인레반트오피스텔 1층',
      addressLocality: '성동구',
      addressRegion: '서울',
      addressCountry: 'KR',
    },
    telephone: '0507-1386-2479',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '20:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '10:00', closes: '16:00' },
    ],
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section id="top" style={{ position: 'relative', height: '100vh', minHeight: 560, overflow: 'hidden' }}>
        <video
          src="/assets/hero-30s.mp4"
          poster="/assets/hero-still-30s.png"
          autoPlay
          muted
          loop
          playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={cssObj(
            `position:absolute;left:0;right:0;bottom:0;padding:0 clamp(22px,6vw,80px) clamp(60px,9vw,110px);background:linear-gradient(transparent,rgba(51,27,15,.5))`,
          )}
        >
          <Reveal as="p" style={cssObj(`margin:0 0 14px;font-family:Poppins,sans-serif;font-size:clamp(28px,7vw,70px);text-transform:uppercase;color:#fff;line-height:1.05;letter-spacing:-.01em`)}>
            Cling Aesthetic
          </Reveal>
          <Reveal as="p" style={cssObj(`margin:0 0 clamp(24px,3vw,34px);font-size:clamp(16px,2.4vw,26px);color:#f3e9e6;font-weight:300`)}>
            왕십리, 결을 다듬는 시간
          </Reveal>
          <Reveal style={cssObj(`display:flex;flex-wrap:wrap;gap:12px`)}>
            <HoverLink href="/reservation" css="font-size:14.5px;padding:16px 30px;background:#fff;color:#331b0f;min-height:44px" hoverCss="background:#d08c81;color:#fff">
              예약 문의하기 →
            </HoverLink>
            <HoverLink href="/procedures/cling-signature" css="font-size:14.5px;padding:16px 30px;border:1px solid rgba(255,255,255,.7);color:#fff;min-height:44px" hoverCss="border-color:#fff;background:rgba(255,255,255,.12)">
              클링시그니쳐 보기
            </HoverLink>
          </Reveal>
        </div>
      </section>

      <section style={cssObj(`padding:clamp(70px,10vw,130px) clamp(22px,6vw,80px);text-align:center`)}>
        <Reveal as="p" style={cssObj(`font-family:Poppins,sans-serif;font-size:12px;letter-spacing:.3em;color:var(--color-accent);margin:0 0 22px`)}>
          OUR CARE
        </Reveal>
        <Reveal as="h2" style={cssObj(`margin:0;font-size:clamp(26px,4vw,44px);font-weight:400;line-height:1.4`)}>
          피부 상태를 먼저 살피고
          <br />
          지금 필요한 관리만 권합니다.
        </Reveal>
        <div style={cssObj(`max-width:1180px;margin:clamp(48px,6vw,80px) auto 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:clamp(20px,2.4vw,28px)`)}>
          {cards.map((p) => (
            <Link key={p!.slug as string} href={`/procedures/${p!.slug}`} style={cssObj(`display:block;text-align:left`)}>
              <div style={cssObj(`width:100%;aspect-ratio:3/4;overflow:hidden;background:var(--color-ivory)`)}>
                {imgUrl(p!.heroImage as MediaLike) && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={imgUrl(p!.heroImage as MediaLike)} alt={p!.name as string} style={cssObj(`width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s`)} />
                )}
              </div>
              <p style={cssObj(`margin:16px 0 0;font-size:16px;font-weight:500`)}>{p!.name as string}</p>
              {p!.summary ? <p style={cssObj(`margin:6px 0 0;font-size:13px;color:var(--color-caption);line-height:1.6`)}>{p!.summary as string}</p> : null}
            </Link>
          ))}
        </div>
      </section>

      <section style={cssObj(`background:var(--color-ivory);padding:clamp(70px,10vw,130px) clamp(22px,6vw,80px);text-align:center`)}>
        <Reveal as="p" style={cssObj(`font-family:Poppins,sans-serif;font-size:12px;letter-spacing:.3em;color:var(--color-accent);margin:0 0 22px`)}>
          PHILOSOPHY
        </Reveal>
        <Reveal as="h2" style={cssObj(`margin:0;font-size:clamp(26px,4vw,44px);font-weight:400;line-height:1.4`)}>
          강한 관리보다,
          <br />
          맞는 관리를 먼저 생각합니다.
        </Reveal>
        <div style={cssObj(`max-width:1080px;margin:clamp(40px,5vw,64px) auto 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:0;text-align:left`)}>
          {[
            ['01', '1:1 프라이빗 상담', '방문 즉시 관리로 들어가지 않고, 지금 피부 상태를 먼저 확인한 뒤 방향을 정합니다.'],
            ['02', '순서가 있는 케어', '클렌징부터 딥클렌징, 본 관리, 진정까지 — 단계를 건너뛰지 않습니다.'],
            ['03', '왕십리, 접근성 좋은 위치', '왕십리역·상왕십리역 도보권. 퇴근길에도 부담 없이 들를 수 있는 위치입니다.'],
          ].map(([n, title, desc]) => (
            <Reveal key={n} style={cssObj(`padding:clamp(22px,3vw,34px) clamp(18px,2.4vw,36px);border-top:1px solid var(--color-hairline)`)}>
              <p style={cssObj(`margin:0;font-family:Poppins,sans-serif;font-size:12px;color:var(--color-number)`)}>{n}</p>
              <p style={cssObj(`margin:14px 0 0;font-size:16px;font-weight:500`)}>{title}</p>
              <p style={cssObj(`margin:10px 0 0;font-size:14px;line-height:1.9;color:var(--color-ink-soft)`)}>{desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {signature && (
        <section style={cssObj(`padding:clamp(70px,10vw,130px) clamp(22px,6vw,80px)`)}>
          <div style={cssObj(`max-width:1080px;margin:0 auto`)}>
            <Reveal as="p" style={cssObj(`font-family:Poppins,sans-serif;font-size:12px;letter-spacing:.3em;color:var(--color-accent);margin:0 0 18px;text-align:center`)}>
              CLING SIGNATURE
            </Reveal>
            <Reveal as="h2" style={cssObj(`margin:0 0 clamp(40px,5vw,60px);font-size:clamp(26px,4vw,44px);font-weight:400;text-align:center;line-height:1.4`)}>
              클링시그니쳐
            </Reveal>
            <div style={cssObj(`display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:clamp(24px,3vw,36px)`)}>
              {signatureSteps.map((s, i) => (
                <Reveal key={i}>
                  <p style={cssObj(`margin:0;font-family:Poppins,sans-serif;font-size:clamp(22px,2.6vw,28px);color:var(--color-accent)`)}>{s.title}</p>
                  {s.description && <p style={cssObj(`margin:10px 0 0;font-size:14px;line-height:1.8;color:var(--color-ink-soft)`)}>{s.description}</p>}
                </Reveal>
              ))}
            </div>
            <div style={cssObj(`text-align:center;margin-top:clamp(40px,5vw,56px)`)}>
              <HoverLink href="/procedures/cling-signature" css="font-size:14.5px;padding:16px 34px;border:1px solid var(--color-ink);color:var(--color-ink)" hoverCss="background:var(--color-ink);color:#fff">
                클링시그니쳐 자세히 보기 →
              </HoverLink>
            </div>
          </div>
        </section>
      )}

      <section id="visit" style={cssObj(`background:var(--color-dark);color:#f3ece8;padding:clamp(70px,10vw,130px) clamp(22px,6vw,80px);text-align:center`)}>
        <Reveal as="p" style={cssObj(`font-family:Poppins,sans-serif;font-size:12px;letter-spacing:.3em;color:var(--color-number);margin:0 0 22px`)}>
          VISIT CLING AESTHETIC
        </Reveal>
        <Reveal as="h2" style={cssObj(`margin:0;font-size:clamp(24px,3.6vw,40px);font-weight:400;line-height:1.5`)}>
          서울 성동구 왕십리로 369
          <br />
          동인레반트오피스텔 1층
        </Reveal>
        <Reveal as="p" style={cssObj(`margin:22px 0 0;font-size:14.5px;line-height:2;color:#d9cbc6`)}>
          월~금 10:00~20:00 · 토 10:00~16:00 · 일요일 정기휴무
          <br />
          2호선 왕십리역·상왕십리역 도보권 · 건물 뒤편 기계식 주차장 이용 가능
        </Reveal>
        <Reveal style={cssObj(`display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:clamp(30px,4vw,44px)`)}>
          <HoverLink href="/reservation" css="font-size:15px;padding:17px 34px;background:#fff;color:#331b0f" hoverCss="background:#d08c81;color:#fff">
            예약 문의하기 →
          </HoverLink>
          <HoverLink href="/location" css="font-size:15px;padding:17px 34px;border:1px solid rgba(255,255,255,.5);color:#fff" hoverCss="border-color:#fff;background:rgba(255,255,255,.1)">
            오시는길 자세히 →
          </HoverLink>
        </Reveal>
      </section>
    </div>
  )
}
