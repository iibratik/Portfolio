<template lang="pug">
.about-me
    .container.about-me-content
        .about-me__left
            p.about-me__upper-title IBRAT
                img(src="@/assets/img/decor-star-little.svg")
                span IBRAGIMOV
            h2.about-me__title Front end developer
        .about-me__right
            h3.about-me__text-header Started learning web development almost year ago but have finished 5+ layouts in figma
            p.about-me__text-body Despite of I’m junior in web developing I can develope landing page. Although i’m junior front-end developer I know hard HTML CSS JS and Vue technologies. Hope we will cooperate with each other.
            .about-me__text-footer
                .about-me-info(v-for="aboutMeSec in aboutMeInfo")
                    p.about-me-info__upper-title {{aboutMeSec.upperTitle}}
                    h4.about-me-info__title {{aboutMeSec.title}}
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    data(){
        return{
            aboutMeInfo:[
                {upperTitle:"BORN IN", title:'Tashkent'},
                {upperTitle:"EXPERIENCE", title:'1 Years'},
                {upperTitle:"DATE OF BIRTH", title:'02 october 2002'},
            ]
        }
    }
})
</script>