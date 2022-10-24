<template>
  <ValidationProvider
    :vid="vid"
    :mode="mode"
    :name="$attrs.name ? $attrs.name : $attrs.label"
    :rules="rules"
    v-slot="{ errors,valid,validated }"
  >
    <v-menu
      v-model="menu2"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      bottom
      min-width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          :value="innerValue"
          :error-messages="errors"
          :success="validated&&valid"
          :class="{'with--errors':validated&&!valid}"
          @click:clear="clearInput"
          v-bind="$attrs"
          v-on="on"
          readonly
        ></v-text-field>
      </template>
      <v-time-picker v-on="$listeners" :range="range||innerRange" v-model="innerValue">
        <div class="d-flex col-12 pa-0" v-if="!range && rangable">
          <v-spacer></v-spacer>
          <v-switch dense :label="'range'" class="ma-0" v-model="innerRange"></v-switch>
        </div>
      </v-time-picker>
    </v-menu>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
  },
  computed: {},
  props: {
    rangable: {
      required: false,
      type: false,
      type: Boolean,
    },
    range: {
      required: false,
      default: false,
      type: Boolean,
    },
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
    vid: {
      required: false,
      default: null,
    },
    displayFormat: {
      required: false,
      default: 'HH:mm',
    },
  },
  data: () => ({
    innerValue: null,
    menu2: false,
    innerRange: false,
  }),
  methods: {
    clearInput() {
      this.$nextTick(() => {
        this.innerValue = null
        this.$nextTick(() => {
          this.$emit('change', null)
        })
      })
    },
  },
  watch: {
    innerRange(newval) {
      this.innerValue = null
    },
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
}
</script>
