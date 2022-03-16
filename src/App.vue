<template>
  <div>
    <v-app>
      <v-app-bar
      color="green darken-1"
      app
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Campeonato Brasileiro ⚽</v-toolbar-title>

    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="green--text text--lighten 2"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Início</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-soccer</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Classificação</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    </v-app>
  </div>
  
</template>

<script>

export default {
  name: 'App',

  data(){
    return{
      drawer: false,
      group: null
    }
  }
}
</script>
<style scoped>
.title-home {
  font-size: 40px;
  padding: 10px;
  text-align: center;
}
.home-image{
  border-radius: 1%;
  max-width: 70%;
}

.text-home{
  font-size: 20px;
  text-align: justify;
  padding: 50px;
}

</style>