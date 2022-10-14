<template>
<div class="curved-background">
  <v-main>
    <v-container>
    <v-row>
      <v-col v-for="item in zbiorki" v-bind:key="item.name">
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
              @click="reserve"
            >
              Wpłać pieniądze
            </v-btn>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog
      v-model="dialog"
      width="700"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          large
          class="rounded-lg"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Dodaj zbiórkę
        </v-btn>
      </template>

      <App-zbiorka-add @close="dialog=false" />
    </v-dialog>
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
      zbiorki: {
        zb1: {
          name: 'Pomoc przy zbieraniu na rower.',
          author: 'Jan Kowalski',
          collected: 100,
          goal: 1000,
          description: 'Cześć zbieram na rower'
        },
        zb2: {
          name: 'Pomoc przy zbieraniu na rower 2.',
          author: 'Jan Kowalski',
          collected: 100,
          goal: 1000,
          description: 'Cześć zbieram na rower'
        },
        zb3: {
          name: 'Pomoc przy zbieraniu na rower 3.',
          author: 'Jan Kowalski',
          collected: 100,
          goal: 1000,
          description: 'Cześć zbieram na rower'
        },
        zb4: {
          name: 'Pomoc przy zbieraniu na rower 4.',
          author: 'Jan Kowalski',
          collected: 100,
          goal: 1000,
          description: 'Cześć zbieram na rower'
        }
      }
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

<style>
.curved-background {
    background: linear-gradient(rgba(12, 40, 199, 0.2) 0%, rgba(214, 16, 16, 0.1) 100%);

    border-bottom-left-radius: 50% 40%;
    border-bottom-right-radius: 50% 40%;

    height: 45%;
    width: 100%;
}
</style>
