<script setup lang="ts">
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

gsap.registerPlugin(ScrollTrigger);

interface Props {
    image: string,
    DetailHeaderName: string,
    DetailHeadinglocation: string
}

const {image, DetailHeaderName, DetailHeadinglocation} = defineProps<Props>();

const DesTitleCon = ref();
const DesTitleBlackLine = ref();
const DesSmallTitle = ref();
const DesBigTitle = ref();
const DesArrowBack = ref();
const DesScrollDown = ref();
const detailImg = ref();

const router = useRouter();

const desAnim = gsap.timeline();

onMounted(() => {
    desAnim
        .from(DesTitleCon.value, {
            duration: 2,
            scaleX: 0,
            ease: "power4.out"
        })
        .from(DesTitleBlackLine.value, {
            duration: 2,
            width: 0,
            ease: "power4.out"
        }, '-=1.9')
        .from(DesBigTitle.value, {
            duration: 1.8,
            xPercent: -150,
            ease: "power4.out"
        }, '-=1.8')
        .from(DesSmallTitle.value, {
            duration: 1.8,
            xPercent: -150,
            ease: "power4.out"
        }, '-=1.75')
        .from(DesArrowBack.value, {
            duration: 1.8,
            scale: 0,
            ease: "power4.out"
        }, '-=1.7')
        .from(DesScrollDown.value, {
            duration: 1.7,
            y: -60,
            opacity: 0,
            ease: "power4.out"
        }, '-=1.65')

    gsap.to(detailImg.value, {
        scrollTrigger: {
            trigger: detailImg.value,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.6,
        },
        scale: 1.2
    });
});

const backHome = () => {
    gsap.to('#destinationPageTransition', {
        xPercent: 0,
        duration: .5,
        ease: 'Power4.easeOut'
    });
    setTimeout(()=>{
        router.back();
    }, 600);
}
</script>

<template>
    <div class='relative flex items-center w-screen portrait:h-[80vh] landscape:h-[95vh] overflow-hidden'>
        <img class='z-0 object-cover w-full h-full' 
            :src="image"
            alt="heading img"
            ref="detailImg"
            />
                
        <div class='absolute w-auto portrait:min-h-[10vh] landscape:h-[25vh] z-10 left-0 bottom-0 origin-left bg-dark text-white bg-opacity-10 backdrop-blur flex flex-col justify-center pl-5 pr-6 md:pl-12 md:pr-14 tracking-wide'
             ref="DesTitleCon">
            <div class='absolute left-0 w-2 md:w-5 h-full bg-dark' ref="DesTitleBlackLine"/>
            <div class='overflow-hidden h-[80%] flex flex-col justify-center'>
                <h6 class='font-oswald text-[3vw] sm:text-[1.5vw] font-light' ref="DesSmallTitle">
                    {{DetailHeadinglocation}}
                </h6>
                <h1 class='font-anton uppercase text-[11vw] sm:text-[5.8vw] leading-none' ref="DesBigTitle">
                    {{DetailHeaderName}}
                </h1>
            </div>
        </div>

        <div class="absolute flex flex-col bottom-3 right-2 md:bottom-7 md:right-4" ref="DesScrollDown">
            <span class="font-oswald font-light tracking-wide text-[2.9vw] md:text-[1.6vw] text-white inline-block mb-3 rotate-90">scroll</span>
            <img class="h-12 md:h-20" src="../../assets/arrow-scroll.svg" alt="scroll down indicator"/>
        </div>

        <button class="absolute top-[1.5%] portrait:left-[1%] landscape:left-[2%] landscape:top-[3%] z-10 radial-gradient w-[15vw] h-[15vw] sm:w-[5vw] sm:h-[5vw] flex justify-center items-center cursor-point"
                ref="DesArrowBack"
                @click="backHome">
            <img src="../../assets/arrow-back.svg" class="h-[50%]" alt="back home button"/>
        </button>
    </div>
</template>