<script setup lang="ts">
import Toggle from '../components/parts/Toggle.vue';
import Header from '../components/sections/Header.vue';
import AboutSite from '../components/sections/AboutSite.vue';
import Destinations from '../components/sections/Destinations.vue';
import { useModeStore } from '../stores/modeStore';
import { onMounted } from 'vue';
import gsap from 'gsap';

const mode = useModeStore();

onMounted(() => {
    gsap.to('#homePageTransition', {
        xPercent: 100,
        duration: .5,
        ease: 'Power4.easeOut'
    });
});
</script>

<template>
    <div :class="mode.darkMode ? 'bg-night' : 'bg-light'">
        <Toggle />
        <Header/>
        <AboutSite />
        <Destinations/>

        <div id="homePageTransition" class="h-screen w-screen bg-dark fixed top-0 left-0 z-[100]"/>
    </div>
</template>
