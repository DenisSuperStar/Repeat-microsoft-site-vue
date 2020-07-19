<template>
    <div>
        <v-card flat tile class="d-flex">
            <v-img
                :src="`https://picsum.photos/500/300?image=${range * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${range * 5 + 10}`"
                aspect-ratio="1"
                class="grey lighten-2"
            >
                <template v-slot:placeholder>
                    <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                    >
                    
                    </v-row>
                </template>
            </v-img>
        </v-card>
    </div>
</template>

<script>
export default {
    props: {
        range: {
            type: Number,
            required: true
        }
    }
}
</script>