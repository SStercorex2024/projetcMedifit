<script setup>
import Banner from "@/pages/home/main/banner.vue";
import Category from "@/pages/home/main/category.vue";
import HealthProduct from "@/pages/home/main/healthProduct.vue";

defineOptions({
  name: 'index'
})
</script>

<template>
  <main>
    <banner/>
    <category/>
    <health-product/>
  </main>
</template>

<style scoped>
</style>