<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    props: {
        link : String
    }
})
</script>

<template>
    <div className='w-full h-full'>
        <iframe
            width='100%'
            height='100%'
            :src="`https://www.youtube.com/embed/${link}`"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
</template>