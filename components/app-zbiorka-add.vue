<template>
  <v-card ref="form">
    <v-card-text>
      <v-text-field
        ref="name"
        v-model="name"
        :rules="[() => !!name || 'Wymagane']"
        :error-messages="errorMessages"
        label="Imię i nazwisko"
        placeholder="Jan Kowalski"
        required
      />
      <v-text-field
        ref="address"
        v-model="cel"
        :rules="[
          () => !!cel || 'Wymagane',
          () => !!cel && cel.length <= 25 || 'Cel zbiórki nie może być dłuższy niż 25 znaków',
          addressCheck
        ]"
        label="Cel zbiórki"
        placeholder="Opisz swój cel"
        counter="25"
        required
      />
      <v-text-field
        ref="opis"
        v-model="opis"
        :rules="[
          () => !!opis || 'Wymagane',
          () => !!opis && opis.length <= 250 || 'Opis zbiórki nie może być dłuższy niż 250 znaków',
          addressCheck
        ]"
        label="Opis zbiórki"
        placeholder="Opisz swoją zbiórkę"
        counter="250"
        required
      />
      <v-text-field
        ref="city"
        v-model="city"
        :rules="[() => !!city || 'Wymagane', addressCheck]"
        label="Miejscowosć"
        placeholder="Warszawa"
        required
      />
      <v-text-field
        ref="state"
        v-model="state"
        :rules="[() => !!state || 'Wymagane']"
        label="Region"
        required
        placeholder="TX"
      />
    </v-card-text>
    <v-divider class="mt-12" />
    <v-card-actions>
      <v-btn text @click="$emit('close')">
        Anuluj
      </v-btn>
      <v-spacer />
      <v-slide-x-reverse-transition>
        <v-tooltip
          v-if="formHasErrors"
          left
        >
          <template #activator="{ on, attrs }">
            <v-btn
              icon
              class="my-0"
              v-bind="attrs"
              @click="resetForm"
              v-on="on"
            >
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
          </template>
          <span>Odśwież</span>
        </v-tooltip>
      </v-slide-x-reverse-transition>
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
    city: null,
    state: null,
    zip: null,
    formHasErrors: false
  }),

  computed: {
    form () {
      return {
        name: this.name,
        opis: this.opis,
        cel: this.cel,
        city: this.city,
        state: this.state,
        zip: this.zip,
        country: this.country
      }
    }
  },

  watch: {
    name () {
      this.errorMessages = ''
    }
  },

  methods: {
    addressCheck () {
      this.errorMessages = this.address && !this.name
        ? 'Wymagane!'
        : ''

      return true
    },
    resetForm () {
      this.errorMessages = []
      this.formHasErrors = false

      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset()
      })
    },
    submit () {
      this.formHasErrors = false

      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) { this.formHasErrors = true }

        this.$refs[f].validate(true)
      })
    }
  }
}
</script>
