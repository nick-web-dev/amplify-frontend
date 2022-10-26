const state = () => ({
  menus: {
    color: '#e8e8e8'
  }
});
const getters = {
  getMenus: (state) => {
    return state.menus
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
