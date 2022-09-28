<script setup lang="ts">
import HomeHeading from '../parts/HomeHeading.vue';
import DestinationBox from '../parts/DestinationBox.vue';
import DATA from '../../Data';
</script>

<template>
    <div>
        <HomeHeading text="Destinations"/>
        <div class='w-full portrait:h-8 landscape:h-12'/>
        <DestinationBox v-for="data in DATA" 
                        :key="data.id"  
                        :id="data.id"
                        :photo="data.mainPhoto"
                        :destinationName="data.name"
                        :longText="data.longText"
                        />
    </div>
</template>