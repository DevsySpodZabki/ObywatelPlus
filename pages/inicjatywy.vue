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
              Utwórz inicjatywę
            </v-btn>
          </template>

          <AppInicjatywaAdd @close="dialog=false" />
        </v-dialog>
        <v-row>
          <v-col v-for="item in inicjatywy" :key="item.name">
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

                <div>Oddanych głosów {{ item.collected }}</div>
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
                    @click="reserve"
                  >
                    Przekaż głos
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
  name: 'InicjatywyPage',
  data () {
    return {
      loading: false,
      selection: 1,
      dialog: false
    }
  },
  methods: {
    reserve () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    }
  }
}
</script>
