<template>
  <div>
    Signin
    <button id="recaptcha-container" class="btn btn-primary">
      LOGIN
    </button>
    <div
      id="recaptcha-container"
      class="justify-center flex"
    />
  </div>
</template>
<script>

export default {
  name: 'SigninPage',
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
      const loginWithNumber = await this.$fire.auth.signInWithPhoneNumber('+48123123123', this.appVerifier)
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
