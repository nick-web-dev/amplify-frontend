<template>
  <ValidationProvider
    :mode="mode"
    slim
    :vid="$attrs.vid ? $attrs.vid:$attrs.name"
    :name="$attrs.name ? $attrs.name : $attrs.label"
    :rules="rules"
    ref="ValidationProvider"
  >
    <p ref="editable" @blur="emitChange" contenteditable v-on="listeners" />
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
    emitChange() {
      this.$emit('change')
    },
    validate() {
      return this.$refs.ValidationProvider.validate()
    },
    onInput(e) {
      this.$emit('input', e.target.innerText)
    },
  },
  computed: {
    listeners() {
      return { ...this.$listeners, input: this.onInput }
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
  mounted() {
    this.$refs.editable.innerText = this.value
  },
}
</script>
