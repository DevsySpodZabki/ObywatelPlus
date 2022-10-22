<template>
  <div class="curved-background">
    <v-main>
      <v-container style="margin-top:100px;">
        <v-row>
          <v-col cols="2">
              <v-list color="rgb(0, 0, 0, 0.1)">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      Post utworzony przez:
                    </v-list-item-title>
                    <v-list-item-title>
                      Wiktor Józwiak
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  link
                  color="grey lighten-4"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      Wróć do strony z kontrolą
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
          </v-col>

          <v-col>
            <v-card
              rounded="lg"
              color="rgb(0, 0, 0, 0.1)"
            >
            <v-card-title class="display-2" >Tytuł</v-card-title>
            <v-card-subtitle></v-card-subtitle>
            <v-card-text class="display-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
            <v-card-actions>
              <v-btn
                      outlined
                      large
                      class="mb-1"
                      color="purple"
                      dark
                      rounded
                      @click="$vuetify.goTo('#komentarze')"
                    >
                      Skomentuj
                    </v-btn>
            </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <selection id="komentarze">
        <v-row>
        <v-col>
          <v-card color="transparent">
            <v-card-title class="display-1">Komentarze</v-card-title>

            <v-card-text>Test</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </selection>
      </v-container>
    </v-main>
    </div>
</template>
  
<script>
  export default {
    name: 'PostID'
  }
</script>