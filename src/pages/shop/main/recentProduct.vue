<script setup>
import SectionComponent from "@/components/sectionComponent.vue";
import ProductCards from "@/components/productCrads.vue";
import axios from "axios";
import {onMounted, ref} from "vue";

defineOptions({
  name: 'RecentProduct'
})

onMounted(() => {
  getProductsOne()
})

const productsOne = ref([])

const getProductsOne = () => {
  axios.get('http://localhost:3000/goods_one')
  .then(res => {
    productsOne.value = res.data
  })
}
</script>

<template>
  <section-component
      class-section="recent"
      title-content="Recent Products"
      :is-title="true"
  >
    <product-cards :products="productsOne"/>
  </section-component>
</template>

<style scoped>
</style>