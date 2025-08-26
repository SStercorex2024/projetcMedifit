<script setup>
import HeaderComponent from '@/components/header.vue'
import FooterComponent from '@/components/footer.vue'

defineOptions({
  name: 'CustomerLayout'
})
</script>

<template>
  <HeaderComponent/>
  <main>
    <slot/>
  </main>
  <FooterComponent/>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}
</style>