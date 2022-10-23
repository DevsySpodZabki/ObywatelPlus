<template>
  <div class="curved-background">
    <v-main>
      <v-container style="margin-top:100px;">
        <v-dialog
          v-if="loggedIn"
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
              Stwórz zbiórkę
            </v-btn>
          </template>

          <App-zbiorka-add @close="dialog=false" />
        </v-dialog>
        <v-row>
          <v-col
            v-for="(item,key) in zbiorki"
            :key="key"
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
              />

              <v-card-title>{{ item.name }}</v-card-title>

              <v-card-text>
                <div class="text-subtitle-1">
                  Zbiórka utworzona przez: {{ item.user }}<br>
                  Cel zbiórki: {{ item.goal }} zł
                </div>
                <br>
                <div>{{ item.description }}</div>
                <br>
                <v-progress-linear
                  color="blue"
                  rounded
                  height="25"
                  :value="collected_chart(item)"
                  stream
                >
                  <template #default="{ value }">
                    <strong>Zebrano już {{ Math.ceil(Math.round(value * 100)) / 100 }}% ({{ item.collected }} zł)</strong>
                  </template>
                </v-progress-linear>
              </v-card-text>

              <v-divider class="mx-4" />
              <v-text-field v-model="item.ile" value="1" label="Ile chcesz wpłacić (zł)?" type="number" class="mx-3" />
              <v-card-actions>
                <v-container>
                  <v-btn
                    block
                    color="deep-purple lighten-2"
                    text
                    @click="wplac(item)"
                  >
                    Wpłać pieniądze
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
import md5 from 'md5'

export default {
  name: 'ZbiorkiPage',
  data () {
    return {
      loading: false,
      selection: 1,
      dialog: false,
      zbiorki: {}
    }
  },
  computed: {
    ...mapGetters([
      'loggedIn'
    ])
  },
  mounted () {
    this.$fire.database.ref('zbiorki').on('value', (snapshot) => {
      this.zbiorki = snapshot.val()
    })
  },
  methods: {
    collected_chart (item) {
      return item.collected / item.goal * 100
    },
    wplac(item){
      const amount = this.ile
      const signature = md5(`914Dn5G$5!z0Aw8Is7Wt1Gl2Ud9Ju8Fi1Km${item.ile}`)
      document.location.href = `https://microsms.pl/api/bankTransfer/?shopid=914&signature=${signature}&amount=${item.ile}&description=${item.name}`
    }
  }
}
</script>
