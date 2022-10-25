import Vue from "vue";
import * as rules from "vee-validate/dist/rules";
import {
  ValidationProvider,
  ValidationObserver,
  localize,
  extend,
} from "vee-validate";
export default ({ store, app, $vuetify }) => {
  for (let rule in rules) {
    // add the rule
    extend(rule, {
      ...rules[rule],
    });
  }
  let newLocale = app.i18n.locale;

  // if (newLocale === 'ar') {
  //   $vuetify.rtl = true
  //   store.dispatch('ui/rtlLayout')
  // }

  // localize(newLocale, {
  //   code: newLocale,
  //   messages: store.getters["ui/validation_messages"].messages,
  // });
  
  extend("zip", {
    validate(value) {
      return /^\d{5}(?:[-\s]\d{4})?$/.test(value);
    },
  });
  extend("numeric", {
    validate(value) {
      return /^-?(0|[1-9]\d*)?(\.\d+)?(?<=\d)$/.test(value);
    },
  });
  extend("not_in", {
    validate(value, args) {
      if (args.indexOf(value) >= 0) {
        return false;
      }
      return true;
    },
  });

  Vue.component("ValidationProvider", ValidationProvider);
  Vue.component("ValidationObserver", ValidationObserver);
};
