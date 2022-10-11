<template>
<v-app>
<v-main>
  <AppBar />
  <v-row no-gutters>
    <v-theme-provider dark>
      <v-container>
        <v-row>
          <v-col class="d-flex" cols="12" md="6">
          <span class="my-auto">
            <span
              :class="[$vuetify.breakpoint.smAndDown ? 'display-2': 'display-4']"
              class="font-weight-black"
            >
              Obywatel Plus
            </span>
            <br>
            <span
              :class="[$vuetify.breakpoint.smAndDown ? 'display-1': 'display-1']"
            >
            Integer at pharetra augue, non porta risus. In rhoncus dictum commodo. In volutpat, lectus at posuere gravida, augue nulla fringilla quam, nec euismod urna urna sed nunc. In hac habitasse platea dictumst.
            </span>
          </span>
          </v-col>
          
          <v-col cols="12" md="6">
            <v-img src="wolontariusz.svg" />
          </v-col>
        </v-row>
      </v-container>
    </v-theme-provider>
  </v-row>
</v-main>
</v-app>
</template>
<script>
import AppBar from '../components/app-bar.vue';
export default {
    name: "Index",
    components: { AppBar }
}
</script>
