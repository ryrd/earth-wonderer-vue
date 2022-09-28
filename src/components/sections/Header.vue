<script setup lang="ts">
import { useModeStore } from "../../stores/modeStore";
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";

gsap.registerPlugin(ScrollTrigger);

const mode = useModeStore();

const route = useRoute()
const mobile = ref(false);
// imgsrefs
const personImg = ref();
const mountainOneImg = ref();
const mountainTwoImg = ref();
const HeaderRef = ref();
const mainTitleRef = ref();

const vidRef = ref();

onMounted(() => {
    if(route.path === '/'){
        // ---------video playback variable----------
        let accelamount = .1;
        let scrollpos = 0;
        let delay = 0;
        
        //check mobile
        window.addEventListener('resize', () => {
            window.innerWidth < 500 ? mobile.value = true : mobile.value = false;
        }) 
        
        //-------horizontal parallax-------
        const horizontalParallax = (e: any) => {
            gsap.set(personImg.value, {
                x: ((e.pageX*-.05)+25)
            })
            gsap.set(mountainOneImg.value, {
                x: ((e.pageX*-.015)+25)
            })
            gsap.set(mountainTwoImg.value, {
                x: ((e.pageX*-.01)+25)
            })
        }
        window.innerWidth > 500 && HeaderRef.value.addEventListener('mousemove', (e: any) => horizontalParallax(e));
        
        // ----------vertical parallax----------
        gsap.to(personImg.value, {
            scrollTrigger: {
                    trigger: HeaderRef.value,
                    start: 'bottom bottom',
                    end: 'bottom top',
                    scrub: 1.6
            },
            yPercent: -20
        });
        gsap.to(mountainOneImg.value, {
            scrollTrigger: {
                trigger: HeaderRef.value,
                start: 'bottom bottom',
                end: 'bottom top',
                scrub: 1.6
            },
            yPercent: -9
        });
        gsap.to(mountainTwoImg.value, {
            scrollTrigger: {
                trigger: HeaderRef.value,
                    start: 'bottom bottom',
                    end: 'bottom top',
                    scrub: 1.6
            },
            yPercent: -5
        });
        if(document.querySelector('#vid')){
            //-----------video play on scroll-----------
            //select bg video
            const vid = document.querySelector('#vid') as any;
            //set delay/current playback value
            const scrollplay = () => {
                delay += (scrollpos-delay)*accelamount;
                vid.currentTime = delay;
            }
            //set scrollY value function
            const setScrollPos = () => scrollpos = window.scrollY/120;
            window.addEventListener('scroll', (e) => {
                window.innerWidth > 500 && setScrollPos();
                if(mainTitleRef.value){
                    if(window.scrollY > 5){
                        gsap.to(mainTitleRef.value, {
                            yPercent: -100,
                            opacity: 0,
                            filter: 'blur(15px)',
                            duration: .7,
                            ease: 'Power4.easeOut',
                        })
                    }
                    else{
                        gsap.to(mainTitleRef.value, {
                            yPercent: 0,
                            opacity: 1,
                            filter: 'blur(0px)',
                            duration: .7,
                            ease: 'Power4.easeOut',
                        })
                    }
                }
            });
            //interval for video scroll animation
            const videoInterval = setInterval(() => {
                if (scrollpos < 3) scrollplay()
                else return
            }, 33.33);
            //remove video scroll animation on mobile
            window.innerWidth < 500 && clearInterval(videoInterval);
        }
    }
});

</script>

<template>
    <div class='min-h-[600px] h-[90vh] md:portrait:h-[75vh] md:h-screen relative overflow-hidden' ref="HeaderRef">

        <span class='absolute top-1/2 left-[20vw] -translate-x-1/2 -translate-y-1/2 z-0 font-oswald font-thin text-dark dark:text-white animate-pulse'>loading...</span>

        <div class='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-full w-full'>
            <img v-if="mobile" 
                    :src="mode.darkMode ? 'src/assets/header/night/bg-picture-night.jpg' : 'src/assets/header/day/bg-picture.jpg'" 
                    class='h-full object-cover' 
                    alt="header-bg-picture" />
            <video v-else 
                    :src="mode.darkMode ? 'src/assets/header/night/bg-night.mp4' : 'src/assets/header/day/bg-day.mp4'" 
                    id="vid" ref="vidRef"
                    class='h-full sm:w-screen object-cover'></video>
        </div>

        <img class='absolute -bottom-[2vh] -right-[15vw] w-[150vw]
                            sm:-bottom-[10vh] sm:-right-[20vw] sm:w-screen
                    transition duration-300 ease-out md:transition-none z-20'
            ref="mountainTwoImg"
            :src="mode.darkMode ? 'src/assets/header/night/mountain-2-night.webp' : 'src/assets/header/day/mountain-2.webp'"
        />

        <img class='absolute -left-[30vw] -bottom-[10vw] w-[150vw] 
                            sm:-left-[15vw] sm:-bottom-[13vh] sm:w-screen
                transition duration-300 ease-out md:transition-none z-30'
            ref="mountainOneImg"
            :src="mode.darkMode ? 'src/assets/header/night/mountain-1-night.png' :'src/assets/header/day/mountain-1.webp'"
        />

        <div class='absolute top-[15vh] md:top-[13vh] text-white font-anton uppercase text-center left-1/2 -translate-x-1/2 drop-shadow-lg transition duration-700 ease-out z-40 origin-center'
                id='main-title'
                ref="mainTitleRef">
            <div class='flex items-center justify-center z-10'>
                <div class='portrait:h-[.3vh] landscape:h-[.5vh] portrait:w-[20vw] landscape:w-[14vw] bg-gradient-to-r from-transparent to-offwhite'/>
                <h1 class='text-5xl md:text-[5vw] mx-4 z-10'>
                        Earth
                </h1>
                <div class='portrait:h-[.3vh] landscape:h-[.5vh] portrait:w-[20vw] landscape:w-[14vw] bg-gradient-to-l from-transparent to-offwhite'/>
            </div>
            <h1 class='text-7xl md:text-[10vw] z-0'>wonderer</h1>
        </div>

        <img class='absolute -left-[95vw] -bottom-[25vw] w-[280vw]
                            md:portrait:-left-[6vw] md:portrait:-bottom-[5vh] md:portrait:w-[110vw]
                            sm:-left-[1vw] sm:-bottom-[17vh] sm:w-screen
                            2xl:-left-[1vw] 2xl:-bottom-[17vh] 2xl:w-screen
                transition duration-300 ease-out md:transition-none z-50'
            ref="personImg"
            :src="mode.darkMode ? 'src/assets/header/night/person-night.webp' : 'src/assets/header/day/person-day.webp'"
        />

        <div :class="`absolute bottom-0 h-[80px] md:h-[100px] z-[60] w-full ${mode.darkMode ? 'header-gradient-dark' : 'header-gradient'}`"></div>

        <div class='absolute bottom-[3vh] md:bottom-[5vh] left-1/2 -translate-x-1/2 z-[70] font-oswald text-white font-light flex flex-col items-center text-sm md:text-base'>
            <span class='tracking-wide'>scroll down to explore</span>
            <img src="../../assets/arrow.svg" alt="scroll down" class='w-6 scroll-down' />
        </div>
    </div>
</template>