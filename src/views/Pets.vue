<template>
  <v-container grid-list-md fluid>
    <v-layout wrap>
      <!-- v-for directive to loop over the dogs -->
      <!-- the individual dogs will be referred to as "dog" -->
      <v-flex xs12 sm4 md3 v-for="dog in dogs" :key="dog.breed">
        <v-card color="grey lighten-2">
          <!-- To bind attributes dynamically we need : "colon" which is a v-bind directive's shortcut -->
          <v-img :src="dog.img" height="170px"/>
          <v-card-title>
            <div>
              <!--
                Vue uses "mustache" syntax:
                double curly braces like these: {{ }}.
                The mustache tag will be replaced with the value of the binded property
              -->
              <h3>{{ dog.name }}</h3>
              <p>{{ dog.breed }}</p>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { dogs } from '../data/dogs'

export default {
  data() {
    return { dogs };
  }
}
</script>


<style scoped>
p {
  margin: 0;
}
</style>