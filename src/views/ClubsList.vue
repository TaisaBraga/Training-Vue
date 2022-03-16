<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Classificação dos Clubes</h2>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      clubsList: []
    }
  },
  created(){
    fetch('https://hackthon-decola.firebaseio.com/clubes-lista.json')
    .then(response => response.jason())
    .then(json => {
      this.clubsList = json
    })
  }
  
}
</script>

<style scoped>

</style>