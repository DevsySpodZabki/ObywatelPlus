<template>
  <div>
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
            <v-btn
              color="deep-purple lighten-2"
              text
              @click="reserve"
            >
              Wpłać pieniądze
            </v-btn>
          </v-card-actions>
          <v-progress-linear
            color="blue-grey"
            height="25"
          >
            <template #default="{ value }">
              <strong>{{ Math.ceil(value) }}% (X zł)</strong>
            </template>
          </v-progress-linear>
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
