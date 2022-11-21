
const state = () => ({
  currentTasks: [],
  isFetching: true
});

const getters = {
  currentTasks: (state) => {
    return state.currentTasks;
  }
};

const actions = {
  fetchTasks(context, query) {
    this.$axios.get('linquer/tasks', query).then((resp) => {
      const tasks = resp.data;

      context.commit('setCurrentTasks', tasks.data);
      return tasks;

    }, (err) => {
      console.log(err.toString())
    });
  }
};

const mutations = {
  setCurrentTasks(state, tasks) {
    state.currentTasks = tasks;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
