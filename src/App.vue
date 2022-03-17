<template>
  <div id="App">
    <v-app>
      <AppTopBar/>
      <v-main>
        <router-view/>
      </v-main>
    </v-app>
  </div>
</template>

<script>

import AppTopBar from './components/shared/VueAppTopBar.vue'

export default {
  name: 'App',

  components: {
    AppTopBar,
  },

}
</script>

<style scoped>
.link-home {
  color: white;
  text-decoration: none;
}
</style>