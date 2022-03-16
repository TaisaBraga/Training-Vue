<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Clube
          </th>
          <th class="text-left">
            Pontos
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in classification"
          :key="item.clube"
        >
          <td>{{ item.clube }}</td>
          <td>{{ item.pontos }}</td>
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
  }

}
</script>