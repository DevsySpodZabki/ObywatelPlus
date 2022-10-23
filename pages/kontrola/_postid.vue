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

              <v-divider class="my-2" />

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
              <v-card-title class="display-2">
                {{ post.name }}
              </v-card-title>
              <v-card-subtitle />
              <v-card-text class="display-1" v-html="post.tresc" />
              <v-card-actions>
                <v-btn
                  outlined
                  large
                  class="mb-1"
                  color="purple"
                  dark
                  rounded
                  @click="comment(posty, commentFieldText)"
                >
                  Skomentuj
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card color="transparent">
              <v-card-title class="display-1">
                Komentarze
              </v-card-title>

              <v-card-text>

                <v-card v-for="(komentarz,index) in post.comments" :key="index" max-width="40%" class="mb-4">
                  <v-card-text>

                    <div>{{ komentarz.displayName }}</div>
                    <div class="text--primary">
                      {{ komentarz.comment }}

                      <div style="width: fit-content; float: right;" class="d-flex">
                        <v-icon
                          v-if="komentarz.likes && komentarz.likes[$store.state.user.uid] == false"
                          color="green"
                          @click="unlike(komentarz, index)"
                        >
                          mdi-thumb-down
                        </v-icon>
                        <v-icon v-else @click="unlike(komentarz, index)">
                          mdi-thumb-down-outline
                        </v-icon>
                        <div class="break" />
                        <p>123</p>
                      </div>

                      <div style="width: fit-content; float: right;" class="d-flex">
                        <v-icon
                          v-if="komentarz.likes && komentarz.likes[$store.state.user.uid] == true"
                          color="green"
                          @click="like(komentarz, index)"
                        >
                          mdi-thumb-up
                        </v-icon>
                        <v-icon v-else @click="like(komentarz, index)">
                          mdi-thumb-up-outline
                        </v-icon>
                        <div class="break" />
                        <p>123</p>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-card-text>
              <v-form v-model="commentValid" @submit="comment(commentFieldText)" @submit.prevent>
                <v-card-text>
                  <v-text-field
                    v-model="commentFieldText"
                    :rules="commentRules"
                    :counter="100"
                    label="Napisz komentarz"
                  />
                  <v-btn :disabled="!commentValid" method="get" type="submit">
                    Wstaw
                  </v-btn>
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
  mounted () {
    this.$fire.database.ref('posty').on('value', (snapshot) => {
      this.posty = snapshot.val()
      this.post = this.posty[this.$route.params.postid]
    })
  },
  methods: {
    comment (comment) {
      if (this.loggedIn && this.commentValid) {
        const { uid, displayName } = this.$store.state.user
        this.$data.commentFieldText = ''
        this.$fire.database.ref(`posty/${this.$route.params.postid}/comments/`).push({ author: uid, displayName, comment })
      }
    },
    like (komentarz, komentarzid) {
      if (this.loggedIn) {
        const { uid } = this.$store.state.user
        if (komentarz.likes && komentarz.likes[uid] === true) {
          this.$fire.database.ref(`posty/${this.$route.params.postid}/comments/${komentarzid}/likes/${uid}`).remove()
        } else {
          this.$fire.database.ref(`posty/${this.$route.params.postid}/comments/${komentarzid}/likes/${uid}`).set(true)
        }
      }
    },
    unlike (komentarz, komentarzid) {
      if (this.loggedIn) {
        const { uid } = this.$store.state.user
        if (komentarz.likes && komentarz.likes[uid] === false) {
          this.$fire.database.ref(`posty/${this.$route.params.postid}/comments/${komentarzid}/likes/${uid}`).remove()
        } else {
          this.$fire.database.ref(`posty/${this.$route.params.postid}/comments/${komentarzid}/likes/${uid}`).set(false)
        }
      }
    },
    comments (item) {
      if (item.comments) {
        return Object.keys(item.comments).length
      } else {
        return 0
      }
    }
  },
  computed: {
    ...mapGetters([
      'loggedIn'
    ])
  },
  data () {
    return {
      commentFieldText: '',
      commentValid: false,
      commentRules: [
        v => !!v || 'Wpisz treść komentarza!',
        v => (v && v.length < 100) || 'Komentarz nie może mieć więcej niż 100 znaków!'
      ],
      post: {}
    }
  }
}
</script>
