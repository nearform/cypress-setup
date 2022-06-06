import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: false,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {}, // eslint-disable-line
    baseUrl: 'https://www.google.com/',
    supportFile: false,
  },
})
