<template>
                <v-btn class="hidden-sm-and-down"
                  v-show="!hidden"
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
    hidden: false,
  }),
}
</script>