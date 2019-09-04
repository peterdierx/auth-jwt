<template>
  <div class='container' style='margin-top:30px;width:1100px'>
    <div class='box' style='width:400px;'>
      <form @submit.prevent='login'>
        <!-- NAME -->
        <div class='field'>
          <label class='label'>Name</label>
          <p class='control'>
            <input v-focus ref='name' class='input' type='text' placeholder='Name' v-model='user.name'>
          </p>
        </div>

        <!-- PASSWORD -->
        <div class='field'>
          <label class='label'>Password</label>
          <p class='control'>
            <input class='input' type='password' placeholder='Password' v-model='user.password'>
          </p>
        </div>

        <!-- LOGIN -->
        <div class='field is-grouped'>
          <p class='control'><button class='button is-info'>Login</button></p>
          <p class='control'><router-link class='button is-success' to='/auth'>Cancel</router-link></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        user: {
          name: '',
          password: ''
        }
      }
    },
    methods: {
      async login() {
        this.$store.dispatch( 'login', this.user )
        this.$router.push( 'auth' )
      }
    }
  }
</script>
