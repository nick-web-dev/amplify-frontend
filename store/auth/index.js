const state = () => ({
  token: null,
  type: null,
  user: null,
});

const getters = {
  token: (state) => {
    return state.token;
  },
  user: (state) => {
    return state.user;
  },
  type: (state) => {
    return state.type;
  },
  isUser: (state) => {
    return state.user ? true : false;
  },
};

const actions = {
  login(context, { user, type }) {
    return this.$axios.post(`/auth/login/`, user).then((response) => {
      this.$Cookie.set("token", response.data.token.accessToken, {
        expires: new Date(response.data.token.expires_at),
      });
      this.$Cookie.set("type", response.data.user.type, {
        expires: new Date(response.data.token.expires_at),
      });
      context.commit("setToken", {
        token: response.data.token.accessToken,
        type: response.data.user.type,
      });
      context.commit("setUser", response.data);
      return response;
    });
  },
  logout(context) {
    return this.$axios
      .delete("/auth/logout")
      .then((response) => {
        this.$Cookie.remove("token");
        this.$Cookie.remove("type");
        window.location.reload();
      })
      .catch((error) => {
        this.$Cookie.remove("token");
        this.$Cookie.remove("type");
      });
  },
  getUserInformation(context, { force = false } = { force: false }) {
    let type = context.getters["type"];
    let token = context.getters["token"];

    if (token) {
      if (context.getters["user"] && !force) {
        return context.getters["user"];
      } else {
        return this.$axios
          .get(`/auth/user`)
          .then((response) => {
            context.commit("setUser", { user: response.data });

            return response;
          })
          .catch((error) => {
            throw error;
          });
      }
    }
  },
};

const mutations = {
  setToken(state, { token, type }) {
    this.$axios.setToken(token, "Bearer");
    state.token = token;
    state.type = type;
  },
  setUser(state, data) {
    state.user = data.user;
    state.type = data.user.type;

    this.$setUser(data.user);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
