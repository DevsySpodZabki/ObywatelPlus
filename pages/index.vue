<template>
  <v-app>
    <v-main>
      <AppBar />
      <v-row no-gutters>
        <v-theme-provider dark>
          <v-container>
            <v-lazy
              v-model="isActive"
              :options="{ threshold: .5 }"
              min-height="200"
              transition="fade-transition">
            <v-row>
              <v-col class="d-flex" cols="12" md="6">
                <span class="my-auto">
                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-2': 'display-4']"
                    class="font-weight-black"
                  >
                    Obywatel Plus
                  </span>
                  <br>
                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1': 'display-1']"
                  >
                    Projekt ten ma na celu skupić wiele przydatnych rzeczy w jednym miejscu, przydatnych dla obywateli naszego kraju. W tym serwisie możesz zaoferować lub poprosić o pomoc, jest również możliwość tworzenia zbiórek pieniędzy.
                  </span>
                </span>
              </v-col>

              <v-col cols="12" md="6">
                <v-img src="wolontariusz.svg" />
              </v-col>
            </v-row>
            </v-lazy>
          </v-container>
        </v-theme-provider>
      </v-row>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-img src="lokalizacja1.svg" />
          </v-col>
          <v-col class="d-flex" cols="12" md="6">
            <span class="my-auto">
              <span
                :class="[$vuetify.breakpoint.smAndDown ? 'display-2': 'display-2']"
                class="font-weight-black"
              >
                Interaktywna mapa do pomagania
              </span>
              <br>
              <span
                :class="[$vuetify.breakpoint.smAndDown ? 'display-1': 'display-1']"
              >
                Stwórz lokację lub obszar, w której zaoferujesz pomoc innym użytkownikom, możesz rónież poprosić o pomoc. Skontaktuj się z naszymi użytkownikami za pomocą wbudowanego czatu, lub przez podanie swoich mediów społecznościowych.
              </span>
            </span>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row>
          <v-col class="d-flex" cols="12" md="6">
            <span class="my-auto">
              <span
                :class="[$vuetify.breakpoint.smAndDown ? 'display-2': 'display-2']"
                class="font-weight-black"
              >
                Tworzenie zbiórek oraz gromadzenie budżetów obywatelskich
              </span>
              <br>
              <span
                :class="[$vuetify.breakpoint.smAndDown ? 'display-1': 'display-1']"
              >
                Stwórz swoją zbiórkę pieniędzy i zbieraj pieniądze na swój cel, możesz również zaangażować się pomagając w zbieraniu pieniędzy, innym lub zorganizować budżet obywatelski na określony cel.
              </span>
            </span>
          </v-col>
          <v-col cols="12" md="6">
            <v-img src="zbiorki.svg" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import AppBar from '../components/app-bar.vue'
export default {
  name: 'IndexPage',
  data: () => ({
      isActive: false,
    }),
  components: { AppBar }
}
</script>

<style>
#app {
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 200% 200%;
	animation: gradient 15s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
