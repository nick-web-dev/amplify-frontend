export default function ({ store, req, route, app }) {
  store.commit("auth/setToken", {
    token: app.$Cookie.get("token"),
    type: app.$Cookie.get("type"),
  });

  store.commit("auth/setUser", {
    user: app.$Cookie.get("user") ?? null,
  });

  return store
    .dispatch("auth/getUserInformation")
    .then((response) => {
      return response;
    })
    .catch((error) => {
      app.$Cookie.remove("token");
      app.$Cookie.remove("type");
      app.$Cookie.remove("user");
    });
}
