<template>
    <div>
        <v-item v-slot:default="{ active, toggle }">
            <v-card
                class="d-flex align-center"
                height="300"
                @click="toggle"
            >
                <v-img
                    :src="`https://picsum.photos/500/300?image=${range * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${range * 5 + 10}`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                    max-width="maxWidth"
                    max-height="300"
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
        </v-item>
    </div>
</template>

<script>
export default {
    props: {
        range: {
            type: Number,
            required: true
        }
    },
    data: () => ({
        width: null,
        maxWidth: null
    }),
    methods: {
        watchWidth: function() {
            this.width = window.innerWidth;

            if (this.width <= 600) {
                this.maxWidth = 400;
            }
            else if ((this.width > 600) && (this.width < 960)) {
                this.maxWidth = 800;
            } else {this.maxWidth = 400;}
        }
    },
    created: function() {
        window.addEventListener('resize', this.watchWidth);
        this.watchWidth();
    }
}
</script>