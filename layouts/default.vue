<template>
  <v-app dark :style="$vuetify.theme.dark">
    <AppBar />
    <v-main>
      <nuxt v-if="!$slots.default" />
      <slot />
      <div
        id="recaptcha-container"
        class="d-none"
      />
    </v-main>
    <AppFloatingButton />
    <AppFooter />
    <AppBottonMobileNav />
  </v-app>
</template>

<script>
import Vue from 'vue'
import AppFloatingButton from '../components/app-floating-button.vue'

export default {
  name: 'DefaultLayout',
  components: { AppFloatingButton },
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
      size: 'invisible'
    })
  }
}
</script>
