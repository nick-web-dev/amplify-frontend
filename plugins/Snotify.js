import Vue from 'vue'
import Snotify, { SnotifyPosition } from 'vue-snotify'

const options = {
  toast: {
    // animation: {
    //   enter: 'bounceInLeft',
    //   exit: 'fadeOut',
    //   time: 400,
    // },
    position: SnotifyPosition.rightTop,
    showProgressBar: false,
  },
}

Vue.use(Snotify, options)
