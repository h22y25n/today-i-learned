import Vue from 'vue'
import App from './App.vue'
import VueSVGIcon from 'vue-svgicon'

Vue.config.productionTip = false
Vue.use(VueSVGIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
