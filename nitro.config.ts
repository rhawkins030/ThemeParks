//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  preset: "cloudflare_pages",
  routeRules: {
    '/github/**': { redirect: 'https://github.com/rhawkins030/ThemeParks' },
    '/': { redirect: '/api/' }
  },
  runtimeConfig: {
    UNIVERSALORLANDO_ASSET: '',
    UNIVERSALORLANDO_SERVICE: '',
    WALTDISNEYWORLD_AUTH: '',
    WALTDISNEYWORLD_FACILITY: '',
  }
});
