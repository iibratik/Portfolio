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
        .navbar__btns
              icon-btn(@click="switchTheme" v-show="themeVar")
                  i.fas.fa-moon
              icon-btn(@click="switchTheme" v-show="!themeVar")
                  i.fas.fa-sun
              white-btn(@click="$router.push('/contacts')") Let's talk
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      themeVar: true,
    }
  },
  methods: {
    switchTheme() {
      this.themeVar = !this.themeVar
      const whiteVar = getComputedStyle(
        document.documentElement
      ).getPropertyValue('--white')
      const setCSSVar = document.documentElement.style
      if (whiteVar == '#F5F5F5') {
        setCSSVar.setProperty('--white', '#161513')
        setCSSVar.setProperty('--black', '#f5f5f5')
      } else {
        setCSSVar.setProperty('--black', '#161513')
        setCSSVar.setProperty('--white', '#F5F5F5')
      }
    },
  },
})
</script>
