<template>
    <div>
        <v-app-bar-nav-icon 
            color="black"
            @click="drawer = !drawer"
        >
        </v-app-bar-nav-icon>
        <v-navigation-drawer
            v-model="drawer"
            app
            color="blue-grey lighten-5"
        >
            <v-list dense>
                <template v-for="(icon, id) in appHeaderIcons">
                    <v-list-item link :key="id">
                        <v-list-item-action>
                            <v-icon color="black">
                                <router-link tag="div" :to="icon.url">$vuetify.icons.{{icon.pic}}</router-link>
                            </v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                <router-link tag="div" :to="icon.url">{{icon.name}}</router-link>
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
            <template v-slot:append>
                <div class="pa-2">
                    <v-btn
                        block
                        dark
                        @click="drawer = !drawer"
                    >
                        Скрыть панель
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data: () => ({
        drawer: false
    }),
    computed: {
        appHeaderIcons: function() {
            if ((this.$store.getters.CHECK_STATUS_USER_ACCOUNT) || (this.$store.getters.CHECK_STATUS_AUTH)) {
                return [
                    {
                        pic: 'microsoft', name: 'Microsoft', url: '/ideas'
                    },
                    {
                        pic: 'office', name: 'Office', url: '/solutions'  
                    },
                    {
                        pic: 'window', name: 'Windows', url: '/news'  
                    },
                    {
                        pic: 'xbox', name: 'Xbox', url: '/play'
                    },
                    {
                        pic: 'shopping_cart', name: 'Корзина', url: '/cart'
                    },
                    {
                        pic: 'logout', name: 'Выйти', url: ''
                    }
                ]
            } else {
                return [
                    {
                        pic: 'support', name: 'Поддержка', url: '/support'
                    },
                    {
                        pic: 'all_softwares', name: 'Все продукты компании', url: '/release'
                    },
                    {
                        pic: 'search', name: 'Поиск', url: ''
                    },
                    {
                        pic: 'account', name: 'Зарегистрироваться', url: '/account'
                    },
                    {
                        pic: 'login', name: 'Войти', url: '/login'
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