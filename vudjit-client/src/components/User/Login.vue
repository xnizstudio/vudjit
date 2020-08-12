<template>
  <main class="container-fluid flex-fill" v-bind:style="{ backgroundColor: background_color, color: foreground_color }" v-bind:class="{ 'valign-middle' : ($route.meta.valign == 'middle') }">
  <div id="wrapper" class="d-flex flex-column">
    <h2>Vudjit.app</h2>
    <small class="mb-4 d-block">Your easy to use and daily budgeting app...</small>
    <div id="login">
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

        <b-button type="submit" variant="primary" class="mt-2">Log Me In</b-button>
      </b-form>
    </div>
  </div>
  </main>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        background_color: '#111111',
        foreground_color: '#ffffff',
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

          if (total_accts == null || total_accts == 0) {
            this.$store.commit('set_setup_step', 1);
            this.$store.commit('set_acct_setup', true);
            this.$router.push('/budgets/add');
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