import TaskService from "~/services/taskService";

const state = () => ({
  currentTasks: []
});

const getters = {
  currentTasks: (state) => {
    return state.currentTasks;
  }
};

const actions = {
  fetchTasks(context, query) {
    return new TaskService(this.$axios).fetchPaginated(query);
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
