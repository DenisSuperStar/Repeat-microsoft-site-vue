<template>
    <div>
      <v-app>
        <app-header></app-header>
        <app-carousel></app-carousel>
        <company-description></company-description>
        <partners-list></partners-list>
      </v-app>
    </div>
</template>

<script>
import Vue from 'vue'
import AppHeader from '../components/AppHeader.vue'
import AppCarousel from '../components/Slider.vue'
import CompanyDescription from '../components/CompanyDescription.vue'
import PartnersList from '../components/PartnersList.vue'

Vue.component('app-header', AppHeader);
Vue.component('app-carousel', AppCarousel);
Vue.component('company-description', CompanyDescription);
Vue.component('partners-list', PartnersList);

export default {}
</script>
