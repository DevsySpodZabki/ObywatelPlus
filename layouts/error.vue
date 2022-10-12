<template>
  <v-app dark>
    <v-main>
      <AppBar />
      <v-container fluid margin="auto">
        <svg-icon name="404"  width="100%" height="100%"/>
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
import AppBar from '../components/app-bar.vue';
export default {
    name: "EmptyLayout",
    layout: "empty",
    props: {
        error: {
            type: Object,
            default: null
        }
    },
    head() {
        const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
        return {
            title
        };
    },
    components: { AppBar }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
