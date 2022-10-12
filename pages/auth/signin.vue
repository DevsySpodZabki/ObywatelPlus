<template>
  <div>
    <VuePhoneNumberInput v-model="number" :translations="translations" />
    Signin
    <button id="recaptcha-container" class="btn btn-primary" @click="login">
      LOGIN
    </button>
    <div
      id="recaptcha-container"
      class="justify-center flex"
    />
  </div>
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
        countrySelectorLabel: 'Code pays',
        countrySelectorError: 'Choisir un pays',
        phoneNumberLabel: 'Numéro de téléphone',
        example: 'Exemple :'
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
