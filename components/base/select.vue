<template>
  <ValidationProvider
    :vid="$attrs.vid ? $attrs.vid:$attrs.name"
    :mode="mode"
    :name="$attrs.name ? $attrs.name : $attrs.label"
    :rules="rules"
    slim
  >
    <v-select
      slot-scope="{ errors, valid,validated }"
      :class="{'with--errors':validated&&!valid}"
      v-model="innerValue"
      :menu-props="{ bottom: true, offsetY: true }"
      :error-messages="errors"
      :success="validated&& valid"
      v-bind="$attrs"
      v-on="$listeners"
      hide-details="auto"
    ></v-select>
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
    value: {
      type: null,
    },
    mode: {
      required: false,
      default: 'eager',
    },
  },
  data: () => ({
    innerValue: '',
  }),
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit('input', newVal)
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal
    },
  },
  created() {
    if (this.value !== null) {
      this.innerValue = this.value
    }
  },
}
</script>
