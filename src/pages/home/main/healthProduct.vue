<script setup>
import {inject, onMounted, ref} from "vue";
import SectionComponent from "@/components/sectionComponent.vue";
import ProductCards from "@/components/productCrads.vue";
import ShieldCheck from "@/components/icons/shield-check.vue";
import ArrowLeftRight from "@/components/icons/arrow-left-right.vue";
import CreditCard from "@/components/icons/credit-card.vue";

defineOptions({
  name: 'health-product'
})

const allData = inject('all-data')
const productsOne = ref([])

const listItems = [
  {
    name: '30 Days warranty',
    desc: 'Enjoy peace of mind with warranty',
    icon: ShieldCheck,
  },
  {
    name: 'Exchange policy',
    desc: 'You`re satisfied with your purchase',
    icon: ArrowLeftRight,
  },
  {
    name: 'Secure payment',
    desc: 'Shop with confidence every time',
    icon: CreditCard,
  },
]

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
      title-content="Latest health product"
      :isPaddingBottomBig="true"
      :isTitle="true"
      :class-section="'health-product'"
  >
    <product-cards :products="productsOne"/>
    <ul class="health-product__extra">
      <li
          class="health-product__extra-item"
          v-for="(item, index) in listItems"
          :key="index"
      >
        <div class="health-product__extra-icon">
          <component :is="item.icon"/>
        </div>
        <dl>
          <dd>
            {{ item.name }}
          </dd>
          <dt>
            {{ item.desc }}
          </dt>
        </dl>
      </li>
    </ul>
  </section-component>
</template>

<style>
.health-product__extra {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 36px;
  padding: 12px 20px;
  margin-top: 20px;
  background-color: var(--color-white);
  border-radius: var(--border-radius-l);
}

.health-product__extra-item {
  display: flex;
  column-gap: 10px;
  align-items: center;
  justify-content: center;
}

.health-product__extra-icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 117px;
  height: 115px;

  svg {
    width: 40px;
    height: 40px;
    z-index: var(--z-index-icon-health-bg);
  }
}

.health-product__extra-icon:before {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: -5px;
  top: -5px;
  background-image: url("/icons/shield-bg.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  z-index: var(--z-index-icon-health-bg);
}

dl {
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  dd {
    font-weight: 500;
    margin-left: 0;
  }

  dt {
    font-family: var(--color-bg-second);
    font-size: 16px;
    color: var(--color-text-muted);
  }
}

@media (max-width: 1128px) {
  .health-product__extra {
    flex-wrap: wrap;
    row-gap: 20px;
  }
}

@media (max-width: 480px) {
  .health-product__extra-item {
    flex-direction: column;
    text-align: center;
  }
}


</style>