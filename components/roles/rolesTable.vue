<template>
  <v-data-table
    :headers="headers"
    :loading="loading"
    :items="items"
    :server-items-length="serverItemsLength"
    :options.sync="options"
    :footer-props="{ 'items-per-page-options': [15,50, 100, 150, 200, -1] }"
    class="elevation-1"
  >
    <template v-slot:item.actions="{item}">
      <v-menu :close-on-content-click="false" offset-y left rounded="b-xl">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark small v-bind="attrs" v-on="on">
            <v-icon>mdi-cog</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            :ripple="{class:'primary--text'}"
            :disabled="item.is_system?true:false"
            @click="$emit('edit',item)"
          >
            <v-list-item-title>{{$t("Edit Role")}}</v-list-item-title>
            <v-list-item-icon>
              <v-icon small color="primary">mdi-circle-edit-outline</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item
            :disabled="item.is_system?true:false"
            @click="deleteRole(item)"
            :ripple="{class:'error--text'}"
          >
            <v-list-item-title>{{$t("Delete Role")}}</v-list-item-title>
            <v-list-item-icon>
              <v-icon small color="error">mdi-delete</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-data-table>
</template>


<script>
import { tableMixin } from "~/mixins/tableMixin";
export default {
  mixins: [tableMixin],
  data() {
    return {
      storeAction: "auth/roles/get",
      allHeaders: [
        {
          value: "id",
          text: "ID",
          sortable: true,
        },
        {
          value: "name",
          text: "Name",
          sortable: true,
        },
        {
          value: "guard_name",
          text: "Guard",
          sortable: true,
        },
        {
          value: "actions",
          text: "Actions",
          sortable: false,
        },
      ],
      serverItemsLength: 0,
      loading: false,
      options: {
        page: 1,
        search: null,
      },
    };
  },
  computed: {},
  props: {},
  watch: {},
  methods: {
    deleteRole(role) {
      // todo
    },
  },
  components: {},
  created() {},
  mounted() {},
};
</script>