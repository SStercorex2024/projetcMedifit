<script setup>
import SectionComponent from "@/components/sectionComponent.vue";
import ProductCards from "@/components/productCrads.vue";
import {inject, onMounted, ref} from "vue";

defineOptions({
  name: 'RecentProduct'
})

const isDataLoaded = inject('is-data-loaded')
const allData = inject('all-data')
const productsOne = ref([])

onMounted(() => {
  getProductsOne()
})

const getProductsOne = () => {
  if (allData.value && allData.value.goods_one) {
    productsOne.value = allData.value.goods_one
  }
}
</script>

<template>
  <section-component
      class-section="recent"
      title-content="Recent Products"
      :is-title="true"
  >
    <div v-if="isDataLoaded">
      <product-cards :products="productsOne"/>
    </div>
  </section-component>
</template>

<style scoped>
</style>