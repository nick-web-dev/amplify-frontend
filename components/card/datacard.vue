<template>
  <div class="card-sidebar__wrapper rounded elevation-3">
    <v-card elevation="0" flat width="100%" class="card-sidebar">
      <v-card-title>
        <slot name="title"></slot>
      </v-card-title>
      <v-card-text :class="cardTextClass" class>
        <slot></slot>
      </v-card-text>
      <slot name="footer"></slot>
    </v-card>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {},
  props: {
    cardTextClass: {
      required: false,
      default: "",
    },
  },
  watch: {},
  methods: {},
  components: {},
  created() {},
  mounted() {},
};
</script>
