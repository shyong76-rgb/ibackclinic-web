'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { cssObj } from '@/lib/css'

// 카카오 간편로그인 연동 전 임시 이메일/비번 로그인.
// 카카오 디벨로퍼스 앱 등록(REST API 키) 후 이 폼을 카카오 OAuth 버튼으로 교체 예정.
// 게이팅 로직(회원 여부 체크)은 이미 완성되어 있어 로그인 방식만 바뀐다.
export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  )
}

function LoginForm() {
  const router = useRouter()
  const params = useSearchParams()
  const returnTo = params.get('returnTo') || '/'
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      if (mode === 'register') {
        const createRes = await fetch('/api/customers', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password, name }),
        })
        if (!createRes.ok) {
          const data = await createRes.json().catch(() => ({}))
          throw new Error(data?.errors?.[0]?.message || '회원가입에 실패했습니다.')
        }
      }
      const loginRes = await fetch('/api/customers/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      if (!loginRes.ok) {
        const data = await loginRes.json().catch(() => ({}))
        throw new Error(data?.errors?.[0]?.message || '로그인에 실패했습니다.')
      }
      router.push(returnTo)
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : '오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={cssObj(`min-height:100vh;padding:calc(85px + clamp(60px,10vw,100px)) clamp(22px,6vw,80px) clamp(60px,8vw,100px);text-align:center`)}>
      <p style={cssObj(`font-family:Poppins,sans-serif;font-size:11.5px;letter-spacing:.3em;color:#aa9371;margin:0 0 20px`)}>MEMBER LOGIN</p>
      <h1 style={cssObj(`margin:0 0 12px;font-size:clamp(24px,3.6vw,34px);font-weight:400`)}>
        {mode === 'login' ? '간편 로그인' : '회원가입'}
      </h1>
      <p style={cssObj(`margin:0 0 40px;font-size:14px;color:#8a7f72`)}>
        의료광고 심의 규정에 따라 본인인증 후 후기·전후사진을 열람하실 수 있습니다.
        <br />
        (카카오 간편로그인 연동 전 임시 로그인입니다)
      </p>

      <form onSubmit={handleSubmit} style={{ maxWidth: 360, margin: '0 auto', display: 'grid', gap: 12, textAlign: 'left' }}>
        {mode === 'register' && (
          <input
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={cssObj(`padding:14px 16px;border:1px solid #e5ded1;font-size:14.5px`)}
          />
        )}
        <input
          type="email"
          required
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={cssObj(`padding:14px 16px;border:1px solid #e5ded1;font-size:14.5px`)}
        />
        <input
          type="password"
          required
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={cssObj(`padding:14px 16px;border:1px solid #e5ded1;font-size:14.5px`)}
        />
        {error && <p style={{ color: '#b3564a', fontSize: 13, margin: 0 }}>{error}</p>}
        <button
          type="submit"
          disabled={loading}
          style={cssObj(`margin-top:8px;padding:15px;background:#443a35;color:#fff;font-size:15px;border:0`)}
        >
          {loading ? '처리 중...' : mode === 'login' ? '로그인' : '가입하고 로그인'}
        </button>
      </form>

      <button
        onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
        style={cssObj(`margin-top:20px;background:none;border:0;font-size:13.5px;color:#8a7f72;border-bottom:1px solid #ddd3c2;padding-bottom:2px`)}
      >
        {mode === 'login' ? '처음이신가요? 회원가입' : '이미 계정이 있으신가요? 로그인'}
      </button>
    </div>
  )
}
