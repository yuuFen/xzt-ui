import Vue from 'vue'
import App from './App.vue'

import yui from '../packages/index'
import '../packages/index.scss'

Vue.use(yui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
