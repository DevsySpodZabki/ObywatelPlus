<template>
  <v-app dark :style="$vuetify.theme.dark">
    <AppBar />
    <!-- <AppBar /> - Domyślny komponent app bara zostanie dodany w całej aplikacji-->
    <v-main>
      <nuxt v-if="!$slots.default" />
      <slot />
      <div
        id="recaptcha-container"
        class="justify-center flex"
      />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'DefaultLayout',
  mounted () {
    const theme = localStorage.getItem('dark')
    if (theme) {
      if (theme === 'true') {
        this.$vuetify.theme.dark = true
      } else {
        this.$vuetify.theme.dark = false
      }
    } else {
      localStorage.setItem('dark', 'true')
    }
    
    Vue.prototype.appVerifier = new this.$fireModule.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
      callback: (response) => {
        console.log('captcha works')
      }
    })
    Vue.prototype.appVerifier.render()
  }
}
</script>
