<template>
  <nav role="navigation" aria-label="Pagination Navigation" v-if="paginationGroups">
    <ul class="v-pagination theme--light">
      <v-menu :max-height="'350px'" bottom left>
        <template v-slot:activator="{ on, attrs }">
          <li>
            <button
              v-bind="attrs"
              v-on="on"
              type="button"
              aria-label="Previous page"
              :class="{'v-pagination__navigation':true,'v-pagination__navigation--disabled':paginationGroups[0].length===0}"
            >
              <i aria-hidden="true" class="v-icon notranslate mdi mdi-chevron-left theme--light"></i>
            </button>
          </li>
        </template>

        <v-list>
          <v-list-item
            @click="changeYear(item.text)"
            color="primary"
            v-for="(item, i) in paginationGroups[0]"
            :key="i"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

      <li v-for="item in paginationGroups[1]" :key="`pagination-year-`+item.text">
        <button
          type="button"
          @click="changeYear(item.text)"
          aria-current="true"
          aria-label="Current Page, Page 1"
          :class="{'v-pagination__item':true,'v-pagination__item--active primary':innerValue+'' === item.text}"
        >{{item.text}}</button>
      </li>
      <v-menu :max-height="'350px'" bottom right>
        <template v-slot:activator="{ on, attrs }">
          <li>
            <button
              v-bind="attrs"
              v-on="on"
              type="button"
              aria-label="Previous page"
              :class="{'v-pagination__navigation':true,'v-pagination__navigation--disabled':paginationGroups[2].length===0}"
            >
              <i aria-hidden="true" class="v-icon notranslate mdi mdi-chevron-right theme--light"></i>
            </button>
          </li>
        </template>

        <v-list>
          <v-list-item
            @click="changeYear(item.text)"
            color="primary"
            v-for="(item, i) in paginationGroups[2]"
            :key="'after'+i"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </ul>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      totalVisible: 10,
      innerValue: null,
      maxButtons: 0,
    }
  },
  computed: {
    activeIndex() {
      return this.years.indexOf(this.innerValue + '')
    },
    paginationGroups() {
      let activeIndex = this.activeIndex

      let startIndex = activeIndex <= 1 ? 0 : this.activeIndex - 1
      let endIndex = activeIndex + 1
      let groups = [[], [], []]
      this.years.forEach((year, index) => {
        if (index < startIndex) {
          groups[0].unshift({
            text: year,
            disabled: false,
          })
        } else if (index > endIndex) {
          groups[2].push({
            text: year,
            disabled: false,
          })
        } else {
          groups[1].push({
            text: year,
            disabled: false,
          })
        }
      })

      return groups
    },
  },
  props: {
    years: {
      required: true,
      type: Array,
    },
    value: {
      required: false,
      default: function () {
        let date = new Date()
        return date.getFullYear()
      },
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
  },
  methods: {
    changeYear(year) {
      this.innerValue = year
    },
  },
  components: {},
  created() {},
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