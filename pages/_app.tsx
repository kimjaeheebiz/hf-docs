import type { AppProps } from 'next/app'
import 'nextra-theme-docs/style.css'
// Pretendard 공식 패키지 CSS를 먼저 로드하여 폰트 파일을 확실히 포함
import 'pretendard/dist/web/static/pretendard.css'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
