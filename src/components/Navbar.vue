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

<script>
export default{
  data() {
    return {
      themeVar: true,
    }
  },
  methods: {
    scrollHight() {
      const navbarLinks = document.querySelectorAll('.navbar__link')
      const navbar = document.querySelector('.navbar')
      navbarLinks.forEach((link) => {
        if (window.scrollY >= 10) {
          navbar.style.filter = "drop-shadow(20px 10px 12px rgba(0, 0, 0, 0.3))"
          link.style.color = 'var(--black)'
          navbar.style.background = 'var(--white)'
          navbar.style.position = 'fixed'
          navbar.style.top = "0"
          navbar.style.zIndex = "999"
          navbar.style.width = "100%"
        } else {
          navbar.style.filter = "none "
          link.style.color = 'var(--black)'
          navbar.style.transform = 'translateX(0)'
          navbar.style.left = '0'
          navbar.style.background = 'none'
          navbar.style.position = 'relative'
        }
      })
    },
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
  created() {
    window.addEventListener('scroll', this.scrollHight)
  },
}
</script>
