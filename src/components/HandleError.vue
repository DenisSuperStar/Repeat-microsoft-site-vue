<template>
    <div>
        <v-snackbar
            v-model="hiddenSnackbar"
            :timeout="4000"
            color="error"
            multi-line
            bottom
        >
            {{errorMessage}} {{errorCode}}
            <v-btn
                color="red darken-1"
                class="white--text"
                elevation="4"
                @click.prevent="clear_error"
            >
                Скрыть
            </v-btn>    
        </v-snackbar>
    </div>
</template>

<script>
export default {
    props: {
        errorCode: {
            type: String,
            required: true
        },
        errorMessage: {
            type: String,
            required: true
        }
    },
    data: () => ({
      hiddenSnackbar: true  
    }),
    methods: {
        clear_error: function() {
            this.hiddenSnackbar = false;
        }
    }
}
</script>