<template lang="pug">
nav.navbar
    .container.navbar-content
        router-link(to='/')
            img(src="@/assets/img/Logo-main.svg")
        ul.navbar__lists
            li.navbar__list
                router-link.navbar__link(to="/") Home
            li.navbar__list
                router-link.navbar__link(to="/about") About
            li.navbar__list
                router-link.navbar__link(to="/contact") Contact
        white-btn(@click="$router.push('/contacts')") Let's talk
</template>

<script lang="ts">
export default {}
</script>
