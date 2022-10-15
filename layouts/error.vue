<template>
  <div class="curved-background">
    <v-row no-gutters justify="space-around">
      <v-col class="d-flex justify-center" cols="12" md="6" justify-center>
        <v-row />
        <v-row><v-img width="60%" src="/404.svg" /></v-row>
        <v-row />
      </v-col>
    </v-row>
    <div class="d-flex justify-center">
      <h1>
        <NuxtLink to="/">
          <span class="text-center">Strona główna</span>
        </NuxtLink>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmptyLayout',
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
