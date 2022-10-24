<template>
  <ValidationProvider
    slim
    :mode="mode"
    :name="$attrs.name ? $attrs.name : $attrs.label"
    :rules="rules"
    ref="ValidationProvider"
  >
    <v-checkbox
      slot-scope="{errors,valid,validated}"
      v-bind="$attrs"
      :class="{'with--errors':validated&&!valid}"
      v-on="$listeners"
      v-model="innerValue"
      :error-messages="errors"
      color="primary"
      :error-count="showError ? 1 :0"
      :success="valid"
    ></v-checkbox>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
  },
  props: {
    showError: {
      type: Boolean,
      required: false,
      default: true,
    },
    rules: {
      type: [Object, String],
      default: '',
    },
    checkValue: {
      required: false,
      default: true,
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
    if (this.value) {
      this.innerValue = this.value
    }
  },
  methods: {
    validate() {
      if (this.$refs.ValidationProvider) {
        return this.$refs.ValidationProvider.validate()
      }
    },
  },
}
</script>
