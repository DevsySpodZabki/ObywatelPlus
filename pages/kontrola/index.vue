<template>
    <div class="curved-background">
      <v-main>
        <v-container style="margin-top:100px;">
          <v-dialog
            v-model="dialog"
            width="700"
          >
            <template #activator="{ on}">
              <v-btn
                v-if="loggedIn"
                large
                class="rounded-lg"
                color="primary"
                dark
                v-on="on"
              >
                Utwórz post
              </v-btn>
            </template>
  
            <AppKontrolaAdd @close="dialog=false" />
          </v-dialog>
          <v-row>
            <v-col
            v-for="(item,index) in posty"
              :key="item.name"
              cols="12"
              md="6"
              lg="4"
              xl="3"
            >
              <v-card
                :loading="loading"
                class="mx-auto my-12"
              >
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  />
                </template>
  
                <v-img
                  height="250"
                  :src="item.banner ? item.banner : 'https://cdn.vuetifyjs.com/images/cards/cooking.png'"
                >
                  <v-card-title>
                    <div class="text-h3">
                      {{ item.name }}
                    </div>
                  </v-card-title>
                </v-img>
  
                <v-card-title>{{ item.name }}</v-card-title>
  
                <v-card-text>
                  <div class="text-subtitle-1">
                    Post utworzony przez: {{ item.user }}
                  </div>
                  <div class="text-subtitle-1">
                    Komentarze: {{ comments(item) }}
                  </div>
                  <br>
                  <div>{{ item.opis }}</div>
                </v-card-text>
  
                <v-divider class="mx-4" />
  
                <v-card-actions>
                  <v-container>
                    <v-btn
                      block
                      color="deep-purple lighten-2"
                      :to="`/kontrola/${index}`"
                      text
                    >
                      Zobacz cały post
                    </v-btn>
                  </v-container>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  
  export default {
    name: 'KontrolaPage',
    data () {
      return {
        posty: {},
        loading: false,
        selection: 1,
        dialog: false
      }
    },
    computed: {
      ...mapGetters([
        'loggedIn'
      ])
    },
    mounted () {
      this.$fire.database.ref('posty').on('value', (snapshot) => {
        this.posty = snapshot.val()
      })
    },
    methods: {
      comments(item) {
      if (item.comments) {
        return Object.keys(item.comments).length
      } else {
        return 0
      }
    },
    }
  }
  </script>
  