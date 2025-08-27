<script setup>
import img from '@/assets/images/hero-bg.png?w=667&format=avif'
import Location from "@/components/icons/location.vue";

defineOptions({
  name: 'Banner'
})

</script>

<template>
  <section>
    <div class="container">
      <div class="banner__content">
        <div class="banner__text">
          <h1 class="banner__title">
            Your trusted care now and always
          </h1>
          <div>
            <p class="banner__desc">
              For the best results, align your health needs with your medication
              plan.
            </p>
          </div>
          <router-link class="banner__link" :to="{name:'contact.index'}">
            <location class="banner__icon"/>
            Contact with us
          </router-link>
        </div>
        <img
            class="banner__image"
            :src="img"
            width="667"
            alt="medication product"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: var(--color-border);
  padding-block: var(--section-padding-y) calc(var(--section-padding-y) * 2);
}

.banner__text {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  row-gap: 20px;
}

.banner__title {
  font-size: 80px;
  line-height: 1.1;
}

.banner__desc {
  font-family: var(--fonts-second);
  color: var(--color-text-muted);
}

.banner__link {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  padding-inline: 20px;
  margin-top: 40px;
  height: var(--button-height);
  color: var(--color-white);
  border-radius: var(--border-radius-l);
  background-color: var(--color-primaty);
}

.banner__link:hover {
  color: var(--color-accent);
}

.banner__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  width: 24px;
  height: 24px;
}

.banner__content {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1200px) {
  .banner__title {
    font-size: 55px;
  }

  .banner__image {
    width: 550px;
  }
}

@media (max-width: 1000px) {
  .banner__content {
    flex-direction: column;
  }

  .banner__text {
    align-items: center;
    text-align: center;
  }

  .banner__link {
    margin-top: 10px;
  }
}

@media (max-width: 600px) {
}
</style>