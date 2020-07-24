import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import * as firebase from 'firebase/app'
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { firestorePlugin } from 'vuefire'
import firebaseConfig from './config/firebase.js'

Vue.config.productionTip = false
Vue.use(firestorePlugin)

firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
