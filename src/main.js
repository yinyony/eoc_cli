// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
// import Qs from 'qs'

import VueResource from 'vue-resource'
// import JSEncrypt from 'jsencrypt'
// import jsrsasign from 'jsrsasign'

Vue.use(VueResource)
// Vue.prototype.axios = axios
// Vue.prototype.qs = Qs
Vue.config.productionTip = false
Vue.http.options.emulateJSON = true
Vue.http.options.xhr = { withCredentials: true }
// Vue.http.options.crossOrigin = true
Vue.http.options.emulateHTTP = true

// // 输出加密结果
// console.log(encrypted)
// jse.setPrivateKey('MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAJ4l2OhEmVOTtoyyRSqk0uvxBjQIFHRaGOjL9bFBGl1KZyVMkosKGWfhYs4Y5MU5V1gMJIZUpjmcit5Qp6301aM2r43QkKYdRjOV4h91iqWQzSkciO9d+yp3v8qwRtys+CCB+Sb6/Xe4z++Qhq6IaisB0ATPvP4WC8tUIWCc2QIhAgMBAAECgYA+PcUFfOIfW5ZP/2VraB0/EMgROFDcjg0ZqhQTY/z9VGgN7PoL0Li5AqKBXJjE6lFu7LB/Uddt+ydIYdPsidx+VaRBHcGh2b7t6Psb9TOCSGKAMl1BNV74/2moFgttsKqI2upz/raAE4U/a3IoMZQlzoBvzOQp1rzIyUCf5fu3sQJBAN++bGCj30OZH6ZTNV/uHkJRO8Lpw94fahne3jHDVBhWwsIb81oYczEnJO6B0mZA13Zm17BUpJ4/5O10uYbP6C0CQQC08oM61nBogGNjPvKoHL8+9A5A3Sgoi3ufAtLAUpC6bFSxeDGud6JrXAVabtMaqh8aetSEdMdKfecdhZXwc+ZFAkBIzODeoPNoP055A+H+ELBvy5ayWPWONJKFUGrjrjaSpMhB+G46BnKUr7Polv0qoDZ7JANSMHhPtWJ7kNs87jERAkBrbt2Jjo5ZDXl1EIfEVqUZ/I+F5YkVYZN5WpTEyYDSnsU+RW3B95gAhDdNdSVz3HPxJeKN7kPxL4WMGqdmh3m9AkBWy9S6xPzADwy6Iy/S0aAQ5PZKUyrywfyYOk0xWSFU0/6aUtPN0BGS6gG1g/xJ0yAc8rHsTHYEbKnHUKcI3utz')
// // 解密加密过的字符串
// let decrypted = jse.decrypt(encrypted)
// console.log(decrypted)

Vue.http.interceptors.push((request, next) => {
  // let jse = new JSEncrypt()
  // jse.setPublicKey('MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCeJdjoRJlTk7aMskUqpNLr8QY0CBR0Whjoy/WxQRpdSmclTJKLChln4WLOGOTFOVdYDCSGVKY5nIreUKet9NWjNq+N0JCmHUYzleIfdYqlkM0pHIjvXfsqd7/KsEbcrPgggfkm+v13uM/vkIauiGorAdAEz7z+FgvLVCFgnNkCIQIDAQAB')
  // 设置需要加密的字符串
  // let encrypted = jse.encrypt(request.body.rName)
  // console.log(encrypted)
  // request.body.rName = encrypted
  // jse.setPrivateKey('MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAJ4l2OhEmVOTtoyyRSqk0uvxBjQIFHRaGOjL9bFBGl1KZyVMkosKGWfhYs4Y5MU5V1gMJIZUpjmcit5Qp6301aM2r43QkKYdRjOV4h91iqWQzSkciO9d+yp3v8qwRtys+CCB+Sb6/Xe4z++Qhq6IaisB0ATPvP4WC8tUIWCc2QIhAgMBAAECgYA+PcUFfOIfW5ZP/2VraB0/EMgROFDcjg0ZqhQTY/z9VGgN7PoL0Li5AqKBXJjE6lFu7LB/Uddt+ydIYdPsidx+VaRBHcGh2b7t6Psb9TOCSGKAMl1BNV74/2moFgttsKqI2upz/raAE4U/a3IoMZQlzoBvzOQp1rzIyUCf5fu3sQJBAN++bGCj30OZH6ZTNV/uHkJRO8Lpw94fahne3jHDVBhWwsIb81oYczEnJO6B0mZA13Zm17BUpJ4/5O10uYbP6C0CQQC08oM61nBogGNjPvKoHL8+9A5A3Sgoi3ufAtLAUpC6bFSxeDGud6JrXAVabtMaqh8aetSEdMdKfecdhZXwc+ZFAkBIzODeoPNoP055A+H+ELBvy5ayWPWONJKFUGrjrjaSpMhB+G46BnKUr7Polv0qoDZ7JANSMHhPtWJ7kNs87jERAkBrbt2Jjo5ZDXl1EIfEVqUZ/I+F5YkVYZN5WpTEyYDSnsU+RW3B95gAhDdNdSVz3HPxJeKN7kPxL4WMGqdmh3m9AkBWy9S6xPzADwy6Iy/S0aAQ5PZKUyrywfyYOk0xWSFU0/6aUtPN0BGS6gG1g/xJ0yAc8rHsTHYEbKnHUKcI3utz')
  // let decrypted = jse.decrypt(encrypted)
  // console.log(decrypted)
  // request.body.rName = decrypted
  // console.log(request.body.rName)
  // modify request // 在请求之前可以进行一些预处理和配置
  // debugger
  // request.method = 'POST'
  // request.headers.set('Content-Type', 'application/json')
  // continue to next interceptor
  // 在响应之后传给then之前对response进行修改和逻辑判断。对于token时候已过期的判断，就添加在此处，页面中任何一次http请求都会先调用此处方法
  next((response) => {
    response.body = '...'
    return response
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
