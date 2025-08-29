<script setup>
import Review from "@/pages/shop/main/review.vue";
import RecentProduct from "@/pages/shop/main/recentProduct.vue";
import BannerStarted from "@/components/bannerStarted.vue";

defineOptions({
  name: 'Shop'
})
</script>

<template>
  <main>
    <review/>
    <recent-product/>
    <banner-started/>
  </main>
</template>

<style scoped>
main {
  margin-top: 107px;
}
</style>