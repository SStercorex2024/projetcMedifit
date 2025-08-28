<script setup>
import Cart from "@/components/icons/cart.vue";
import axios from "axios";
import {inject} from "vue";

defineOptions({
  name: 'productCards'
})

const {products} = defineProps({
  products: Array,
  required: true,
})

const activeGoods = inject('active-goods')

const addProducts = (product) => {
  axios.post('http://localhost:3000/goods_active', product)
  .then(() => activeGoods.push(product))
}

</script>

<template>
  <ul class="product__list">
    <li
        class="product__item"
        v-for="product in products"
        :key="product.id"
    >
      <div
          :class="[
                product['is-new'] && 'product--new',
                product.discount && 'product--discount',
                'product'
            ]"
      >
        <img
            class="product__img"
            width="302"
            :src="`/src/assets/images/goods/${product['image-name']}.jpg`"
            :alt="product.title"
        />
        <button @click="addProducts(product)" class="product__btn">
          <cart class="product__icon"/>
          Add to bag
        </button>
      </div>
      <dl class="product__extra">
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
</template>

<style scoped>
.product__list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.product__item {
  position: relative;
  width: 302px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}

.product__item:hover .product__btn {
  bottom: 30%;
  user-select: initial;
  pointer-events: initial;
  opacity: 1;
}

.product__img {
  border-radius: var(--border-radius-l);
}

.product--new:before {
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

.product--discount:after {
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

.product__btn {
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

.product__btn:focus-visible {
  bottom: 30%;
  user-select: initial;
  pointer-events: initial;
  opacity: 1;
}

.product__btn:hover {
  color: var(--color-accent);
}

.product__icon {
  width: 24px;
  height: 24px;
}

.product__extra {
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
  .product__list {
  }
}

@media (max-width: 918px) {
  .product__btn {
    bottom: 30%;
    user-select: initial;
    pointer-events: initial;
    opacity: 1;
  }
}

@media (max-width: 700px) {
  .product__item {
    width: 240px;
  }
}

@media (max-width: 540px) {
  .product__item {
    width: 320px;
  }

  .product__extra {
    align-items: center;
  }
}
</style>