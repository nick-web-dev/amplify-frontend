import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - amplify-front",
    title: "amplify-front",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/moment",
    "~/plugins/axios",
    "~/plugins/vee-validate",
    "~/plugins/hasPermission",
    {
      src: "~plugins/Snotify",
      ssr: false,
    },

    { src: "~/plugins/i18n.js" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      "@nuxtjs/moment",
      {
        defaultFormat: "Y-MM-DD hh:mm A",
      },
    ],
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",

    [
      "nuxt-i18n",
      {
        parsePags: false,
        pages: {
          custom: false,
        },
        locales: [
          {
            name: "English",
            code: "en",
            iso: "en",
            iso_public: "en",
            file: "en-US.js",
          },
        ],
        vueI18nLoader: true,
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "i18n_redirected",
          onlyOnRoot: true, // recommended
        },
        strategy: "prefix_except_default",
        seo: true,
        vuex: {
          moduleName: "i18n",
          syncLocale: true,
          syncMessages: true,
        },
        langDir: "lang/",
        defaultLocale: process.env.APP_LOCALE,
        lazy: true,
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",

    ["cookie-universal-nuxt", { alias: "Cookie" }],
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
