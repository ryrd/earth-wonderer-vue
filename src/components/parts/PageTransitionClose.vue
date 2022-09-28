<script lang="ts" setup>
import gsap from 'gsap';
import { defineComponent } from 'vue';

// export default defineComponent({
//     props: {
//         from: String
//     },
//     methods: {
//         PTCEnter(el: any): void{
//             console.log(el)
//         },
//         PTCExit(el: any): void{
//             console.log(el)
//         }
//     },
//     unmounted(){
//         this.PTCEnter;    
//     }
// })

const PTCEnter = (el: any) => {
    console.log(el)
}
const PTCExit = (el: any) => {
    console.log(el)
}
</script>

<template>
    <transition name="PTC" @enter="PTCEnter" @exit="PTCExit" mode="out-in">
        <div class="h-[10%] w-screen bg-white fixed top-0 left-0 z-[100]"/>
    </transition>
</template>