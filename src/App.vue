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
      <v-main>
      <h2>Brasileirão Série 2</h2>
      <v-img ></v-img>
      <p>A Série A do Campeonato Brasileiro de Futebol de 2020, oficialmente Brasileirão Assaí - Série A 2020 por motivos de patrocínio, é a 64.ª edição da principal divisão do futebol brasileiro. A disputa tem o mesmo regulamento dos anos anteriores, quando foi implementado o sistema de pontos corridos.</p>
    </v-main>
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