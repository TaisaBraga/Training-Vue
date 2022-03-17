<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Classificação</h2>
    <TableList :clubs='orderedClubs'/>
  </v-container>
</template>

<script>
// import TableList from '../components/TableList'

export default {
  name: 'ClubsList',

  data(){
    return {
      clubsList: []
    }
  },
created(){
    fetch('https://hackthon-decola.firebaseio.com/clubes-lista.json')
      .then(response => response.json())
      .then(json => {
      this.clubsList = json
      console.log(this.clubsList)
    })
    
  }
}
</script>

<style scoped>

</style>