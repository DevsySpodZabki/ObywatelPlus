<template>
  <v-app>
    <v-row no-gutters>
      <v-theme-provider dark>
        <div class="curved-background">
          <v-container style="height: 100vh">
            <v-row class="mt-15">
              <v-col class="d-flex" cols="12" md="6">
                <span class="my-auto">
                  <div
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-4': 'display-4']"
                    class="font-weight-black mx-sm-15 mx-md-0"
                  >
                    Obywatel Plus
                  </div>
                  <br>
                  <br>
                  <div
                    class="headline mx-sm-15 mx-md-0"
                  >
                    Projekt ten ma na celu skupić wiele rzeczy w jednym miejscu, przydatnych dla obywateli naszego kraju. W tym serwisie możesz zaoferować lub poprosić o pomoc, jest również możliwość tworzenia zbiórek pieniędzy.
                  </div>
                  <br>
                  <br>
                  <div class="mx-sm-15 mx-md-0">
                    <v-btn
                      outlined
                      large
                      class="mb-1"
                      color="blue"
                      dark
                      rounded
                      @click="$vuetify.goTo('#kontrola')"
                    >
                      Onbywatelska kontrola samorządów
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
                  </div>
                </span>
              </v-col>

              <v-col cols="12" md="6" class="d-flex">
                <v-img class="hidden-sm-and-down my-auto mx-auto" src="wolontariusz.svg" />
              </v-col>
            </v-row>
            <center>
              <v-btn
                class="align-self-end"
                fab
                color="blue"
                outlined
                aria-label="goTo"
                @click="$vuetify.goTo('#kontrola')"
              >
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </center>
          </v-container>
        </div>
      </v-theme-provider>
    </v-row>

    <section id="kontrola">
      <v-container>
        <v-row>
          <v-col cols="12" lg="6" class="d-flex">
            <v-img class="mx-auto" src="kontrola.svg" />
          </v-col>
          <v-col class="d-flex" cols="12" lg="6">
            <span class="my-auto  mx-sm-15 mx-md-0">
              <span
                :class="[$vuetify.breakpoint.smAndDown ? 'display-2': 'display-2']"
                class="font-weight-black"
              >
                Obywatelska kontrola samorządów
              </span>
              <br>
              <br>
              <span
                class="headline"
              >
                Weź udział w dyskusji, kontroluj samorządy jako obywatel. Umieszczaj swoje przemyślenia na temat ruchów samorządów.
              </span>
            </span>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section id="zbiorki">
      <v-container>
        <v-row>
          <v-col cols="12" lg="6" class="d-flex" v-if="$vuetify.breakpoint.smAndDown">
            <v-img class="mx-auto" max-height="500" max-width="500" src="zbiorki.svg" />
          </v-col>
          <v-col class="d-flex" cols="12" lg="6">
            <span class="my-auto  mx-sm-15 mx-md-0">
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
          <v-col cols="12" lg="6" class="d-flex" v-if="$vuetify.breakpoint.mdAndUp">
            <v-img class="mx-auto" src="zbiorki.svg" />
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section id="ideas" class="mb-15">
      <v-container>
        <v-row>
          <v-col cols="12" lg="6" class="d-flex">
            <v-img class="mx-auto"  src="ideas.svg" />
          </v-col>
          <v-col class="d-flex" cols="12" lg="6">
            <span class="my-auto  mx-sm-15 mx-md-0">
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
