<script setup lang="ts">
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

gsap.registerPlugin(ScrollTrigger);

interface props {
    id: string,
    photo: string,
    destinationName: string,
    longText?: 'long' | 'medium'
}
const {id, photo, destinationName, longText} = defineProps<props>();

const imgRef = ref();
const imgContainerRef = ref();

const route = useRoute();
const router = useRouter();

const pageTransition = () => {
    gsap.to('#homePageTransition', {
        xPercent: 0,
        duration: .5,
        ease: 'Power4.easeOut'
    });
    setTimeout(()=>{
        router.push(`/destination/${id}`);
    }, 600);
}

onMounted(() => {
    // if(route.path === '/'){
        const DesBoxAnim = gsap.timeline({
            scrollTrigger: {
                trigger: imgContainerRef.value,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5,
            },
        })
        
        DesBoxAnim.to(imgRef.value, {
            yPercent: 15,
        });
    // } 
});
</script>

<template>
    <div class='relative min-h-[100px] portrait:h-[28vh] landscape:h-[90vh] overflow-hidden flex items-end'
         ref="imgContainerRef">
        <img :src="photo" ref="imgRef" class='w-[100%] portrait:h-[180%] landscape:h-[120%] object-cover' />
        <button @click="pageTransition" :class="`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark backdrop-blur-sm bg-opacity-20 border sm:border-3 border-white dark:border flex items-center justify-center gap-2 md:py-2 md:px-6 group cursor-point ${longText === 'long' ? 'portrait:min-w-[58vw] lg:portrait:min-w-[18vw] px-0' : longText === 'medium' ? 'portrait:min-w-[51vw] lg:portrait:min-w-[18vw] px-0' : 'w-auto px-4'}`">
            <span class='font-anton uppercase text-white tracking-wider text-[7vw] md:text-[5vw]'>{{destinationName}}</span>
            <img src="/src/assets/arrow.svg" class='h-[3.5vh] md:h-[9vh] md:portrait:h-[4vh] lg:portrait:h-[3vh] group-hover:translate-x-3 transition duration-400 ease-out'/>
        </button>
    </div>
</template>