<template>
  <main class="container-fluid flex-fill" v-bind:style="{ backgroundColor: background_color, color: foreground_color }" v-bind:class="{ 'valign-middle' : ($route.meta.valign == 'middle') }">
  <div id="wrapper" class="d-flex flex-column">
    <div id="not_found">
      <div class="row">
        <div class="col-12">
          <h1>Page Not Found</h1>
          <p>We apologize but the requested page does not exist. Please check your URL and try again...</p>
          <b-button variant="primary" size="lg" to="/">Go Home</b-button>
        </div>
      </div>
    </div>
  </div>
  </main>
</template>

<script>
export default {
  name: 'PageNotFound',
  data() {
    return {
      background_color: '#111111',
      foreground_color: '#ffffff',
    }
  }
}
</script>
