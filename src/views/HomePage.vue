<template>
      <div>
        <v-container>
        <h2 class="title-home">Brasileirão Série A</h2>
        <v-layout align-center justify-center>
          <v-img class="home-image"
          src="https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.2974821:1596806515/Serie-A.jpg"></v-img>
        </v-layout>
        <p class="text-home">A Série A do Campeonato Brasileiro de Futebol de 2020, oficialmente Brasileirão Assaí - Série A 2020 por motivos de patrocínio, é a 64.ª edição da principal divisão do futebol brasileiro. A disputa tem o mesmo regulamento dos anos anteriores, quando foi implementado o sistema de pontos corridos.</p>
        </v-container>
      </div>
</template>
<script>
export default {
  name: 'HomePage',
}

</script>
<style scoped>
.title-home {
  font-size: 40px;
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