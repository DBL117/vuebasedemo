// import Vue from 'vue/dist/vue.esm'
import Vue from 'vue'
import App from './App.vue'



// aaa
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
