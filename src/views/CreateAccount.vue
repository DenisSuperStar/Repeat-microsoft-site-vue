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
                                <template v-if="layoutSelect">
                                    <v-btn
                                        :disabled="!valid"
                                        dark
                                        color="black"
                                        class="mb-3 white--text"
                                        @click="signup"
                                        block
                                    >
                                        Зарегистрироваться
                                    </v-btn>
                                    <v-btn
                                        dark
                                        class="white--text"
                                        @click.prevent="reset"
                                        block
                                    >
                                        Очистить
                                    </v-btn>
                                </template>
                                <template v-else>
                                    <v-card-actions>
                                        <v-btn
                                            :disabled="!valid"
                                            color="black"
                                            class="white--text"
                                            @click.prevent="signup"
                                        >
                                            Зарегистрироваться
                                        </v-btn>
                                        <v-btn
                                            color="black"
                                            class="white--text"
                                            @click.prevent="reset"
                                        >
                                            Очистить
                                        </v-btn>
                                    </v-card-actions>
                                </template>
                            </v-form>
                        </v-card-text>
                    </v-card>
                    <handle-error
                        v-if="this.$store.getters.CHECK_ERROR_EXIST" 
                        :errorCode="this.$store.getters.READ_ERROR_CODE" 
                        :errorMessage="this.$store.getters.READ_ERROR_MESSAGE" 
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
import HandleError from '../components/HandleError.vue'

Vue.component('toolbar', Toolbar);
Vue.component('handle-error', HandleError);

export default {
    data: () => ({
        toolbarTitle: 'Регистрация',
        valid: true,
        email: '',
        password: '',
        layoutSelect: false,
        account: null,
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
        signup: function() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    this.$store.dispatch('PROCESSING_SET_STATUS_USER_ACCOUNT');
                })
                .catch(error => {
                    this.$store.dispatch('PROCESSING_UPDATE_STATUS_ERROR', !this.isErrorExist);
                    this.$store.dispatch('PROCESSING_UPDATE_STATE_ERROR_CODE', error.code);
                    this.$store.dispatch('PROCESSING_UPDATE_ERROR_MESSAGE', error.message);
                })
                const isExists = false;
                this.$store.dispatch('PROCESSING_UPDATE_STATUS_ERROR', isExists);
        },
        validate: function() {
            this.$refs.form.validate()
        },
        reset: function() {
            this.$refs.form.reset()
        },
        watchWidth: function() {
            this.width = window.innerWidth;

            if (this.width < 350) {
                this.layoutSelect = true;
            } else this.layoutSelect = false;
        }
    },
    created: function() {
        window.addEventListener('resize', this.watchWidth);
        this.watchWidth();
    },
    mounted: function() {
        this.validate();
    }
}
</script>