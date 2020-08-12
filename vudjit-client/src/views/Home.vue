<template>
  <div id="home">
    
  </div>
</template>

<script>
export default {
    created() {
    if (this.$store.getters.is_logged_in == false) {
      this.$router.push('/login');
    }

    else if (this.$store.getters.get_total_accts == 0 || this.$store.getters.is_account_setup == true) {
      this.$store.commit('set_total_accts', 0);
      this.$store.commit('set_acct_setup', true);
      this.$router.push('/budgets/add');
    }

  },
}
</script>