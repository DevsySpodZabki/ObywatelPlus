<template>
  <v-container>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step
          :complete="e1 > 1"
          step="1"
        >
          Name of step 1
        </v-stepper-step>

        <v-divider />

        <v-stepper-step
          :complete="e1 > 2"
          step="2"
        >
          Name of step 2
        </v-stepper-step>

        <v-divider />

        <v-stepper-step step="3">
          Name of step 3
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <VuePhoneNumberInput v-model="number" :translations="translations" dark  class="mb-5"/>

          <v-btn
          class="rounded-lg"
            color="primary"
            @click="e1 = 2;login()"
          >
            Dalej
          </v-btn>

          <v-btn text class="rounded-lg">
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          />

          <v-btn
            color="primary"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
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
