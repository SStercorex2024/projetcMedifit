<script setup>
import Exchange from "@/components/icons/exchange.vue";
import Truck from "@/components/icons/truck.vue";
import Headphone from "@/components/icons/headphone.vue";
import Cart from "@/components/icons/cart.vue";

defineOptions({
  name: 'Bonuses'
})

const items = [
  {
    icon: Truck,
    name: 'Free shipping',
  },
  {
    icon: Exchange,
    name: 'Easy refund',
  },
  {
    icon: Headphone,
    name: 'Online support',
  },
  {
    icon: Cart,
    name: 'Flexible payment',
  },
]

</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <component class="bonuses__icon" :is="item.icon"/>
      <p>{{ item.name }}</p>
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 0;
  column-gap: 120px;
  padding-left: 0;
}

li {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  row-gap: 30px;
}

.bonuses__icon {
  height: 50px;
  width: 50px;
}

p {
  font-size: 24px;
  font-weight: 500;
}

@media (max-width: 1200px) {
  ul {
    display: inline-block;
    column-count: 2;
    align-self: center;

    li:nth-child(2),
    li:nth-child(4) {
      margin-top: 40px;
    }
  }
}
@media (max-width: 640px) {
  ul {
    column-count: 1;

    li:nth-child(1),
    li:nth-child(3) {
      margin-top: 40px;
    }
  }
}
</style>