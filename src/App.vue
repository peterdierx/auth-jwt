<template>
  <div id='app'>
    <AppNavbar v-if="$route.name !== 'home'"/>
    <router-view/>
  </div>
</template>

<script>
  import AppNavbar from '@/components/AppNavbar'

  export default {
    name: 'App',
    components: { AppNavbar }
  }
</script>
