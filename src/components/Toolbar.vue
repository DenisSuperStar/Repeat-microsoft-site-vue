<template>
    <div>
        <v-toolbar
            color="primary"
            dark
            flat
        >
            <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>