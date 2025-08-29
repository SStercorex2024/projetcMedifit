<script setup>
import Trust from "@/pages/about/main/trust.vue";
import BannerAbout from "@/pages/about/main/bannerAbout.vue";

defineOptions({
  name: 'About'
})
</script>

<template>
  <main>
    <trust/>
    <banner-about/>
  </main>
</template>

<style scoped>
main {
  margin-top: 107px;
}
</style>