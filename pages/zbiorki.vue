<template>
  <div class="curved-background">
    <v-main>
      <v-container>
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
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              />

              <v-card-title>{{ item.name }}</v-card-title>

              <v-card-text>
                <div class="text-subtitle-1">
                  {{ item.author }}
                </div>

                <div>Zebrano {{ item.collected }}zł/{{ item.goal }}zł.</div>
                <br>
                <div>{{ item.description }}</div>
              </v-card-text>

              <v-divider class="mx-4" />

              <v-card-actions>
                <v-container>
                  <v-progress-linear
                    color="red lighten-2"
                    rounded
                    height="20"
                    stream
                  >
                    <template #default="{ value }">
                      <strong>Zebrano {{ Math.ceil(value) }}% (X zł)</strong>
                    </template>
                  </v-progress-linear>
                  <v-btn
                    block
                    color="deep-purple lighten-2"
                    text
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
  mounted () {
    this.$fire.database.ref('zbiorki').on('value', (snapshot) => {
      this.zbiorki = snapshot.val()
    })
  }
}
</script>
