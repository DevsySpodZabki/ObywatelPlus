<template>
  <v-app-bar fixed light app>
    <v-toolbar-title>
      Obywatel Plus
      <v-btn color="accent" text to="/sponsor">
        <v-icon>
          mdi-cards-heart
        </v-icon>
        <span class="hidden-sm-and-down ml-2">
          Wesprzyj nasz projekt
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
        <v-btn text to="/auth/signin">
              Zaloguj się
            </v-btn>
            <v-btn text to="/auth/signup">
              Zarejestruj się
            </v-btn>
            <v-btn text to="/panel">
              Przejdź do panelu
        </v-btn>
        <v-btn color="accent" text>
          <v-icon>
            mdi-map-marker-radius
          </v-icon>
          <span class="hidden-sm-and-down ml-2">
            Znajdź lub ogłoś pomoc na mapie
          </span>
        </v-btn>
        <v-btn color="accent" text>
          <v-icon>
            mdi-piggy-bank
          </v-icon>
          <span class="hidden-sm-and-down ml-2">
            Zbiórki & budżety obywatelskie
          </span>
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
