<template>
  <div>
    PANEL
    <v-btn @click="logout">
      Wyloguj się
    </v-btn>
  </div>
</template>
<script>
export default {
  name: 'PanelPage',
  methods: {
    logout () {
      this.$fire.auth.signOut()
      this.$router.push('/')
    }
  }
}
</script>
