/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string
  readonly VITE_EMAILJS_TEMPLATE_ID: string
  readonly VITE_EMAILJS_PUBLIC_KEY: string
  readonly VITE_GITHUB_USERNAME: string
  readonly VITE_MAX_REPOS_PAGES: string
  readonly VITE_GITHUB_TOKEN?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
