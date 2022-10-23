<template>
    <v-bottom-navigation
      fixed
      grow
      class="hidden-md-and-up"
    >
    <v-btn to="/inicjatywy">
        <span>Inicjatywy</span>
        <v-icon>mdi-lightbulb</v-icon>
      </v-btn>
      <v-btn to="/kontrola">
        <span>Kontrola<br>samorządów</span>
        <v-icon>mdi-account-tie-hat</v-icon>
      </v-btn>
      <v-btn to="/zbiorki">
        <span>Zbiórki i<br>budżety</span>
        <v-icon>mdi-piggy-bank</v-icon>
      </v-btn>
      <v-btn>
        <span>Konto</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </template>