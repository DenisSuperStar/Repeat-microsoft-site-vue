<template>
    <div>
      <humburger />
      <app-header class="hidden-sm-and-down" />
      <app-carousel></app-carousel>
      <company-description></company-description>
      <partners-list></partners-list>
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
