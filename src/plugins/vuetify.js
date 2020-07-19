import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'fa',
        values: {
            microsoft: 'fab fa-microsoft',
            window: 'fab fa-windows',
            office: 'fas fa-briefcase',
            xbox: 'fab fa-xbox',
            support: 'fas fa-phone-volume',
            all_softwares: 'fas fa-globe',
            shopping_cart: 'fas fa-shopping-cart',
            search: 'fas fa-search',
            account: 'fas fa-user-tie',
            login: 'fas fa-user-circle',
            logout: 'fas fa-user-times'
        }
    }
}

export default new Vuetify(opts)
