<template>
    <div class='fixed top-0 left-0 z-50 w-screen h-screen bg-dark text-white flex flex-col justify-center items-center'>
      <h1 class='font-anton landscape:text-[10vw] portrait:text-[25vw]'>404</h1>
      <router-link to="/" class='bg-white text-dark p-2 font-oswald tracking-wide flex flex-row'>
        <img src="../assets/arrow-back.svg" alt="back" class='invert h-[20px] w-auto mr-2 translate-y-1'/> go back
      </router-link>
    </div>
</template>
