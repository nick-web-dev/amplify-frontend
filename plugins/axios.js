// $nuxt.$axios don't save the server value of token, we have to reset it

export default ({ store, $axios, app }) => {
  $axios.setToken(store.getters["auth/token"], "Bearer");
  let locale_code = app.i18n.locale;
  let locale = app.i18n.locales.find((lang) => {
    return lang.code === locale_code;
  });
  if (locale) {
    $axios.setHeader("Content-Language", locale.code);
  }
};
