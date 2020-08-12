<template>
  <main class="container-fluid flex-fill" v-bind:style="{ backgroundColor: background_color, color: foreground_color }" v-bind:class="{ 'valign-middle' : ($route.meta.valign == 'middle') }">
  <div id="wrapper" class="d-flex flex-column">
    <div id="acct-add-container">
      <div id="acct-add" v-bind:class="{ 'd-none': ($store.getters.get_setup_step != 1) }">

        <div id="label-acct">
          <p class="title mb-1"><strong>It seems you have no budgets set up...</strong></p>
          <small class="mb-3 d-block">Enter a name for your first budget...</small>
          <b-form @submit.prevent>

            <b-form-input
              v-model="budget_label"
              id="budget_label"
              type="text" 
              placeholder="Enter a label for your budget..."
              required
            >
            </b-form-input>
            <b-button type="submit" variant="secondary" class="mt-3" 
              @click="() => { 
                if (budget_label != null) { this.$store.commit('set_setup_step', 2); } 
              }
              ">
              Next
            </b-button>
          </b-form>

        </div>

      </div>

      <div id="pay-period" v-bind:class="{ 'd-none': ($store.getters.get_setup_step != 2) }">
        <p class="title mb-1"><strong>What type of pay period do you get paid...</strong></p>
        <small class="mb-3 d-block">Do you get paid weekly, bi-weekly, semi-monthly, or monthly?</small>
        <b-form @submit.prevent>
          <b-form-select v-model="period_selected" :options="period_options" required></b-form-select>
          <b-button type="submit" variant="secondary" class="mt-3" 
            @click="() => { 
              if (period_selected != null) { this.$store.commit('set_setup_step', 3); }}
            ">
            Next
          </b-button>
        </b-form>
      </div>

    </div>
  </div>
  </main>
</template>

<script>
  export default {
    name: 'AddAccount',
    data() {
      return {
        background_color: '#CA0909',
        foreground_color: '#ffffff',
        budget_label: null,
        period_selected: null,
        period_options: [
          { value: null, text: 'Please select a pay period type...' },
          { value: 'weekly', text: 'Weekly' },
          { value: 'bi-weekly', text: 'Bi-Weekly' },
          { value: 'semi-monthly', text: 'Semi-Monthly' },
          { value: 'monthly', text: 'Monthly' }
        ]
      }
    }
  }
</script>