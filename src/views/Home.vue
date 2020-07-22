<template>
    <div>
      <v-app>
        <humburger></humburger>
        <app-header class="hidden-sm-and-down"></app-header>
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
import PartnersList from '../components/PartnersListMedium.vue'
import Humburger from '../components/Humburger.vue'

Vue.component('humburger', Humburger);
Vue.component('app-header', AppHeader);
Vue.component('app-carousel', AppCarousel);
Vue.component('company-description', CompanyDescription);
Vue.component('partners-list', PartnersList);

export default {}
</script>
