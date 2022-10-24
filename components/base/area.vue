<template>
  <ValidationProvider
    :mode="mode"
    slim
    :vid="$attrs.vid ? $attrs.vid:$attrs.name"
    :name="$attrs.name ? $attrs.name : $attrs.label"
    :rules="rules"
    ref="ValidationProvider"
  >
    <v-textarea
      slot-scope="{ errors, valid,validated }"
      v-model="innerValue"
      :error-messages="errors"
      :success="validated&&valid"
      :class="{'with--errors':validated&&!valid}"
      v-bind="$attrs"
      v-on="$listeners"
    ></v-textarea>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
  },
  props: {
    rules: {
      type: [Object, String],
      default: '',
    },
    // must be included in props
    value: {
      type: null,
    },
    mode: {
      required: false,
      default: 'eager',
    },
  },
  data: () => ({
    innerValue: null,
  }),
  methods: {
    validate() {
      return this.$refs.ValidationProvider.validate()
    },
  },
  watch: {
    value: {
      immediate: true,
      handler: function (newval) {
        this.innerValue = newval
      },
    },
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit('input', newVal)
    },
    // Handles external model changes.
  },
  created() {},
}
</script>
