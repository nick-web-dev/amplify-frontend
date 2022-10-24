<template>
  <v-btn small color="black" text :href="`tel:${mobile}`">
    <span style="direction:ltr;text-align:right;">{{mobile}}</span>

    <v-icon small class="mx-1">call</v-icon>
  </v-btn>
</template>


<script>
export default {
  data() {
    return {}
  },
  computed: {},
  props: {
    mobile: {
      required: false,
    },
  },
  watch: {},
  methods: {},
  components: {},
  created() {},
  mounted() {},
}
</script>


/******************* 
*
*
*
*    Pure Linq team
*
*
 ********************/