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
              large
              class="rounded-lg"
              color="primary"
              dark
              v-on="on"
            >
              Utwórz inicjatywę
            </v-btn>
          </template>

          <AppInicjatywaAdd @close="dialog=false" />
        </v-dialog>
        <v-row>
          <v-col v-for="(item,index) in inicjatywy" :key="item.name">
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
              />

              <v-card-title>{{ item.name }}</v-card-title>

              <v-card-text>
                <div class="text-subtitle-1">
                  Opis: {{ item.opis }}
                  <br>
                  Inicjatywa utworzona przez: {{ item.user }}<br>
                  Miasto: {{ item.city }} (ZIP: {{ item.zip }}), Gmina: {{ item.gmina }}
                </div>
                <br>
                <div>Zebranych głosów: {{ glosy(item) }}</div>
              </v-card-text>

              <v-divider class="mx-4" />

              <v-card-actions>
                <v-container>
                  <v-btn
                    block
                    color="deep-purple lighten-2"
                    :text="item.collected && item.collected[$store.state.user.uid]"
                    @click="zaglosuj(item,index)"
                    :disabled="!loggedIn"
                  >
                    Przekaż głos na inicjatywę
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
  name: 'InicjatywyPage',
  data () {
    return {
      inicjatywy: {},
      loading: false,
      selection: 1,
      dialog: false
    }
  },
  computed:{
    ...mapGetters([
      'loggedIn'
    ])
  },
  mounted () {
    this.$fire.database.ref('inicjatywy').on('value', (snapshot) => {
      this.inicjatywy = snapshot.val()
    })
  },
  methods:{
    zaglosuj(item,index){
      const {uid} = this.$store.state.user
      if(item.collected && item.collected[uid]){
        this.$fire.database.ref(`inicjatywy/${index}/collected/${uid}`).remove()
      }else{
        this.$fire.database.ref(`inicjatywy/${index}/collected/${uid}`).set(true)
      }
    },
    glosy(item){
      if(item.collected){
        return Object.keys(item.collected).length
      }else{
        return 0
      }
    }
  }
}
</script>
