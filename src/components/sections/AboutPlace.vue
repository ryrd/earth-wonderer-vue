<script setup lang="ts">
import DetailHeading from '../parts/DetailHeading.vue';
import Map from '../parts/Map.vue';
import { useModeStore } from '../../stores/modeStore';

interface props {
    desc: string,
    mapLink: string,
    APlocation: string
}

const mode = useModeStore();

const {desc, mapLink, APlocation} = defineProps<props>();

</script>

<template>
    <div class='relative portrait:mt-3'>
        <div class='z-10'>
        <DetailHeading DHText="about place"/>
        </div>
        <div class='portrait:h-auto landscape:h-[60vh] flex portrait:flex-col font-oswald font-light z-10'>
        <div class='h-full landscape:flex-1 flex justify-center items-center portrait:my-6 my-4'>
            <p class='w-[80%] text-[4.3vw] sm:text-[1.5vw] landscape:ml-[10%] dark:text-white
                    first-letter:text-[12vw] sm:first-letter:text-[4.4vw] first-letter:leading-none 
                    first-letter:font-kaushan first-letter:mr-[2vw] sm:first-letter:mr-[1vw] first-letter:float-left'>
            {{desc}}
            </p>
        </div>
        <div class='relative h-full landscape:flex-1 flex justify-center items-center portrait:mt-2'>
            <div class='relative w-[60%] h-[60%] flex flex-col justify-center items-center z-10'>
            <span class='absolute top-1/2 left-1/2 -translate-x-1/2 font-oswald font-light animate-pulse z-0 dark:text-white'>loading...</span>
            <div class='flex text-[3vw] sm:text-[1.2vw] w-[100%] md:w-[80%] dark:text-white'>
                <img :src="mode.darkMode ? '/location-logo-dark.svg' : '/location-logo-light.svg'" alt="location logo" class='mr-2 w-[6%] md:w-[6%]'/>
                {{APlocation}}
            </div>
            <div class='mt-2 w-[100%] sm:w-[80%] portrait:h-[20vh] aspect-[4/3] relative overflow-hidden'>
                <Map :maplink="mapLink"/>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>