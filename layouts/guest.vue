<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid fill-height>
        <nuxt />
        <client-only>
          <vue-snotify></vue-snotify>
        </client-only>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
export default {
  head() {
    return {};
  },
  data() {
    return {};
  },
  computed: {},
  props: {},
  watch: {},
  methods: {},
  components: {},
  created() {},
  mounted() {},
};
</script>


/******************* 
*
*
*
*    Pure Linq team
*
*
 ********************/