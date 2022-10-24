<template>
  <ValidationProvider
    :mode="mode"
    :vid="vid ? vid : $attrs.name"
    :name="$attrs.name ? $attrs.name : $attrs.label"
    :rules="rules"
    slim
  >
    <v-combobox
      slot-scope="{ errors, valid,validated }"
      :class="{'with--errors':validated&&!valid}"
      :error-messages="errors"
      :success="validated&&valid"
      v-model="innerValue"
      :items="items.data"
      :loading="isLoading"
      :search-input.sync="searchValue"
      :chips="chips"
      :cache-items="cahceItems"
      v-bind="$attrs"
      v-on="$listeners"
      :height="$attrs.outlined ? '56px' : '45px'"
      :return-object="false"
      autocomplete="off"
      class="search-combo"
      :filter="viewText"
      :menu-props="{'contentClass':'search-combo-menu'}"
    >
      <template v-slot:selection="data" v-if="$scopedSlots.selection">
        <slot name="selection" v-bind="data" v-if="$scopedSlots.selection"></slot>
      </template>

      <template v-slot:append-item v-if="$scopedSlots['append-item']">
        <slot name="append-item"></slot>
      </template>
      <!-- <template v-slot:append-item>here</template> -->
    </v-combobox>
  </ValidationProvider>
</template>


<script>
export default {
  data() {
    return {
      searchValue: '',

      items: {
        data: [],
      },
      isLoading: false,
      innerValue: null,
      lastRequest: null,
      gotData: false,
    }
  },
  computed: {
    allHeaders() {
      var headers = {}
      for (var key in this.headers) {
        if (key.includes('{{lang}}')) {
          this.languages.forEach((lang) => {
            headers[key.replace('{{lang}}', lang.code)] = this.headers[
              key
            ].replace('{language}', lang.name)
          })
        } else {
          headers[key] = this.headers[key]
        }
      }
      return headers
      if (this.headers) {
        return this.headers
      }
    },
    languages() {
      return this.$i18n.locales
    },
  },
  props: {
    headers: {
      required: false,
      type: Object,
    },
    chips: {
      required: false,
      type: Boolean,
      default: true,
    },
    cahceItems: {
      required: false,
      default: false,
    },
    saveAction: {
      required: false,
      default: null,
    },
    saveKey: {
      required: false,
      default: null,
    },
    onInputHandler: {
      required: false,
      type: Function,
      default: function (newval, items) {},
    },
    watchOther: {
      required: false,
      type: Boolean,
      default: false,
    },
    storeSearch: {
      required: true,
    },
    vid: {
      required: false,
      default: null,
    },
    rules: {
      type: [Object, String],
      default: '',
    },
    mode: {
      required: false,
      default: 'eager',
    },
    other_options: {
      required: false,
      type: Object,
      default: () => {
        return {}
      },
    },
    per_page: {
      required: false,
      default: 20,
    },
    value: {
      type: null,
    },
    languable: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  watch: {
    other_options(newval, oldval) {
      if (this.watchOther) {
        if (JSON.stringify(newval) !== JSON.stringify(oldval)) {
          this.$nextTick(() => {
            this.search(this.searchValue, true)
          })
        }
      }
    },
    searchValue(newval) {
      this.search(newval)
    },
    innerValue(newVal) {
      this.onInputHandler(newVal, this.items.data)
      this.$emit('input', newVal)
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal
    },
  },
  methods: {
    viewText(item, queryText, itemText) {
      if (this.languable) {
        if (this.$attrs['item-text']) {
          itemText = ''
          this.languages.forEach((language) => {
            itemText += item[`${this.$attrs['item-text']}_${language.code}`]
            itemText += '\t'
          })
        }
      }
      return (
        itemText.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1
      )
    },
    addItem(item) {
      this.items.data.push(item)
    },
    emitEnter(e) {
      if (!this.innerValue) {
        this.$emit('enterClicked')
      }
    },
    search(newval = null, force = false) {
      this.$emit('update:search-value', newval)
      if (this.per_page === -1 && this.gotData && !force) {
        return false
      }
      this.isLoading = true
      if (this.lastRequest) {
        this.lastRequest.cancel('canceld')
      }
      const CancelToken = this.$axios.CancelToken
      this.lastRequest = CancelToken.source()
      let setting = false
      if (!newval && this.value) {
        newval = this.value
        setting = true
      }
      this.$store
        .dispatch(this.storeSearch, {
          options: {
            itemsPerPage: this.per_page,
            search: newval,
            ...this.other_options,
          },
          lastRequest: this.lastRequest,
        })
        .then((response) => {
          if (response.data && response.data.data) {
            this.items = response.data
            this.gotData = true
            if (setting) {
              if (this.$attrs['return-object'] !== undefined) {
                if (this.items && this.items.data.length) {
                  this.innerValue = this.items.data.find((item) => {
                    return item[this.$attrs['item-value']] === this.value
                  })
                }
              }
            }
          }
          this.isLoading = false
          this.lastRequest = null
        })
        .catch((error) => {
          this.lastRequest = null
          this.isLoading = false
        })
    },
  },
  components: {},
  created() {
    if (this.per_page === -1) {
      this.search('')
    }

    if (this.value) {
      this.search()
      this.innerValue = this.value
    }
  },
  mounted() {},
}
</script>


/******************* 
*
*
*
*    Pure Linq team
*
*
 ********************/