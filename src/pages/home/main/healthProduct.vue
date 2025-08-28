<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import SectionComponent from "@/components/sectionComponent.vue";
import ProductCards from "@/components/productCrads.vue";

defineOptions({
  name: 'health-product'
})

onMounted(() => {
  getProducts()
})

const productsOne = ref([])

const getProducts = () => {
  axios.get('http://localhost:3000/goods_one')
  .then(res => {
    productsOne.value = res.data
  })
}

</script>

<template>
  <section-component
      title-content="Latest health product"
      :isPaddingBottomBig="true"
      :isTitle="true"
      :class-section="'health-product'"
  >
    <ul class="health-product__list">
      <product-cards :products="productsOne"/>
    </ul>
  </section-component>
</template>

<style>
.health-product__list {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
}

@media (max-width: 1360px) {
  .health-product__list {
    flex-wrap: wrap;
    row-gap: 20px;
  }
}
</style>