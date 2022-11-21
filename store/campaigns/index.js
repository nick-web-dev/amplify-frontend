
const state = () => ({
  currentCampaigns: [],
  isFetching: true
});

const getters = {
  currentCampaigns: (state) => {
    return state.currentCampaigns;
  }
};

const actions = {
  fetchCampaigns(context, query) {
    this.$axios.get('campaign/list', query).then((resp) => {
      const campaigns = resp.data;

      context.commit('setCurrentCampaigns', campaigns.data);
      return campaigns;

    }, (err) => {
      console.log(err.toString())
    });
  }
};

const mutations = {
  setCurrentCampaigns(state, campaigns) {
    state.currentCampaigns = campaigns;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
