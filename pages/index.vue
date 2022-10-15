<template>
  <v-app>
    <v-row no-gutters>
      <!-- <v-img
          :min-height="'calc(80vh - ' + $vuetify.application.top + 'px)'"
          src="./> -->
      <v-theme-provider dark>
        <div class="curved-background">
          <v-container style="height: 90vh;">
            <v-row class="mt-15">
              <v-col class="d-flex" cols="12" md="6">
                <span class="my-auto">
                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                    class="font-weight-black"
                  >
                    Obywatel plus
                  </span>
                  <br>
                  <br>
                  <span
                    class="headline"
                  >
                    Projekt ten ma na celu skupić wiele rzeczy w jednym miejscu, przydatnych dla obywateli naszego kraju. W tym serwisie możesz zaoferować lub poprosić o pomoc, jest również możliwość tworzenia zbiórek pieniędzy.
                  </span>
                  <br>
                  <br>
                  <v-container>
                    <v-btn
                      outlined
                      large
                      class="mb-1"
                      color="blue"
                      dark
                      rounded
                      @click="$vuetify.goTo('#mapa')"
                    >
                      Zaoferuj lub poproś o pomoc
                    </v-btn>
                    <v-btn
                      outlined
                      large
                      class="mb-1"
                      color="purple"
                      dark
                      rounded
                      @click="$vuetify.goTo('#zbiorki')"
                    >
                      Zbiórki pieniędzy
                    </v-btn>
                    <v-btn
                      outlined
                      large
                      class="mb-1"
                      color="red"
                      dark
                      rounded
                      @click="$vuetify.goTo('#ideas')"
                    >
                      Inicjatywy społeczne
                    </v-btn>
                  </v-container>
                </span>
              </v-col>

              <v-col cols="12" md="6" class="my-auto">
                <v-img src="wolontariusz.svg" />
              </v-col>
            </v-row>
            <center>
              <v-btn
                class="align-self-end"
                fab
                color="blue"
                outlined
                aria-label="goTo"
                @click="$vuetify.goTo('#mapa')"
              >
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </center>
          </v-container>
        </div>
      </v-theme-provider>
      <!-- </v-img> -->
    </v-row>

    <section id="mapa">
      <v-container>
        <v-row>
          <v-col cols="12" md="6" class="my-auto">
            <v-img src="lokalizacja1.svg" />
          </v-col>
          <v-col class="d-flex" cols="12" md="6">
            <span class="my-auto">
              <span
                :class="[$vuetify.breakpoint.smAndDown ? 'display-2': 'display-2']"
                class="font-weight-black"
              >
                Pomaganie z interaktywną mapą
              </span>
              <br>
              <br>
              <span
                class="headline"
              >
                Stwórz obszar lub punkt lokalizacji, w którym zaoferujesz lub poprosisz innych o pomoc. Możesz skontaktować się z innymi za pomocą wbudowanego czatu.
              </span>
            </span>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section id="zbiorki">
      <v-container>
        <v-row>
          <v-col class="d-flex" cols="12" md="6">
            <span class="my-auto">
              <span
                :class="[$vuetify.breakpoint.smAndDown ? 'display-2': 'display-2']"
                class="font-weight-black"
              >
                Tworzenie zbiórek i budżetów obywatelskich
              </span>
              <br>
              <br>
              <span
                class="headline"
              >
                Stwórz zbiórkę pieniędzy lub budżet obywatelski i zacznij zbierać pieniądze na wyznaczony cel. Możesz również przyczynić się do pomocy innym wpłacając pieniądze na inne zbiórki.
              </span>
            </span>
          </v-col>
          <v-col cols="12" md="6" class="my-auto">
            <v-img src="zbiorki.svg" />
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section id="ideas">
      <v-container>
        <v-row>
          <v-col cols="12" md="6" class="my-auto">
            <v-img src="ideas.svg" />
          </v-col>
          <v-col class="d-flex" cols="12" md="6">
            <span class="my-auto">
              <span
                :class="[$vuetify.breakpoint.smAndDown ? 'display-2': 'display-2']"
                class="font-weight-black"
              >
                Dziel się inicjatywami społecznymi dla Twojej gminy lub powiatu
              </span>
              <br>
              <br>
              <span
                class="headline"
              >
                Podziel się Twoim pomysłem na zmiany w Twojej gminie lub powiecie. Zbieraj głosy oraz opinie innych użytkowników na temat Twojego pomysłu. Możesz również podpiąć zbiórkę pieniędzy pod Twój pomysł.
              </span>
            </span>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-app>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    isActive: false
  })
}
</script>
