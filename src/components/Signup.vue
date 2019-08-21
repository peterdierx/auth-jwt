<template>
  <div class='container' style='margin-top:30px;width:1100px'>
    <div class='box' style='width:400px;'>
      <form @submit.prevent='signup'>
        <!-- NAME -->
        <div class='field'>
          <label class='label'>Name</label>
          <p class='control'>
            <input ref='name' class='input' type='text' placeholder='Name' v-model='user.name'>
          </p>
        </div>

        <!-- PASSWORD -->
        <div class='field'>
          <label class='label'>Password</label>
          <p class='control'>
            <input class='input' type='password' placeholder='Password' v-model='user.password'>
          </p>
        </div>

        <!-- SAVE -->
        <div class='field is-grouped'>
          <p class='control'><button class='button is-info'>Save</button></p>
          <p class='control'><router-link class='button is-success' to='/auth'>Cancel</router-link></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  const api = axios.create( { baseURL: 'http://localhost:4567' } )

  export default {
    name: 'Signup',
    data() {
      return {
        user: {
          name: '',
          password: ''
        }
      }
    },
    methods: {
      async signup() {
        const token = await( api.post( '/users', this.user ) )
        localStorage.setItem( 'token', token.data )
        api.defaults.headers.common[ 'Authorization' ] = token.data
        this.$store.commit( 'authenticate' )
        this.$router.push( 'auth' )
      }
    }
  }
</script>
