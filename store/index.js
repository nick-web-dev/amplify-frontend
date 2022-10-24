const state = () => ({});
const getters = {};

const actions = {
  async getDefaults(context) {
    await context.dispatch("locations/get", {
      save: true,
      options: { perPage: -1 },
    });
  },
  changeDefaults(context, e) {
    // console.log({ e })
  },
};

const mutations = {};
export const strict = false;

export default {
  state,
  getters,
  actions,
  mutations,
};
