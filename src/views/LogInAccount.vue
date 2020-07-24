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
                            <v-toolbar
                                color="primary"
                                dark
                                flat
                            >
                                <v-toolbar-title>Войти</v-toolbar-title>
                            </v-toolbar>
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
                                    <template v-if="selectedLayout">
                                        <v-card-actions>
                                            <v-btn
                                                :disabled="!valid"
                                                color="primary"
                                                @click="login"
                                            >
                                                Войти
                                            </v-btn>
                                            <v-btn
                                                color="primary"
                                                @click="reset"
                                            >
                                                Очистить
                                            </v-btn>
                                        </v-card-actions>
                                    </template>
                                    <template v-else>
                                        <v-btn
                                            :disabled="!valid"
                                            color="primary"
                                            class="mb-3"
                                            @click="login"
                                            block
                                        >
                                            Вход
                                        </v-btn>
                                        <v-btn
                                            color="primary"
                                            @click="reset"
                                        >
                                            Очистить
                                        </v-btn>
                                    </template>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-app>
    </div>
</template>

<script> 
import * as firebase from 'firebase/app'

export default {
    data: () => ({
        email: '',
        password: '',
        valid: true,
        name: '',
        passwordRules: [
            v => !!v || 'Password is required',
            v => (v && v.length <= 10) || 'Password must be less than 10 characters',
        ],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid string',
        ],
        selectedLayout: true 
    }),
    methods: {
        login: function() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(login => {
                    console.log(login);
                })
                .catch(function(error) {
                    console.log(error);
                });
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
                this.selectedLayout = false;
            } else this.selectedLayout = true;
        }
    },
    created: function() {
        window.addEventListener('resize', this.watchWidth);
        this.watchWidth();
    }
}
</script>