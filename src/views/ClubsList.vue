<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Classificação</h2>
    <TableList />
  </v-container>
</template>

<script>
import TableList from '../components/TableList'

export default {
  name: 'ClubsList',

  components: {
    TableList,
  },

  // computed:{
  //   orderedListClubs(){
  //     const orderedClubs = this.clubsList.slice(0).short((a, b) => a.pontos > b.pontos ? -1 : 1
  //     );
  //     return orderedClubs
  //   }
  // },
}
</script>

<style scoped>

</style>