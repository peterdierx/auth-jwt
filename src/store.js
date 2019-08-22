import Vue   from 'vue'
import Vuex  from 'vuex'
import axios from 'axios'

Vue.use( Vuex )

export default new Vuex.Store({
  state: {
    token: localStorage.getItem( 'token' ) || ''
  },
  mutations: {
    authenticate( state, token ) {
      state.token = token
    },
    logout( state ) {
      state.token = ''
      localStorage.clear( 'token' )
    }
  },
  actions: {
    async signup( { commit }, user ) {
      let token = ( await( axios.post( 'http://localhost:4567/signup', user ) )).data
      localStorage.setItem( 'token', token )
      axios.defaults.headers.common['Authorization'] = token
      commit( 'authenticate', token )
    }
  }
})
