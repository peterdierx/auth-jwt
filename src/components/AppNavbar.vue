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
          <strong>Authentication with Vue and JWT</strong>
        </div>
        <!-- AUTH -->
        <div class='navbar-end'>
          <div class='navbar-item'>
            <div class='buttons'>
              <router-link to='/signup' class='button is-primary'>
                <strong>Sign up</strong>
              </router-link>
              <a class='button is-light'>
                Log in
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppNavbar'
  }
</script>
