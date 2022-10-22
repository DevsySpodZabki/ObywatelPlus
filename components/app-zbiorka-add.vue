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
          v-model="fields.user"
          label="Imię i nazwisko"
          readonly
        />
        <v-text-field
          v-model="fields.name"
          :rules="[
            () => !!fields.name || 'Wymagane',
            () => !!fields.name && fields.name.length <= 25 || 'Cel zbiórki nie może być dłuższy niż 25 znaków'
          ]"
          label="Nazwa zbiórki"
          placeholder="Opisz swój cel"
          counter="25"
          required
        />
        <v-text-field
          v-model="fields.banner"
          label="Adres URL do baneru zbiórki"
          required
        />
        <v-text-field
          v-model="fields.description"
          :rules="[
            () => !!fields.description || 'Wymagane',
            () => !!fields.description && fields.description.length <= 250 || 'Opis zbiórki nie może być dłuższy niż 250 znaków'
          ]"
          label="Opis zbiórki"
          placeholder="Opisz swoją zbiórkę"
          counter="250"
          required
        />
        <v-slider
          v-model="fields.goal"
          :label="`Cel zbiórki ${fields.goal}zł`"
          max="2000"
          min="100"
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
  data () {
    return {
      fields: {},
      defaultFields: {
        user: this.$store.state.user.displayName,
        description: '',
        name: '',
        goal: 0,
        banner: '',
        owner: owner: this.$store.state.user.uid
      },
      valid: false
    }
  },
  mounted () {
    this.fields = this.defaultFields
  },
  methods: {
    submit () {
      if (this.valid) {
        this.$fire.database.ref('zbiorki').push(this.fields)
        this.fields = this.defaultFields
        this.$emit('close')
      }
    }
  }
}
</script>
