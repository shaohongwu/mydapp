import Vue from 'vue'
import App from './App.vue'
import Web3 from 'web3-js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
Vue.use(Web3)