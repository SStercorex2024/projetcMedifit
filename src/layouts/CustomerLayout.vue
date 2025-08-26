<script setup>
import HeaderComponentComponent from '@/components/headerComponent.vue'
import FooterComponentComponent from '@/components/footerComponent.vue'

defineOptions({
  name: 'CustomerLayout'
})
</script>

<template>
  <HeaderComponentComponent/>
  <main>
    <slot/>
  </main>
  <FooterComponentComponent/>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}
</style>