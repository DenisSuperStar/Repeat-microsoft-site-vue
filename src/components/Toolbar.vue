<template>
    <div>
        <v-toolbar
            color="black"
            class="white--text"
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