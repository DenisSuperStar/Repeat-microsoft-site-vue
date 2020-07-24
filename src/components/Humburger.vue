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
                                $vuetify.icons.{{icon.pic}}
                            </v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{icon.name}}
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
import store from '../store/index.js'

export default {
    data: () => ({
        drawer: false
    }),
    computed: {
        statusAuthentication: function() {
            return this.$store.getters.READ_AUTH;
        },
        appHeaderIcons: function() {
            if (this.statusAuthentication) {
                return [
                    {
                        pic: 'microsoft', name: 'Microsoft'
                    },
                    {
                        pic: 'office', name: 'Office'  
                    },
                    {
                        pic: 'window', name: 'Windows'  
                    },
                    {
                        pic: 'xbox', name: 'Xbox'
                    },
                    {
                        pic: 'shopping_cart', name: 'Корзина'
                    },
                    {
                        pic: 'logout', name: 'Выйти'
                    }
                ]
            } else {
                return [
                    {
                        pic: 'support', name: 'Поддержка'
                    },
                    {
                        pic: 'all_softwares', name: 'Все продукты компании'
                    },
                    {
                        pic: 'search', name: 'Поиск'
                    },
                    {
                        pic: 'account', name: 'Зарегистрироваться'
                    },
                    {
                        pic: 'login', name: 'Войти'
                    }
                ]
            }
        }
    },
    created: function() {
        store.dispatch('PROCESSING_COMPLETE_AUTH');
    }
}
</script>