<template>
  <v-container fluid class="px-0 px-md-2">
    <v-row no-gutters>
      <v-col cols="12">
        <v-card-datacard class="secondary">
          <template v-slot:title>
            <v-row class="mx-0 mt-0">
              <v-col cols="12">
                <v-row no-gutters>
                  <v-col cols="auto" class="mx-2 dataCardTitle--text">{{
                    $t("Admin Roles")
                  }}</v-col>
                  <v-spacer></v-spacer>
                  <v-col cols="12" md="auto">
                    <v-row no-gutters>
                      <v-col md="auto">
                        <v-btn
                          @click="add_new_role_dialog = true"
                          class="mx-2 mb-2"
                          color="primary"
                        >
                          {{ $t("Add Role") }}
                          <v-icon class="mr-2" color="white">mdi-plus</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </template>
          <roles-table></roles-table>
        </v-card-datacard>
      </v-col>
    </v-row>
    <v-dialog
      v-model="add_new_role_dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      style="z-index: 99999"
    >
      <roles-role-dialog @close="add_new_role_dialog = false" />
    </v-dialog>
  </v-container>
</template>

<script>
import rolesTableVue from "~/components/roles/rolesTable.vue";
import createRoleDialog from "~/components/roles/createRoleDialog.vue";

export default {
  data() {
    return {
      add_new_role_dialog: false,
    };
  },
  computed: {},
  props: {},
  watch: {},
  methods: {},
  components: {
    "roles-table": rolesTableVue,
    "roles-role-dialog": createRoleDialog,
  },
  created() {},
  mounted() {},
};
</script>
