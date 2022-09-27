<script setup lang="ts">
import DetailHeading from '../parts/DetailHeading.vue';
import Youtube from '../parts/Youtube.vue';

interface props{
    ytVideo: string,
    videoOwner: string
}

const {ytVideo, videoOwner} = defineProps<props>();

</script>

<template>
    <div class='portrait:mt-6 landscape:mt-0'>
        <DetailHeading DHText="video"/>
        <div class='relative portrait:h-[20vh] landscape:h-[80vh] flex justify-center items-center portrait:mt-7 landscape:mt-2 md:mb-6 pt-24 sm:pt-0 pb-32 md:pb-3'>
        <span class='font-oswald font-light text-[6px] md:text-base leading-none absolute bottom-1/2 left-1/2 -translate-x-1/2 z-0 animate-pulse dark:text-white'>loading...</span>
        <div class='relative w-[87vw] sm:w-[60vw] aspect-video z-10'>
            <Youtube :link="ytVideo"/>
            <span class='font-oswald font-light text-[11px] dark:text-white md:text-base leading-none absolute -bottom-[10%] md:-bottom-[7%] right-[1%]'>video by <span class='font-bold text-[14px] md:text-xl leading-none'>{{videoOwner}}</span></span>
        </div>
        </div>
    </div>
</template>