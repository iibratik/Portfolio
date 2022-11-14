<template lang="pug">
.home-page
    HomeHeaderVue
    HeaderUnderVue
    HomeAbout
    HomeInfo
    Portfolio
</template>

<script>
import HomeHeaderVue from "@/components/HomePageComponents/HomeHeader.vue";
import HeaderUnderVue from "@/components/HomePageComponents/HomeUnderHeader.vue";
import HomeAbout from "@/components/HomePageComponents/HomeAbout.vue";
import HomeInfo from "@/components/HomePageComponents/HomeInfo.vue";
import Portfolio from "@/components/Portfolio.vue";
export default {
  components: {
    HomeHeaderVue,
    HeaderUnderVue,
    HomeAbout,
    HomeInfo,
    Portfolio,
  },
};
</script>
