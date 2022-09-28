<script lang="ts" setup>
import gsap from 'gsap';
import { defineComponent } from 'vue';

// export default defineComponent({
//     props: {
//         direction: String
//     },
//     methods: {
//         PTOEnter(el: any){
//             console.log(el)
//         },
//         PTOExit(el: any){
//             console.log(el)
//         }
//     }
// })

const PTOEnter = (el: any) => {
    console.log(el)
}
const PTOExit = (el: any) => {
    console.log(el)
}
</script>

<template>
    <transition name="PTO" @enter="PTOEnter" @exit="PTOExit" mode="out-in">
        <div class="h-screen w-screen bg-dark fixed top-0 left-full z-[100]"/>
    </transition>
</template>