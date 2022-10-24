<template>
  <ValidationObserver ref="formObserver" :mode="mode" slim v-slot="{ handleSubmit }">
    <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-y>
      <template v-slot:activator="{ on, attrs }">
        <div v-on="on" class="text-decoration-underline">
          <span class="mr-1" style="width:85px;">{{initValue}}</span>
        </div>
      </template>
      <v-card>
        <v-card-text class="pa-2">
          <v-base-field
            @keydown.enter="handleSubmit(save)"
            outlined
            v-model="innerValue"
            v-bind="{...$attrs,...$props}"
          ></v-base-field>
        </v-card-text>
        <v-card-actions class="pa-2">
          <v-spacer></v-spacer>
          <v-btn
            small
            color="success"
            :loading="loading"
            :disabled="loading"
            @click="handleSubmit(save)"
          >
            <v-icon x-small>save</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </ValidationObserver>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
  },
  props: {
    initValue: {
      required: false,
      default: null,
    },
    storeAction: {
      required: false,
      default: null,
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
  },
  data: () => ({
    innerValue: null,
    menu: false,
    loading: false,
  }),
  methods: {
    validate() {
      return this.$refs.ValidationProvider.validate()
    },
    save() {
      this.$vss.ask({
        LoadingTitle: this.$t('defaults.editable.title'),
        LoadingBody: this.$t('defaults.editable.text'),
        position: 'center center',
        confirmedAction: () => {
          this.loading = true
          let promise = new Promise((resolve, reject) => {
            this.$emit('saving', {
              resolve,
              reject,
              newval: this.innerValue,
              form: this.$refs.formObserver,
            })
          })
          promise
            .then((response) => {
              this.loading = false
              this.menu = false
            })
            .catch((error) => {
              this.loading = false
            })
        },
      })
    },
  },
  watch: {
    initValue: {
      immediate: true,
      handler: function (newval) {
        this.innerValue = newval
      },
    },

    // Handles internal model changes.
    innerValue(newVal) {
      // this.$emit('input', newVal)
    },
    // Handles external model changes.
  },
  created() {},
}
</script>
