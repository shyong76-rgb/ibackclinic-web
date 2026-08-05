import Link from 'next/link'
import { cssObj } from '@/lib/css'
import { Reveal } from '@/components/site/Reveal'
import { Hoverable } from '@/components/site/Hoverable'
import { HoverLink } from '@/components/site/HoverLink'
import { HeroCarousel } from '@/components/site/HeroCarousel'

const CF = 'https://d8j0ntlcm91z4.cloudfront.net/user_3HOgJpo09zCNKnNhwzuIRvuFdRO'

export const metadata = {
  title: '다크서클 진료 — 유형별 정밀 진단 | 아이백의원',
}

export default function DarkCirclePage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <section
        id="top"
        style={cssObj(`padding:calc(85px + clamp(60px,10vw,120px)) clamp(22px,6vw,80px) clamp(50px,7vw,90px);text-align:center`)}
      >
        <Reveal as="p" style={cssObj(`margin:0 0 clamp(20px,3vw,30px);font-family:Poppins,sans-serif;font-size:11.5px;letter-spacing:.3em;color:#aa9371`)}>
          I-BACK CLEAR&#8482; · DARK CIRCLE
        </Reveal>
        <Reveal as="h1" style={cssObj(`margin:0;font-family:Poppins,sans-serif;font-weight:200;font-size:clamp(32px,5.6vw,64px);line-height:1.05;letter-spacing:-.015em`)}>
          Dark Circle <span style={{ fontWeight: 500 }}>Care</span>
        </Reveal>
        <Reveal as="p" style={cssObj(`margin:clamp(18px,2.6vw,28px) 0 0;font-size:clamp(18px,2.4vw,28px);font-weight:300`)}>
          유형부터 확인하는, <strong style={{ fontWeight: 700 }}>다크서클 진료</strong>
        </Reveal>
        <Reveal as="p" style={cssObj(`margin:clamp(26px,3.6vw,38px) auto 0;max-width:32em;font-size:clamp(14px,1.6vw,16px);line-height:2;color:#7a6f66`)}>
          같은 다크서클처럼 보여도 원인은 서로 다를 수 있습니다. 그래서 특정 장비를 먼저 고르기보다, 지금 눈 밑이 왜 어두워 보이는지 정확히
          확인하는 게 먼저입니다.
        </Reveal>
        <Reveal style={cssObj(`display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:clamp(30px,4vw,44px)`)}>
          <HoverLink
            href="/dark-circle#contact"
            css={`font-size:15px;padding:17px 34px;background:#443a35;color:#fff;min-height:44px`}
            hoverCss={`background:#aa9371;color:#fff`}
          >
            상담 예약하기 →
          </HoverLink>
          <Hoverable
            as="a"
            href="http://pf.kakao.com/_xnxoxkGX"
            target="_blank"
            rel="noopener"
            css={`font-size:15px;padding:17px 34px;border:1px solid #ddd3c2;min-height:44px`}
            hoverCss={`border-color:#aa9371;color:#aa9371`}
          >
            카카오톡 문의 →
          </Hoverable>
        </Reveal>
        <Reveal style={cssObj(`display:flex;gap:0;justify-content:center;margin-top:clamp(40px,5vw,60px)`)}>
          <HoverLink
            href="/i-back-clear"
            css={`font-size:14.5px;padding:14px 26px;border-bottom:1px solid #efe9de;color:#8a7f72;min-height:44px;display:flex;align-items:center`}
            hoverCss={`color:#aa9371;border-color:#aa9371`}
          >
            눈밑지방재배치
          </HoverLink>
          <Link href="/dark-circle" style={cssObj(`font-size:14.5px;padding:14px 26px;border-bottom:1px solid #443a35;min-height:44px;display:flex;align-items:center`)}>
            다크서클
          </Link>
        </Reveal>
      </section>

      <HeroCarousel
        height="clamp(260px,42vw,560px)"
        slides={[
          { src: `${CF}/hf_20260804_121705_ee327218-7ab1-4cce-a649-87e5c4668bc6.png`, alt: '지방형 다크서클' },
          { src: `${CF}/hf_20260804_121705_4a5662a6-dc35-46e7-a9ba-22ac3558232d.png`, alt: '혈관형 다크서클' },
          { src: `${CF}/hf_20260804_121705_f93d458c-206f-49f4-a85c-b3aeb94854b0.png`, alt: '색소형 다크서클' },
          { src: `${CF}/hf_20260804_095144_a8cae61d-30b1-4713-be14-57a05d4777f5.png`, alt: '혼합형 다크서클' },
        ]}
      />

      <section id="declare" style={cssObj(`padding:clamp(60px,9vw,120px) clamp(22px,6vw,80px);text-align:center`)}>
        <Reveal style={cssObj(`max-width:1180px;margin:0 auto;padding-top:clamp(40px,6vw,70px);border-top:1px solid #efe9de`)}>
          <p style={cssObj(`margin:0;font-family:Poppins,sans-serif;font-size:clamp(72px,14vw,180px);font-weight:200;line-height:.9;letter-spacing:-.03em`)}>
            4
          </p>
          <p style={cssObj(`margin:clamp(16px,2.2vw,26px) 0 0;font-size:clamp(17px,2.2vw,24px);font-weight:300`)}>원인은 네 가지로 나뉩니다</p>
        </Reveal>
      </section>

      <section id="why" style={cssObj(`background:#f8f5ef;padding:clamp(80px,12vw,150px) clamp(22px,6vw,80px);text-align:center`)}>
        <Reveal as="p" style={cssObj(`margin:0 0 clamp(20px,3vw,30px);font-family:Poppins,sans-serif;font-size:11.5px;letter-spacing:.3em;color:#aa9371`)}>
          WHY IT LOOKS DARK
        </Reveal>
        <Reveal as="h2" style={cssObj(`margin:0;font-size:clamp(24px,3.6vw,40px);font-weight:400;line-height:1.45`)}>
          다크서클은
          <br />
          하나의 원인이 아닙니다
        </Reveal>
        <Reveal style={cssObj(`max-width:30em;margin:clamp(34px,5vw,56px) auto 0;font-size:clamp(14.5px,1.7vw,16.5px);line-height:2.05;color:#6b6058`)}>
          <p style={{ margin: 0 }}>
            지방이 돌출되어 그림자가 생긴 경우, 피부가 얇아 혈관이 비치는 경우, 색소가 침착된 경우가 모두 다크서클로 보입니다. 원인이
            다르면 접근도 달라지기 때문에, 지금 눈 밑이 어두워 보이는 이유를 먼저 확인합니다.
          </p>
        </Reveal>
      </section>

      <section id="types" style={cssObj(`padding:clamp(80px,12vw,150px) clamp(22px,6vw,80px);text-align:center;background:#fff`)}>
        <Reveal as="p" style={cssObj(`margin:0 0 clamp(20px,3vw,30px);font-family:Poppins,sans-serif;font-size:11.5px;letter-spacing:.3em;color:#aa9371`)}>
          THE TYPES
        </Reveal>
        <Reveal as="h2" style={cssObj(`margin:0;font-size:clamp(24px,3.6vw,40px);font-weight:400;line-height:1.45`)}>
          유형별로 접근이 달라집니다
        </Reveal>
        <div style={cssObj(`max-width:1080px;margin:clamp(44px,6vw,72px) auto 0;text-align:left`)}>
          {[
            ['Type 01', '지방형', 'Fat', '눈 밑 지방이 돌출되며 그림자가 생기는 유형', '이노플러스 비절개 눈밑지방재배치', false],
            ['Type 02', '혈관형', 'Vascular', '피부가 얇아 혈관이 비쳐 푸르스름하게 보이는 유형', '혈관성 요소를 고려한 치료(맥스지 아이콘 IPL 등)', false],
            ['Type 03', '색소형', 'Pigmentation', '멜라닌 색소 침착으로 갈색·회색빛으로 보이는 유형', '색소 치료(브라이톤 토닝 등)', false],
            ['Type 04', '혼합형', 'Mixed', '두 가지 이상 원인이 함께 작용하는 경우(가장 흔함)', '원인별 우선순위를 정해 복합적으로 접근', true],
          ].map(([type, kr, en, desc, approach, last]) => (
            <Reveal
              key={type as string}
              style={cssObj(
                `display:flex;flex-wrap:wrap;gap:clamp(14px,3vw,36px);align-items:baseline;padding:clamp(20px,2.8vw,32px) 0;border-top:1px solid #efe9de${last ? ';border-bottom:1px solid #efe9de' : ''}`,
              )}
            >
              <span style={cssObj(`font-family:Poppins,sans-serif;font-size:13px;letter-spacing:.1em;color:#c4b393;min-width:5.4em`)}>{type}</span>
              <span style={cssObj(`flex:0 1 9em;font-size:clamp(15.5px,1.8vw,18px);font-weight:500`)}>
                {kr} <span style={cssObj(`font-family:Poppins,sans-serif;font-size:13px;font-weight:300;color:#8a7f72`)}>{en}</span>
              </span>
              <span style={cssObj(`flex:1 1 220px;font-size:14.5px;line-height:1.9;color:#6b6058`)}>{desc}</span>
              <span style={cssObj(`flex:1 1 200px;font-size:14px;line-height:1.9;color:#8a7f72`)}>{approach}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="check" style={cssObj(`padding:clamp(80px,12vw,150px) clamp(22px,6vw,80px);text-align:center`)}>
        <Reveal as="p" style={cssObj(`margin:0 0 clamp(20px,3vw,30px);font-family:Poppins,sans-serif;font-size:11.5px;letter-spacing:.3em;color:#aa9371`)}>
          SELF CHECK
        </Reveal>
        <Reveal as="h2" style={cssObj(`margin:0;font-size:clamp(24px,3.6vw,40px);font-weight:400;line-height:1.45`)}>
          10초 셀프 체크
        </Reveal>
        <div style={cssObj(`max-width:820px;margin:clamp(40px,5.5vw,64px) auto 0;text-align:left`)}>
          {[
            ['웃지 않아도 눈 밑이 불룩해 보이고, 푹 쉬어도 피곤해 보인다면', '→ 지방형에 가깝습니다', false],
            ['유독 잠을 못 잔 날 다크서클이 심해 보인다면', '→ 혈관형에 가깝습니다', false],
            ['피부를 가볍게 당겨도 어두운 색이 그대로라면', '→ 색소형에 가깝습니다', true],
          ].map(([q, a, last]) => (
            <Reveal
              key={q as string}
              style={cssObj(
                `display:flex;flex-wrap:wrap;gap:clamp(10px,2vw,32px);align-items:baseline;padding:clamp(20px,2.6vw,28px) 0;border-top:1px solid #efe9de${last ? ';border-bottom:1px solid #efe9de' : ''}`,
              )}
            >
              <span style={cssObj(`flex:1 1 300px;font-size:14.5px;line-height:1.95;color:#6b6058`)}>{q}</span>
              <span style={cssObj(`flex:0 1 10em;font-size:15px;font-weight:500;color:#aa9371`)}>{a}</span>
            </Reveal>
          ))}
          <Reveal as="p" style={cssObj(`margin:clamp(22px,3vw,30px) 0 0;text-align:center;font-size:14px;line-height:1.95;color:#8a7f72`)}>
            실제로는 두 가지 이상 원인이 함께 작용하는 경우가 더 많습니다.
            <br />
            정확한 원인 확인은 대표원장의 직접 진료를 통해 이뤄집니다.
          </Reveal>
        </div>
      </section>

      <section id="fit" style={cssObj(`background:#f8f5ef;padding:clamp(80px,12vw,150px) clamp(22px,6vw,80px)`)}>
        <div
          style={cssObj(
            `max-width:1080px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:clamp(36px,5vw,72px);align-items:start`,
          )}
        >
          <Reveal style={cssObj(`padding-top:clamp(22px,3vw,32px);border-top:1px solid #e5ded1`)}>
            <p style={cssObj(`margin:0;font-family:Poppins,sans-serif;font-size:11.5px;letter-spacing:.3em;color:#aa9371`)}>FLAT FIRST</p>
            <h2 style={cssObj(`margin:clamp(16px,2.2vw,24px) 0 0;font-size:clamp(21px,2.8vw,30px);font-weight:400;line-height:1.5`)}>
              먼저 평평하게, 그다음 밝게
            </h2>
            <div style={cssObj(`margin-top:clamp(22px,3vw,30px);display:grid;gap:clamp(18px,2.4vw,26px);font-size:clamp(14.5px,1.7vw,16px);line-height:2.05;color:#6b6058`)}>
              <p style={cssObj(`margin:0;color:#443a35`)}>
                가장 중요한 것은 눈 밑의 평평함입니다. 지방 돌출로 그림자가 생긴 상태라면, 평평한 눈 밑을 먼저 만들어야 이후의 색소·혈관
                치료가 의미를 가집니다.
              </p>
              <p style={{ margin: 0 }}>
                지방형에 가깝다면 이노플러스 비절개 눈밑지방재배치로 접근합니다. 눈 밑 필러는 가장 섬세한 부위 중 하나이며, 다년간의
                경험으로 쌓은 노하우가 결과를 좌우합니다.
              </p>
              <p style={{ margin: 0 }}>
                <Link href="/i-back-clear" style={cssObj(`border-bottom:1px solid #aa9371;padding-bottom:5px;color:#8a7654`)}>
                  아이백클리어 자세히 보기 →
                </Link>
              </p>
            </div>
          </Reveal>
          <Reveal style={cssObj(`padding-top:clamp(22px,3vw,32px);border-top:1px solid #e5ded1`)}>
            <p style={cssObj(`margin:0;font-family:Poppins,sans-serif;font-size:11.5px;letter-spacing:.3em;color:#aa9371`)}>WHAT WE PROMISE</p>
            <h2 style={cssObj(`margin:clamp(16px,2.2vw,24px) 0 0;font-size:clamp(21px,2.8vw,30px);font-weight:400;line-height:1.5`)}>
              한계까지 함께 안내합니다
            </h2>
            <div style={cssObj(`margin-top:clamp(22px,3vw,30px);display:grid;gap:clamp(18px,2.4vw,26px);font-size:clamp(14.5px,1.7vw,16px);line-height:2.05;color:#6b6058`)}>
              <p style={cssObj(`margin:0;color:#443a35`)}>
                다크서클은 복합적인 경우가 많아 한 번에 완치되긴 어렵습니다. 그래서 치료의 장점만 말씀드리지 않습니다.
              </p>
              <p style={{ margin: 0 }}>
                가능한 범위와 한계까지 함께 안내드리는 이유는, 그래야 스스로 상태를 이해한 뒤 결정하실 수 있기 때문입니다. 모든 상담과
                시술은 대표원장이 직접 진행합니다.
              </p>
              <p style={cssObj(`margin:0;font-size:12.5px;line-height:1.9;color:#a1968a`)}>
                ※ 충분한 상담과 진단을 바탕으로 개인에게 적합한 치료 방향을 안내합니다. 결과는 개인의 상태에 따라 차이가 있을 수 있습니다.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal style={cssObj(`width:100%;height:clamp(240px,38vw,520px);overflow:hidden`)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${CF}/hf_20260804_115010_5a05c673-a942-4636-a7cf-f850a6d54dbc.png`}
          alt="대표원장이 직접 진료하는 모습"
          style={cssObj(`width:100%;height:100%;object-fit:cover;display:block`)}
        />
      </Reveal>

      <section id="contact" style={cssObj(`background:#443a35;color:#f6f2ea;padding:clamp(80px,12vw,150px) clamp(22px,6vw,80px);text-align:center`)}>
        <Reveal as="h2" style={cssObj(`margin:0;font-size:clamp(26px,4vw,46px);font-weight:300;line-height:1.4`)}>
          눈 밑 고민,
          <br />
          상담부터 시작하세요.
        </Reveal>
        <Reveal as="p" style={cssObj(`margin:clamp(18px,2.5vw,26px) 0 0;font-size:15.5px;color:#c9bfb2`)}>
          대표원장이 직접 상담합니다.
        </Reveal>
        <Reveal style={cssObj(`display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:clamp(30px,4vw,44px)`)}>
          <Hoverable
            as="a"
            href="http://pf.kakao.com/_xnxoxkGX"
            target="_blank"
            rel="noopener"
            css={`font-size:15px;padding:17px 34px;background:#aa9371;color:#fff;min-height:44px`}
            hoverCss={`background:#f6f2ea;color:#443a35`}
          >
            카카오 문의 →
          </Hoverable>
          <Hoverable
            as="a"
            href="https://map.naver.com/p/entry/place/2072489982"
            target="_blank"
            rel="noopener"
            css={`font-size:15px;padding:17px 34px;border:1px solid rgba(246,242,234,.4);color:#f6f2ea;min-height:44px`}
            hoverCss={`border-color:#f6f2ea;background:rgba(246,242,234,.08)`}
          >
            네이버 예약 →
          </Hoverable>
        </Reveal>
      </section>
    </div>
  )
}
