<script setup>
import {inject, onMounted, ref} from "vue";
import axios from "axios";
import SectionComponent from "@/components/sectionComponent.vue";
import Cart from "@/components/icons/cart.vue";

defineOptions({
  name: 'health-product'
})

onMounted(() => {
  getProducts()
})
const productsOne = ref([])
const activeGoods = inject('active-goods')

const getProducts = () => {
  axios.get('http://localhost:3000/goods_one')
  .then(res => {
    productsOne.value = res.data
  })
}

const addProducts = (product) => {
  axios.post('http://localhost:3000/goods_active', product)
  .then(() => activeGoods.push(product))
}

</script>

<template>
  <section-component
      title-content="Latest health product"
      :isPaddingBottomBig="true"
      :isTitle="true"
      :class-section="'health-product'"
  >
    <ul class="health-product">
      <li
          class="health-product__item"
          v-for="(product, index) in productsOne"
          :key="product.id"
      >
        <div
            :class="[
                product['is-new'] && 'health-product--new',
                product.discount && 'health-product--discount',
                'health-product'
            ]"
        >
          <img
              width="302"
              :src="`/src/assets/images/goods-one/${product['image-name']}.png`"
              :alt="product.title"
          />
          <button @click="addProducts(product)" class="health-product__btn">
            <cart class="health-product__icon"/>
            Add to bag
          </button>
        </div>
        <dl class="health-product__extra">
          <dt>
            {{ product.title }}
          </dt>
          <dd>
            ${{ product.price }} USD
            <p v-if="product['lover-price']">
              ${{ product['lover-price'] }} USD
            </p>
          </dd>
        </dl>
      </li>
    </ul>
  </section-component>
</template>

<style>
.health-product {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
}

.health-product__item {
  position: relative;
  width: 302px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}

.health-product__item:hover .health-product__btn {
  bottom: 30%;
  user-select: initial;
  pointer-events: initial;
  opacity: 1;
}

.health-product {
  width: 100%;

  img {
    border-radius: var(--border-radius-l);
  }
}

.health-product--new:before {
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 20px;
  left: 20px;
  content: 'New';
  padding-inline: 11px;
  height: 30px;
  font-family: var(--fonts-second);
  color: var(--color-white);
  border-radius: var(--border-radius-l);
  background-color: var(--color-accent);
}

.health-product--discount:after {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20px;
  left: 20px;
  content: 'Discount';
  padding-inline: 11px;
  height: 30px;
  font-size: 13px;
  font-family: var(--fonts-second);
  color: var(--color-white);
  border-radius: var(--border-radius-l);
  background-color: var(--color-accent);
}

.health-product__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  font-size: 16px;
  font-weight: 500;
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 0;
  user-select: none;
  pointer-events: none;
  opacity: 0;
  padding-block: 5px;
  background-color: var(--color-bg-second);
  border-radius: var(--border-radius-l);
}

.health-product__btn:hover {
  color: var(--color-accent);
}

.health-product__icon {
  width: 24px;
  height: 24px;
}

.health-product__extra {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}

dd {
  color: var(--color-text-muted);
  display: flex;
  column-gap: 20px;
  font-weight: 500;
  margin-left: 0;

  p {
    display: block;
    align-content: end;
    position: relative;
    font-size: 16px;
    font-weight: 500;
  }

  p:before {
    position: absolute;
    content: '';
    width: 60%;
    top: 55%;
    left: 0;
    translate: 0 -50%;
    height: 1px;
    background-color: var(--color-text-muted);
  }
}

@media (max-width: 1360px) {
  .health-product {
    flex-wrap: wrap;
    row-gap: 20px;
  }
}

@media (max-width: 918px) {
  .health-product__btn {
    bottom: 30%;
    user-select: initial;
    pointer-events: initial;
    opacity: 1;
  }
}

@media (max-width: 700px) {
  .health-product__item {
    width: 240px;
  }
}

@media (max-width: 540px) {
  .health-product__item {
    width: 320px;
  }
  .health-product__extra{
    align-items: center;
  }
}
</style>