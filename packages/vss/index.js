import { setTimeout } from 'timers'
import { ENGINE_METHOD_DIGESTS } from 'constants'
import { fakeValidator, fakeFunction } from './defaults'
import { get } from 'lodash'

const vss = {
  store: {},
  install(Vue, options) {
    Vue.vss = {
      store: options.store,
      messages: options.messages,
      ask({
        LoadingTitle = this.messages['pleaseconfirm'],
        LoadingBody = this.messages['confirmbody'],

        buttons = [],
        confirmedAction = fakeFunction,
        rejectedAction = fakeFunction,

        data = {},
      } = {}) {
        if (buttons.length === 0) {
          buttons = [
            {
              text: 'Yes',
              action: (toast) => {
                Vue.prototype.$snotify.remove(toast.id)
                confirmedAction()
              },
              bold: false,
            },
            {
              text: 'No',
              action: (toast) => {
                Vue.prototype.$snotify.remove(toast.id)
                rejectedAction()
              },
            },
          ]
        } else {
          buttons = buttons
        }

        return Vue.prototype.$snotify.warning(LoadingBody, LoadingTitle, {
          timeout: 5000,
          showProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          buttons: buttons,
        })
      },
      post({
        validate = fakeValidator(),
        url = '',
        succesValidate = fakeFunction,
        failedValidate = fakeFunction,
        successServer = fakeFunction,
        failServer = fakeFunction,
        LoadingTitle = this.messages['loadingDefaultTitle'],
        LoadingBody = this.messages['LoadingDefaultBody'],
        successTitle = this.messages['successDefaultTitle'],
        successBody = this.messages['successDefaultBody'],
        failTitle = this.messages['failDefaultTitle'],
        failBody = this.messages['failDefaultBody'],
        warningBody = this.messages['warningDefaultBody'],
        warningTitle = this.messages['warningDefaultTitle'],
        reset = false,
        storeDispatch = null,
        validationForm = null,

        data = {},
      } = {}) {
        return validate.validateAll().then((result) => {
          if (result) {
            return Vue.prototype.$snotify.async(
              LoadingBody,
              LoadingTitle,
              () => {
                succesValidate(result)

                return new Promise((resolve, reject) => {
                  return this.store
                    .dispatch(storeDispatch, data)
                    .then((response) => {
                      successServer(response)

                      resolve({
                        title: successTitle,
                        body: successBody,
                        config: {
                          timeout: 2000,
                          closeOnClick: true,
                        },
                      })
                      return response
                    })
                    .catch((error) => {
                      console.error({ error })
                      error = error.response ? error.response : {}
                      error.body = error.data
                      if (
                        error.body &&
                        error.body.message &&
                        error.body.message !== ''
                      ) {
                        failBody = error.body.message
                      }
                      if (error.body && error.body.errors) {
                        if (validationForm) {
                          let errors = {}
                          for (var field in error.body.errors) {
                            if (validationForm.fields[field]) {
                              errors[field] = error.body.errors[field]
                            }
                          }
                          validationForm.setErrors(errors)
                        }
                        for (var key in error.body.errors) {
                          error.body.errors[key].forEach(function (element) {
                            Vue.prototype.$snotify.error(element, key, {
                              timeout: 2500,
                              closeOnClick: false,
                            })
                          })
                        }
                        reject({
                          title: failTitle,
                          body: failBody,

                          config: {
                            timeout: 2000,
                            closeOnClick: true,
                          },
                        })
                      } else {
                        reject({
                          title: failTitle,
                          body: failBody,

                          config: {
                            timeout: 2500,
                            closeOnClick: true,
                          },
                        })
                      }

                      failServer(error)

                      return error
                    })
                })
              }
            )
          } else {
            Vue.prototype.$snotify.warning(warningBody, warningTitle, {
              timeout: 2500,
              closeOnClick: false,
            })
            failedValidate(result)
          }
        })
      },
    }
    Vue.prototype.$vss = Vue.vss
    Vue.prototype.$get = get
  },
}
export default vss
