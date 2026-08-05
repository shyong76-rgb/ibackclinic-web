import Link from 'next/link'
import { cssObj } from '@/lib/css'
import { Reveal } from '@/components/site/Reveal'
import { Hoverable } from '@/components/site/Hoverable'
import { HoverLink } from '@/components/site/HoverLink'
import { HeroCarousel } from '@/components/site/HeroCarousel'

const CF = 'https://d8j0ntlcm91z4.cloudfront.net/user_3HOgJpo09zCNKnNhwzuIRvuFdRO'

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <section
        id="top"
        style={cssObj(
          `padding:calc(85px + clamp(70px,12vw,150px)) clamp(22px,6vw,80px) clamp(60px,8vw,110px);text-align:center`,
        )}
      >
        <Reveal
          as="p"
          style={cssObj(`font-family:Poppins,sans-serif;font-size:12px;letter-spacing:.34em;color:#aa9371;margin:0 0 clamp(26px,4vw,44px)`)}
        >
          I-BACK CLINIC · GANGNAM
        </Reveal>
        <Reveal
          as="h1"
          style={cssObj(`margin:0;font-family:Poppins,sans-serif;font-weight:200;font-size:clamp(38px,7.4vw,86px);line-height:1.05;letter-spacing:-.015em`)}
        >
          Back to <span style={{ fontWeight: 500 }}>White.</span>
        </Reveal>
        <Reveal as="p" style={cssObj(`margin:clamp(20px,3vw,30px) 0 0;font-size:clamp(19px,2.5vw,30px);font-weight:300;line-height:1.5`)}>
          눈밑 그늘, <strong style={{ fontWeight: 700 }}>가장 맑았던 그날로.</strong>
        </Reveal>
        <Reveal
          as="p"
          style={cssObj(`margin:clamp(28px,4vw,40px) auto 0;max-width:34em;font-size:clamp(14px,1.6vw,16px);line-height:2;color:#7a6f66`)}
        >
          아이백의원만의 특별한 시술
          <br />
          완전 비절개 눈밑지방재배치
          <br />
          대표원장이 처음부터 끝까지 직접 진료하고 시술합니다.
        </Reveal>
        <Reveal
          style={cssObj(`display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:clamp(32px,4vw,46px)`)}
        >
          <HoverLink
            href="/i-back-clear"
            css={`font-size:15px;padding:17px 34px;background:#443a35;color:#fff;min-height:44px`}
            hoverCss={`background:#aa9371;color:#fff`}
          >
            아이백클리어 자세히 →
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
      </section>

      <HeroCarousel
        height="clamp(220px,34vw,460px)"
        slides={[
          { src: `${CF}/hf_20260804_095145_6f85f4c6-7e1f-4c6d-b65e-b2df3178e83e.png`, alt: '눈밑 지방 형태 01' },
          { src: `${CF}/hf_20260804_095145_f5e4e719-2c48-46d8-a133-07513b16f5eb.png`, alt: '눈밑 지방 형태 02' },
          { src: `${CF}/hf_20260804_095144_4cc64be5-a27c-4bb0-8e35-78f4f0c694b3.png`, alt: '눈밑 지방 형태 03' },
          { src: `${CF}/hf_20260804_095144_37f8a63b-5f21-4714-838a-c4821c230f81.png`, alt: '눈밑 지방 형태 04' },
          { src: `${CF}/hf_20260804_095144_a8cae61d-30b1-4713-be14-57a05d4777f5.png`, alt: '눈밑 지방 형태 05' },
        ]}
      />

      <section id="about" style={cssObj(`padding:clamp(80px,12vw,160px) clamp(22px,6vw,80px);text-align:center`)}>
        <Reveal as="p" style={cssObj(`font-family:Poppins,sans-serif;font-size:11.5px;letter-spacing:.3em;color:#aa9371;margin:0 0 clamp(22px,3vw,34px)`)}>
          OUR PHILOSOPHY
        </Reveal>
        <Reveal as="h2" style={cssObj(`margin:0;font-size:clamp(28px,4.4vw,52px);font-weight:400;line-height:1.3;letter-spacing:-.01em`)}>
          눈 밑에
          <br />
          집중합니다.
        </Reveal>
        <Reveal
          style={cssObj(`width:1px;height:clamp(40px,6vw,72px);margin:clamp(34px,4vw,48px) auto 0;background:linear-gradient(#e0d7c6,rgba(224,215,198,0))`)}
        />

        <div
          style={cssObj(
            `max-width:1180px;margin:clamp(28px,4vw,44px) auto 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:0;text-align:left`,
          )}
        >
          <Reveal style={cssObj(`padding:clamp(24px,3vw,36px) clamp(20px,2.6vw,40px)`)}>
            <p style={cssObj(`margin:0;font-family:Poppins,sans-serif;font-size:12px;letter-spacing:.24em;color:#c4b393`)}>01</p>
            <p style={cssObj(`margin:16px 0 0;font-size:clamp(14.5px,1.7vw,16.5px);line-height:2.05;color:#6b6058`)}>
              눈 밑 하나가 인상 전체를 결정합니다. 그늘진 눈 밑, 처진 피부, 도드라진 지방 한 줄. 작은 변화는 표정 전체의 인상을 바꿉니다.
            </p>
          </Reveal>
          <Reveal style={cssObj(`padding:clamp(24px,3vw,36px) clamp(20px,2.6vw,40px);border-left:1px solid #efe9de;border-right:1px solid #efe9de`)}>
            <p style={cssObj(`margin:0;font-family:Poppins,sans-serif;font-size:12px;letter-spacing:.24em;color:#c4b393`)}>02</p>
            <p style={cssObj(`margin:16px 0 0;font-size:clamp(14.5px,1.7vw,16.5px);line-height:2.05;color:#6b6058`)}>
              아이백의원은 그 한 곳에 집중합니다. 여러 시술을 나열하지 않고, 가장 잘하는 것을 가장 깊이 합니다.
            </p>
          </Reveal>
          <Reveal style={cssObj(`padding:clamp(24px,3vw,36px) clamp(20px,2.6vw,40px)`)}>
            <p style={cssObj(`margin:0;font-family:Poppins,sans-serif;font-size:12px;letter-spacing:.24em;color:#c4b393`)}>03</p>
            <p style={cssObj(`margin:16px 0 0;font-size:clamp(14.5px,1.7vw,16.5px);line-height:2.05;color:#6b6058`)}>
              많은 환자를 빠르게 보는 대신, 한 분 한 분의 눈 밑을 정확히 봅니다.
            </p>
          </Reveal>
        </div>

        <Reveal
          as="p"
          style={cssObj(
            `max-width:24em;margin:clamp(44px,6vw,72px) auto 0;padding-top:clamp(34px,4.5vw,52px);border-top:1px solid #efe9de;font-size:clamp(19px,2.6vw,30px);font-weight:300;line-height:1.65;letter-spacing:-.01em`,
          )}
        >
          모든 상담과 시술은
          <br />
          <strong style={{ fontWeight: 600 }}>대표원장이 직접</strong> 진행합니다.
        </Reveal>
      </section>

      <section id="signature" style={cssObj(`background:#f8f5ef;padding:clamp(80px,12vw,160px) clamp(22px,6vw,80px);text-align:center`)}>
        <Reveal as="p" style={cssObj(`font-family:Poppins,sans-serif;font-size:11.5px;letter-spacing:.3em;color:#aa9371;margin:0 0 clamp(20px,3vw,30px)`)}>
          THE I-BACK SIGNATURE
        </Reveal>
        <Reveal as="h2" style={cssObj(`margin:0;font-family:Poppins,sans-serif;font-weight:200;font-size:clamp(32px,5.6vw,64px);line-height:1.1`)}>
          Eye <span style={{ fontWeight: 500 }}>Series</span>
        </Reveal>
        <Reveal as="p" style={cssObj(`margin:clamp(20px,3vw,28px) 0 0;font-size:clamp(14.5px,1.7vw,17px);line-height:1.95;color:#6b6058`)}>
          눈 밑에 집중한 두 가지 시그니처
          <br />
          절개 없이, 흉터 없이, 일상에 가깝게
        </Reveal>

        <div
          style={cssObj(
            `max-width:1180px;margin:clamp(48px,7vw,84px) auto 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:clamp(40px,6vw,80px);text-align:left`,
          )}
        >
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${CF}/hf_20260804_095145_f5e4e719-2c48-46d8-a133-07513b16f5eb.png`}
              alt="눈밑 지방 돌출 클로즈업"
              style={cssObj(`width:100%;aspect-ratio:4/3;object-fit:cover;display:block`)}
            />
            <p style={cssObj(`margin:26px 0 0;font-family:Poppins,sans-serif;font-size:clamp(24px,3vw,34px);font-weight:300`)}>
              I-back Clear<span style={{ fontSize: '.5em', verticalAlign: 'super' }}>™</span>
            </p>
            <p style={cssObj(`margin:8px 0 0;font-size:17px;font-weight:500`)}>눈밑지방재배치</p>
            <p style={cssObj(`margin:8px 0 22px;font-size:14px;color:#8a7f72`)}>완전 비절개 · 흉터 없이 · 당일 일상복귀</p>
            <dl style={cssObj(`margin:0;display:grid;gap:0`)}>
              {[
                ['시술 방식', '완전 비절개 레이저'],
                ['시술 시간', '약 10~15분'],
                ['마취', '부분마취'],
                ['일상복귀', '운전, 세안, 운동 가능'],
              ].map(([dt, dd]) => (
                <div
                  key={dt}
                  style={cssObj(`display:flex;justify-content:space-between;gap:18px;padding:14px 0;border-top:1px solid rgba(68,58,53,.14);font-size:14.5px`)}
                >
                  <dt style={cssObj(`color:#8a7f72;margin:0`)}>{dt}</dt>
                  <dd style={cssObj(`margin:0;text-align:right`)}>{dd}</dd>
                </div>
              ))}
              <div
                style={cssObj(
                  `display:flex;justify-content:space-between;gap:18px;padding:14px 0;border-top:1px solid rgba(68,58,53,.14);border-bottom:1px solid rgba(68,58,53,.14);font-size:14.5px`,
                )}
              >
                <dt style={cssObj(`color:#8a7f72;margin:0`)}>효과</dt>
                <dd style={cssObj(`margin:0;text-align:right`)}>효과 즉각 확인 가능</dd>
              </div>
            </dl>
            <Link
              href="/i-back-clear#clear-fat"
              style={cssObj(`display:inline-block;margin-top:24px;font-size:14.5px;letter-spacing:.02em;border-bottom:1px solid #aa9371;padding-bottom:6px;color:#8a7654`)}
            >
              아이백클리어 자세히 보기 →
            </Link>
          </Reveal>

          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${CF}/hf_20260804_095144_a8cae61d-30b1-4713-be14-57a05d4777f5.png`}
              alt="눈밑 다크서클 클로즈업"
              style={cssObj(`width:100%;aspect-ratio:4/3;object-fit:cover;display:block`)}
            />
            <p style={cssObj(`margin:26px 0 0;font-family:Poppins,sans-serif;font-size:clamp(24px,3vw,34px);font-weight:300`)}>
              Dark Circle <span style={{ fontWeight: 500 }}>Care</span>
            </p>
            <p style={cssObj(`margin:8px 0 0;font-size:17px;font-weight:500`)}>다크서클</p>
            <p style={cssObj(`margin:8px 0 22px;font-size:14px;color:#8a7f72`)}>타입별 정밀 진단 · 맞춤 솔루션</p>
            <dl style={cssObj(`margin:0;display:grid;gap:0`)}>
              {[
                ['Type 01', '지방형'],
                ['Type 02', '혈관형'],
                ['Type 03', '색소형'],
                ['Type 04', '혼합형'],
              ].map(([dt, dd]) => (
                <div
                  key={dt}
                  style={cssObj(`display:flex;justify-content:space-between;gap:18px;padding:14px 0;border-top:1px solid rgba(68,58,53,.14);font-size:14.5px`)}
                >
                  <dt style={cssObj(`color:#8a7f72;margin:0`)}>{dt}</dt>
                  <dd style={cssObj(`margin:0;text-align:right`)}>{dd}</dd>
                </div>
              ))}
              <div
                style={cssObj(
                  `display:flex;justify-content:space-between;gap:18px;padding:14px 0;border-top:1px solid rgba(68,58,53,.14);border-bottom:1px solid rgba(68,58,53,.14);font-size:14.5px`,
                )}
              >
                <dt style={cssObj(`color:#8a7f72;margin:0`)}>Approach</dt>
                <dd style={cssObj(`margin:0;text-align:right`)}>개인별 맞춤 시술</dd>
              </div>
            </dl>
            <Link
              href="/dark-circle"
              style={cssObj(`display:inline-block;margin-top:24px;font-size:14.5px;letter-spacing:.02em;border-bottom:1px solid #aa9371;padding-bottom:6px;color:#8a7654`)}
            >
              다크서클 자세히 보기 →
            </Link>
          </Reveal>
        </div>
      </section>

      <section id="treatment" style={cssObj(`padding:clamp(80px,12vw,160px) 0 clamp(60px,9vw,120px);text-align:center`)}>
        <div style={cssObj(`padding:0 clamp(22px,6vw,80px)`)}>
          <Reveal as="p" style={cssObj(`font-family:Poppins,sans-serif;font-size:11.5px;letter-spacing:.3em;color:#aa9371;margin:0 0 clamp(20px,3vw,30px)`)}>
            TREATMENT MENU
          </Reveal>
          <Reveal as="h2" style={cssObj(`margin:0;font-size:clamp(24px,3.6vw,40px);font-weight:400;line-height:1.45`)}>
            필요한 시술만 안내하여
            <br />
            즉각적 효과를 목표로 합니다.
          </Reveal>
        </div>

        <div style={cssObj(`max-width:1180px;margin:clamp(44px,6vw,72px) auto 0;padding:0 clamp(22px,6vw,80px);text-align:left`)}>
          {[
            { n: '01', en: 'Pigment', kr: '색소·홍조', desc: '마크뷰 · 브라이톤 / 프리미엄 IPL / 점 · 기미 · 주근깨', border: 'border-top:1px solid #eae3d7' },
            { n: '02', en: 'Lifting', kr: '리프팅·탄력', desc: '슈링크 유니버스 / 덴서티 하이 / 올타이트', border: 'border-top:1px solid #eae3d7' },
            { n: '03', en: 'Texture', kr: '모공·흉터', desc: '프락셀 / 포텐자 / 아쿠아필', border: 'border-top:1px solid #eae3d7' },
            {
              n: '04',
              en: 'Petit',
              kr: '보톡스·필러·부스터',
              desc: '뉴럭스 · 코어톡스 / 레스틸렌 · 뉴라미스 / 스킨부스터',
              border: 'border-top:1px solid #eae3d7;border-bottom:1px solid #eae3d7',
            },
          ].map((row) => (
            <HoverLink
              key={row.n}
              href="/#treatment"
              css={`display:flex;align-items:baseline;gap:clamp(16px,3vw,44px);flex-wrap:wrap;padding:clamp(26px,3.4vw,40px) clamp(4px,1.5vw,20px);${row.border}`}
              hoverCss={`background:#faf7f1;color:#443a35`}
            >
              <span style={cssObj(`font-family:Poppins,sans-serif;font-size:clamp(13px,1.4vw,15px);color:#c4b393;letter-spacing:.1em;min-width:2.4em`)}>
                {row.n}
              </span>
              <span style={cssObj(`min-width:9em`)}>
                <span style={cssObj(`font-family:Poppins,sans-serif;font-size:clamp(20px,2.6vw,30px);font-weight:300`)}>{row.en}</span>
                <span style={cssObj(`display:block;font-size:15px;margin-top:6px`)}>{row.kr}</span>
              </span>
              <span style={cssObj(`flex:1 1 260px;font-size:14.5px;line-height:1.9;color:#7a6f66`)}>{row.desc}</span>
              <span style={cssObj(`color:#aa9371;font-size:16px`)}>→</span>
            </HoverLink>
          ))}
        </div>
      </section>

      <section id="standards" style={cssObj(`background:#f8f5ef;padding:clamp(80px,12vw,160px) clamp(22px,6vw,80px);text-align:center`)}>
        <Reveal as="p" style={cssObj(`font-family:Poppins,sans-serif;font-size:11.5px;letter-spacing:.3em;color:#aa9371;margin:0 0 clamp(20px,3vw,30px)`)}>
          THE I-BACK STANDARDS
        </Reveal>
        <Reveal as="h2" style={cssObj(`margin:0;font-size:clamp(24px,3.6vw,40px);font-weight:400;line-height:1.45`)}>
          흔하지 않은 결과를 만드는
          <br />
          세 가지 기준
        </Reveal>
        <div
          style={cssObj(
            `max-width:1080px;margin:clamp(46px,6vw,80px) auto 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:clamp(34px,4.5vw,60px);text-align:left`,
          )}
        >
          {[
            { n: '01', en: 'Focus', kr: '집중', desc: '여러 시술을 나열하지 않습니다. 눈 밑 하나에 깊이 집중함으로써 전문성과 결과를 동시에 만듭니다.' },
            { n: '02', en: 'Precision', kr: '정밀', desc: '완전 비절개 방식. 흉터 없이, 회복 부담 없이, 섬세하게 조율하여 즉각적인 효과 확인 가능한 정밀한 시술.' },
            { n: '03', en: 'Trust', kr: '신뢰', desc: '대표원장이 모든 시술을 직접 진행하며, 효과 있는 시술만을 권유합니다.' },
          ].map((c) => (
            <Reveal key={c.n}>
              <p style={cssObj(`margin:0;font-family:Poppins,sans-serif;font-size:clamp(34px,4vw,50px);font-weight:200;color:#dfd4bf;line-height:1`)}>
                {c.n}
              </p>
              <p style={cssObj(`margin:14px 0 0;font-family:Poppins,sans-serif;font-size:19px;font-weight:400`)}>
                {c.en} <span style={cssObj(`font-family:Pretendard,sans-serif;font-size:16px;color:#8a7f72`)}>{c.kr}</span>
              </p>
              <p style={cssObj(`margin:14px 0 0;font-size:14.5px;line-height:2;color:#6b6058`)}>{c.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="director" style={cssObj(`padding:clamp(80px,12vw,160px) clamp(22px,6vw,80px)`)}>
        <div
          style={cssObj(
            `max-width:1180px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:clamp(44px,6vw,86px);align-items:start;text-align:left`,
          )}
        >
          <Reveal>
            <p style={cssObj(`font-family:Poppins,sans-serif;font-size:11.5px;letter-spacing:.3em;color:#aa9371;margin:0 0 clamp(20px,3vw,30px)`)}>
              REPRESENTATIVE DIRECTOR
            </p>
            <h2 style={cssObj(`margin:0;font-family:Poppins,sans-serif;font-weight:200;font-size:clamp(30px,4.6vw,56px);line-height:1.15`)}>
              Your eyes,
              <br />
              <span style={{ fontWeight: 500 }}>my focus.</span>
            </h2>
            <p style={cssObj(`margin:clamp(24px,3vw,34px) 0 0;font-size:clamp(15px,1.8vw,18px);line-height:1.95;color:#5c5751`)}>
              눈 밑 하나가 인상을 바꿉니다.
              <br />
              그래서 단 하나에 집중합니다.
            </p>
            <div style={cssObj(`display:flex;align-items:center;gap:18px;margin-top:clamp(30px,4vw,44px)`)}>
              <div style={cssObj(`width:84px;height:84px;flex:none;border-radius:50%;overflow:hidden`)}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${CF}/hf_20260804_093659_2e2acb47-2c3a-420b-a9a2-f643fb594cc1.png`}
                  alt="백승렬 원장"
                  style={cssObj(`width:100%;height:100%;object-fit:cover;display:block`)}
                />
              </div>
              <div>
                <p style={cssObj(`margin:0;font-size:13px;color:#8a7f72`)}>아이백의원 대표원장</p>
                <p style={cssObj(`margin:5px 0 0;font-size:19px;font-weight:500`)}>백승렬 원장</p>
                <p style={cssObj(`margin:5px 0 0;font-size:13px;color:#8a7f72`)}>외과 전문의 · 눈밑지방재배치 전문</p>
              </div>
            </div>
            <Link
              href="/#about"
              style={cssObj(`display:inline-block;margin-top:clamp(28px,3.5vw,40px);font-size:14.5px;border-bottom:1px solid #aa9371;padding-bottom:6px;color:#6f6a63`)}
            >
              병원소개 보기 →
            </Link>
          </Reveal>

          <Reveal style={cssObj(`display:grid;gap:clamp(26px,3vw,36px)`)}>
            <div>
              <p style={cssObj(`margin:0 0 14px;font-family:Poppins,sans-serif;font-size:11.5px;letter-spacing:.22em;color:#aa9371`)}>CAREER</p>
              <ul style={cssObj(`margin:0;padding:0;list-style:none;display:grid;gap:11px;font-size:14.5px;line-height:1.7;color:#5c5751`)}>
                <li>고려대학교 졸업</li>
                <li>경북대학교 의학전문대학원 졸업</li>
                <li>상계백병원 외과 전문의 수료</li>
                <li>완전 비절개 눈밑지방재배치 시술 수천례 이상 직접 집도</li>
                <li>전 닥터홈즈의원 원장</li>
              </ul>
            </div>
            <div>
              <p style={cssObj(`margin:0 0 14px;font-family:Poppins,sans-serif;font-size:11.5px;letter-spacing:.22em;color:#aa9371`)}>CERTIFICATION</p>
              <ul style={cssObj(`margin:0;padding:0;list-style:none;display:grid;gap:11px;font-size:14.5px;line-height:1.7;color:#5c5751`)}>
                <li>대한미용의사회 회원</li>
                <li>대한미용성형학회 회원</li>
                <li>대한비만미용학회 회원</li>
                <li>대한의학레이저학회 회원</li>
                <li>메디톡스 본사 인증 뉴라미스 필러 Expert 30</li>
                <li>갈더마코리아 본사 인증 레스틸렌 아이라이트 마스터</li>
                <li>다올메드사 인증 이노플러스 자문위원</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="review" style={cssObj(`background:#f8f5ef;padding:clamp(80px,12vw,160px) clamp(22px,6vw,80px);text-align:center`)}>
        <Reveal as="p" style={cssObj(`font-family:Poppins,sans-serif;font-size:11.5px;letter-spacing:.3em;color:#aa9371;margin:0 0 clamp(20px,3vw,30px)`)}>
          REAL REVIEW
        </Reveal>
        <Reveal as="h2" style={cssObj(`margin:0;font-size:clamp(24px,3.6vw,40px);font-weight:400;line-height:1.45`)}>
          의료광고법 준수를 위해
          <br />
          간편 로그인 후 열람하실 수 있습니다.
        </Reveal>

        <div style={cssObj(`position:relative;max-width:1080px;margin:clamp(44px,6vw,72px) auto 0`)}>
          <div
            style={cssObj(
              `display:grid;grid-template-columns:repeat(auto-fit,minmax(148px,1fr));gap:clamp(16px,2.4vw,26px);filter:blur(7px);opacity:.55;pointer-events:none;user-select:none`,
            )}
          >
            {[
              ['80%', '60%'],
              ['70%', '52%'],
              ['86%', '44%'],
              ['64%', '70%'],
            ].map(([w1, w2], i) => (
              <div key={i} style={cssObj(`text-align:left`)}>
                <div
                  style={cssObj(`width:100%;aspect-ratio:3/4;background:repeating-linear-gradient(135deg,#f0ebe1 0 8px,#e6dfd1 8px 16px)`)}
                />
                <div style={{ ...cssObj(`height:11px;background:#d3c8b3;margin-top:14px`), width: w1 }} />
                <div style={{ ...cssObj(`height:11px;background:#dcd2bf;margin-top:8px`), width: w2 }} />
              </div>
            ))}
          </div>
          <div style={cssObj(`position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;padding:20px`)}>
            <p style={cssObj(`margin:0;max-width:26em;font-size:clamp(14px,1.7vw,16px);line-height:1.9;color:#5f5546`)}>
              의료광고 심의 규정에 따라 본인인증 후
              <br />
              후기와 전후사진을 열람하실 수 있습니다.
            </p>
            <div style={cssObj(`display:flex;flex-wrap:wrap;gap:10px;justify-content:center`)}>
              <HoverLink
                href="/login"
                css={`font-size:14.5px;padding:16px 28px;background:#443a35;color:#fff;min-height:44px`}
                hoverCss={`background:#aa9371`}
              >
                카카오로 로그인
              </HoverLink>
              <HoverLink
                href="/login"
                css={`font-size:14.5px;padding:16px 28px;background:#fff;min-height:44px`}
                hoverCss={`color:#aa9371`}
              >
                네이버로 로그인
              </HoverLink>
            </div>
            <p style={cssObj(`margin:0;font-size:12.5px;color:#8a7f72`)}>단 10초, 간편 로그인으로 확인하세요.</p>
          </div>
        </div>
      </section>

      <section id="sns" style={cssObj(`padding:clamp(80px,12vw,160px) clamp(22px,6vw,80px);text-align:center`)}>
        <Reveal as="p" style={cssObj(`font-family:Poppins,sans-serif;font-size:11.5px;letter-spacing:.3em;color:#aa9371;margin:0 0 clamp(20px,3vw,30px)`)}>
          I-BACK VIEW
        </Reveal>
        <Reveal as="h2" style={cssObj(`margin:0;font-family:Poppins,sans-serif;font-weight:200;font-size:clamp(28px,4.4vw,50px);line-height:1.2`)}>
          @<span style={{ fontWeight: 500 }}>ibackclinic</span>
        </Reveal>
        <Reveal as="p" style={cssObj(`margin:clamp(18px,2.5vw,26px) 0 0;font-size:14.5px;line-height:1.9;color:#7a6f66`)}>
          진료실의 하루와 시술 이야기를 인스타그램에서 전합니다.
        </Reveal>
        <a
          href="https://www.instagram.com/ibackclinic/"
          target="_blank"
          rel="noopener"
          style={cssObj(`display:inline-block;margin-top:20px;font-size:14px;border-bottom:1px solid #aa9371;padding-bottom:6px;color:#8a7654`)}
        >
          인스타그램 팔로우 →
        </a>
        <div
          style={cssObj(
            `max-width:1180px;margin:clamp(40px,5vw,64px) auto 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:clamp(10px,1.4vw,16px)`,
          )}
        >
          {['REELS 01', 'POST 02', 'REELS 03', 'POST 04', 'REELS 05'].map((label) => (
            <Hoverable
              key={label}
              as="a"
              href="https://www.instagram.com/ibackclinic/"
              target="_blank"
              rel="noopener"
              css={`aspect-ratio:1;background:repeating-linear-gradient(135deg,#f2eee5 0 8px,#e8e1d4 8px 16px);display:flex;align-items:center;justify-content:center`}
              hoverCss={`opacity:.75`}
            >
              <span style={cssObj(`font-family:ui-monospace,Menlo,monospace;font-size:10.5px;color:#8d8071`)}>{label}</span>
            </Hoverable>
          ))}
        </div>
      </section>

      <section style={cssObj(`background:#f8f5ef;padding:clamp(80px,12vw,150px) clamp(22px,6vw,80px);text-align:center`)}>
        <Reveal as="p" style={cssObj(`font-family:Poppins,sans-serif;font-weight:200;font-size:clamp(30px,5vw,58px);margin:0;line-height:1.1`)}>
          A Quiet <span style={{ fontWeight: 500 }}>Space</span>
        </Reveal>
        <Reveal as="p" style={cssObj(`margin:clamp(24px,3vw,34px) 0 0;font-size:clamp(14.5px,1.7vw,17px);line-height:2.05;color:#6b6058`)}>
          과하지 않은 차분함
          <br />
          중장년의 시선에 편안한 톤
          <br />
          시술을 받는 시간이 가장 편안한 시간이 되도록
        </Reveal>
        <Reveal
          style={cssObj(
            `max-width:1180px;margin:clamp(40px,5vw,66px) auto 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:clamp(12px,1.6vw,18px)`,
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${CF}/hf_20260804_093700_8dcfe843-d8e3-4a3c-b026-c7b608a19aa4.png`}
            alt="대기 공간"
            style={cssObj(`width:100%;aspect-ratio:3/4;object-fit:cover;display:block`)}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${CF}/hf_20260804_093659_1dc21fcc-abd6-4e7f-814c-f193765ae769.png`}
            alt="상담실"
            style={cssObj(`width:100%;aspect-ratio:3/4;object-fit:cover;display:block`)}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${CF}/hf_20260804_093659_7a10a421-69e6-40cf-aeb3-31019282bdb6.png`}
            alt="진료 공간 복도"
            style={cssObj(`width:100%;aspect-ratio:3/4;object-fit:cover;display:block`)}
          />
        </Reveal>
      </section>

      <section id="visit" style={cssObj(`padding:clamp(80px,12vw,160px) clamp(22px,6vw,80px);text-align:center`)}>
        <Reveal as="p" style={cssObj(`font-family:Poppins,sans-serif;font-size:11.5px;letter-spacing:.3em;color:#aa9371;margin:0 0 clamp(20px,3vw,30px)`)}>
          VISIT I-BACK
        </Reveal>
        <Reveal as="h2" style={cssObj(`margin:0;font-size:clamp(24px,3.6vw,40px);font-weight:400;line-height:1.45`)}>
          강남역 12번 출구 도보 2분
        </Reveal>
        <div
          style={cssObj(
            `max-width:1180px;margin:clamp(44px,6vw,70px) auto 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:clamp(34px,4.5vw,64px);text-align:left;align-items:start`,
          )}
        >
          <Reveal>
            <dl style={cssObj(`margin:0`)}>
              <div style={cssObj(`display:flex;gap:18px;padding:16px 0;border-top:1px solid #eae3d7`)}>
                <dt style={cssObj(`margin:0;width:6.5em;flex:none;font-size:13.5px;color:#8a7f72`)}>주소</dt>
                <dd style={cssObj(`margin:0;font-size:15px;line-height:1.7`)}>
                  서울시 강남구 테헤란로 121
                  <br />
                  원빌딩 6층 아이백의원
                </dd>
              </div>
              <div style={cssObj(`display:flex;gap:18px;padding:16px 0;border-top:1px solid #eae3d7`)}>
                <dt style={cssObj(`margin:0;width:6.5em;flex:none;font-size:13.5px;color:#8a7f72`)}>진료시간</dt>
                <dd style={cssObj(`margin:0;font-size:15px;line-height:1.9`)}>
                  월·금 10:00 – 19:00
                  <br />
                  토요일 09:00 – 15:00
                  <br />
                  <span style={{ color: '#8a7f72' }}>일·공휴일 휴진</span>
                </dd>
              </div>
              <div style={cssObj(`display:flex;gap:18px;padding:16px 0;border-top:1px solid #eae3d7`)}>
                <dt style={cssObj(`margin:0;width:6.5em;flex:none;font-size:13.5px;color:#8a7f72`)}>전화</dt>
                <dd style={cssObj(`margin:0;font-size:15px`)}>
                  <a href="tel:0225690107" style={cssObj(`border-bottom:1px solid #ddd3c2`)}>
                    02-569-0107
                  </a>
                  <span style={{ color: '#8a7f72' }}> / FAX 02-569-0108</span>
                </dd>
              </div>
              <div style={cssObj(`display:flex;gap:18px;padding:16px 0;border-top:1px solid #eae3d7;border-bottom:1px solid #eae3d7`)}>
                <dt style={cssObj(`margin:0;width:6.5em;flex:none;font-size:13.5px;color:#8a7f72`)}>예약</dt>
                <dd style={cssObj(`margin:0;font-size:15px;display:flex;flex-wrap:wrap;gap:14px`)}>
                  <a href="http://pf.kakao.com/_xnxoxkGX" target="_blank" rel="noopener" style={cssObj(`border-bottom:1px solid #ddd3c2`)}>
                    카카오톡 상담
                  </a>
                  <a href="https://map.naver.com/p/entry/place/2072489982" target="_blank" rel="noopener" style={cssObj(`border-bottom:1px solid #ddd3c2`)}>
                    네이버 예약
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal
            as="a"
            href="https://map.naver.com/p/entry/place/2072489982"
            target="_blank"
            rel="noopener"
            style={cssObj(
              `display:flex;width:100%;aspect-ratio:4/3;background:repeating-linear-gradient(135deg,#f0ebe1 0 9px,#e6dfd1 9px 18px);align-items:center;justify-content:center`,
            )}
          >
            <span
              style={cssObj(
                `font-family:ui-monospace,Menlo,monospace;font-size:11.5px;letter-spacing:.1em;color:#8a7f72;background:rgba(255,255,255,.75);padding:9px 15px`,
              )}
            >
              네이버 지도 임베드 · 37.4994, 127.0311
            </span>
          </Reveal>
        </div>
      </section>

      <section id="contact" style={cssObj(`background:#443a35;color:#f6f2ea;padding:clamp(80px,12vw,150px) clamp(22px,6vw,80px);text-align:center`)}>
        <Reveal as="h2" style={cssObj(`margin:0;font-size:clamp(26px,4vw,46px);font-weight:300;line-height:1.4`)}>
          궁금한 점이 있다면
          <br />
          편하게 문의주세요.
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
