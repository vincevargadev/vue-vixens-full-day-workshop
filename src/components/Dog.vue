<template>
  <v-card color="grey lighten-2">
    <!-- To bind attributes dynamically we need : "colon" which is a v-bind directive's shortcut -->
    <v-img :src="dog.img" height="170px"/>
    <v-card-title>
      <div>
        <!--
          Vue uses "mustache" syntax: double curly braces like these: {{ }}.
          The mustache tag will be replaced with the value of the binded property
        -->
        <h3>{{ dog.name }}</h3>
        <p>{{ dog.breed }}</p>
      </div>
    </v-card-title>
    <v-btn @click="$emit('addToFavorites', dog)">Add to Favorites</v-btn>
  </v-card>
</template>

<script>
export default {
  // Property: pass in some data to the component
  props: {
    dog: {
      type: Object
    }
  }
}
</script>
