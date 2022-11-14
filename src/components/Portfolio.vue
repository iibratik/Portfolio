<template lang="pug">
.portfolio
    h2.title.portfolio-title Portfolio
    p.body.portfolio-body REGONITIONS & ACCOIMPLISHMENTS
    .container.portfolio-content
        .portfolio__card(v-for="card in getPortfolio" :key="card.id")
            img(:src="require(`@/assets/img/work-${card.img}.webp`)")
            .card__left
                h3.card__title {{card.body}}
                a.card__link(:href="card.link") See more
</template>

<script lang="js">
import { mapGetters } from 'vuex'
export default {
computed:{
        ...mapGetters(["getPortfolio"])
    },

}
</script>

