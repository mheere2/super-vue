<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">This is Vuetify</h1>

        <p class="subheading font-weight-regular">It's seriously well thought through!</p>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-btn color="success" large dark @click="showLogin">
          <v-icon class="mr-3">mdi-alarm</v-icon>Login
        </v-btn>
        <!-- <v-btn color="primary" fab large dark class="ml-5">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>-->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({}),
  methods: {
    showLogin() {
      this.$router.push("login");
    }
  }
};
</script>
