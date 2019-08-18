<template>
  <div class='container' style='margin-top:30px;width:1100px'>
    <nav class='navbar' role='navigation' aria-label='main navigation'>
      <!-- BRAND -->
      <div class='navbar-brand'>
        <img src='../assets/logo.png' width='60' height='20'>
      </div>
      <div class='navbar-item'>
        <strong>Authentication with Vue and JWT</strong>
      </div>
      <!-- AUTH -->
      <div class='navbar-end'>
        <div class='navbar-item'>
          <div class='buttons'>
            <a class='button is-primary'>
              <strong>Sign up</strong>
            </a>
            <a class='button is-light'>
              Log in
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'AppNavbar'
  }
</script>
