<template>
<v-app>
<v-main>
  <AppBar />
  <v-row no-gutters>
    <v-theme-provider dark>
      <v-container>
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
            <svg-icon name="wolontariusz"  width="100%" height="100%"/>
          </v-col>
        </v-row>
      </v-container>
    </v-theme-provider>
  </v-row>
  <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <svg-icon name="lokalizacja1"  width="100%" height="100%" />
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
            <svg-icon name="zbiorki" width="100%" height="100%" />
          </v-col>
        </v-row>
    </v-container>
</v-main>
</v-app>
</template>
<script>
import AppBar from '../components/app-bar.vue';
export default {
    name: "Index",
    components: { AppBar }
}
</script>
