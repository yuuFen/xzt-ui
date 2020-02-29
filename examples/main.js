import Vue from 'vue'
import App from './App.vue'

import xztUi from '../packages/index'
import '../packages/index.scss'

Vue.use(xztUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
