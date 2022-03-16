<template>
  <div id="App">
    <v-app>
      <AppTopBar/>
      <HomePage/>
    </v-app>
  </div>
</template>

<script>

import HomePage from './components/HomePage.vue'
import AppTopBar from './components/shared/VueAppTopBar.vue'

export default {
  name: 'App',

  components: {
    HomePage,
    AppTopBar,
  },

}
</script>

<style scoped>

</style>