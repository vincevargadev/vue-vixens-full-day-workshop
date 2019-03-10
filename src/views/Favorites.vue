<template>
  <div>
    <v-list>
      <v-subheader>My Favorites</v-subheader>
      <v-list-tile avatar @click="{}">
        <v-list-tile-avatar>
          <img src="https://dog.ceo/api/img/husky/n02110185_1469.jpg">
        </v-list-tile-avatar>
        <v-list-tile-content>Fluffy</v-list-tile-content>
        <v-list-tile-action>
          <v-icon>delete</v-icon>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </div>
</template>
