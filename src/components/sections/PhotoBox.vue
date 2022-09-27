<script lang="ts" setup>
interface props {
    photoContent: string,
}

const {photoContent} = defineProps<props>();
const emit = defineEmits<{(e: 'set-photo-box', value: string): void}>();

const setPhotoBox = () => {
    emit('set-photo-box', photoContent);
}

</script>

<template>
    <div class="relative mb-2 sm:mb-4 overflow-hidden cursor-point flex justify-center shadow-xl"
            @click="setPhotoBox"
            >
            <img src="/polaroid.webp" class='absolute top-0 w-full h-full object-fill z-10'/>
            <img :src="`${photoContent}`" class='w-auto sm:w-auto object-cover transition duration-500 ease-out'/>
        </div>
</template>