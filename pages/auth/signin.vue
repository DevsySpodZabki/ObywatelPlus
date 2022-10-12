<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <VuePhoneNumberInput v-model="number" :translations="translations" dark />
            <v-btn id="recaptcha-container" class="btn btn-primary rounded-lg mt-4" block large @click="login">
              Dalej
            </v-btn>
            <div
              id="recaptcha-container"
              class="justify-center flex"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
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
