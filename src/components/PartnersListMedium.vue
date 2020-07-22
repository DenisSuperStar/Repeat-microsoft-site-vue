<template>
    <div>
        <v-item-group>
            <v-container fluid>
                <v-row>
                    <v-col
                        v-for="n in 8"
                        :key="n"
                        cols="12"
                        md="4"
                    >
                        <item-list :range="n" />
                    </v-col>
                </v-row>
            </v-container>
        </v-item-group>
    </div>
</template>

<script>
import Vue from 'vue'
import ItemList from '../components/ItemList.vue'

Vue.component('item-list', ItemList);

export default {}
</script>