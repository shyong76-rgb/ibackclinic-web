import Link from 'next/link'
import { cssObj } from '@/lib/css'

export function MembersOnlyGate({ boardName, returnTo }: { boardName: string; returnTo: string }) {
  return (
    <div style={cssObj(`min-height:100vh;padding:calc(85px + clamp(60px,10vw,100px)) clamp(22px,6vw,80px) clamp(60px,8vw,100px);text-align:center`)}>
      <p style={cssObj(`font-family:Poppins,sans-serif;font-size:11.5px;letter-spacing:.3em;color:#aa9371;margin:0 0 20px`)}>MEMBERS ONLY</p>
      <h1 style={cssObj(`margin:0 0 20px;font-size:clamp(24px,3.6vw,34px);font-weight:400`)}>{boardName}</h1>
      <p style={cssObj(`margin:0 0 32px;max-width:26em;margin-left:auto;margin-right:auto;font-size:14.5px;line-height:1.9;color:#6b6058`)}>
        의료광고 심의 규정에 따라 본인인증 후 열람하실 수 있습니다.
        <br />단 10초, 간편 로그인으로 확인하세요.
      </p>
      <Link href={`/login?returnTo=${returnTo}`} style={cssObj(`display:inline-block;font-size:14.5px;padding:16px 32px;background:#443a35;color:#fff`)}>
        로그인하고 보기 →
      </Link>
    </div>
  )
}
