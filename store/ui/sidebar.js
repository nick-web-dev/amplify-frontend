const state = () => ({
  menus: {
    color: "#e8e8e8",
    items: [
      {
        title: "Roles",
        link: "/roles",
      },
      {
        title: "Dashboard",
        link: "/liqueur-dashboard",
      },
      { title: "Products", link: "/product" },
      { title: "Users", link: "" },
      { title: "Reports", link: "" },
      { title: "Orders", link: "" },
      { title: "Billing", link: "" },
    ],
  },
});
const getters = {
  configuration: (state) => {
    return state.menus;
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
