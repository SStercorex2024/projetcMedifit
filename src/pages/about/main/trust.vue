<script setup>
import SectionComponent from "@/components/sectionComponent.vue";
import img1 from '/src/assets/images/about/1.jpg??w=332&format=avif'
import img2 from '/src/assets/images/about/2.jpg??w=552&format=avif'
import img3 from '/src/assets/images/about/3.jpg??w=333&format=avif'
import Bonuses from "@/components/bonuses.vue";

defineOptions({
  name: 'Trust'
})

</script>

<template>
  <section-component
      class-section="trust"
      title-content="Health products you can trust service you deserve"
      :is-title="true"
  >
    <div class="trust__images">
      <img alt="" :src="img1"/>
      <img alt="" :src="img2"/>
      <img alt="" :src="img3"/>
    </div>
    <div class="trust__row">
      <h2>About us</h2>
      <p>Our focus is on nurturing wellness and empowering health for all ages
        well being for people worldwide.
      </p>
    </div>
    <bonuses/>
  </section-component>
</template>

<style scoped>
.trust__images {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-content: center;
  align-items: flex-start;
  column-gap: 42px;

  img {
    width: 100%;
    height: fit-content;
    object-fit: contain;
    border-radius: var(--border-radius-l);
  }
}

.trust__row {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 100px;

  h2 {
    font-size: 58px;
    line-height: 1.2;
    font-weight: 500;
    margin-block: 0;
  }

  p {
    font-size: 40px;
    font-weight: 500;
    line-height: 1.2;
    max-width: 920px;
  }
}

@media (max-width: 1360px) {
  .trust__row {
    h2 {
      font-size: 44px;
    }

    p {
      font-size: 36px;
    }
  }
}

@media (max-width: 1028px) {
  .trust__images {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    img {
      object-fit: cover;
      height: 100%;
    }

    img:nth-child(1) {
      grid-row: 1/2;
      grid-column: 1/2;
    }

    img:nth-child(2) {
      grid-column: 2/-1;
      grid-row: 1/-1;
    }

    img:nth-child(3) {
      grid-column: 1/2;
      grid-row: 2/-1;
    }
  }

  .trust__row {
    flex-direction: column;
    row-gap: 30px;
    text-align: center;

    h2 {
      font-size: 36px;
    }

    p {
      font-size: 24px;
    }
  }
}
</style>