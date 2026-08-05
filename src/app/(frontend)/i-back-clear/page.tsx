import Link from 'next/link'
import { cssObj } from '@/lib/css'
import { Reveal } from '@/components/site/Reveal'
import { Hoverable } from '@/components/site/Hoverable'
import { HoverLink } from '@/components/site/HoverLink'
import { HeroCarousel } from '@/components/site/HeroCarousel'

const CF = 'https://d8j0ntlcm91z4.cloudfront.net/user_3HOgJpo09zCNKnNhwzuIRvuFdRO'

export const metadata = {
  title: '아이백클리어 — 완전 비절개 눈밑지방재배치 | 아이백의원',
}

export default function IBackClearPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <section
        id="top"
        style={cssObj(`padding:calc(85px + clamp(60px,10vw,120px)) clamp(22px,6vw,80px) clamp(50px,7vw,90px);text-align:center`)}
      >
        <Reveal as="p" style={cssObj(`margin:0 0 clamp(20px,3vw,30px);font-family:Poppins,sans-serif;font-size:11.5px;letter-spacing:.3em;color:#aa9371`)}>
          I-BACK CLEAR&#8482; · SIGNATURE
        </Reveal>
        <Reveal as="h1" style={cssObj(`margin:0;font-family:Poppins,sans-serif;font-weight:200;font-size:clamp(32px,5.6vw,64px);line-height:1.05;letter-spacing:-.015em`)}>
          I-back <span style={{ fontWeight: 500 }}>Clear</span>
        </Reveal>
        <Reveal as="p" style={cssObj(`margin:clamp(18px,2.6vw,28px) 0 0;font-size:clamp(18px,2.4vw,28px);font-weight:300`)}>
          완전 비절개, <strong style={{ fontWeight: 700 }}>눈밑지방재배치</strong>
        </Reveal>
        <Reveal as="p" style={cssObj(`margin:clamp(26px,3.6vw,38px) auto 0;max-width:36em;font-size:clamp(14px,1.6vw,16px);line-height:2;color:#7a6f66`)}>
          많은 분들이 비절개라는 단어에 먼저 관심을 가지시지만,
          <br />
          사실 이 시술의 핵심은 절개를 하지 않는다는 점이 아닙니다.
          <br />
          얼마나 정확하게 지방층에 접근하느냐가 더 중요합니다.
        </Reveal>
        <Reveal style={cssObj(`display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:clamp(30px,4vw,44px)`)}>
          <HoverLink
            href="/i-back-clear#contact"
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
          <Link href="/i-back-clear#clear-fat" style={cssObj(`font-size:14.5px;padding:14px 26px;border-bottom:1px solid #443a35;min-height:44px;display:flex;align-items:center`)}>
            눈밑지방재배치
          </Link>
          <HoverLink
            href="/dark-circle"
            css={`font-size:14.5px;padding:14px 26px;border-bottom:1px solid #efe9de;color:#8a7f72;min-height:44px;display:flex;align-items:center`}
            hoverCss={`color:#aa9371;border-color:#aa9371`}
          >
            다크서클
          </HoverLink>
        </Reveal>
      </section>

      <HeroCarousel
        height="clamp(260px,42vw,560px)"
        slides={[
          { src: `${CF}/hf_20260804_095145_6f85f4c6-7e1f-4c6d-b65e-b2df3178e83e.png`, alt: '눈밑 지방 형태 01' },
          { src: `${CF}/hf_20260804_095145_f5e4e719-2c48-46d8-a133-07513b16f5eb.png`, alt: '눈밑 지방 형태 02' },
          { src: `${CF}/hf_20260804_095144_4cc64be5-a27c-4bb0-8e35-78f4f0c694b3.png`, alt: '눈밑 지방 형태 03' },
          { src: `${CF}/hf_20260804_095144_37f8a63b-5f21-4714-838a-c4821c230f81.png`, alt: '눈밑 지방 형태 04' },
          { src: `${CF}/hf_20260804_095144_a8cae61d-30b1-4713-be14-57a05d4777f5.png`, alt: '눈밑 지방 형태 05' },
        ]}
      />

      <section id="clear-fat" style={cssObj(`padding:clamp(60px,9vw,120px) clamp(22px,6vw,80px);text-align:center`)}>
        <Reveal style={cssObj(`max-width:1180px;margin:0 auto;padding-top:clamp(40px,6vw,70px);border-top:1px solid #efe9de`)}>
          <p style={cssObj(`margin:0;font-family:Poppins,sans-serif;font-size:clamp(72px,14vw,180px);font-weight:200;line-height:.9;letter-spacing:-.03em`)}>
            1
          </p>
          <p style={cssObj(`margin:clamp(16px,2.2vw,26px) 0 0;font-size:clamp(17px,2.2vw,24px);font-weight:300`)}>눈 밑, 하나에만 집중합니다</p>
        </Reveal>
      </section>

      <section id="why" style={cssObj(`background:#f8f5ef;padding:clamp(80px,12vw,150px) clamp(22px,6vw,80px);text-align:center`)}>
        <Reveal as="p" style={cssObj(`margin:0 0 clamp(20px,3vw,30px);font-family:Poppins,sans-serif;font-size:11.5px;letter-spacing:.3em;color:#aa9371`)}>
          WHY THE UNDER-EYE
        </Reveal>
        <Reveal as="h2" style={cssObj(`margin:0;font-size:clamp(24px,3.6vw,40px);font-weight:400;line-height:1.45`)}>
          눈 밑 하나가
          <br />
          인상 전체를 결정합니다
        </Reveal>
        <Reveal style={cssObj(`max-width:30em;margin:clamp(34px,5vw,56px) auto 0;font-size:clamp(14.5px,1.7vw,16.5px);line-height:2.05;color:#6b6058`)}>
          <p style={{ margin: 0 }}>
            그늘진 눈 밑, 도드라진 지방 한 줄. 작은 변화가 표정 전체의 인상을 바꿉니다. 눈 밑이 불룩해 보이는 이유는 대부분 눈 밑 지방이
            앞으로 돌출되기 때문이며, 피부색이나 컨디션의 문제가 아닌 경우가 많습니다. 그래서 색조 화장이나 관리로는 한계가 있고, 정확한
            원인을 아는 것이 먼저입니다.
          </p>
        </Reveal>
      </section>

      <section style={cssObj(`padding:clamp(80px,12vw,150px) clamp(22px,6vw,80px);text-align:center;background:#fff`)}>
        <Reveal as="p" style={cssObj(`margin:0 0 clamp(20px,3vw,30px);font-family:Poppins,sans-serif;font-size:11.5px;letter-spacing:.3em;color:#aa9371`)}>
          THE DIFFERENCE
        </Reveal>
        <Reveal as="h2" style={cssObj(`margin:0;font-size:clamp(24px,3.6vw,40px);font-weight:400;line-height:1.45`)}>
          지방층에 직접 도달하는
          <br />
          아이백의원의 방식
        </Reveal>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Reveal
          as="img"
          src="/the-difference-diagram.svg"
          alt="눈밑지방 시술 방식 비교 단면도 — 기존 캐뉼라 터널링 vs 아이백의원 특수절연침 관통"
          style={cssObj(`display:block;width:100%;max-width:980px;height:auto;margin:clamp(40px,5.5vw,68px) auto 0`)}
        />
        <div
          style={cssObj(
            `max-width:1080px;margin:clamp(44px,6vw,72px) auto 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:clamp(30px,4vw,64px);text-align:left`,
          )}
        >
          <Reveal style={cssObj(`padding-top:clamp(22px,3vw,30px);border-top:1px solid #efe9de`)}>
            <p style={cssObj(`margin:0;font-size:13px;letter-spacing:.06em;color:#a1968a`)}>기존 방식 · 캐뉼라 터널링</p>
            <p style={cssObj(`margin:14px 0 0;font-size:clamp(16px,2vw,19px);font-weight:400;line-height:1.7;color:#8a7f72`)}>
              조직 사이에 공간을 만들고 탄력을 주는 간접적인 방식
            </p>
            <ul style={cssObj(`margin:18px 0 0;padding:0;list-style:none;display:grid;gap:11px`)}>
              {[
                '지방층에 정확히 도달하지 않아 지방층을 제거하기 어렵습니다.',
                '비절개 레이저의 잘못된 시술은 대부분 지방층을 직접 녹이지 못해서입니다.',
                '시술자의 숙련도와 시술 부위에 대한 이해도가 낮을 경우 이렇게 시술합니다.',
              ].map((t) => (
                <li key={t} style={cssObj(`display:flex;gap:12px;font-size:14.5px;line-height:1.9;color:#a1968a`)}>
                  <span style={cssObj(`flex:none;width:4px;height:4px;margin-top:11px;border-radius:50%;background:#cfc3b2`)} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal style={cssObj(`padding-top:clamp(22px,3vw,30px);border-top:1px solid #443a35`)}>
            <p style={cssObj(`margin:0;font-size:13px;letter-spacing:.06em;color:#aa9371`)}>아이백의원 · 특수절연침 관통(이노플러스)</p>
            <p style={cssObj(`margin:14px 0 0;font-size:clamp(16px,2vw,19px);font-weight:500;line-height:1.7`)}>특수 절연침으로 지방층을 직접 관통</p>
            <ul style={cssObj(`margin:18px 0 0;padding:0;list-style:none;display:grid;gap:11px`)}>
              {[
                '단극성 고주파 장비(이노플러스)로 지방을 선택적으로 융해하고 제거합니다.',
                '지방을 제거하려면 시술 부위에 정확히 들어갈 수 있어야 합니다.',
                '시술자의 숙련도와 이해도가 높아야만 가능합니다.',
              ].map((t) => (
                <li key={t} style={cssObj(`display:flex;gap:12px;font-size:14.5px;line-height:1.9;color:#443a35`)}>
                  <span style={cssObj(`flex:none;width:4px;height:4px;margin-top:11px;border-radius:50%;background:#aa9371`)} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p style={cssObj(`margin:20px 0 0;padding-top:16px;border-top:1px solid #efe9de;font-size:12.5px;line-height:1.9;color:#8a7f72`)}>
              갈더마코리아 본사 인증 레스틸렌 아이라이트 마스터
              <br />
              다올메드사 인증 이노플러스 자문위원
            </p>
          </Reveal>
        </div>
      </section>

      <section style={cssObj(`padding:clamp(80px,12vw,150px) 0;text-align:center`)}>
        <div style={cssObj(`padding:0 clamp(22px,6vw,80px)`)}>
          <Reveal as="p" style={cssObj(`margin:0 0 clamp(20px,3vw,30px);font-family:Poppins,sans-serif;font-size:11.5px;letter-spacing:.3em;color:#aa9371`)}>
            THE PROCESS
          </Reveal>
          <Reveal as="h2" style={cssObj(`margin:0;font-size:clamp(24px,3.6vw,40px);font-weight:400;line-height:1.45`)}>
            다섯 단계의 시술 과정
          </Reveal>
        </div>
        <div style={cssObj(`max-width:1080px;margin:clamp(40px,5vw,64px) auto 0;padding:0 clamp(22px,6vw,80px);text-align:left`)}>
          {[
            ['01', '마취 및 사전 처치', '주사를 통한 마취와 함께 지방층을 유화하고 모세혈관을 수축시켜, 멍과 붓기를 최소화합니다.', false],
            ['02', '특수 절연침 관통', '특수 제작된 절연침을 지방층에 직접 관통시켜, 정밀하게 목표 지점에 도달합니다.', false],
            ['03', '고주파 제거', '단극성 고주파 에너지로 돌출된 지방을 선택적으로 융해·제거합니다.', false],
            ['04', '볼륨·주름 보정', '줄어든 지방만으로 부족한 부위는 필러·콜라겐 주사 또는 리프팅 실로 볼륨을 더해, 눈 밑과 앞볼의 균형을 맞춥니다.', false],
            ['05', '깨끗하고 밝은 인상 완성', '평평해진 눈 밑으로 그늘이 사라지고, 한층 맑고 밝아진 인상이 완성됩니다.', true],
          ].map(([n, title, desc, last]) => (
            <Reveal
              key={n as string}
              style={cssObj(
                `display:flex;flex-wrap:wrap;gap:clamp(14px,3vw,44px);align-items:baseline;padding:clamp(24px,3.2vw,36px) 0;border-top:1px solid #efe9de${last ? ';border-bottom:1px solid #efe9de' : ''}`,
              )}
            >
              <span style={cssObj(`font-family:Poppins,sans-serif;font-size:14px;letter-spacing:.1em;color:#c4b393;min-width:2.4em`)}>{n}</span>
              <span style={cssObj(`flex:0 1 12em;font-size:clamp(16px,1.9vw,19px);font-weight:500`)}>{title}</span>
              <span style={cssObj(`flex:1 1 300px;font-size:14.5px;line-height:2;color:#6b6058`)}>{desc}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="fit" style={cssObj(`background:#f8f5ef;padding:clamp(80px,12vw,150px) clamp(22px,6vw,80px)`)}>
        <div
          style={cssObj(
            `max-width:1080px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:clamp(36px,5vw,72px);align-items:start`,
          )}
        >
          <Reveal id="innoplus" style={cssObj(`padding-top:clamp(22px,3vw,32px);border-top:1px solid #e5ded1`)}>
            <p style={cssObj(`margin:0;font-family:Poppins,sans-serif;font-size:11.5px;letter-spacing:.3em;color:#aa9371`)}>INNOPLUS</p>
            <h2 style={cssObj(`margin:clamp(16px,2.2vw,24px) 0 0;font-size:clamp(21px,2.8vw,30px);font-weight:400;line-height:1.5`)}>이노플러스란</h2>
            <ul style={cssObj(`margin:clamp(22px,3vw,30px) 0 0;padding:0;list-style:none;display:grid;gap:13px`)}>
              {[
                '특수 절연침으로 눈 밑 지방층에 직접 접근하는 단극성 고주파 장비입니다.',
                '돌출된 지방만 선택적으로 융해해 절개 없이 줄입니다.',
                '눈 밑은 피부가 얇고 혈관이 많아, 정확한 접근이 결과를 좌우합니다.',
                '부족한 부위는 필러·스킨부스터로 볼륨을 더해 앞볼과 균형을 맞춥니다.',
              ].map((t, i) => (
                <li key={t} style={cssObj(`display:flex;gap:12px;font-size:clamp(14.5px,1.7vw,16px);line-height:1.95;color:${i === 0 ? '#443a35' : '#6b6058'}`)}>
                  <span style={cssObj(`flex:none;width:4px;height:4px;margin-top:11px;border-radius:50%;background:#aa9371`)} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p style={cssObj(`margin:20px 0 0;font-size:12.5px;line-height:1.9;color:#a1968a`)}>
              ※ 붓기·멍은 개인차가 있으며 완전히 없을 수는 없습니다. 결과는 지방량·피부 상태에 따라 차이가 있을 수 있습니다.
            </p>
          </Reveal>
          <Reveal style={cssObj(`padding-top:clamp(22px,3vw,32px);border-top:1px solid #e5ded1`)}>
            <p style={cssObj(`margin:0;font-family:Poppins,sans-serif;font-size:11.5px;letter-spacing:.3em;color:#aa9371`)}>WHO IT FITS</p>
            <h2 style={cssObj(`margin:clamp(16px,2.2vw,24px) 0 0;font-size:clamp(21px,2.8vw,30px);font-weight:400;line-height:1.5`)}>누구에게 더 잘 맞을까요</h2>
            <ul style={cssObj(`margin:clamp(22px,3vw,30px) 0 0;padding:0;list-style:none;display:grid;gap:13px`)}>
              {[
                '눈 밑 지방이 도드라져 보이지만 피부 탄력은 아직 남아 있는 경우',
                '절개나 긴 회복기간 없이 눈 밑 그늘을 줄이고 싶은 경우',
                '지방의 양·위치와 피부 상태는 사람마다 달라, 방법보다 원인 확인이 먼저입니다.',
                '가능한 범위와 한계까지 함께 안내드린 뒤 결정하실 수 있게 합니다.',
              ].map((t, i) => (
                <li key={t} style={cssObj(`display:flex;gap:12px;font-size:clamp(14.5px,1.7vw,16px);line-height:1.95;color:${i === 0 ? '#443a35' : '#6b6058'}`)}>
                  <span style={cssObj(`flex:none;width:4px;height:4px;margin-top:11px;border-radius:50%;background:#aa9371`)} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p style={cssObj(`margin:20px 0 0;font-size:12.5px;line-height:1.9;color:#a1968a`)}>
              ※ 충분한 상담과 진단을 바탕으로 개인에게 적합한 치료 방향을 안내합니다.
            </p>
          </Reveal>
        </div>
      </section>

      <Reveal style={cssObj(`width:100%;height:clamp(240px,38vw,520px);overflow:hidden`)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${CF}/hf_20260804_115010_5a05c673-a942-4636-a7cf-f850a6d54dbc.png`}
          alt="대표원장이 직접 시술하는 모습"
          style={cssObj(`width:100%;height:100%;object-fit:cover;display:block`)}
        />
      </Reveal>

      <section style={cssObj(`padding:clamp(80px,12vw,150px) clamp(22px,6vw,80px)`)}>
        <div
          style={cssObj(
            `max-width:1080px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:clamp(36px,5vw,72px);align-items:start`,
          )}
        >
          <Reveal>
            <p style={cssObj(`margin:0;font-family:Poppins,sans-serif;font-size:11.5px;letter-spacing:.3em;color:#aa9371`)}>TREATMENT INFO</p>
            <h2 style={cssObj(`margin:clamp(18px,2.4vw,26px) 0 0;font-size:clamp(22px,3vw,34px);font-weight:400;line-height:1.5`)}>시술정보</h2>
            <p style={cssObj(`margin:clamp(20px,2.6vw,28px) 0 0;font-size:14.5px;line-height:2;color:#6b6058`)}>
              모든 시술은 대표원장이 직접 진행합니다.
              <br />
              개인의 상태에 따라 결과는 차이가 있을 수 있습니다.
            </p>
          </Reveal>
          <Reveal as="dl" style={cssObj(`margin:0`)}>
            {[
              ['시술 방식', '완전 비절개, 이노플러스(단극성 고주파)'],
              ['시술 시간', '약 10~15분'],
              ['마취', '부분마취'],
              ['일상복귀', '운전, 세안, 운동 가능'],
            ].map(([dt, dd]) => (
              <div key={dt} style={cssObj(`display:flex;justify-content:space-between;gap:18px;padding:15px 0;border-top:1px solid #e5ded1;font-size:15px`)}>
                <dt style={cssObj(`margin:0;color:#8a7f72`)}>{dt}</dt>
                <dd style={cssObj(`margin:0;text-align:right`)}>{dd}</dd>
              </div>
            ))}
            <div style={cssObj(`display:flex;justify-content:space-between;gap:18px;padding:15px 0;border-top:1px solid #e5ded1;border-bottom:1px solid #e5ded1;font-size:15px`)}>
              <dt style={cssObj(`margin:0;color:#8a7f72`)}>효과</dt>
              <dd style={cssObj(`margin:0;text-align:right`)}>즉각적</dd>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={cssObj(`background:#f8f5ef;padding:clamp(80px,12vw,150px) clamp(22px,6vw,80px)`)}>
        <div style={cssObj(`max-width:1080px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:clamp(34px,4.5vw,72px)`)}>
          <Reveal style={cssObj(`padding-top:clamp(22px,3vw,32px);border-top:1px solid #efe9de`)}>
            <p style={cssObj(`margin:0;font-family:Poppins,sans-serif;font-size:12px;letter-spacing:.22em;color:#c4b393`)}>RECOVERY</p>
            <p style={cssObj(`margin:16px 0 0;font-size:clamp(19px,2.4vw,26px);font-weight:300;line-height:1.6`)}>멍·붓기를 줄이는 시술</p>
            <p style={cssObj(`margin:10px 0 0;font-family:Poppins,sans-serif;font-size:14px;font-weight:300;color:#aa9371`)}>Less Bruising, Less Downtime</p>
            <p style={cssObj(`margin:20px 0 0;font-size:14.5px;line-height:2;color:#6b6058`)}>시술 전 유화 처치와 모세혈관 수축 사전 단계로, 회복 부담을 줄입니다.</p>
            <p style={cssObj(`margin:14px 0 0;font-size:12.5px;line-height:1.9;color:#a1968a`)}>
              ※ 붓기와 멍이 완전히 없을 수는 없으며, 정도는 개인의 상태에 따라 차이가 있습니다.
            </p>
          </Reveal>
          <Reveal style={cssObj(`padding-top:clamp(22px,3vw,32px);border-top:1px solid #efe9de`)}>
            <p style={cssObj(`margin:0;font-family:Poppins,sans-serif;font-size:12px;letter-spacing:.22em;color:#c4b393`)}>IMMEDIATE</p>
            <p style={cssObj(`margin:16px 0 0;font-size:clamp(19px,2.4vw,26px);font-weight:300;line-height:1.6`)}>시술 직후 확인하는 변화</p>
            <p style={cssObj(`margin:10px 0 0;font-family:Poppins,sans-serif;font-size:14px;font-weight:300;color:#aa9371`)}>See the Change Right Away</p>
            <p style={cssObj(`margin:20px 0 0;font-size:14.5px;line-height:2;color:#6b6058`)}>
              거울로 직접 변화를 확인하실 수 있는 경우가 많습니다. 기다림 없는 결과, 자연스러운 일상 복귀.
            </p>
            <p style={cssObj(`margin:14px 0 0;font-size:12.5px;color:#a1968a`)}>※ 개인의 상태에 따라 차이가 있을 수 있습니다.</p>
          </Reveal>
        </div>
      </section>

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
