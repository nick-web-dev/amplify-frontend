import Vue from 'vue'
import vss from '@/packages/vss/index.js'
import { isNumber } from 'lodash'
export default function (all) {
  const { store } = all
  let messages = {}
  try {
    messages = store.state.i18n.messages.defaults.vss
  } catch (error) {
    messages = {}
  }

  messages = messages ? messages : {}
  Vue.use(vss, { store, messages })
  Vue.directive('accounting', {
    unbind(el, bindings) {
      window.removeEventListener(
        `accounting_change_${bindings.value.event}`,
        bindings.handler
      )
    },
    bind(el, bindings) {
      if (bindings.value.event && bindings.value.key) {
        let key = bindings.value.key
        bindings.handler = (e) => {
          if (e.detail && isNumber(e.detail[key])) {
            el.innerText = e.detail[key]
          }
        }
        window.addEventListener(
          `accounting_change_${bindings.value.event}`,
          bindings.handler
        )
      }
    },
  })
}
