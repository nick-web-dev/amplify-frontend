<template>
  <ValidationProvider
    :mode="mode"
    slim
    :vid="$attrs.vid ? $attrs.vid:$attrs.name"
    :name="$attrs.name ? $attrs.name : $attrs.label"
    :rules="rules"
    ref="ValidationProvider"
  >
    <v-autocomplete
      v-model="innerValue"
      :items="items"
      slot-scope="{ errors, valid,validate }"
      :class="{'with--errors':validated&&!valid}"
      :error-messages="errors"
      :success="valid"
      chips
      v-bind="$attrs"
      v-on="$listeners"
    >
      <template v-slot:append-item v-if="$scopedSlots['append-item']">
        <slot name="append-item"></slot>
      </template>
      <template v-slot:item v-if="$scopedSlots['item']">
        <slot name="item"></slot>
      </template>
    </v-autocomplete>
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
    items: {
      required: true,
      type: Array,
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
