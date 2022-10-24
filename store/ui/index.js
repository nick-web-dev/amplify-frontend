const state = () => ({});
const getters = {
  validation_messages: (state, getters, rootState) => {
    return rootState.i18n.messages.front_validation;
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
