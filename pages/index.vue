<template>
<v-app>
<AppBar />
<v-main>
  <v-row no-gutters>
    <v-theme-provider dark>
      <v-container>
              <v-row
                class="white--text mx-auto"
                justify="center"
              > Elo </v-row>
              
              <v-col>
                <v-img height="40%" width="40%" src="wolontariusz.svg" />
              </v-col>

            </v-container>
    </v-theme-provider>
  </v-row>
</v-main>
</v-app>
</template>
<script>
export default {
  name: 'Index'
}
</script>
