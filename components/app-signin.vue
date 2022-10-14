<template>
  <div>
    <v-stepper v-model="e1" class="rounded-lg">
      <v-stepper-header>
        <v-stepper-step
          :complete="e1 > 1"
          step="1"
        >
          Wprowadź numer telefonu
        </v-stepper-step>

        <v-divider />

        <v-stepper-step
          :complete="e1 > 2"
          step="2"
        >
          Wpisz kod weryfikacyjny
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <VuePhoneNumberInput
            v-model="number"
            dark
            :default-country-code="'PL'"
            :only-countries="['PL']"
            :required="true"
            :translations="translations"
            class="mb-10"
            @update="num=$event"
          />

          <v-btn
            :disabled="!num.isValid"
            large
            block
            class="rounded-lg mb-5"
            color="primary"
            @click="login()"
          >
            Dalej
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-otp-input
            v-model="code"
            length="6"
            type="number"
          />
          <v-btn
            large
            block
            class="rounded-lg"
            color="primary"
            @click="checkCode"
          >
            Dalej
          </v-btn>

          <v-btn
            text
            class="mt-3"
            large
            block
            @click="e1=1"
          >
            Cofnij się
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>
<script>
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
import { mapGetters } from 'vuex'
import Vue from 'vue'

export default {
  name: 'SigninPage',
  components: {
    VuePhoneNumberInput
  },
  data () {
    return {
      e1: 1,
      num: {},
      number: '',
      code: '',
      translations: {
        countrySelectorLabel: 'Kod kraju',
        countrySelectorError: 'Wybierz kraj',
        phoneNumberLabel: 'Numer telefonu',
        example: 'Przykład:'
      }
    }
  },
  computed: {
    ...mapGetters([
      'loggedIn'
    ])
  },

  watch: {
    loggedIn (newVal, oldVal) {
      if (newVal) {
        this.$router.push('/panel')
      }
    }
  },

  mounted () {
    if (this.loggedIn) {
      this.$router.push('/panel')
    }
  },
  methods: {
    async login () {
      this.resp = await this.$fire.auth.signInWithPhoneNumber(`+48${this.number}`, Vue.prototype.appVerifier)
      this.e1 = 2
    },
    checkCode () {
      this.resp.confirm(this.code).then((a) => {
        console.log(a)
      })
    }
  }
}
</script>
