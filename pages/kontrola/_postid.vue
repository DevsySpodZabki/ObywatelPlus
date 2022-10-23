<template>
  <div class="curved-background">
    <v-main>
      <v-container style="margin-top:100px;">
        <v-row>
          <v-col>
            <v-card rounded="lg">
              <v-card-title class="display-2">
                {{ post.name }}
              </v-card-title>
              <v-card-subtitle />
              <v-container>
              <v-card-text class="display-1" v-html="post.tresc || post.opis" />
            </v-container>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    Post utworzony przez:
                  </v-list-item-title>
                  <v-list-item-title>
                    {{ post.user }}
                    <div>Data utworzenia:</div>
                    {{ new Date(post.date).toLocaleDateString('pl-PL') }} {{ new Date(post.date).toLocaleTimeString('pl-PL') }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider class="my-2" />

              <v-list-item link color="grey lighten-4">
                <v-list-item-content>
                  <NuxtLink to="/kontrola" style="text-decoration: none; color: inherit;">
                  <v-list-item-title>
                    Wróć do strony z kontrolą
                  </v-list-item-title>
                </NuxtLink>
                </v-list-item-content>
              </v-list-item>
            </v-list>
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

                    <div>{{ komentarz.displayName }} {{ new Date(komentarz.date).toLocaleDateString('pl-PL') }} o godz {{ new Date(komentarz.date).toLocaleTimeString('pl-PL') }}</div>
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
                        <v-spacer />
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-card-text>
              <v-container v-if="loggedIn">
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
            </v-container>
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
        this.$fire.database.ref(`posty/${this.$route.params.postid}/comments/`).push({ author: uid, displayName, comment, date: Date.now()})
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
    },
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
  },
  watch: {
    loggedIn () {
      if (this.loggedIn) {
        this.name = this.$store.state.user.displayName
      }
    }
  },
}
</script>
