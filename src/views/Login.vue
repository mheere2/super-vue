<template>
  <div>
    <v-card width="350" class="mx-auto mt-5">
      <v-card-title class="text-center">
        <span class="display-1">SuperVue Login</span>
      </v-card-title>
      <v-divider></v-divider>

      <v-card-text>
        <v-form>
          <v-text-field label="Email" prepend-icon="mdi-email" v-model="email" />
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <!-- <v-divider></v-divider> -->
      <v-card-actions class="mt-n4">
        <v-spacer></v-spacer>
        <v-btn color="success" @click="loginWithEmailAndPassword">Login</v-btn>
      </v-card-actions>

      <v-divider></v-divider>

      <v-card-title>
        <v-flex text-xs-center>
          <span class="body-2 text-center ml=5">or sign in with</span>
        </v-flex>
      </v-card-title>

      <v-card-actions class="text-center d-inline-flex mt-n3">
        <v-btn class="ma-2" tile outlined color="success" @click="signinWithFacebook">
          <v-icon left>mdi-facebook</v-icon>Facebook
        </v-btn>
        <v-btn class="ma-2" tile outlined color="success" @click="signinWithGoogle">
          <v-icon left>mdi-google</v-icon>Google
        </v-btn>
      </v-card-actions>
      <v-divider></v-divider>

      <template v-if="this.error">
        <v-divider></v-divider>
        <p class="aa-error">{{ error }}</p>
      </template>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "marcel@gmail.com",
      password: "marcel5",
      showPassword: false,
      error: ""
    };
  },
  methods: {
    gotoRegister() {
      this.login();
    },
    loginWithEmailAndPassword() {
      this.login();
      // signinWithEmailAndPassword(this.email, this.password, err =>
      //   this.setError(err)
      // );
    },
    signinWithFacebook() {
      this.login();
      //signinWithGoogle(err => this.setError(err));
    },
    signinWithGoogle() {
      this.login();
      //signinWithGoogle(err => this.setError(err));
    },
    setError(error) {
      this.error = error;
      setTimeout(() => (this.error = ""), 4000);
    },
    login() {
      this.$store.dispatch("setAuth", { user: this.email });
      this.$router.push({ name: "dashboard" });
    }
  },
  mounted() {
    //debugger;
    let onMobile = this.$vuetify.breakpoint.xsOnly;
    //this.$store.commit("SET_ON_MOBILE", onMobile);
  }
};
</script>

<style scoped>
.aa-btn-login {
  color: blue;
  margin-left: 5px;
}
.aa-error {
  color: red;
  padding: 10px;
}
</style>
