<template>
  <div id="vudjit">
    <div id="wrapper" class="d-flex flex-column" v-bind:class="{ 'bg-black': ($store.getters.is_account_setup == true) }">
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
    console.log(this.$store.getters.is_account_setup);
  }
}
</script>
