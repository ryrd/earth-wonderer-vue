<script lang="ts" setup>
import gsap from 'gsap';
import { onMounted, ref } from 'vue';

const {selectedPhoto} = defineProps<{selectedPhoto: String}>();
const FPemit = defineEmits<{(e: 'set-selected-photo', value: string): void}>();

const setSelectedPhoto = () => {
    FPemit('set-selected-photo', '')
}

const fullPhotoContainer = ref();
const fullPhoto = ref();
const fullPhotoClose = ref();

const fullPhotoAnim = gsap.timeline()

// const fullPhotoEnter = (el: any) => {
//   console.log(el)
//   gsap.from(el, {
//     scale: .1,
//     duration: 1,
//     ease: "power4.out"   
//   })
// }

onMounted(() => {
    fullPhotoAnim
    .from(fullPhotoContainer.value, {
      opacity: 0,
      duration: 1,
      ease: "power4.out"   
    })
    .from(fullPhoto.value, {
      scale: .1,
      duration: 1,
      ease: "power4.out"
    })
    .from(fullPhotoClose.value, {
      scale: .1,
      duration: 1,
      ease: "power4.out"
    })
});

</script>


<template>
    <div :class="`${selectedPhoto === '' ? 'hidden' : 'flex'} fixed top-0 left-0 z-50 h-screen w-screen justify-center items-center bg-dark bg-opacity-90 cursor-zoom-out`"
            @click.self="setSelectedPhoto"
            ref="fullPhotoContainer"
            >
        <!-- <transition name="fullphoto" @enter="fullPhotoEnter"> -->
        <img :src="`${selectedPhoto}`"
                class='w-auto h-auto max-w-[90%] max-h-[90%] object-contain cursor-cursor'
                alt="full selected photo"
                ref="fullPhoto"
                />      
        <!-- </transition> -->
        <button class='absolute top-[5vh] portrait:left-[3vw] landscape:left-[5vw] w-10 cursor-point'
                @click.self="setSelectedPhoto"
                ref="fullPhotoClose"
                >
        <div class='h-[2px] w-[80%] bg-white rotate-45'>&nbsp;</div>
        <div class='h-[2px] w-[80%] bg-white -rotate-45 -translate-y-[100%]'>&nbsp;</div>
        </button>
    </div>
</template>

<!-- <style>
    .fullphoto-enter-from,
    .fullphoto-leave-to{
    scale: .5;
    }

    .fullphoto-enter-active,
    .fullphoto-leave-active{
    transition: .7s ease-out;
    }
</style> -->