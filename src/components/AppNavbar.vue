<template>
  <div class='container' style='margin-top:30px;width:1100px'>
    <div class='box'>
      <nav class='navbar' role='navigation' aria-label='main navigation'>
        <!-- BRAND -->
        <div class='navbar-brand'>
          <router-link to='/'>
            <img src='../assets/logo.png' width='60' height='20'>
          </router-link>
        </div>
        <div class='navbar-item'>
          <strong v-if='!$store.state.token'>Authentication with Vue and JWT</strong>
          <strong v-else>Authenticated</strong>
        </div>
        <!-- AUTH -->
        <div class='navbar-end'>
          <div class='navbar-item'>
            <div class='buttons'>
              <button class='button is-primary' v-show='!$store.state.token' @click='signup'>
                <strong>Sign up</strong>
              </button>
              <router-link to='login' class='button is-light' v-show='!$store.state.token'>
                Log in
              </router-link>
              <button class='button is-light' v-show='$store.state.token' @click='logout'>
                Log out
              </button>
            </div>
          </div>
        </div>
      </nav>
      
    </div>
    <!-- ERROR -->
    <div v-show='$store.state.error' class='box'>
      <strong color='red'>Invalid username or password.</strong>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppNavbar',
    methods: {
      logout() {
        this.$store.commit( 'logout' )
      },
      signup() {
        this.$store.commit( 'clearError' )
        this.$router.push( '/signup' )
      }
    },
  }
</script>
