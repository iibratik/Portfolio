<template lang="pug">
button.white-btn
    slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'white-btn',
})
</script>

<style lang="scss" scoped></style>
