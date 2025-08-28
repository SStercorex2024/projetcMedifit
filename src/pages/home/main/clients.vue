<script setup>
import {ref} from "vue";
import SectionComponent from "@/components/sectionComponent.vue";

defineOptions({
  name: 'Clients'
})

const cards = [
  {
    id: 1,
    img: '1',
    name: 'James Wilson',
    position: 'Manager',
    content: "This online pharmacy exceeded my expectations. The variety of products is impressive, and the checkout process was simple and secure. My order came right on time, everything was neatly packed, and the quality of the items is excellent. I’ll definitely be coming back for future purchases."
  },
  {
    id: 2,
    img: '2',
    name: 'Henry Adams',
    position: 'CEO',
    content: "I had a wonderful experience shopping at this online medical store. The website is easy to navigate, and I quickly found the products I was looking for. My order arrived sooner than expected, well-packaged, and exactly as described. I really appreciate the reliability and the professional service provided."
  },
  {
    id: 3,
    img: '3',

    name: 'Ethan Harris',
    position: 'Business manager',
    content: "I’m so impressed with this online medical store. The product selection is extensive and the prices are great. I found everything i needed in one place. The ordering process was easy, delivery was prompt, and the items arrived in perfect condition. Plus, the customer service team was incredibly helpful."
  },
  {
    id: 4,
    img: '4',
    name: 'Lily Baker',
    position: 'Product manager',
    content: "I’m very satisfied with my order from this online medical shop. The prices are affordable, the selection covers all my needs, and the site made it easy to compare options. Shipping was fast, and the products were delivered in perfect condition. Great overall experience with friendly customer support."
  }
];

const selectedCard = ref(null)

selectedCard.value = cards[0]

const selectCard = (card) => {
  selectedCard.value = card;
}

</script>

<template>
  <section-component
      class-section="client"
      :is-title="true"
      :is-padding-y-big="true"
      title-content="Our happy clients"
  >
    <div class="client__cards">
      <div class="client__content">
        <p v-if="selectedCard">{{ selectedCard.content }}</p>
      </div>
      <ul class="client__list">
        <li
            v-for="card in cards"
            :key="card.id"
            @click="selectCard(card)"
            :class="[selectedCard.id === card.id && 'is-active','client__item']"
        >
          <img
              class="client__image"
              :src="`/src/assets/images/client/${card.img}.jpg`"
              :alt="card.name"
              loading="lazy"
          >
          <dl>
            <dd>
              {{ card.name }}
            </dd>
            <dt>
              {{ card.position }}
            </dt>
          </dl>
        </li>
      </ul>
    </div>
  </section-component>
</template>

<style scoped>
.client__cards {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}

.client__content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 100px 50px;
  width: 100%;
  font-family: var(--fonts-second);
  color: var(--color-text-muted);
  border-radius: var(--border-radius-l);
  background-color: var(--color-white);

  p {
    max-width: 1035px;
  }
}

.client__content:before {
  content: '';
  position: absolute;
  top: 30px;
  left: 25px;
  width: 76px;
  height: 55px;
  background-image: url("/src/assets/icons/quot.svg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.client__list {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1px;
}

.client__item {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 15px;
  padding: 25px 28px;
  border: 1px solid transparent;
}

.client__item.is-active {
  border-radius: var(--border-radius-l);
  border-color: var(--color-primaty);
}

.client__image {
  position: relative;
  object-fit: cover;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  margin: -2px;
  padding: 2px;
  border: 1px dashed var(--color-primaty);
}

dl {
  display: flex;
  flex-direction: column;
  row-gap: 3px;
}

dd {
  margin-left: 0;
  font-weight: 500;
}

dt {
  font-size: 16px;
  color: var(--color-text-muted);
}

@media (max-width: 1200px) {
  .client__content {
    p {
      padding-inline: 20px;
      margin: auto;
    }
  }

  .client__item {
    flex-direction: column;
    text-align: center;
    row-gap: 10px;
  }
}

@media (max-width: 964px) {
  .client__content {
    p {
      max-width: 890px;
    }
  }
}
@media (max-width: 620px) {
  .client__content {
    p {
      max-width: 890px;
    }
  }

  .client__list {
    flex-wrap: wrap;
  }
}
</style>