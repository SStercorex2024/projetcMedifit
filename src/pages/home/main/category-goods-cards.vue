<script setup>
import img1 from '@/assets/images/category-cards/1.png?w=163&format=avif'
import img2 from '@/assets/images/category-cards/2.png?w=150&format=avif'
import img3 from '@/assets/images/category-cards/3.png?w=140&format=avif'
import Eye from '@/components/icons/eye.vue'
import BagShopping from "@/components/icons/bag-shopping.vue";

defineOptions({
  name: 'category-goods-cards'
})

const cards = [
  {
    span: 'Sanitizer',
    title: 'Hand sanitizer collection',
    extra: 'Shop now',
    icon: BagShopping,
    img: img1,
  },
  {
    span: 'Top deals',
    title: 'Face wash sale collection',
    extra: 'Discover now',
    icon: Eye,
    img: img2,
  },
  {
    span: 'Face mask',
    title: 'Facial mask deals save up to 50%',
    extra: 'Discover now',
    icon: Eye,
    img: img3,
  },
]

</script>

<template>
  <ul class="category__cards">
    <li v-for="(card,index) in cards" :key="index" class="category__card">
      <div class="category__text">
        <span>{{ card.span }}</span>
        <div class="category__extra">
          <h3>{{ card.title }}</h3>
          <a href="#">
            <component :is="card.icon" class="category__icon"/>
            {{ card.extra }}
          </a>
        </div>
      </div>
      <img
          class="category__image"
          :src="card.img"
          width="170"
          height="???"
          alt="medication product"
      />
    </li>
  </ul>
</template>

<style scoped>
.category__cards {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 30px;
}

.category__card {
  padding: 20px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
  background-color: var(--color-white);
  border-radius: var(--border-radius-l);
  width: 414px;
}

.category__text {
  padding: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 38px;
  max-width: 248px;

  span {
    padding: 5px 13px;
    display: block;
    align-self: baseline;
    font-size: 13px;
    font-family: var(--fonts-second);
    color: var(--color-white);
    border-radius: var(--border-radius-l);
    background-color: var(--color-accent);
  }
}

.category__extra {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  max-width: 248px;

  h3 {
    margin: 0;
    font-size: 24px;
    font-weight: 500;
  }

  a {
    display: flex;
    column-gap: 10px;
    width: fit-content;
    color: var(--color-text-muted);
    padding-bottom: 4px;
    border-bottom: 1px solid var(--color-text-muted);
  }

  a:hover {
    color: var(--color-accent);
  }
}

.category__image {
  padding-right: 20px;
  width: 170px;
  height: 184px;
  object-fit: contain;
}

@media (max-width: 1400px) {
  .category__cards {
    flex-wrap: wrap;
    row-gap: 20px;
  }
}

@media (max-width: 420px) {
  .category__cards {
    flex-wrap: wrap;
    row-gap: 20px;
  }

  .category__image {
    width: 120px;

  }
}
</style>