import Vue from 'vue'
import App from './App.vue'
import TestUI from '../packages'

Vue.config.productionTip = false
Vue.use(TestUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
