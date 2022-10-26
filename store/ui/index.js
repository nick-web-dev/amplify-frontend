const state = () => ({
  appBar: {
    color: '#ffff'
  }
});
const getters = {
  validation_messages: (state, getters, rootState) => {
    return rootState.i18n.messages.front_validation;
  },

  appBarConfiguration: (state) => {
    return state.appBar
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
