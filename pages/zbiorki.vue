<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
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

    <v-card-title>Pomoc przy zbieraniu na rower.</v-card-title>

    <v-card-text>
      <div class="text-subtitle-1">
        Autor • Imie Nazwisko / Nazwa konta
      </div>

      <div>Zebrano 100zł/10000zł.</div>
      <br>
      <div>Cześć zbieram na rower.</div>
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
      v-model="skill"
      color="blue-grey"
      height="25"
    >
      <template #default="{ value }">
        <strong>{{ Math.ceil(value) }}% (X zł)</strong>
      </template>
    </v-progress-linear>
  </v-card>
</template>

<script>
export default {
  name: 'ZbiorkiPage',
  data: () => ({
    loading: false,
    selection: 1
  }),

  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    }
  }
}
</script>
