<template>
  <div id="vudjit">
    <Navigation />
      <router-view/>
  </div>
</template>

<script>

import Navigation from '@/components/Navigation.vue'

export default {
  name: 'Vudjit',
  components: {
    Navigation
  }
}
</script>
