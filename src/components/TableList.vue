<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th colspan="2" class="text-left">
            Clube
          </th>
          <th class="text-right">
            Pontos
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(clubs, index) of sortListClubs" :key="clubs.id"> 
          <td>{{ index + 1 }}</td>       
          <td>
            <v-avatar size="24">
              <img
                :src="clubs.escudo"
                :alt="clubs.nome"
              >
            </v-avatar>
            <span  class="pl-2">{{ clubs.nome}}</span>
          </td>
          <td class="text-right">{{ clubs.pontos}}</td>

        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
export default {
  name: 'TableList',
  props:{
    clubs: {
      type: Array,
      required: true
    }
  },
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
    })
  },
  computed:{
    sortListClubs(){
      const sortList = this.clubsList.slice(0).sort(
        (a, b) => a.pontos > b.pontos ? -1 : 1
        );
      return sortList;
    }
  }

}
</script>