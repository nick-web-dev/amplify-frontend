<template>
  <span>
    <v-breadcrumbs-item exact ripple :disabled="$attrs.last" v-bind="$attrs">
      <slot></slot>
    </v-breadcrumbs-item>
    <li class="v-breadcrumbs__divider" v-if="!$attrs.last">/</li>
  </span>
</template>


<script>
export default {
  data() {
    return {}
  },
  computed: {},
  props: {},
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