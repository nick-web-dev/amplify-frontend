<template>
  <v-switch
    v-model="innerValue"
    :loading="$attrs.loading ? $attrs.loading : loading"
    :disabled="$attrs.disabled || loading"
    @change="setOtp"
    v-bind="$attrs"
    v-on="$listeners"
  ></v-switch>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      innerValue: false,
      afterSaveValue: false,
    }
  },
  computed: {},
  props: {
    confirmFirst: {
      required: false,
      type: Boolean,
      default: false,
    },
    changeKey: {
      required: false,
    },
    value: {
      type: null,
    },
    item: {
      required: false,
    },
    storeDispatch: {
      required: false,
    },
    confirmText: {
      required: false,
      type: null,
      default: null,
    },
  },
  watch: {
    afterSaveValue(newVal) {
      this.$emit('input', newVal)
      this.innerValue = newVal
    },
    // Handles external model changes.
    value(newVal) {
      this.afterSaveValue = newVal
    },
  },
  methods: {
    setOtp() {
      if (!this.storeDispatch) {
        this.innerValue = !this.value

        this.afterSaveValue = !this.value
        return false
      }
      if (this.loading) {
        return
      }

      this.loading = true

      if (this.confirmFirst) {
        this.$vss.ask({
          LoadingTitle: 'Please Confirm',
          LoadingBody: this.confirmText || 'Please Confirm',
          rejectedAction: () => {
            this.loading = false
            this.$nextTick(() => {
              this.innerValue = !this.innerValue
            })
          },
          confirmedAction: () => {
            this.afterSaveValue = !this.value
            this.$nextTick(() => {
              let data = { id: this.item.id }
              if (this.changeKey) {
                data[this.changeKey] = this.innerValue
              }

              this.$store
                .dispatch(this.storeDispatch, data)
                .then((response) => {
                  this.$nextTick(() => {
                    this.loading = false
                    // this.afterSaveValue = !this.value
                  })
                })
            })
          },
        })
      }
    },
  },
  components: {},
  created() {
    if (this.value) {
      this.innerValue = this.value
    }
  },
  mounted() {},
}
</script>

/******************* * * * * Pure Linq team * * ********************/
