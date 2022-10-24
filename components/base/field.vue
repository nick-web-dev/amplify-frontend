<template>
  <ValidationProvider
    :mode="mode"
    slim
    :vid="$attrs.vid ? $attrs.vid:$attrs.name"
    :name="$attrs.name ? $attrs.name : $attrs.label"
    :rules="rules"
    ref="ValidationProvider"
  >
    <v-text-field
      slot-scope="{ errors, valid,validated }"
      v-model="innerValue"
      :error-messages="errors"
      :success="validated&&valid"
      :class="{'with--errors':validated&&!valid}"
      :title="$attrs.title"
      v-bind="$attrs"
      v-on="$listeners"
      @change="checkNumber"
      hide-details="auto"
    >
      <template v-if="$slots.label||label_description" v-slot:label>
        <v-menu
          min-width="200px"
          color="info"
          open-on-hover
          :close-on-content-click="false"
          offset-y
          top
          v-if="label_description"
        >
          <template v-slot:activator="{ on }">
            <div v-on="on">
              {{$attrs.label}}
              <v-btn x-small icon width="18px" height="18">
                <v-icon color="grey" size="18px">info</v-icon>
              </v-btn>
            </div>
          </template>
          <v-card color="white">
            <v-card-text class="secondary--text">
              <div v-html="label_description"></div>
            </v-card-text>
          </v-card>
        </v-menu>

        <slot name="append" v-else></slot>
      </template>
      <template v-if="$slots.append||flag||description" v-slot:append>
        <v-menu
          min-width="200px"
          color="info"
          open-on-hover
          :close-on-content-click="false"
          offset-y
          top
          v-if="flag||description"
        >
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" icon width="24px" height="24px">
              <flag v-if="flag" style="font-size:24px" :iso="flag.iso_public" />
              <v-icon v-else color="grey" size="24px">info</v-icon>
            </v-btn>
          </template>
          <v-card color="white">
            <v-card-text class="secondary--text">
              <div v-html="description||flag"></div>
            </v-card-text>
          </v-card>
        </v-menu>

        <slot name="append" v-else></slot>
      </template>
      <template v-if="$slots.prepend" v-slot:prepend>
        <slot name="prepend"></slot>
      </template>
      <template v-if="$slots['append-outer']" v-slot:append-outer>
        <slot name="append-outer"></slot>
      </template>
      <template v-if="$slots['prepend-inner']" v-slot:prepend-inner>
        <slot name="prepend-inner"></slot>
      </template>
    </v-text-field>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import { evaluate } from 'mathjs'
export default {
  components: {
    ValidationProvider,
  },
  props: {
    rules: {
      type: [Object, String],
      default: '',
    },
    label_description: {
      required: false,
      default: null,
    },
    // must be included in props
    value: {
      type: null,
    },
    mode: {
      required: false,
      default: 'eager',
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
      default: '',
      type: String,
    },
  },
  data: () => ({
    innerValue: null,
  }),
  methods: {
    checkNumber(e) {
      if (this.numeric) {
        try {
          var newval = evaluate(this.innerValue)
          if (newval !== this.innerValue) {
            this.innerValue = newval
          }
        } catch (error) {
          console.log({ error })
        }
      }
    },
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
