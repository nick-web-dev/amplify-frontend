<template>
  <v-app dark>
    <v-main>
      <div>
        <side-bar @isCollapse="isCollapse" />
        <app-bar :is-collapsed="isCollapsed" />
      </div>
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
