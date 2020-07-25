<template>
    <div>
        <v-app>
            <v-container
                class="fill-height"
                fluid
            >
                <v-row
                    align="center"
                    justify="center"
                >
                    <v-col
                        cols="12"
                        sm="8"
                        md="6"
                        lg="6"
                        xl="6"
                    >
                        <v-card class="elevation-12">
                            <toolbar :title="toolbarTitle" />
                            <v-card-text>
                                <v-form
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                                >
                                    <v-text-field
                                        v-model="email"
                                        :rules="emailRules"
                                        label="Ваш эл.адрес"
                                        required
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="password"
                                        :rules="passwordRules"
                                        label="Ваш пароль"
                                        required
                                    ></v-text-field>
                                    <v-card-actions>
                                        <v-btn
                                            :disabled="!valid"
                                            color="black"
                                            class="white--text"
                                            @click.prevent="login"
                                        >
                                            Вход
                                        </v-btn>
                                        <v-btn
                                            color="black"
                                            class="white--text"
                                            @click.prevent="reset"
                                        >
                                            Очистить
                                        </v-btn>
                                    </v-card-actions>
                                </v-form>
                            </v-card-text>
                        </v-card>
                        <handle-error
                            v-if="this.isErrorExist" 
                            :errorCode="this.errorCode" 
                            :errorMessage="this.errorMessage" 
                        ></handle-error>
                    </v-col>
                </v-row>
            </v-container>
        </v-app>
    </div>
</template>

<script> 
import * as firebase from 'firebase/app'
import Vue from 'vue'
import Toolbar from '../components/Toolbar.vue'
import store from '../store/index.js'
import HandleError from '../components/HandleError.vue'

Vue.component('toolbar', Toolbar);
Vue.component('handle-error', HandleError);

var status_auth;

export default {
    data: () => ({
        toolbarTitle: 'Авторизация',
        valid: true,
        email: '',
        password: '',
        errorCode: '200',
        errorMessage: 'Success',
        isErrorExist: false,
        passwordRules: [
            v => !!v || 'Password is required',
            v => (v && v.length <= 10) || 'Password must be less than 10 characters',
        ],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid string',
        ] 
    }),
    methods: {
        login: function() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    status_auth = true;
                    this.$store.dispatch('PROCESSING_COMPLETE_AUTH', status_auth);
                    if (this.$store.getters.READ_AUTH) {this.$router.push('/');}
                    
                })
                .catch((error) => {
                    this.isErrorExist = true;
                    this.errorCode = error.code;
                    this.errorMessage = error.message;
                });
                this.isErrorExist = false;
        },
        validate: function() {
            this.$refs.form.validate()
        },
        reset: function() {
            this.$refs.form.reset()
        }
    },
    created: function() {
        store.dispatch('PROCESSING_COMPLETE_AUTH');
    },
    mounted: function() {
        this.validate();
    }
}
</script>