export default {
  install(Vue, { store, inject = null }) {
    Vue.Laravel = {
      setUser: (user) => {
        this.user = user;
      },
      hasPermissionTo: (permissions, method = "every") => {
        if (typeof permissions === "string") {
          permissions = permissions.replace(", ", ",");
          permissions = permissions.split(",");
        }

        let methods = {
          every: (permissions, allowed_permissions) => {
            if (permissions.length === 0) {
              return true;
            }
            return permissions.every((permission) => {
              if (!this.user || !allowed_permissions) {
                return false;
              }
              if (permission.match(/\{lang\}/)) {
                return allowed_permissions.some((per) => {
                  return per.match(permission.replace(/\{lang\}/, ""));
                });
              }
              return allowed_permissions.includes(permission);
            });
          },
          any: (permissions, allowed_permissions) => {
            if (permissions.length === 0) {
              return true;
            }
            return permissions.some((permission) => {
              if (!this.user || !allowed_permissions) {
                return false;
              }
              if (permission.match(/\{lang\}/)) {
                return allowed_permissions.some((per) => {
                  return per.match(permission.replace(/\{lang\}/));
                });
              }
              return allowed_permissions.includes(permission);
            });
          },
        };
        if (Array.isArray(permissions)) {
          return methods[method](permissions, this.user.all_permissions);
        } else {
          // check if he/she can do it as an admin
          if (permissions["admin"]) {
            let adminPermissions = permissions["admin"];
            if (typeof adminPermissions === "string") {
              adminPermissions = adminPermissions.replace(", ", ",");
              adminPermissions = adminPermissions.split(",");
            }
            if (methods[method](adminPermissions, this.user.all_permissions)) {
              return true;
            }
          }

          return false;
        }
      },
    };
    Vue.hasPermissionTo = Vue.Laravel.hasPermissionTo;
  },
};
