<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    props: {
        maplink: String
    }
})
</script>

<template>
    <iframe :src="`https://www.google.com/maps/embed?pb=${maplink}`"
            width='100%'
            height='100%'
            style="border:0;"
            loading="lazy"
            class="z-10 cursor-point">
    </iframe>
</template>