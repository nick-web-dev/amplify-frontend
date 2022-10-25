<template>
  <div class="side-bar">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      class="side-bar__drawer"
    >
      <v-list-item
        :class="{
          'side-bar__drawer-logo-image': !mini,
          'side-bar__drawer-logo-image-small': mini,
        }"
      >
        <img
          v-if="!mini"
          src="../../assets/logo/logo-long.png"
          alt=""
          width="195"
          height="45"
        />
        <img
          v-else
          src="../../assets/logo/logo-short.png"
          alt=""
          width="48"
          height="29"
        />
      </v-list-item>

      <v-list dense>
        <v-list-item
          class="side-bar__drawer-list-item"
          :class="{
            'side-bar__drawer-list-item-active':
              selectedTitle === item.title && !mini,
          }"
          v-for="item in items"
          :key="item.title"
          link
          @click="selectedTitle = item.title"
        >
          <v-list-item-icon class="side-bar__drawer-list-item-icon">
            <img
              src="../../assets/icon/sidebar-active.png"
              width="30"
              height="30"
              alt=""
              v-if="selectedTitle === item.title && mini"
            />
            <img
              src="../../assets/icon/sidebar.png"
              width="30"
              height="30"
              alt=""
              v-else
            />
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
    <v-btn class="side-bar__chevron-btn" icon @click.stop="mini = !mini">
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
      items: [
        { title: "Dashboard", link: "" },
        { title: "Products", link: "" },
        { title: "Users", link: "" },
        { title: "Reports", link: "" },
        { title: "Orders", link: "" },
        { title: "Billing", link: "" },
      ],
      mini: false,
      selectedTitle: "Dashboard",
    };
  },
};
</script>

<style scoped lang="scss">
::v-deep .v-navigation-drawer__border {
  display: none !important;
}

.side-bar {
  position: absolute;
  height: 100vh;
  max-width: 240px !important;
  min-width: 70px !important;

  &__drawer {
    max-width: 240px !important;
    min-width: 70px !important;
    background: #e8e8e8;

    &-logo-image {
      margin: 35px 22px 0 22px;
      margin-bottom: 30px;
      cursor: pointer;
      padding: 0;
    }

    &-logo-image-small {
      margin: 30px 10px 0 12px;
      margin-bottom: 60px;
      cursor: pointer;
      padding: 0;
    }

    &-list-item {
      margin: 3px 10px;
      padding: 0 10px;

      &-icon {
        width: 30px !important;
        height: 30px !important;
        margin-right: 10px !important;
      }

      &-title {
        .v-list-item__title {
          font-weight: 400 !important;
          font-size: 16px !important;
        }
      }
      &-title-active {
        .v-list-item__title {
          font-weight: 700 !important;
          font-size: 16px !important;
        }
      }
    }

    &-list-item-active {
      background: #929292;
      border-radius: 10px;
      color: #ffff !important;
    }
  }

  &__chevron-btn {
    position: absolute;
    right: -29px;
    z-index: 999;
    top: 50%;
    transform: translate(-50%);
    background: #ffff;
    width: 30px !important;
    height: 30px !important;
    border: 1px solid #e8e8e8;
  }
}
</style>
