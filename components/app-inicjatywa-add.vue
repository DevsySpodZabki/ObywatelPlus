<template>
  <v-card ref="form">
    <v-card-title>
      Dodaj nową zbiórkę
    </v-card-title>
    <v-card-text>
      <v-form
        ref="form"
        v-model="valid"
      >
        <v-text-field
          v-model="name"
          :rules="[() => !!name || 'Wymagane']"
          label="Imię i nazwisko"
          placeholder="Jan Kowalski"
          required
        />
        <v-text-field
          v-model="cel"
          :rules="[
            () => !!cel || 'Wymagane',
            () => !!cel && cel.length <= 25 || 'Cel zbiórki nie może być dłuższy niż 25 znaków'
          ]"
          label="Nazwa inicjatywy"
          placeholder="Nazwa inicjatywy"
          counter="25"
          required
        />
        <v-text-field
          v-model="opis"
          :rules="[
            () => !!opis || 'Wymagane',
            () => !!opis && opis.length <= 250 || 'Opis zbiórki nie może być dłuższy niż 250 znaków'
          ]"
          label="Opis inicjatywy"
          placeholder="Opisz swoją inicjatywy"
          counter="250"
          required
        />
        <v-text-field
          v-model="gmina"
          :rules="[() => !!city || 'Wymagane']"
          label="Gmina"
          placeholder="Warszawa"
          required
        />
        <v-text-field
          v-model="city"
          :rules="[() => !!city || 'Wymagane']"
          label="Miasto"
          placeholder="Warszawa"
          required
        />
        <v-text-field
          v-model="state"
          :rules="[() => !!state || 'Wymagane']"
          label="Kod Pocztowy"
          required
          placeholder="00-000"
        />
      </v-form>
    </v-card-text>
    <v-divider class="mt-12" />
    <v-card-actions>
      <v-spacer />
      <v-btn text @click="$emit('close')">
        Anuluj
      </v-btn>

      <v-btn
        color="primary"
        text
        @click="submit"
      >
        Zatwierdź
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    errorMessages: '',
    name: null,
    opis: null,
    cel: null,
    gmina: null,
    city: null,
    state: null,
    zip: null,
    valid: false
  }),

  methods: {
  }
}
</script>
