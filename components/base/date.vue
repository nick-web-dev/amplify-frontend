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
          :value="computedDateFormattedMomentjs"
          :error-messages="errors"
          :success="validated&&valid"
          :class="{'with--errors':validated&&!valid}"
          @click:clear="clearInput"
          v-bind="$attrs"
          v-on="on"
          type="date"
          v-if="$attrs.type!=='month'"
          v-model="innerEditableValue"
        >
          <template slot="append" v-if="$slots.append">
            <slot name="append"></slot>
          </template>
        </v-text-field>
        <v-text-field
          :value="computedDateFormattedMomentjs"
          :error-messages="errors"
          :success="validated&&valid"
          :class="{'with--errors':validated&&!valid}"
          @click:clear="clearInput"
          v-bind="$attrs"
          v-on="on"
          v-else
          readonly
        >
          <template slot="append" v-if="$slots.append">
            <slot name="append"></slot>
          </template>
        </v-text-field>
      </template>
      <v-date-picker
        v-on="$listeners"
        :range="range||innerRange"
        v-model="innerValue"
        :type="$attrs.type ? $attrs.type : 'date'"
        @input="menu2 = false"
      >
        <div class="d-flex col-12 pa-0" v-if="!range && rangable">
          <v-spacer></v-spacer>
          <v-switch dense :label="'range'" class="ma-0" v-model="innerRange"></v-switch>
        </div>
      </v-date-picker>
    </v-menu>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
  },
  computed: {
    computedDateFormattedMomentjs() {
      if (Array.isArray(this.innerValue)) {
        return (
          (this.innerValue[0]
            ? this.$moment(this.innerValue[0]).format(this.displayFormat)
            : '') +
          ' ~ ' +
          (this.innerValue[1]
            ? this.$moment(this.innerValue[1]).format(this.displayFormat)
            : '')
        )
      } else {
        return this.innerValue
          ? this.$moment(this.innerValue).format(this.displayFormat)
          : ''
      }
    },
  },
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
      default: 'yyyy-MM-DD',
    },
  },
  data: () => ({
    innerValue: null,
    innerEditableValue: null,
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
    innerEditableValue(newval) {
      this.innerValue = newval
    },
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit('input', newVal)
      this.innerEditableValue = newVal
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
