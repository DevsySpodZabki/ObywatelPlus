<template>
  <v-container>
    <AppBar />
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="8" lg="6">
        <v-btn class="mb-2 pl-2 rounded-lg" to="/" text>
          <v-icon>mdi-arrow-left-thin</v-icon>
          Powrót do strony głównej
        </v-btn>
        <v-stepper v-model="e1" class="rounded-lg">
          <v-stepper-header>
            <v-stepper-step
              :complete="e1 > 1"
              step="1"
            >
              Wprowadź numer telefonu
            </v-stepper-step>

            <v-divider />

            <v-stepper-step
              :complete="e1 > 2"
              step="2"
            >
              Wpisz kod weryfikacyjny
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <VuePhoneNumberInput
                @update="num=$event"
                :default-country-code="'PL'" :only-countries="['PL']" :required="true" v-model="number" :translations="translations" dark class="mb-10" />

              <v-btn
                :disabled="!num.isValid"
                large
                block
                class="rounded-lg mb-5"
                color="primary"
                @click="login()"
              >
                Dalej
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-otp-input
                length="6"
                type="number"
                v-model="code"
              />
              <v-btn
              @click="checkCode"
                large
                block
                class="rounded-lg"
                color="primary"
              >
                Dalej
              </v-btn>

              <v-btn
                text
                class="mt-3"
                large
                block
                @click="e1=1"
              >
                Cofnij się
              </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
    <div
      id="recaptcha-container"
      class="justify-center flex"
    />
  </v-container>
</template>
<script>
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
import { mapGetters } from 'vuex'

export default {
  name: 'SigninPage',
  components: {
    VuePhoneNumberInput
  },
  computed: {
    ...mapGetters([
      'loggedIn'
    ])
  },
  data () {
    return {
      e1: 1,
      num:{},
      number: '',
      code: '',
      translations: {
        countrySelectorLabel: 'Kod kraju',
        countrySelectorError: 'Choisir un pays',
        phoneNumberLabel: 'Numer telefonu',
        example: 'Przykład:'
      }
    }
  },

  mounted () {
    if (this.loggedIn) {
      this.$router.push('/panel')
    }
    this.appVerifier = new this.$fireModule.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
      callback: (response) => {
        console.log('captcha works')
      }
    })
    this.appVerifier.render()
  },
  watch: {
    loggedIn (newVal, oldVal) {
      if (newVal) {
        this.$router.push('/panel')
      }
    }
  },
  methods: {
    async login () {
      this.resp = await this.$fire.auth.signInWithPhoneNumber(`+48${this.number}`, this.appVerifier)
      this.e1 = 2
    },
    checkCode(){
      this.resp.confirm(this.code).then((a)=>{
        console.log(a)
      })
    }
  }
}
</script>
<style>
.grecaptcha-badge{
  z-index:9999;
}
</style>
