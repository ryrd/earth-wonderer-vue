<script setup lang="ts">
// @ts-ignore
import HomeHeading from '../parts/HomeHeading.vue';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

gsap.registerPlugin(ScrollTrigger);

const aboutImgOne = ref();
const aboutImgTwo = ref();
const aboutContainer = ref();
const route = useRoute();

onMounted(() => {
    if(route.path === '/'){
        const aboutImgAnim = gsap.timeline({
            scrollTrigger: {
                trigger: aboutContainer.value,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.6,
            }
        })
        
        const aboutImgAnim2 = gsap.timeline({
            scrollTrigger: {
                trigger: aboutContainer.value,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.6,
            }
        })
        
        aboutImgAnim.to(aboutImgOne.value, {
            yPercent: -90,
            rotate: 8
        });
        aboutImgAnim2.to(aboutImgTwo.value, {
            yPercent: -60,
            rotate: -8
        });
    }
})

</script>

<template>
    <div class='relative h-auto flex justify-center md:justify-start items-center flex-col portrait:pb-[8vh] landscape:pb-[14vh] portrait:pt-8 landscape:pt-[6%]'
            ref="aboutContainer">
        <HomeHeading text='about' />
        <p class='w-[70vw] md:w-1/2 font-oswald font-light md:text-[2.3vw] text-center mt-8 md:mt-10 z-10 dark:text-white dark:font-extralight'>
        <span class='font-oswald uppercase font-bold text-sm md:text-[2vw]'>Earth Wonderer</span> is a dummy travel destination site created by 
        <a href='https://ryrd.github.io' target='_blank'><span class='text-blue-900 dark:text-blue-600 font-gilda underline ml-1 md:ml-2 cursor-point'>ryrd</span>.</a> 
        this site is showing 2 cities, Banjarmasin and Kotabaru 
        from south Borneo Indonesia, and few underrate 
        but beautiful location around the world.
        </p>

        <div class="absolute top-0 h-[120px] w-full bg-gradient-to-b from-offwhite dark:from-dark to-transparent"></div>
        
        <img src="/src/assets/about/about2.webp" ref="aboutImgOne" class='absolute -right-[8%] md:right-[12%] top-[45%] md:top-[35%] w-28 md:w-[16vw] z-0 about-shadow' />
        <img src="/src/assets/about/about1.webp" ref="aboutImgTwo" class='absolute -left-[5%] md:left-[13%] bottom-[0%] md:bottom-[2%] w-24 md:w-[14vw] z-0 about-shadow' />
    </div>
</template>