<template lang="pug">
.home-page
    HomeHeaderVue
    HeaderUnderVue
</template>

<script lang="ts">
    import HomeHeaderVue from '@/components/HomePageComponents/HomeHeader.vue';
    import HeaderUnderVue from '@/components/HeaderUnder.vue';
    export default {
        components:{
            HomeHeaderVue,
            HeaderUnderVue
        }
}
</script>
