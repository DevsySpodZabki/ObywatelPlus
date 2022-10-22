<template>
  <div class="curved-background">
    <v-main>
      <v-container style="margin-top:100px;">
        <v-row>
          <v-col cols="2">
            <v-list color="rgb(0, 0, 0, 0.1)">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    Post utworzony przez:
                  </v-list-item-title>
                  <v-list-item-title>
                    {{ post.user }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider class="my-2"></v-divider>

              <v-list-item link color="grey lighten-4">
                <v-list-item-content>
                  <v-list-item-title>
                    Wróć do strony z kontrolą
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col>
            <v-card rounded="lg" color="rgb(0, 0, 0, 0.1)">
              <v-card-title class="display-2">Tytuł</v-card-title>
              <v-card-subtitle></v-card-subtitle>
              <v-card-text class="display-1"></v-card-text>
              <v-card-actions>
                <v-btn outlined large class="mb-1" color="purple" dark rounded
                  @click="comment(posty, commentFieldText)">
                  Skomentuj
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card color="transparent">
              <v-card-title class="display-1">Komentarze</v-card-title>

              <v-card-text> 
                {{ post.comments }}
              </v-card-text>
              <v-form @submit="comment(posty, commentFieldText)" @submit.prevent>
              <v-card-text>
                <v-text-field v-model="commentFieldText" :counter="100" label="Napisz komentarz" />
                <v-btn method="get" type="submit">Wstaw</v-btn>
              </v-card-text>
            </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>
  
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PostID',
  mounted() {
    this.$fire.database.ref('posty').on('value', (snapshot) => {
      this.posty = snapshot.val()
      this.post = this.posty[this.$route.params.postid]
    })
  },
  methods: {
    comment(posty, comment) {
      console.log(this.loggedIn)
      if (this.loggedIn) {
        const { uid } = this.$store.state.user
        if (posty.comments && posty.comments[uid]) {
          this.$fire.database.ref(`posty/${this.$route.params.postid}/comments/${uid}`).remove()
        } else {
          this.$data.commentFieldText = "";
          this.$fire.database.ref(`posty/${this.$route.params.postid}/comments/${uid}`).push(comment)
        }
      }
    },
    async getUser(uid) {
      let user = await this.$fire.getUser.auth.getUser(uid)
      return user
    },
    comments(item) {
      if (item.comments) {
        return Object.keys(item.comments).length
      } else {
        return 0
      }
    },
  },
  computed: {
    ...mapGetters([
      'loggedIn'
    ])
  },
  data() {
    return {
      commentFieldText: "",
      post: {}
    }
  },
  async mounted() {
    let user = await getUser("lPaneIX1qVUH3ibPxHsLBsnhOjc2")
    console.log(user)
  }
}
</script>