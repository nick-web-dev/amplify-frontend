<template>
  <div class="grettings">
    <p class="mb-0 grettings__subtitle">Good morning, Tristan</p>
    <p class="mb-0 grettings__title">
      You have <span v-if="taskCount > 0">{{ taskCount}}</span><span v-else>no</span> new <br />
      tasks to complete
    </p>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Grettings",
  computed: mapState({
    taskCount: state => state.tasks.currentTasks.length
  })
};
</script>

<style scoped lang="scss"></style>
