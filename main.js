import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* 自定义组件后，需要在此导入后才可使用 */
import pageHead from './components/page-head.vue'
Vue.component('page-head', pageHead)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
