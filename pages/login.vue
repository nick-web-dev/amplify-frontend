<template>
   <v-app>
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>{{ $t('Login Form') }}</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                                prepend-icon="mdi-email"
                                v-model="email"
                                :rules="emailRules"
                                :label="$t('Login')"
                            ></v-text-field>

                            <v-text-field
                                prepend-icon="mdi-lock"
                                v-model="password"
                                :rules="passwordRules"
                                :label="$t('Password')"
                                type="password"
                            ></v-text-field>

                            <v-btn color="primary" :disabled="!valid" class="mr-4" @click="validate()">
                                {{ $t('Login') }}
                            </v-btn>
                        </v-form>
                     </v-card-text>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   </v-app>
</template>

<script>
  export default {
    name: 'Login',
    layout: 'guest',
    data() {
        return {
            valid: true,
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            password: '',
            passwordRules: [
                v => !!v || 'Password is required',
            ],
        }
    },
    methods: {
        validate () {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('auth/login', {user: {email: this.email, password: this.password}, type: 'guest'})
            }
        },
    },
  }
</script>
