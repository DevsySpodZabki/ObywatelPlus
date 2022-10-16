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
              Utwórz post
            </v-btn>
          </template>

          <AppInicjatywaAdd @close="dialog=false" />
        </v-dialog>
        <v-row>
          <v-col v-for="item in posty" :key="item.name">
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

              <v-card-title>{{ item.name }}</v-card-title>

              <v-card-text>
                <div class="text-subtitle-1">
                  Post utworzony przez: {{ item.user }}
                </div>
                <div class="text-subtitle-1">
                  Komentarze: {{ item.comments }}
                </div>
                <br>
                <div>{{ item.description }}</div>
              </v-card-text>

              <v-divider class="mx-4" />

              <v-card-actions>
                <v-container>
                  <v-btn
                    block
                    color="deep-purple lighten-2"
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
  mounted () {
    this.$fire.database.ref('posty').on('value', (snapshot) => {
      this.posty= snapshot.val()
    })
  }
}
</script>
