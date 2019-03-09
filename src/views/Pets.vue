<template>
  <v-container grid-list-md fluid>
    <v-layout wrap>
      <!-- v-for directive to loop over the dogs -->
      <!-- the individual dogs will be referred to as "dog" -->
      <v-flex xs12 sm4 md3 v-for="dog in dogs" :key="dog.breed">
        <!--
          Use a component that we created for encapsulating a dog card.
          We pass information to the component about a dog
        -->
        <Dog :dog="dog"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Dog from '../components/Dog.vue'
import { dogs } from '../data/dogs'

export default {
  components: {
    // Let Vue know that we are doing to use the Dog component
    Dog
  },
  data() {
    return { dogs }
  }
}
</script>


<style scoped>
p {
  margin: 0;
}
</style>