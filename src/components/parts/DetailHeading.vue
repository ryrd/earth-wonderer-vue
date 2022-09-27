<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        DHText: String
    }
})
</script>

<template>
    <div class='w-screen portrait:h-10 landscape:h-16 p-5 flex'>
        <h1 class='font-kaushan uppercase text-[5.5vw] md:text-[3vw] leading-none dark:text-white'>{{DHText}}</h1>
        <div class='pl-[3vw] sm:pl-[2vw] flex-1'>
        <div class='w-full h-[2px] bg-gradient-to-r from-black dark:from-white to-transparent sm:translate-y-1'/>
        </div>
    </div>
</template>