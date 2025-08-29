<script setup>
import SectionComponent from "@/components/sectionComponent.vue";
import img4 from '/src/assets/images/about/4.jpg?w=302&format=avif'
import img5 from '/src/assets/images/about/5.jpg?w=302&format=avif'
import img6 from '/src/assets/images/about/6.jpg?w=302&format=avif'
import img7 from '/src/assets/images/about/7.jpg?w=302&format=avif'

defineOptions({
  name: 'BannerStarted'
})

</script>

<template>
  <section-component
      class-section="started"
      title-content="Join our trustable Medifit product  community"
  >
    <div class="started__content">
      <div class="started__text">
        <h3>
          Join our trustable Medifit product community
        </h3>
        <p>
          Join us as we build a community where wellness is accessible,
          education
          is empowering, and health is a shared journey.
        </p>
        <router-link class="started__link" to="contact.index">Get started
        </router-link>
      </div>
      <div class="started__images">
        <img :src="img4" alt="">
        <img :src="img5" alt="">
        <img :src="img6" alt="">
        <img :src="img7" alt="">
      </div>
    </div>
  </section-component>
</template>

<style scoped>
.started__content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 20px;
  column-gap: 92px;
  background-color: var(--color-white);
  border-radius: var(--border-radius-l);
}

.started__text {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  max-width: 443px;

  h3 {
    margin: 0;
    font-size: 48px;
    line-height: 1.2;
  }

  p {
    color: var(--color-text-muted);
  }
}

.started__link {
  position: relative;
  font-weight: 500;
  padding-inline: 14px 43px;
  height: var(--button-height);
  background-color: var(--color-primaty);
  color: var(--color-white);
  margin-top: 30px;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: var(--border-radius-l);
}

.started__link:hover {
  color: var(--color-accent);
}

.started__link:before {
  position: absolute;
  content: '';
  top: 50%;
  translate: 0 -50%;
  right: 14px;
  width: 24px;
  height: 24px;
  background-image: url("/src/assets/icons/link-external.svg");
  background-repeat: no-repeat;
  background-position: center center;
}

.started__images {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-self: center;
  gap: 30px;

  img:nth-child(1) {
    border-radius: 0 0 var(--border-radius-l) var(--border-radius-l);
  }

  img:nth-child(2) {
    border-radius: 0 0 var(--border-radius-l) var(--border-radius-l);
  }

  img:nth-child(3) {
    border-radius: var(--border-radius-l) var(--border-radius-l) 0 0;
  }

  img:nth-child(4) {
    margin-top: -74px;
    border-radius: var(--border-radius-l) var(--border-radius-l) 0 0;
  }
}

@media (max-width: 1200px) {
  .started__content {
    width: fit-content;
    padding: 0 40px 20px;
    row-gap: 30px;
    flex-direction: column;
  }

  .started__images {
    order: -1;

    img:nth-child(3) {
      border-radius: var(--border-radius-l);
    }

    img:nth-child(4) {
      border-radius: var(--border-radius-l);
    }
  }
}

@media (max-width: 678px) {
  .started__link {
    width: 100%;
  }

  .started__images {
    order: -1;
    column-gap: 10px;

    img:nth-child(3) {
      border-radius: 0 0 var(--border-radius-l) var(--border-radius-l);
    }

    img:nth-child(2),
    img:nth-child(4) {
      display: none;
    }
  }
}
</style>