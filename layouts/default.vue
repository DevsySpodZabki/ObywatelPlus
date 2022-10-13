<template>
  <v-app dark :style="$vuetify.theme.dark">
    <AppBar />
    <!-- <AppBar /> - Domyślny komponent app bara zostanie dodany w całej aplikacji-->
    <v-main>
      <nuxt v-if="!$slots.default" />
      <slot />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
