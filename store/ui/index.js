const state = () => ({});
const getters = {
  validation_messages: (state, getters, rootState) => {
    return rootState.i18n.messages;
  },
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
