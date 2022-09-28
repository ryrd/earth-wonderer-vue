<script setup lang="ts">
    import DATA from '../Data';
    import Toggle from '../components/parts/Toggle.vue';
    import DetailHeader from '../components/sections/DetailHeader.vue';
    import AboutPlace from '../components/sections/AboutPlace.vue';
    import Video from '../components/sections/Video.vue';
    import Photos from '../components/sections/Photos.vue';
    import FullPhoto from '../components/sections/FullPhoto.vue';
    import { useModeStore } from '../stores/modeStore';
    import PageTransitionOpen from '../components/parts/PageTransitionOpen.vue';
    import PageTransitionClose from '../components/parts/PageTransitionClose.vue';
    import { onMounted, ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    
    const route = useRoute();
    const router = useRouter();
    
    const mode = useModeStore();
    
    const data = DATA.find(data => data.id === route.params.id) || {id : '', name : '', location : '', video : '', videoOwner : '',desc : '',mapLink : '', mainPhoto : '', photos : ['',], longText: ''};
    if (data.id === '') {
        router.push('/NotFound.vue');
    };
    
    const selectedPhoto = ref<string>('');
    
    const setSelectedPhoto = (photo: string) => selectedPhoto.value = photo;
    
    onMounted(() => {
        window.scrollTo(0, 0);
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
    
            <!-- <PageTransitionOpen direction="home"/> -->
            <!-- <PageTransitionClose from="home"/> -->
        </div>
    </template>
    