// MODULES
import Vue    from 'vue'
import App    from '@/App'
import router from '@/router'

// BULMA
import 'bulma/css/bulma.css'

// CONFIG
Vue.config.productionTip = false

// APP
new Vue({
  router,
  render: h => h( App )
}).$mount( '#app' )
