<template>
  <v-app dark>
    <v-main>
      <div>
        <side-bar />
      </div>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "@/components/sidebar/SideBar.vue";

export default {
  name: "DefaultLayout",

  components: {
    SideBar,
  },

  data() {
    return {};
  },
};
</script>
