<script setup>
import Trust from "@/pages/about/main/trust.vue";
import BannerStarted from "@/components/bannerStarted.vue";

defineOptions({
  name: 'About'
})
</script>

<template>
  <main>
    <trust/>
    <banner-started/>
  </main>
</template>

<style scoped>
main {
  margin-top: 107px;
}
</style>