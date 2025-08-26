<script setup>
import CustomerLayout from "@/layouts/CustomerLayout.vue";
import {provide, reactive} from "vue";

const activeGoods = reactive([])

provide('active-goods', activeGoods)
</script>

<template>
  <customer-layout>
    <router-view></router-view>
  </customer-layout>
</template>

<style scoped>
</style>
