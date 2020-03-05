import Vue from 'vue'
import App from './App.vue'

import XztUi from '../packages/index'
import '../packages/index.scss'
Vue.use(XztUi)

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

import create from '../src/utils/create'
Vue.prototype.$create = create

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
