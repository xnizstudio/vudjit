<template>
  <b-navbar id="primary-nav" toggleable="lg" type="light" variant="light" v-if="$store.getters.is_logged_in && $store.getters.total_accts > 0">
    <b-navbar-brand href="#"><img class="logo" src="@/assets/images/logo.png"/></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav v-if="get_routes && get_routes.length" v-bind:class="{'ml-auto mr-auto': true }">
        <b-nav-item v-for="page in get_main_menu" v-bind:key="page.pid" v-bind:class="{ 'active' : (get_current_path == page.path) }" :to="{ path: page.path }">
          {{ page.name }}
        </b-nav-item>
        <b-nav-item :to="{ path: '/logout' }">
          Logout
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navigation',
  data: function() { 
    return {
      logged_in: ''
    }
  },
  computed: {
    get_current_path() {
      return this.$route.path;
    },
    get_current_route() {
      return this.$route.name;
    },
    get_routes() {
      return this.$router.options.routes;
    },
    get_main_menu() {
      var i, route, routes, main_menu;

      routes = this.get_routes;

      main_menu = []

      for (i = 0; i < routes.length; i++) {
        route = routes[i]
        if (route.is_nav == true) {
          main_menu.push(route);
        }
      }
      return main_menu;
    },
  },
}
</script>