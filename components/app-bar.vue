<template>
  <div>
    <v-app-bar fixed :color="bg" :elevation="el">
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
      <v-toolbar-items style="margin:0px;">
        <v-btn text to="/inicjatywy" class="hidden-sm-and-down">
          <v-icon>
            mdi-lightbulb
          </v-icon>
          <span class="hidden-md-and-down ml-2">
            Utwórz inicjatywę społeczną
          </span>
        </v-btn>
        <v-btn text to="/kontrola" class="hidden-sm-and-down">
          <v-icon>
            mdi-account-tie-hat
          </v-icon>
          <span class="hidden-md-and-down ml-2">
            Kontrola samorządów
          </span>
        </v-btn>
        <v-btn text to="/zbiorki" class="hidden-sm-and-down">
          <v-icon>
            mdi-piggy-bank
          </v-icon>
          <span class="hidden-md-and-down ml-2">
            Zbiórki & budżety obywatelskie
          </span>
        </v-btn>
        <v-dialog
          v-if="!loggedIn"
          v-model="dialogSignin"
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
          <v-card class="rounded-lg" outlined>
            <v-card-title class="text-h4 mb-3">
              Zaloguj się
              <v-spacer />
              <v-btn
                icon
                dark
                @click="dialogSignin=false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text>
              <App-signin />
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-menu v-else offset-y>
          <template #activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              {{ account }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="dialog=true">
              <v-list-item-title>Uzupełnij Imię i Nazwisko</v-list-item-title>
            </v-list-item>
            <v-list-item @click="logout">
              <v-list-item-title>Wyloguj się</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>
    <v-dialog
      v-model="dialog"
      persistent
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5">
          Uzupełnij swoje imię i nazwisko
        </v-card-title>

        <v-card-text>
          <v-text-field
            v-model="name"
            label="Wpisz swoje imię i nazwisko"
          />
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="next"
          >
            Dalej
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppBar',

  data () {
    return {
      dialogSignin: false,
      bg: 'transparent',
      dialog: false,
      el: '0',
      name: ''
    }
  },
  watch: {
    loggedIn () {
      if (this.loggedIn) {
        this.name = this.$store.state.user.displayName
      }
    }
  },
  computed: {
    ...mapGetters([
      'loggedIn'
    ]),
    account () {
      if (this.$store.state.user && this.$store.state.user.displayName) {
        return this.$store.state.user.displayName.split(' ')[0]
      } else {
        return 'Konto'
      }
    }
  },
  mounted () {
    if (this.loggedIn && !this.$store.state.user.displayName) {
      this.dialog = true
    }
    if (this.loggedIn && this.$store.state.user.displayName) {
      this.name = this.$store.state.user.displayName
    }
    window.onscroll = () => {
      this.changeColor()
    }
  },
  methods: {
    toggleDarkTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('dark', this.$vuetify.theme.dark.toString())
    },
    logout () {
      this.$fire.auth.signOut()
      this.$router.push('/')
    },
    next () {
      this.dialog = false
      this.$fire.auth.currentUser.updateProfile({ displayName: this.name }).then(() => {
        document.location.reload()
      })
    },
    changeColor () {
      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
      ) {
        this.bg = ''
        this.el = '5'
      } else {
        this.bg = 'transparent'
        this.el = '0'
      }
    }
  }
}
</script>
