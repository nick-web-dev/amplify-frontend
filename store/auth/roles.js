const state = () => ({});
const getters = {};

const actions = {
  get(context, { options, lastRequest = null }) {
    return this.$axios.get("/auth/roles", {
      cancelToken: lastRequest ? lastRequest.token : null,
      params: options,
    });
  },

  add(context, role) {
    return this.$axios.post("/auth/roles", role);
  },
  edit(context, role) {
    return this.$axios.put(`/auth/roles/$${role.id}`, role);
  },

  delete(context, role) {
    return this.$axios.delete(`/auth/roles/$${role.id}`);
  },
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
