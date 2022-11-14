<template lang="pug">
.home-info
    .container.home-info-content
        .home-info__card(v-for="item in infoItems" :key="item.id")
            h2.home-info__title {{item.title}}+
            p.home-info__body {{item.body}}

</template>

<script>
    export default {
        data(){
            return{
                infoItems:[
                {title: this.$store.state.yearsExp, body:'Years of Experience', id:1},
                {title: this.$store.state.doneProj, body:'Project Completed', id:2},
                {title: this.$store.state.webTech, body:'Web Technology', id:3},
                    ]
            }

        }
    }
</script>