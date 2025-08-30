<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Pagination, Autoplay} from 'swiper/modules'
import SectionComponent from "@/components/sectionComponent.vue";
import img1 from '@/assets/images/cust/1.jpg?w=300&format=avif'
import img2 from '@/assets/images/cust/2.jpg?w=300&format=avif'
import img3 from '@/assets/images/cust/3.jpg?w=300&format=avif'

defineOptions({
  name: 'Review'
})
const modules = [Pagination, Autoplay]
const reviews = [
  {
    name: 'Olivia Garcia',
    img: img1,
    title: 'B12 Medicine keeps me energized and focused all day. A true lifesaver for vitality and wellness!'
  },
  {
    name: 'Sophia Brown',
    img: img2,
    title: 'I’ve regained my energy and feel amazing thanks to B12 Medicine. Highly recommend for health and stamina!'
  },
  {
    name: 'Ethan Harris',
    img: img3,
    title: 'As a vegetarian, B12 Medicine keeps my energy up and my health on track. Perfect for natural support!'
  },
]
</script>

<template>
  <section-component
      class-section="review"
      :is-title="true"
      title-content="Customers review"
  >
    <div class="swiper-container">
      <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="20"
          :pagination="{ clickable: true }"
          :autoplay="{ delay: 5000 }"
          :breakpoints="{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }"
          class="reviews-swiper"
      >
        <SwiperSlide v-for="(review, index) in reviews" :key="index">
          <div class="review-item">
            <h3 class="review__title">
              {{ review.title }}
            </h3>
            <div class="review__person">
              <img :src="review.img" :alt="review.name">
              <p>{{ review.name }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section-component>
</template>

<style scoped>
.swiper-container {
  max-width: 100%;
  width: 100%;
  overflow: hidden;
}

.reviews-swiper {
  padding-bottom: 60px;
  width: 100%;
  height: auto;
}

.reviews-swiper .swiper-wrapper {
  align-items: stretch;
}

.reviews-swiper .swiper-slide {
  height: auto;
  display: flex;
}

.review-item {
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  width: 100%;
  max-width: none;
  box-sizing: border-box;
}

.review__title {
  position: relative;
  padding: 50px 26px 20px 26px;
  font-family: var(--fonts-second);
  color: var(--color-text-muted);
  background-color: var(--color-white);
  border-radius: var(--border-radius-l) var(--border-radius-l) var(--border-radius-l) 0;
  flex-grow: 1;
  display: flex;
  align-items: center;
}

.review__title:before {
  position: absolute;
  content: '';
  top: 20px;
  left: 26px;
  width: 24px;
  height: 24px;
  background-image: url('/icons/message-lines.svg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.review__person {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  margin-top: auto;
}

img {
  height: 60px;
  width: 60px;
  border-radius: 50%;
}

:deep(.swiper-pagination) {
  bottom: 20px;
}

:deep(.swiper-pagination-bullet) {
  width: 40px;
  border-radius: var(--border-radius-m);
  background-color: var(--color-primaty);
  opacity: 0.3;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: var(--color-accent);
  opacity: 1;
}
</style>