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
        <Dog :dog="dog" @addToFavorites="addToFavorites"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
import Dog from '../components/Dog.vue'
import { dogs as dataDogs } from '../data/dogs'

axios.defaults.baseURL = "https://dog.ceo/api";

export default {
  components: {
    // Let Vue know that we are doing to use the Dog component
    Dog
  },
  methods: {
    ...mapActions(['addToFavorites'])
  },
  data() {
    return { dogs: [] }
  },
  // This is a lifecycle hook https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks
  async created() {
    // An array of strings where each string is a URL for later fetching a random image for the dog breed
    const randomLinks = dataDogs.map(dog => `/breed/${dog.breed}/images/random`)
    // Fetch multiple dog information simultaneously, then
    // Wait for all promises to resolve
    const randomRequests = await Promise.all(randomLinks.map(link => axios.get(link)))
    // The images are in the response body, under the "message" key
    const randomDogImages = randomRequests.map(request => request.data.message)
    // The dogs we display will get their names and breeds from the js file in data
    // but we replace their images with a random image with the same breed
    this.dogs = dataDogs.map((dog, index) => ({
      // Use everything from the original dog data...
      ...dog,
      // Except we replace the dog's images
      img: randomDogImages[index],
    }))
  }
}
</script>


<style scoped>
p {
  margin: 0;
}
</style>