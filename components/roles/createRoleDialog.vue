<template>
  <ValidationObserver ref="roleCreateForm" slim v-slot="{handleSubmit}">
    <v-card>
      <v-toolbar dark color="primary">
        <v-toolbar-title>Add Role</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn icon dark @click="$emit('close')">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <div class="pa-4 mt-4">
        <v-row>
          <v-col cols="12" md="6" sm="12">
            <v-base-field
              :label="$t('Role name')"
              name="Role name"
              :rules="'required'"
              type="text"
              outlined
              v-model="form.name"
            ></v-base-field>
          </v-col>
          <v-col cols="12" md="6" sm="12">
            <v-base-select
              :label="$t('Guard name')"
              name="Guard name"
              :rules="'required'"
              type="text"
              :items="['admin']"
              v-model="form.guard_name"
              outlined
            ></v-base-select>
          </v-col>
        </v-row>

        <hr class="my-4" />
        <div>
          <h2 class="mt-7">Permissions:</h2>
          <v-row class="mt-3">
            <v-col cols="12" md="4" sm="12" :key="`permission-${permission.id}`" v-for="permission in permissions">
              <input :id="`permisison-${permission.id}`" type="checkbox" v-model="form.permissions" :value="permission.id" :checked="form.permissions.includes(permission.id)">
              <label :for="`permisison-${permission.id}`">{{$t(permission.name)}}</label>
            </v-col>
          </v-row>
        </div>
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :loading="loading" @click="addRole">Add Role</v-btn>
      </v-card-actions>
    </v-card>
  </ValidationObserver>
</template>

<script>
export default {
  data() {
    return {
      permissions: [],
      lastRequest: null,
      loading: false,
      form: {
        name: "",
        guard_name: "admin",
        permissions: [],
      }
    }
  },
  created() {
    this.getPermisisons();
  },
  methods: {
    getPermisisons() {
      const CancelToken = this.$axios.CancelToken;
      this.lastRequest = CancelToken.source();

      this.$store
        .dispatch("auth/permissions/get", {
          options: {},
          lastRequest: this.lastRequest,
        })
        .then((response) => {
          console.log("response = ",response);
          this.permissions = response.data;
        })
        .catch((error) => {
          this.lastRequest = null;
          console.log("error = ", error);
        });
    },
    addRole() {
      if (this.loading) {
        return;
      }
      this.loading = true;
      this.$store
        .dispatch("auth/roles/add", this.form)
        .then((response) => {
          this.form = {
            name: "",
            guard_name: "admin",
            permissions: [],
          };
          console.log("response = ",response);
          this.$emit('refetch');
          this.$emit('close');
        })
        .catch((error) => {
          this.lastRequest = null;
          console.log("error = ", error);
        }).finally(() => {
          this.$snotify.warning("Some error occured", "Error", {
            timeout: 2500,
            closeOnClick: false,
          });
          this.loading = false;
        });
    }
  }
};
</script>

<style scoped lang="scss"></style>
