<template>
  <div>
    <h1>Logging out...</h1>
  </div>
</template>

<script>
export default {  
  created() {
    if (this.$store.getters.is_logged_in == true) {
      // Clear state
      this.$store.commit('set_logged_in', false);
      this.$store.commit('set_jwt_token', '');
      this.$store.commit('set_total_accts', 0);
      this.$store.commit('set_acct_setup', false);
    }
    // Re-route to login page
    this.$router.push("/");
  }
}
</script>
