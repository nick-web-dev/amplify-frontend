const state = () => ({});
const getters = {};

const actions = {
  get(context, { options, lastRequest = null }) {
    return this.$axios.get("/auth/permissions", {
      cancelToken: lastRequest ? lastRequest.token : null,
      params: options,
    });
  },
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
