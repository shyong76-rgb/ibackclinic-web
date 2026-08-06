import Link from 'next/link'
import { cssObj } from '@/lib/css'
import { Reveal } from '@/components/site/Reveal'
import { HoverLink } from '@/components/site/HoverLink'

// Claude Design 산출물(클링에스테틱 홈페이지 리디자인1/cling-home.dc.html) 홈페이지를 그대로 이식.
export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ position: 'relative', width: '100%', height: '82vh', minHeight: 460, overflow: 'hidden' }}>
        <video
          src="/assets/hero-30s.mp4"
          poster="/assets/home-hero-poster.png"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
        />
      </section>

      <section id="top" style={cssObj(`padding:clamp(90px,12vw,170px) clamp(22px,6vw,48px) clamp(70px,9vw,120px);text-align:center`)}>
        <div style={cssObj(`max-width:900px;margin:0 auto`)}>
          <Reveal as="p" style={cssObj(`margin:0 0 clamp(18px,2.6vw,26px);font-size:11.5px;letter-spacing:.3em;color:#d08c81`)}>
            CLING AESTHETIC
          </Reveal>
          <Reveal as="h1" style={cssObj(`margin:0;font-size:clamp(30px,5.6vw,72px);font-weight:600;line-height:1.02;letter-spacing:-.02em`)}>
            순서가 있는
            <br />
            피부 관리
          </Reveal>
          <Reveal as="p" style={cssObj(`margin:clamp(18px,2.4vw,26px) auto 0;max-width:30em;font-size:clamp(15px,2.1vw,22px);font-weight:400;line-height:1.6;color:#4b4b4b`)}>
            강한 관리보다 맞는 순서를 먼저 봅니다. 1:1 상담으로 오늘 필요한 관리와 강도를 함께 정합니다.
          </Reveal>
          <Reveal style={cssObj(`display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:clamp(28px,3.6vw,40px)`)}>
            <HoverLink href="/procedures/cling-signature" css="font-size:15px;padding:16px 34px;background:#331b0f;color:#fff;min-height:44px" hoverCss="background:#d08c81">
              클링시그니쳐 보기
            </HoverLink>
            <HoverLink href="/reservation" css="font-size:15px;padding:16px 34px;border:1px solid #e8e4e1;min-height:44px" hoverCss="border-color:#d08c81;color:#d08c81">
              예약 문의하기
            </HoverLink>
          </Reveal>
        </div>
      </section>

      <section id="philosophy" style={cssObj(`background:#f7f5f3;padding:clamp(120px,16vw,260px) clamp(22px,6vw,48px);text-align:center`)}>
        <Reveal as="p" style={cssObj(`margin:0;font-size:11.5px;letter-spacing:.3em;color:#d08c81`)}>
          OUR PHILOSOPHY
        </Reveal>
        <Reveal as="h2" style={cssObj(`margin:clamp(10px,1.2vw,14px) 0 0;font-size:clamp(24px,4vw,46px);font-weight:500;line-height:1.3`)}>
          관리는
          <br />
          순서에서 시작합니다.
        </Reveal>
        <Reveal style={cssObj(`width:1px;height:clamp(18px,2.4vw,30px);margin:clamp(14px,1.8vw,20px) auto 0;background:linear-gradient(#e8e4e1,rgba(232,228,225,0))`)} />
        <div style={cssObj(`max-width:1200px;margin:clamp(12px,1.6vw,18px) auto 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));text-align:left`)}>
          <Reveal style={cssObj(`padding:clamp(24px,3vw,36px) clamp(20px,2.6vw,40px)`)}>
            <p style={cssObj(`margin:0;font-size:12px;letter-spacing:.24em;color:#d08c81`)}>01</p>
            <p style={cssObj(`margin:14px 0 0;font-size:clamp(16px,1.9vw,19px);font-weight:500`)}>1:1 프라이빗 상담</p>
            <p style={cssObj(`margin:12px 0 0;font-size:clamp(14.5px,1.7vw,16px);line-height:2.05;color:#4b4b4b`)}>
              피부 상태를 먼저 확인하고, 오늘 필요한 관리와 강도를 함께 정합니다.
            </p>
          </Reveal>
          <Reveal style={cssObj(`padding:clamp(24px,3vw,36px) clamp(20px,2.6vw,40px);border-left:1px solid #e8e4e1;border-right:1px solid #e8e4e1`)}>
            <p style={cssObj(`margin:0;font-size:12px;letter-spacing:.24em;color:#d08c81`)}>02</p>
            <p style={cssObj(`margin:14px 0 0;font-size:clamp(16px,1.9vw,19px);font-weight:500`)}>순서가 있는 케어</p>
            <p style={cssObj(`margin:12px 0 0;font-size:clamp(14.5px,1.7vw,16px);line-height:2.05;color:#4b4b4b`)}>
              정리하고, 다듬고, 채우고, 마무리합니다. 단계를 건너뛰지 않는 것이 기준입니다.
            </p>
          </Reveal>
          <Reveal style={cssObj(`padding:clamp(24px,3vw,36px) clamp(20px,2.6vw,40px)`)}>
            <p style={cssObj(`margin:0;font-size:12px;letter-spacing:.24em;color:#d08c81`)}>03</p>
            <p style={cssObj(`margin:14px 0 0;font-size:clamp(16px,1.9vw,19px);font-weight:500`)}>편한 접근성</p>
            <p style={cssObj(`margin:12px 0 0;font-size:clamp(14.5px,1.7vw,16px);line-height:2.05;color:#4b4b4b`)}>
              오피스텔 1층, 퇴근길에도 부담 없이 이어가실 수 있습니다.
            </p>
          </Reveal>
        </div>
        <Reveal
          as="p"
          style={cssObj(
            `max-width:24em;margin:clamp(18px,2.4vw,28px) auto 0;padding-top:clamp(14px,1.8vw,20px);border-top:1px solid #e8e4e1;font-size:clamp(18px,2.4vw,28px);font-weight:400;line-height:1.65`,
          )}
        >
          강한 관리보다
          <br />
          <strong style={{ fontWeight: 600 }}>맞는 순서</strong>를 먼저 찾습니다.
        </Reveal>
      </section>

      <section id="firstvisit" style={cssObj(`padding:clamp(120px,16vw,260px) clamp(22px,6vw,48px)`)}>
        <div style={cssObj(`max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:clamp(34px,5vw,72px);align-items:start`)}>
          <Reveal>
            <p style={cssObj(`margin:0;font-size:11.5px;letter-spacing:.3em;color:#d08c81`)}>FIRST VISIT</p>
            <h2 style={cssObj(`margin:clamp(16px,2.2vw,24px) 0 0;font-size:clamp(22px,3vw,36px);font-weight:500;line-height:1.4`)}>처음 오시는 분께</h2>
            <p style={cssObj(`margin:16px 0 0;font-size:13.5px;line-height:1.9;color:#8a7f78`)}>예약 시 미리 알려주시면 관리 시간을 여유 있게 잡아드립니다.</p>
          </Reveal>
          <Reveal as="ul" style={cssObj(`margin:0;padding:0;list-style:none`)}>
            {[
              '첫 방문은 상담 시간이 포함되어 관리 시간이 조금 더 길어집니다.',
              '가격은 피부 상태와 관리 방향에 따라 달라져 상담 후 안내드립니다.',
              '레이저·시술을 최근 받으셨다면 예약 시 미리 알려주세요.',
              '관리 효과와 지속 기간은 개인의 피부 상태에 따라 차이가 있을 수 있습니다.',
            ].map((text, i, arr) => (
              <li
                key={text}
                style={cssObj(
                  `display:flex;gap:12px;font-size:15px;line-height:1.95;color:#4b4b4b;padding:16px 0;border-top:1px solid #e8e4e1${i === arr.length - 1 ? ';border-bottom:1px solid #e8e4e1' : ''}`,
                )}
              >
                <span style={cssObj(`flex:none;width:4px;height:4px;margin-top:11px;border-radius:50%;background:#d08c81`)} />
                <span>{text}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="signature" style={cssObj(`background:#f7f5f3;padding:clamp(120px,16vw,260px) clamp(22px,6vw,48px)`)}>
        <div style={cssObj(`max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:clamp(30px,4.5vw,64px);align-items:center`)}>
          <Reveal style={cssObj(`width:100%;max-width:420px;aspect-ratio:4/5;overflow:hidden;margin:0 auto`)}>
            <video src="/assets/home-signature.mp4" autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </Reveal>
          <Reveal style={cssObj(`max-width:30em`)}>
            <p style={cssObj(`margin:0;font-size:11.5px;letter-spacing:.3em;color:#d08c81`)}>CLING SIGNATURE</p>
            <h2 style={cssObj(`margin:clamp(16px,2.2vw,24px) 0 0;font-size:clamp(26px,4.2vw,52px);font-weight:600;line-height:1.18;letter-spacing:-.02em`)}>
              한 번에 네 단계,
              <br />
              피부가 달라지는 순서
            </h2>
            <p style={cssObj(`margin:clamp(18px,2.4vw,26px) 0 0;font-size:clamp(15px,1.9vw,18px);line-height:1.9;color:#4b4b4b`)}>정리하고 · 다듬고 · 끌어올리고 · 채웁니다.</p>
            <div style={cssObj(`margin-top:clamp(24px,3.2vw,36px);display:grid;gap:0`)}>
              {['클렌징', '라라필', '웨이브온 리프팅', '벨벳 콜라겐'].map((label, i, arr) => (
                <div
                  key={label}
                  style={cssObj(
                    `display:flex;flex-wrap:wrap;gap:14px;align-items:baseline;padding:18px 0;border-top:1px solid #e8e4e1${i === arr.length - 1 ? ';border-bottom:1px solid #e8e4e1' : ''}`,
                  )}
                >
                  <span style={cssObj(`font-size:clamp(18px,2.2vw,24px);font-weight:600;color:#d08c81;min-width:2.2em`)}>{i + 1}/</span>
                  <span style={cssObj(`font-size:clamp(15.5px,1.8vw,18px);font-weight:600;min-width:7em`)}>{label}</span>
                </div>
              ))}
            </div>
            <HoverLink
              href="/procedures/cling-signature"
              css="display:inline-block;margin-top:clamp(24px,3.2vw,36px);font-size:15px;padding:16px 34px;background:#331b0f;color:#fff;min-height:44px"
              hoverCss="background:#d08c81"
            >
              클링시그니쳐 자세히
            </HoverLink>
          </Reveal>
        </div>
      </section>

      <section id="wave" style={cssObj(`padding:clamp(120px,16vw,260px) clamp(22px,6vw,48px)`)}>
        <div style={cssObj(`max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:clamp(30px,4.5vw,64px);align-items:center`)}>
          <Reveal style={cssObj(`width:100%;max-width:420px;aspect-ratio:4/5;overflow:hidden;margin:0 auto`)}>
            <video src="/assets/home-wave.mp4" aria-label="웨이브온 리프팅" autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </Reveal>
          <Reveal style={cssObj(`max-width:30em`)}>
            <p style={cssObj(`margin:0;font-size:11.5px;letter-spacing:.3em;color:#d08c81`)}>WAVE ON LIFTING</p>
            <h2 style={cssObj(`margin:clamp(16px,2.2vw,24px) 0 0;font-size:clamp(26px,4.2vw,52px);font-weight:600;line-height:1.18;letter-spacing:-.02em`)}>
              열은 속으로,
              <br />
              자극은 남지 않게
            </h2>
            <p style={cssObj(`margin:clamp(18px,2.4vw,26px) 0 0;font-size:clamp(15px,1.9vw,18px);line-height:1.9;color:#4b4b4b`)}>극초단파로 속부터 끌어올리는 비수술 리프팅입니다.</p>
            <div style={cssObj(`margin-top:clamp(24px,3.2vw,36px);display:grid;gap:0`)}>
              {['딥 클렌징', '웨이브온 롤링', '진정 보습팩'].map((label, i, arr) => (
                <div
                  key={label}
                  style={cssObj(
                    `display:flex;flex-wrap:wrap;gap:14px;align-items:baseline;padding:18px 0;border-top:1px solid #e8e4e1${i === arr.length - 1 ? ';border-bottom:1px solid #e8e4e1' : ''}`,
                  )}
                >
                  <span style={cssObj(`font-size:clamp(18px,2.2vw,24px);font-weight:600;color:#d08c81;min-width:2.2em`)}>{i + 1}/</span>
                  <span style={cssObj(`font-size:clamp(15.5px,1.8vw,18px);font-weight:600;min-width:7em`)}>{label}</span>
                </div>
              ))}
            </div>
            <HoverLink
              href="/procedures/wave-on-lifting"
              css="display:inline-block;margin-top:clamp(24px,3.2vw,36px);font-size:15px;padding:16px 34px;background:#331b0f;color:#fff;min-height:44px"
              hoverCss="background:#d08c81"
            >
              웨이브온 리프팅 자세히
            </HoverLink>
          </Reveal>
        </div>
      </section>

      <section id="acne" style={cssObj(`background:#f7f5f3;padding:clamp(120px,16vw,260px) clamp(22px,6vw,48px)`)}>
        <div style={cssObj(`max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:clamp(30px,4.5vw,64px);align-items:center`)}>
          <Reveal style={cssObj(`width:100%;max-width:420px;aspect-ratio:4/5;overflow:hidden;margin:0 auto`)}>
            <video src="/assets/home-acne.mp4" aria-label="여드름 관리" autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </Reveal>
          <Reveal style={cssObj(`max-width:30em`)}>
            <p style={cssObj(`margin:0;font-size:11.5px;letter-spacing:.3em;color:#d08c81`)}>ACNE CARE</p>
            <h2 style={cssObj(`margin:clamp(16px,2.2vw,24px) 0 0;font-size:clamp(26px,4.2vw,52px);font-weight:600;line-height:1.18;letter-spacing:-.02em`)}>
              세게 잡기 전에,
              <br />
              밸런스부터
            </h2>
            <p style={cssObj(`margin:clamp(18px,2.4vw,26px) 0 0;font-size:clamp(15px,1.9vw,18px);line-height:1.9;color:#4b4b4b`)}>강한 관리보다 무너진 유수분 밸런스를 먼저 잡습니다.</p>
            <div style={cssObj(`margin-top:clamp(24px,3.2vw,36px);display:grid;gap:0`)}>
              {['클렌징 · 딥클렌징', '진정 팩 (1차)', '여드름 기기 관리', '마무리 팩 (2차)'].map((label, i, arr) => (
                <div
                  key={label}
                  style={cssObj(
                    `display:flex;flex-wrap:wrap;gap:14px;align-items:baseline;padding:18px 0;border-top:1px solid #e8e4e1${i === arr.length - 1 ? ';border-bottom:1px solid #e8e4e1' : ''}`,
                  )}
                >
                  <span style={cssObj(`font-size:clamp(18px,2.2vw,24px);font-weight:600;color:#d08c81;min-width:2.2em`)}>{i + 1}/</span>
                  <span style={cssObj(`font-size:clamp(15.5px,1.8vw,18px);font-weight:600;min-width:7em`)}>{label}</span>
                </div>
              ))}
            </div>
            <HoverLink
              href="/procedures/acne-care"
              css="display:inline-block;margin-top:clamp(24px,3.2vw,36px);font-size:15px;padding:16px 34px;background:#331b0f;color:#fff;min-height:44px"
              hoverCss="background:#d08c81"
            >
              여드름 관리 자세히
            </HoverLink>
          </Reveal>
        </div>
      </section>

      <section id="menu" style={cssObj(`padding:clamp(120px,16vw,260px) clamp(22px,6vw,48px)`)}>
        <div style={cssObj(`max-width:1200px;margin:0 auto`)}>
          <Reveal as="p" style={cssObj(`margin:0;font-size:11.5px;letter-spacing:.3em;color:#d08c81`)}>
            OTHER CARE
          </Reveal>
          <Reveal as="h2" style={cssObj(`margin:clamp(16px,2.2vw,24px) 0 clamp(28px,3.6vw,44px);font-size:clamp(22px,3vw,36px);font-weight:500;line-height:1.4`)}>
            그 외 관리
          </Reveal>
          {[
            { href: '/procedures/hydration-care', name: '수분관리', desc: '피부 타입에 맞춰 유수분 밸런스를 채우는 4종 구성' },
            { href: '/procedures/collagen-velvet', name: '콜라겐 벨벳 관리', desc: '엑소좀·PDRN 스킨부스터와 백설관리로 구성된 프리미엄 케어' },
            { href: '/procedures/peeling', name: '필링', desc: '모공·잔주름·피부결 고민에 맞춘 저자극 필링 라인업' },
            { href: '/procedures/revelook', name: '리베룩', desc: '5회·10회 과정으로 이어가는 꾸준한 관리 프로그램' },
          ].map((row, i, arr) => (
            <HoverLink
              key={row.href}
              href={row.href}
              css={`display:flex;flex-wrap:wrap;align-items:baseline;gap:clamp(14px,3vw,36px);padding:clamp(22px,3vw,32px) clamp(4px,1.2vw,16px);border-top:1px solid #e8e4e1${i === arr.length - 1 ? ';border-bottom:1px solid #e8e4e1' : ''}`}
              hoverCss="background:#fff"
            >
              <span style={cssObj(`flex:0 1 10em;font-size:clamp(16px,2vw,21px);font-weight:500`)}>{row.name}</span>
              <span style={cssObj(`flex:1 1 260px;font-size:14.5px;line-height:1.9;color:#4b4b4b`)}>{row.desc}</span>
              <span style={{ color: '#d08c81' }}>→</span>
            </HoverLink>
          ))}
        </div>
      </section>

      <section id="flow" style={cssObj(`background:#f7f5f3;padding:clamp(120px,16vw,260px) clamp(22px,6vw,48px)`)}>
        <div style={cssObj(`max-width:1200px;margin:0 auto`)}>
          <Reveal as="p" style={cssObj(`margin:0;font-size:11.5px;letter-spacing:.3em;color:#d08c81`)}>
            HOW IT GOES
          </Reveal>
          <Reveal as="h2" style={cssObj(`margin:clamp(16px,2.2vw,24px) 0 clamp(30px,4vw,48px);font-size:clamp(22px,3vw,36px);font-weight:500;line-height:1.4`)}>
            방문부터 홈케어까지
          </Reveal>
          <div style={cssObj(`display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr))`)}>
            {[
              ['1/', '1:1 상담', '피부 상태와 생활 습관을 확인하고, 오늘 필요한 관리와 강도를 함께 정합니다.', ''],
              ['2/', '순서대로 관리', '단계를 건너뛰지 않고 진행하며, 중간중간 반응을 확인해 강도를 조절합니다.', 'border-left:1px solid #e8e4e1;border-right:1px solid #e8e4e1'],
              ['3/', '홈케어 안내', '관리 후 며칠간의 보습·자외선 차단과 다음 방문 주기를 정리해 안내드립니다.', ''],
            ].map(([n, title, desc, extra]) => (
              <Reveal key={n} style={cssObj(`padding:clamp(24px,3vw,36px) clamp(20px,2.6vw,40px) 0${extra ? ';' + extra : ''}`)}>
                <p style={cssObj(`margin:0;font-size:clamp(26px,3.4vw,40px);font-weight:600;color:#d08c81;line-height:1`)}>{n}</p>
                <p style={cssObj(`margin:16px 0 0;font-size:clamp(16px,1.9vw,19px);font-weight:600`)}>{title}</p>
                <p style={cssObj(`margin:12px 0 0;font-size:clamp(14.5px,1.7vw,16px);line-height:2.05;color:#4b4b4b`)}>{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" style={cssObj(`padding:clamp(120px,16vw,260px) clamp(22px,6vw,48px)`)}>
        <div style={cssObj(`max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:clamp(34px,5vw,72px);align-items:start`)}>
          <Reveal>
            <p style={cssObj(`margin:0;font-size:11.5px;letter-spacing:.3em;color:#d08c81`)}>VISIT</p>
            <h2 style={cssObj(`margin:clamp(16px,2.2vw,24px) 0 clamp(24px,3vw,36px);font-size:clamp(22px,3vw,36px);font-weight:500;line-height:1.4`)}>오시는길</h2>
            <dl style={{ margin: 0 }}>
              <div style={cssObj(`display:flex;gap:18px;padding:15px 0;border-top:1px solid #e8e4e1`)}>
                <dt style={cssObj(`margin:0;width:5.5em;flex:none;font-size:13px;color:#8a7f78`)}>주소</dt>
                <dd style={cssObj(`margin:0;font-size:15px;line-height:1.8`)}>
                  서울 성동구 왕십리로 369
                  <br />
                  동인레반트오피스텔 1층
                </dd>
              </div>
              <div style={cssObj(`display:flex;gap:18px;padding:15px 0;border-top:1px solid #e8e4e1`)}>
                <dt style={cssObj(`margin:0;width:5.5em;flex:none;font-size:13px;color:#8a7f78`)}>영업시간</dt>
                <dd style={cssObj(`margin:0;font-size:15px;line-height:1.9`)}>
                  월~금 10:00–20:00
                  <br />토 10:00–16:00
                  <br />
                  <span style={{ color: '#8a7f78' }}>일요일 정기휴무</span>
                </dd>
              </div>
              <div style={cssObj(`display:flex;gap:18px;padding:15px 0;border-top:1px solid #e8e4e1;border-bottom:1px solid #e8e4e1`)}>
                <dt style={cssObj(`margin:0;width:5.5em;flex:none;font-size:13px;color:#8a7f78`)}>전화</dt>
                <dd style={cssObj(`margin:0;font-size:15px`)}>
                  <a href="tel:0507-1386-2479" style={{ borderBottom: '1px solid #e8e4e1' }}>
                    0507-1386-2479
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal
            as="a"
            href="https://map.naver.com/"
            target="_blank"
            rel="noopener"
            style={cssObj(`display:flex;width:100%;aspect-ratio:4/3;background:#ece8e4;align-items:center;justify-content:center`)}
          >
            <span style={cssObj(`font-family:ui-monospace,Menlo,monospace;font-size:11px;letter-spacing:.06em;color:#a09790;text-align:center;line-height:1.7`)}>
              MAP · 네이버 지도 임베드
              <br />
              왕십리로 369
            </span>
          </Reveal>
        </div>
      </section>

      <section id="contact" style={cssObj(`background:#2d1c14;color:#f6f1ee;padding:clamp(110px,15vw,240px) clamp(22px,6vw,48px);text-align:center`)}>
        <Reveal as="h2" style={cssObj(`margin:0;font-size:clamp(24px,3.6vw,42px);font-weight:400;line-height:1.45`)}>
          지금 피부 상태부터
          <br />
          편하게 물어보세요.
        </Reveal>
        <Reveal style={cssObj(`display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:clamp(28px,3.6vw,42px)`)}>
          <HoverLink href="/reservation" css="font-size:15px;padding:17px 34px;background:#d08c81;color:#fff;min-height:44px" hoverCss="background:#f6f1ee;color:#2d1c14">
            예약 문의하기
          </HoverLink>
          <Link
            href="tel:0507-1386-2479"
            style={cssObj(`font-size:15px;padding:17px 34px;border:1px solid rgba(246,241,238,.4);color:#f6f1ee;min-height:44px;display:inline-flex;align-items:center;justify-content:center`)}
          >
            0507-1386-2479
          </Link>
        </Reveal>
      </section>
    </div>
  )
}
