import Vue from "vue";
import hasPermission from "@/packages/hasPermission/index.js";
export default async ({ store, app }, inject) => {
  Vue.use(hasPermission, { store, inject });
  inject("setUser", Vue.Laravel.setUser);
  inject("can", Vue.hasPermissionTo);
  let user = store.getters["auth/user"];
  app.$setUser(user);
};
