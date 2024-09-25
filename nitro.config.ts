//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  routeRules: {
    '/github/**': { redirect: 'https://github.com/rhawkins030/ThemeParks' },
    '/': { redirect: '/api/' }
  },
  runtimeConfig: {
    UNIVERSALORLANDO_ASSET: '',
  }
});
