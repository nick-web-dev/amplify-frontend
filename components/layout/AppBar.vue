<template>
  <div
    class="app-header"
    :class="{ 'custom-border': isCollapsed }"
    :style="{ background: getHeaderColor }"
  >
    <div v-if="isCollapsed" class="app-header__arrow">
      <img src="../../assets/icon/arrow-left.svg" alt="" />
    </div>
    <div v-if="isCollapsed" class="app-header__title">
      Linq Management Center
    </div>
    <v-spacer></v-spacer>
    <div class="app-header__avatars">
      <v-badge
        bordered
        bottom
        color="#557AFF"
        dot
        offset-x="35"
        offset-y="12"
        size="12"
        class="mr-3"
      >
        <v-avatar size="36" class="app-header__avatars-avatar">
          <v-icon class="app-header__avatars-avatar-bell">mdi-bell</v-icon>
        </v-avatar>
      </v-badge>
      <v-avatar size="36" class="app-header__avatars-avatar mr-3">
        <img
          src="../../assets/icon/settings.svg"
          width="22px"
          height="22px"
          alt=""
          class="app-header__avatars-avatar-setting"
        />
      </v-avatar>
      <v-menu
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">

              <v-avatar size="36" class="app-header__avatars-avatar"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-account-circle</v-icon>
              </v-avatar>
            </template>

            <v-list>
              <v-list-item>
                <v-list-item-title @click="logout">Logout</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

      <!-- <v-avatar size="36" class="app-header__avatars-avatar">
        <v-icon>mdi-account-circle</v-icon>
      </v-avatar> -->
    </div>
  </div>
</template>

<script>
import { boolean } from "mathjs";
export default {
  name: "AppBar",

  props: {
    isCollapsed: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout")
    }
  },

  computed: {
    getHeaderColor() {
      return this.$store.getters["ui/appBarConfiguration"].color;
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep .v-badge__badge {
  height: 12px !important;
  width: 12px !important;
  border-radius: 5.5px !important;
}

.custom-border {
  border-bottom: 1px solid #e8e8e8;
}

.app-header {
  height: 56px;
  width: 100%;
  padding: 0px 40px 0px 70px;
  display: flex;

  &__arrow {
    border-right: 1px solid #e8e8e8;
    cursor: pointer;
    padding: 19px 20px;
  }

  &__title {
    padding: 22px 0 0 20px;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    color: #929292;
  }

  &__avatars {
    padding: 10px 0;

    &-avatar {
      border: 2px solid #929292 !important;
      cursor: pointer;

      &-bell {
        height: 19px;
        width: 15px;
      }

      &-setting {
        width: 22.5px !important;
        height: 22.5px !important;
      }
    }
  }
}
</style>
