<template>
  <v-card ref="form">
    <v-card-title>
      Dodaj nowy post dotyczący kontroli samorządu
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
          label="Nagłówek posta"
          placeholder="Nagłówek posta"
          counter="25"
          required
        />
        <v-text-field
          v-model="fields.banner"
          label="Adres URL do baneru posta"
          required
        />
        <v-text-field
          v-model="fields.opis"
          :rules="[
            () => !!fields.opis || 'Wymagane',
            () => !!fields.opis && fields.opis.length <= 200 || 'Krótki opis posta nie może być dłuższy niż 200 znaków'
          ]"
          label="Krótki opis"
          placeholder="Opis"
          counter="450"
          required
        />
        <p class="ma-0 mt-3 mt-0">Sformatowany opis całego posta</p>
        <TipTap :editorcontent="fields.tresc" @content="fields.tresc=$event" />
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
      fields: {

      },
      defaultFields: {
        banner: '',
        name: '',
        opis: '',
        tresc: '',
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
        this.$fire.database.ref('posty').push(this.fields)
        this.fields = this.defaultFields
        this.$emit('close')
      }
    }
  }
}
</script>
