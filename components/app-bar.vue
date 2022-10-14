<template>
  <div>
    <v-app-bar fixed light app>
      <nuxt-link to="/" style="text-decoration: none; color: inherit;">
        <v-toolbar-title class="mr-3 ml-3">
          Obywatel Plus
        </v-toolbar-title>
      </nuxt-link>
      <v-menu left bottom>
        <template #activator="{ attrs }">
          <v-btn
            icon
            aria-label="theme"
            v-bind="attrs"
            @click="toggleDarkTheme"
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
      <v-spacer />
      <v-toolbar-items>
        <v-btn text to="/inicjatywy">
          <v-icon>
            mdi-lightbulb
          </v-icon>
          <span class="hidden-sm-and-down ml-2">
            Utwórz inicjatywę społeczną
          </span>
        </v-btn>
        <v-btn text to="/pomoc">
          <v-icon>
            mdi-map-marker-radius
          </v-icon>
          <span class="hidden-sm-and-down ml-2">
            Znajdź lub ogłoś pomoc na mapie
          </span>
        </v-btn>
        <v-btn text to="/zbiorki">
          <v-icon>
            mdi-piggy-bank
          </v-icon>
          <span class="hidden-sm-and-down ml-2">
            Zbiórki & budżety obywatelskie
          </span>
        </v-btn>
        <v-dialog
          v-if="!loggedIn"
          width="600"
        >
          <template #activator="{ on }">
            <v-btn
              color="red"
              dark
              v-on="on"
            >
              Zaloguj się
            </v-btn>
          </template>
          <v-card class="rounded-lg pa-3" outlined>
            <v-card-title class="text-h4 mb-3">
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
