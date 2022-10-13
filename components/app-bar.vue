<template>
<<<<<<< HEAD
  <div>
    <v-app-bar fixed light app>
      <nuxt-link to="/" style="text-decoration: none; color: inherit;">
        <v-toolbar-title class="mr-3 ml-3">
          Obywatel Plus
        </v-toolbar-title>
      </nuxt-link>
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
      <v-toolbar-items>
=======
  <v-app-bar fixed light app>
    <v-toolbar-title>
      <router-link to="/">
        <v-btn class="mx-0">
          Obywatel Plus
        </v-btn>
      </router-link>
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
        <v-btn v-if="!loggedIn" text to="/auth/signin">
          Zaloguj się
        </v-btn>
        <v-btn v-else text to="/panel">
          Przejdź do panelu
        </v-btn>
>>>>>>> origin/master
        <v-btn color="accent" text>
          <v-icon>
            mdi-map-marker-radius
          </v-icon>
          <span class="hidden-sm-and-down ml-2">
            Znajdź lub ogłoś pomoc na mapie
          </span>
        </v-btn>
        <v-btn color="accent" text to="/zbiorki">
          <v-icon>
            mdi-piggy-bank
          </v-icon>
          <span class="hidden-sm-and-down ml-2">
            Zbiórki & budżety obywatelskie
          </span>
        </v-btn>
        <v-dialog
          v-if="!loggedIn"
          width="500"
        >
          <template #activator="{ on, attrs }">
            <v-btn
              color="red lighten-2"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Zaloguj się
            </v-btn>
          </template>
          <v-card class="rounded-lg">
            <v-card-title class="text-h5">
              Zaloguj się
            </v-card-title>
            <v-card-text>
              <App-signin />
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-btn v-else text @click="logout">
          Wyloguj się
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <div
      id="recaptcha-container"
      class="justify-center flex"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppBar',
  computed: {
    ...mapGetters([
      'loggedIn'
    ])
  },
  methods: {
    toggleDarkTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('dark', this.$vuetify.theme.dark.toString())
    },
    logout () {
      this.$fire.auth.signOut()
      this.$router.push('/')
    }
  }
}
</script>
