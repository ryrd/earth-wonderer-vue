<script lang="ts" setup>
import { useModeStore } from '../../stores/modeStore';
import gsap from 'gsap';
import { onMounted, ref } from 'vue';

const mode = useModeStore();

const toggleRef = ref();
const tryItRef = ref();

const toggleDark = () => {
    window.document.documentElement.classList.toggle('dark');
    mode.toggleMode();
    tryItRef.value.style.display = 'none';
    localStorage.setItem('darkModeStorage', JSON.stringify(mode.darkMode));
    if(!localStorage.getItem('toggleClicked')) localStorage.setItem('toggleClicked', 'true');
}

const toggleAnim = gsap.timeline()

onMounted(() => {
    if(localStorage.getItem('toggleClicked')) tryItRef.value.style.display = 'none';

    toggleAnim.from(toggleRef.value, {
        duration: 1.3,
        y: -100,
        ease: "power4.out"
    })
});
</script>

<template>
    <div>
        <button class='bg-black hover:bg-neutral-900 cursor-point w-auto h-12 md:h-16 absolute top-0 right-0 flex justify-center items-center text-white font-oswald font-light tracking-wide text-base md:text-[1.4vw] px-[3vw] md:px-[1.5vw] landscape:lg:py-[3vh] gap-3 z-50'
                @click="toggleDark"
                id="toggle"
                ref="toggleRef"
                >
            {{!mode.darkMode ? 'dark' : 'light'}} mode
            <img :src="!mode.darkMode ? '/moon.svg' : '/sun.svg'" alt="dark mode toggle" class='h-5 md:h-[2vw]' />
        </button>

        <div class='try-it w-[25vw] md:w-[10vw] h-16 absolute top-14 md:top-20 right-0 flex flex-col justify-center items-center cursor-point font-oswald font-light text-[#d9d9d9] text-sm md:text-base z-50'
                id="tryit"
                ref="tryItRef">
            <img src="/arrow-try.svg" alt="try dark mode img" class='h-6'/>
            try it
        </div>        
    </div>
</template>
