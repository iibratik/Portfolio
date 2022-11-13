<template lang="pug">
.under-header
    ul.under-header__lists
        li.under-header__list(v-for="list in underHeaderNav" :key="list.id")
            span {{list.text}}
            .under-header__decor 
</template>

<script lang="ts">
export default {
    data(){
        return{
            underHeaderNav:[
                {text:'DEVELOPMENT', id:1},
                {text:'STRATEGY', id:2},
                {text:'PRODUCT DEVELOPE', id:3},
                {text:'ALIVE WEB SITE', id:4},
                {text:'WEB DIRECTION', id:5},
                {text:'WEB', id:6},
                ]
        }
    }
}
</script>
