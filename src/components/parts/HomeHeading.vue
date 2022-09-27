<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{text: string}>();

</script>

<template>
    <div class='relative flex items-center justify-center font-kaushan uppercase text-center z-10'>
        <div class="relative flex items-center justify-center">
            <img src="/paint.webp" class="absolute top-0 left-1/2 -translate-x-1/2 portrait:-translate-y-[15%] landscape:-translate-y-[10%] w-[50vw] portrait:h-[6vh] md:w-full landscape:h-[14vh] z-0 dark:invert"/>
            <h1 class='text-[5vw] md:text-[3.5vw] mx-2 md:mx-4 text-white dark:text-dark z-10 px-[5vw]'>{{text}}</h1>
        </div>
    </div>
</template>