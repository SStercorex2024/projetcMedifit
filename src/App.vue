<script setup>
import CustomerLayout from "@/layouts/CustomerLayout.vue";
import {onMounted, provide, reactive, watch} from "vue";
import axios from "axios";

const activeGoods = reactive([])

onMounted(() => {
  getActiveGods()
})

const getActiveGods = () => {
  axios.get('http://localhost:3000/goods_active')
  .then(res => Object.assign(activeGoods, res.data))
}
provide('active-goods', activeGoods)
</script>

<template>
  <customer-layout>
    <router-view></router-view>
  </customer-layout>
</template>

<style scoped>
</style>
