<template>
<div></div>
</template>

<script>
export default {  
  created() {
    if (this.$store.getters.is_logged_in == 'true') {
      // Clear local storage data
      localStorage.removeItem('jwt');

      // Clear store data
      this.$store.commit('set_logged_in', 'false');

      // Re-route to login page
      this.$router.push("/login");
    }
  }
}
</script>
