<template>
  <div id="login">
    <img class="logo" src="@/assets/images/logo.png"/>
    <b-form @submit="login_user" @submit.prevent>
        <b-form-input
          id="email"
          class="mb-2"
          v-model="form.email"
          type="email"
          required
          placeholder="Email*">
        </b-form-input>
        
        <b-form-input
          id="auth-password"
          class="mb-2"
          v-model="form.password"
          type="password"
          required
          placeholder="Password*">
        </b-form-input>

      <b-button type="submit" variant="primary">Log Me In</b-button>
    </b-form>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        strapi_url: process.env.STRAPI_URL || 'http://localhost:1337'
      }
    },
    methods: {
      login_user: function() {
        axios.post(
          this.strapi_url + '/auth/local', {
          identifier: this.form.email,
          password: this.form.password,
        }).then(response => {
          // Set total accounts
          var total_accts = response.data.user.total_accts;

          // Store token and set store data
          this.$store.commit('set_logged_in', true);
          this.$store.commit('set_jwt_token', response.data.jwt);
          this.$store.commit('set_total_accts', total_accts);
          console.log(total_accts);

          if (total_accts == 0) {
            this.$store.commit('set_acct_setup', true);
            this.$router.push('/accounts/add');
          }
          else {
            this.$router.push('/');
          }

          console.log('User profile', response.data.user);
        }).catch(error => {
          // Handle error.
          console.log('An error occurred:', error.response);
        });
      }
    },
    created() {
      if (this.$store.getters._logged_in == true) {
        this.$router.push("/");
      }
    }
  }
</script>