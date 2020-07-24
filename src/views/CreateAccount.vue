<template>
    <v-app>
        <div>
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
                                            color="primary"
                                            class="mb-3"
                                            @click="signup"
                                            block
                                        >
                                            Зарегистрироваться
                                        </v-btn>
                                        <v-btn
                                            color="primary"
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
                                                color="primary"
                                                @click.prevent="signup"
                                            >
                                                Зарегистрироваться
                                            </v-btn>
                                            <v-btn
                                                color="primary"
                                                @click.prevent="reset"
                                            >
                                                Очистить
                                            </v-btn>
                                        </v-card-actions>
                                    </template>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </v-app>
</template>

<script>
import * as firebase from 'firebase/app'
import Vue from 'vue'
import Toolbar from '../components/Toolbar.vue'

Vue.component('toolbar', Toolbar);

export default {
    data: () => ({
        toolbarTitle: 'Регистрация',
        valid: true,
        email: '',
        password: '',
        layoutSelect: false,
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
                .then(account => {
                    console.log(account);
                    this.$router.push('/');
                })
                .catch(error => {
                    console.log(error);
                })
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