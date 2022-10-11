<template>
  <v-app-bar fixed light>
    <v-toolbar-title>
      Obywatel Plus
      <v-btn color="accent" text to="/sponsor">
        <v-icon>
          mdi-cards-heart
        </v-icon>
        <span class="hidden-sm-and-down ml-2">
          Wesprzyj projekt
        </span>
      </v-btn>
    </v-toolbar-title>
    <v-spacer />
    <v-menu left bottom>
      <template #activator="{ on, attrs }">
        <v-btn
          icon
          aria-label="theme"
          v-bind="attrs"
          @click="toggleDarkTheme"
          v-on="on"
        >
          <v-icon v-if="$vuetify.theme.dark">
            mdi-white-balance-sunny
          </v-icon>
          <v-icon v-if="!$vuetify.theme.dark">
            mdi-weather-night
          </v-icon>
        </v-btn>
      </template>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  methods: {
    toggleDarkTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('dark', this.$vuetify.theme.dark.toString())
    }
  }
}
</script>
