<script setup lang="ts">
import DATA from '../Data';
import Toggle from '../components/parts/Toggle.vue';
import DetailHeader from '../components/sections/DetailHeader.vue';
import AboutPlace from '../components/sections/AboutPlace.vue';
import Video from '../components/sections/Video.vue';
import Photos from '../components/sections/Photos.vue';
import FullPhoto from '../components/sections/FullPhoto.vue';
import { useModeStore } from '../stores/modeStore';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import gsap from 'gsap';

const route = useRoute();
const router = useRouter();

const mode = useModeStore();

const data = DATA.find(data => data.id === route.params.id) || {id : '', name : '', location : '', video : '', videoOwner : '',desc : '',mapLink : '', mainPhoto : '', photos : ['',], longText: ''};

if (data.id === '') router.push('/NotFound.vue');

const selectedPhoto = ref<string>('');
const destinationPageTransition = ref();

const setSelectedPhoto = (photo: string) => selectedPhoto.value = photo;

onMounted(() => {
    window.scrollTo(0, 0);
    gsap.to('#destinationPageTransition', {
        xPercent: -100,
        duration: .5,
        ease: 'Power4.easeOut'
    });
})
</script>

<template>
    <div :class="`overflow-x-hidden ${mode.darkMode ? 'bg-night' : 'bg-light'}`">
        <Toggle/>
        <DetailHeader :image="data.mainPhoto" :DetailHeaderName="data.name" :DetailHeadinglocation="data.location"/>
        <AboutPlace :desc="data.desc" :mapLink="data.mapLink" :APlocation="data.location"/>
        <Video :ytVideo="data.video" :videoOwner="data.videoOwner"/>
        <Photos :photos="data.photos" :photosId="data.id" @set-selected-photo="setSelectedPhoto" />

        <FullPhoto :selectedPhoto="selectedPhoto" @set-selected-photo="setSelectedPhoto" />

        <div id="destinationPageTransition" class="h-screen w-screen bg-dark fixed top-0 left-0 z-[100]"/>
    </div>
</template>
