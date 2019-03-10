<template>
  <div>
    <v-list>
      <v-subheader v-if="!favorites.length">Your favorites list is empty</v-subheader>
      <template v-else>
        <v-subheader>My Favorites</v-subheader>
        <v-list-tile avatar v-for="(dog, index) in favorites" :key="index" @click="{}">
          <v-list-tile-avatar>
            <img :src="dog.img">
          </v-list-tile-avatar>
          <v-list-tile-content>
            {{ dog.name }}
          </v-list-tile-content>
          <v-list-tile-action @click="removeFromFavorites(dog)">
            <v-icon>delete</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </template>
    </v-list>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['removeFromFavorites'])
  },
  computed: {
    favorites() {
      return this.$store.state.favorites
    }
  }
}
</script>
