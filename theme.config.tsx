import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Blockbud</span>,
  project: {
    link: 'https://github.com/Blockbud/docs.blockbud.co.git',
  },
  chat: {
    link: 'https://blockbud.co/discord',
  },
  docsRepositoryBase: 'https://github.com/Blockbud/docs.blockbud.co.git',
  footer: {
    text: 'Blockbud',
  },
  head: (
    <>
      <script
  lang="javascript"
  dangerouslySetInnerHTML={{
    __html: `if (!window.localStorage.getItem("theme_default")) {
      window.localStorage.setItem("theme", "dark");
      window.localStorage.setItem("theme_default", "dark");
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }`,
  }}
/>;
    </>
  )
}


export default config
