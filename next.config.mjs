// Use ESM config for Nextra v4
import nextra from 'nextra'

// Nextra v3/v2 style: pass theme options in nextra()
const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})

export default withNextra({})
