<script setup>
import {onMounted, provide, reactive, ref} from "vue"
import CustomerLayout from "@/layouts/CustomerLayout.vue";

const activeGoods = reactive([])
const allData = ref({})
const isDataLoaded = ref(false)

const loadInitialData = async () => {
  try {
    const response = await fetch('/data/db.json')
    const data = await response.json()
    allData.value = data

    if (Array.isArray(data.goods_active)) {
      activeGoods.splice(0, activeGoods.length, ...data.goods_active)
    }

    isDataLoaded.value = true
  } catch (error) {
    console.error('Ошибка загрузки данных:', error)
    isDataLoaded.value = true
  }
}

onMounted(loadInitialData)

provide('all-data', allData)
provide('is-data-loaded', isDataLoaded)
provide('active-goods', activeGoods)
</script>


<template>
  <customer-layout>
    <router-view></router-view>
  </customer-layout>
</template>

<style scoped>
</style>
