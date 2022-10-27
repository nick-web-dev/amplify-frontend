const state = () => ({
  appBar: {
    color: '#ffff'
  }
});
const getters = {
  validation_messages: (state, getters, rootState) => {
    return rootState.i18n.messages;
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
