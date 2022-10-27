<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <ValidationObserver ref="loginForm" slim v-slot="{handleSubmit}">
        <v-card class="elevation-12">
          <v-toolbar dark flat>
            <v-toolbar-title>{{$t('login.Login form')}}</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-base-field
                v-model="user.email"
                :label="$t('login.Login')"
                name="login"
                prepend-icon="mdi-email"
                :rules="'required|email'"
                type="text"
              ></v-base-field>

              <v-base-field
                id="password"
                :label="$t('login.Password')"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                :rules="'required'"
                v-model="user.password"
              ></v-base-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :loading="loading" @click="logIn">Login</v-btn>
          </v-card-actions>
        </v-card>
      </ValidationObserver>
    </v-flex>
  </v-layout>
</template>


<script>
export default {
  layout: "guest",
  middleware: ["guest"],

  data() {
    return {
      loading: false,
      user: {
        email: "",
        password: "",
      },
    };
  },
  computed: {},
  props: {},
  watch: {},
  methods: {
    logIn() {
      if (this.loading) {
        return;
      }
      this.loading = true;
      this.$vss.post({
        storeDispatch: "auth/login",
        data: { user: this.user },
        validationForm: this.$refs.loginForm,
        successServer: (response) => {
          this.$nextTick(() => {
            this.loading = false;
            setTimeout(() => {
              this.$router.push(this.localePath("/"));
            }, 500);
          });
        },
        failServer: (e) => {
          this.loading = false;
        },
      });
    },
  },
  components: {},
  created() {},
  mounted() {},
};
</script>