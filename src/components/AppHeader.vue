<template>
    <div>
        <v-app>
            <v-app-bar
                app
                class="blue-grey lighten-5 white--text"
            >
                <div class="d-flex align-center">
                    <v-img
                        alt="Vuetify Logo"
                        class="shrink mr-2"
                        contain
                        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                        transition="scale-transition"
                        width="40"
                    />
                    <v-toolbar-title>Sedby</v-toolbar-title>
                </div>
                <v-spacer></v-spacer>
                <template v-for="(icon, id) in appHeaderIcons">
                    <v-btn
                        :key="id"
                        v-show="id <= 4"
                        icon
                        color="black"
                    >
                        <v-icon>
                            <router-link tag="span" :to="icon.url">$vuetify.icons.{{icon.pic}}</router-link>
                        </v-icon>
                    </v-btn>
                </template>
                <template v-for="(icon, id, key) in appHeaderIcons">
                    <v-btn
                        :key="key"
                        v-show="id > 4"
                        icon
                        color="black"
                    >
                        <v-icon>
                            <router-link tag="span" :to="icon.url">$vuetify.icons.{{icon.pic}}</router-link>
                        </v-icon>
                    </v-btn>
                </template>
            </v-app-bar>
        </v-app>
    </div>
</template>

<script>
export default {
    computed: {
        appHeaderIcons: function() {
            if ((this.$store.getters.CHECK_STATUS_USER_ACCOUNT) || (this.$store.getters.CHECK_STATUS_AUTH)) {
                return [
                    {
                        pic: 'microsoft', url: '/ideas'
                    },
                    {
                        pic: 'office', url: '/solutions' 
                    },
                    {
                        pic: 'window', url: '/news'
                    },
                    {
                        pic: 'xbox', url: '/play'
                    },
                    {
                        pic: 'shopping_cart', url: '/cart'
                    },
                    {
                        pic: 'logout', url: ''
                    }
                ]
            } else {
                return [
                    {
                        pic: 'support', url: '/support'
                    },
                    {
                        pic: 'all_softwares', url: '/release'
                    },
                    {
                        pic: 'search', url: '' 
                    },
                    {
                        pic: 'account', url: '/account'
                    },
                    {
                        pic: 'login', url: '/login'
                    }
                ]
            }
        }
    },
    created: function() {
        this.$store.dispatch('PROCESSING_SET_STATUS_USER_ACCOUNT');
        this.$store.dispatch('PROCESSING_SET_STATUS_AUTH');
    }
}
</script>

<style scoped>
    .v-toolbar__title {
        color: black;
        font-size: 2.3rem;
        
    }
</style>