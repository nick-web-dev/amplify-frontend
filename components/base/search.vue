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
      :nudge-top="30"
      transition="scale-transition"
      offset-y
      bottom
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          :error-messages="errors"
          :success="validated&&valid"
          :class="{'with--errors':validated&&!valid}"
          v-bind="$attrs"
          @keydown="menu2=true"
          @focus="menu2=true"
          v-on="on"
          v-model="innerEditableValue"
        >
          <template slot="append" v-if="$slots.append">
            <slot name="append"></slot>
          </template>
        </v-text-field>
      </template>
      <v-simple-table fixed-header>
        <template v-slot:default>
          <thead>
            <tr>
              <th :style="`width:120px;`" v-for="(header,key) in allHeaders">{{header}}</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-menu>
  </ValidationProvider>
</template>

<script>
export default {
  data() {
    return {
      searchValue: '',
      innerEditableValue: null,
      menu2: false,
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