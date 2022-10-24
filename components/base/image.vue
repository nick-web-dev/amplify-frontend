<template>
  <ValidationProvider
    :mode="mode"
    slim
    :vid="$attrs.vid ? $attrs.vid:$attrs.name"
    :name="$attrs.name ? $attrs.name : $attrs.label"
    :rules="rules"
    ref="ValidationProvider"
  >
    <v-file-input
      slot-scope="{ errors, valid,validated }"
      v-model="innerValue"
      :error-messages="errors"
      :success="validated&&valid"
      :class="{'with--errors':validated&&!valid}"
      :title="$attrs.title"
      outlined
      filled
      v-bind="$attrs"
      v-on="$listeners"
    >
      <template v-slot:selection="{ index, text }">
        <v-chip v-if="index < 2" color="primary accent-4" dark label small>{{ text }}</v-chip>

        <span
          v-else-if="index === 2"
          class="text-overline grey--text text--darken-3 mx-2"
        >+{{ files.length - 2 }} File(s)</span>
      </template>
    </v-file-input>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from "vee-validate";
export default {
  components: {
    ValidationProvider,
  },
  props: {
    rules: {
      type: [Object, String],
      default: "",
    },
    // must be included in props
    value: {
      type: null,
    },
    mode: {
      required: false,
      default: "eager",
    },
    flag: {
      required: false,
      default: null,
    },
    numeric: {
      required: false,
      default: false,
      type: Boolean,
    },
    description: {
      required: false,
      default: "",
      type: String,
    },
  },
  data: () => ({
    innerValue: null,
  }),
  methods: {
    validate() {
      return this.$refs.ValidationProvider.validate();
    },
  },
  watch: {
    value: {
      immediate: true,
      handler: function (newval) {
        this.innerValue = newval;
      },
    },
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit("input", newVal);
    },
    // Handles external model changes.
  },
  created() {},
};
</script>
