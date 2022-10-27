<template>
  <div class="side-bar">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
      class="side-bar__drawer"
      :style="{ background: getBackgroundColor }"
      :width="240"
      :mini-variant-width="70"
    >
      <v-list-item
        :class="{
          'side-bar__drawer-logo-image': !mini,
          'side-bar__drawer-logo-image-small': mini,
        }"
      >
        <img v-if="!mini" src="../../assets/logo/logo-long.png" alt width="195" height="45" />
        <img v-else src="../../assets/logo/logo-short.png" alt width="48" height="29" />
      </v-list-item>

      <v-list dense>
        <v-list-item
          v-if="!item.permissions||$can(item.permissions)"
          class="side-bar__drawer-list-item"
          :class="{
            'side-bar__drawer-list-item-active':
              selectedTitle === item.title && !mini,
          }"
          v-for="item in getMenuItems"
          :key="item.title"
          link
          @click="selectedTitle = item.title"
          :to="item.link"
        >
          <v-list-item-icon class="side-bar__drawer-list-item-icon">
            <img
              src="../../assets/icon/sidebar-active.png"
              width="30"
              height="30"
              alt
              v-if="selectedTitle === item.title && mini"
            />
            <img src="../../assets/icon/sidebar.png" width="30" height="30" alt v-else />
          </v-list-item-icon>

          <v-list-item-content
            :class="{
              'side-bar__drawer-list-item-title-active':
                selectedTitle === item.title,
              'side-bar__drawer-list-item-title': selectedTitle !== item.title,
            }"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-btn
      class="side-bar__chevron-btn"
      :style="`left:${$vuetify.application.left}px`"
      icon
      @click.stop="mini = !mini"
    >
      <v-icon v-if="!mini">mdi-chevron-left</v-icon>
      <v-icon v-else>mdi-chevron-right</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      drawer: true,
      mini: false,
      selectedTitle: "Dashboard",
    };
  },

  watch: {
    mini() {
      this.$emit("isCollapse", this.mini);
    },
  },

  computed: {
    getBackgroundColor() {
      return this.$store.getters["ui/sidebar/configuration"].color;
    },

    getMenuItems() {
      return this.$store.getters["ui/sidebar/configuration"].items;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
