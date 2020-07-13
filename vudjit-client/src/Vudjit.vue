<template>
  <div id="vudjit">
    <div id="wrapper" class="d-flex flex-column" v-bind:class="{ 'bg-black': ($store.getters.is_account_setup == 'true') }">
      <Navigation />
        <main class="container-fluid flex-fill" v-bind:class="{ 'valign-middle' : ($route.meta.valign == 'middle') }">
          <router-view/>
        </main>
      <Footer />
    </div>
  </div>
</template>

<script>

import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Vudjit',
  components: {
    Navigation,
    Footer
  },
  created() {
    if (!this.$store.getters.get_jwt) {
      this.$router.push('login');
    }
    else {
      this.$store.commit('set_logged_in', 'true');
    }

    if (this.$store.getters.is_account_setup == 'true') {
      //this.$router.push('/accounts/add');
    }
  },
  mounted() {
    console.log(this.$store.getters.get_jwt);
  }
}
</script>
