<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="8" lg="6">
        <v-btn class="mb-2 pl-2 rounded-lg" to="/" text>
          <v-icon>mdi-arrow-left-thin</v-icon>
          Powrót do strony głównej
        </v-btn>
        <v-stepper v-model="e1">
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
              <VuePhoneNumberInput v-model="number" :translations="translations" dark class="mb-5" />

              <v-btn
                large
                block
                class="rounded-lg"
                color="primary"
                @click="e1 = 2;login()"
              >
                Dalej
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-otp-input
                length="6"
                type="number"
              />
              <v-btn
                color="primary"
              >
                Dalej
              </v-btn>

              <v-btn text @click="e1=1">
                Cofnij się
              </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
    <div
      id="recaptcha-container"
      class="justify-center flex"
    />
  </v-container>
</template>
<script>
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'

export default {
  name: 'SigninPage',
  components: {
    VuePhoneNumberInput
  },
  data () {
    return {
      e1: 1,
      number: '',
      translations: {
        countrySelectorLabel: 'Kod kraju',
        countrySelectorError: 'Choisir un pays',
        phoneNumberLabel: 'Numer telefonu',
        example: 'Przykład:'
      }
    }
  },
  mounted () {
    this.appVerifier = new this.$fireModule.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
      callback: (response) => {
        console.log('captcha works')
      }
    })
    this.appVerifier.render()
  },

  methods: {
    async login () {
      const loginWithNumber = await this.$fire.auth.signInWithPhoneNumber('+48504669559', this.appVerifier)

      console.log(loginWithNumber)
    }
  }
}
</script>
<style>
.grecaptcha-badge{
  z-index:9999;
}
</style>
