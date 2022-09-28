<script setup lang="ts">
    import Toggle from '../components/parts/Toggle.vue';
    import Header from '../components/sections/Header.vue';
    import AboutSite from '../components/sections/AboutSite.vue';
    import Destinations from '../components/sections/Destinations.vue';
    import { useModeStore } from '../stores/modeStore';
    import PageTransitionOpen from '../components/parts/PageTransitionOpen.vue';
    import PageTransitionClose from '../components/parts/PageTransitionClose.vue';
    const mode = useModeStore();
    </script>
    
    <template>
        <div :class="mode.darkMode ? 'bg-night' : 'bg-light'">
            <Toggle />
            <Header/>
            <AboutSite />
            <Destinations/>
    
            <!-- <PageTransitionOpen direction="detail"/> -->
            <!-- <PageTransitionClose from="detail"/> -->
        </div>
    </template>
    