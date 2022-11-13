<template lang="pug">
.home-page
    HomeHeaderVue
    HeaderUnderVue
    AboutView
</template>

<script lang="ts">
    import HomeHeaderVue from '@/components/HomePageComponents/HomeHeader.vue';
    import HeaderUnderVue from '@/components/HomePageComponents/HeaderUnder.vue';
    import AboutView from '@/views/AboutView.vue';
    export default {
        components:{
            HomeHeaderVue,
            HeaderUnderVue,
            AboutView,
        }
}
</script>
