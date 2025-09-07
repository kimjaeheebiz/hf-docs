import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <img src="/images/logo.svg" alt="Hecto Financial" width={24} height={24} />
      <span style={{ fontWeight: 600 }}>개발 지원</span>
    </div>
  ),
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  navbar: {
    extraContent: (
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <nav style={{ display: 'flex', gap: 16 }}>
          <a href="/guides">가이드</a>
          <a href="/sandbox">샌드박스</a>
          <a href="/blog">블로그</a>
        </nav>
        <span aria-hidden>🔍</span>
        <a href="/login">로그인</a>
      </div>
    )
  },
  search: {
    placeholder: '🔍 검색'
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    content: 'Nextra Docs Template',
  },
}

export default config
