<template>
    <div>
        <v-app>
            <v-app-bar
                app
                class="blue-grey lighten-5 white--text"
            >
                <v-app-bar-nav-icon color="black"></v-app-bar-nav-icon>
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
                <template v-for="(icon, id) in icons_names">
                    <v-btn
                        :key="id"
                        v-show="id <= 4"
                        icon
                        color="black"
                    >
                        <v-icon>$vuetify.icons.{{icon.pic}}</v-icon>
                    </v-btn>
                </template>
                <v-spacer></v-spacer>
                <template v-for="(icon, id, key) in icons_names">
                    <v-btn
                        :key="key"
                        v-show="id > 4"
                        icon
                        color="black"
                    >
                        <v-icon>
                            $vuetify.icons.{{icon.pic}}
                        </v-icon>
                    </v-btn>
                </template>
            </v-app-bar>
        </v-app>
    </div>
</template>

<script>
export default {
    data: () => ({
        icons_names: [
            {
                pic: 'microsoft'
            },
            {
                pic: 'window'
            },
            {
                pic: 'office'
            },
            {
                pic: 'xbox'
            },
            {
                pic: 'support'
            },
            {
                pic: 'all_softwares'
            },
            {
                pic: 'search'
            },
            {
                pic: 'shopping_cart'
            },
            {
                pic: 'account'
            },
            {
                pic: 'login'
            },
            {
                pic: 'logout'
            }
        ]
    })
}
</script>

<style scoped>
    .v-toolbar__title {
        color: black;
        font-size: 2.3rem;
        
    }
</style>