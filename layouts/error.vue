<template>
  <v-app dark>
    <v-main>
      <AppBar />
      <v-container fluid margin="auto">
        <v-img width="30%" height="40%" src="/404.svg" />
        <v-row justify="center">
      <h1>
        <NuxtLink to="/">
        <span class="text-center">Strona główna</span>
        </NuxtLink>
        </h1>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '../components/app-bar.vue'
export default {
  name: 'EmptyLayout',
  components: { AppBar },
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
