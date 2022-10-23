<template>
  <v-btn
    v-show="!hidden"
    class="hidden-sm-and-down"
    color="pink"
    dark
    fixed
    bottom
    right
    fab
  >
    <v-icon>mdi-plus</v-icon>
  </v-btn>
</template>

<script>
export default {
  data: () => ({
    hidden: false
  })
}
</script>
