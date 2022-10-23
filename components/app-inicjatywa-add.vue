<template>
  <v-card ref="form">
    <v-card-title>
      Dodaj nową inicjatywę
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
          label="Nazwa inicjatywy"
          placeholder="Nazwa inicjatywy"
          counter="25"
          required
        />
        <v-text-field
          v-model="fields.banner"
          label="Adres URL do baneru inicjatywy"
          :rules="[
            () => !!isUrl(fields.banner) || 'Wprowadź poprawny URL',
          ]"
          required
        />
        <v-text-field
          v-model="fields.opis"
          :rules="[
            () => !!fields.opis || 'Wymagane',
            () => !!fields.opis && fields.opis.length <= 250 || 'Opis zbiórki nie może być dłuższy niż 250 znaków'
          ]"
          label="Opis inicjatywy"
          placeholder="Opisz swoją inicjatywy"
          counter="250"
          required
        />
        <v-text-field
          v-model="fields.gmina"
          :rules="[() => !!fields.gmina || 'Wymagane']"
          label="Gmina"
          placeholder="Warszawa"
          required
        />
        <v-text-field
          v-model="fields.city"
          :rules="[() => !!fields.city || 'Wymagane']"
          label="Miasto"
          placeholder="Warszawa"
          required
        />
        <v-text-field
          v-model="fields.zip"
          :rules="[() => !!fields.zip || 'Wymagane']"
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
import isUrl from 'validator/lib/isUrl';

export default {
  data () {
    return {
      fields: {},
      defaultFields: {
        banner: '',
        name: '',
        opis: '',
        gmina: '',
        zip: '',
        city: '',
        user: this.$store.state.user.displayName,
        owner: this.$store.state.user.uid
      },
      valid: false
    }
  },
  beforeMount () {
    this.fields = this.defaultFields
  },
  methods: {
    submit () {
      if (this.valid) {
        this.$fire.database.ref('inicjatywy').push(this.fields)
        this.fields = this.defaultFields
        this.$emit('close')
      }
    },
    isUrl(url) {
      return isUrl(url)
    }
  }
}
</script>
