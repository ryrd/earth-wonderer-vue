<script setup lang="ts">
import DetailHeading from '../parts/DetailHeading.vue';
import PhotoBox from './PhotoBox.vue';

interface props {
    photos: string[], 
    photosId: string,
}
const {photos, photosId} = defineProps<props>()

const emit = defineEmits<{(e: 'set-selected-photo', value: string): void}>();

const setSelectedPhoto = (p: string) => {
    emit('set-selected-photo', p)
}
</script>

<template>
    <div>
        <DetailHeading DHText='photos'/>
        <div class='w-screen flex justify-center items-center mt-3 md:mt-2 md:mb-6 pb-7 md:pb-3'>
            <div class='relative w-[85%] columns-2 sm:columns-3 gap-2 sm:gap-4 mt-4 sm:mt-10'>
                <span class='font-oswald font-light text-[6px] md:text-base leading-none absolute top-1 right-8 z-0 animate-pulse dark:text-white'>loading...</span>
                <PhotoBox v-for="(photo, i) in photos" 
                            :photoContent="photo" 
                            @set-photo-box="setSelectedPhoto"
                            :key="`${photosId}-${i}`"/>
            </div>
        </div>
    </div>
</template>