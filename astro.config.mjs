import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import partytown from '@astrojs/partytown'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-rokvi.pages.dev/',
  adapter: cloudflare(),
  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    })
  ]
})
