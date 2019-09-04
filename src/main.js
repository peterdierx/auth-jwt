// MODULES
import Vue    from 'vue'
import App    from '@/App'
import router from '@/router'
import store  from '@/store'

// BULMA
import 'bulma/css/bulma.css'

// DIRECTIVES
import directives from '@/directives'

// CONFIG
Vue.config.productionTip = false

// APP
new Vue({
  router,
  store,
  render: h => h( App )
}).$mount( '#app' )
