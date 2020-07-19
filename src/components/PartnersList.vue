<template>
    <div>
        <v-app>
            <v-row>
                <v-col cols="12" sm="6" offset-sm="3">
                    <v-card>
                        <v-container fluid>
                            <v-row>
                                <v-col
                                    v-for="n in 9"
                                    :key="n"
                                    class="d-flex child-flex"
                                    cols="4"
                                >
                                    <item-list :range="n" />    
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
        </v-app>
    </div>
</template>

<script>
import Vue from 'vue'
import ItemList from './ItemPartnersList.vue'

Vue.component('item-list', ItemList);

export default {}
</script>