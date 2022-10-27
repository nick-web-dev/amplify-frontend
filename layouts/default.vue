<template>
  <v-app dark>
    <div>
      <app-bar :is-collapsed="isCollapsed" />
      <side-bar @isCollapse="isCollapse" />
    </div>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "~/components/layout/SideBar.vue";
import AppBar from "~/components/layout/AppBar.vue";

export default {
  name: "DefaultLayout",
  middleware: ["authenticated"],

  components: {
    SideBar,
    AppBar,
  },

  data() {
    return {
      isCollapsed: false,
    };
  },

  methods: {
    isCollapse(value) {
      this.isCollapsed = value;
    },
  },
};
</script>
