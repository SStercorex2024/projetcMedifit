<script setup>
import {reactive} from 'vue'

const openStates = reactive([true, false, false])

const accordionItems = [
  {
    title: "What products do you offer?",
    content: "We offer a wide range of medical supplies, including prescription medications, over-the-counter products, supplements, and personal care items.",
  },
  {
    title: "How can I place an order?",
    content: "We offer a wide range of medical supplies, including prescription medications, over-the-counter products, supplements, and personal care items.",
  },
  {
    title: "Do you provide home delivery?",
    content: "We offer a wide range of medical supplies, including prescription medications, over-the-counter products, supplements, and personal care items.",
  },
  {
    title: "Can I return or exchange products?",
    content: "We offer a wide range of medical supplies, including prescription medications, over-the-counter products, supplements, and personal care items.",
  }
]

const handleToggle = (event, index) => {
  openStates[index] = event.target.open

  if (event.target.open) {
    openStates.forEach((_, indx) => {
      if (indx !== index) openStates[indx] = false
    })
  }
}
</script>

<template>
  <div class="container">
    <div class="accordion">
      <div class="accordion__faq">
        <div>
          <h2>Frequently Asked Questions
            <span>
            ?
            </span>
          </h2>
        </div>
      </div>
      <div class="accordion__container">
        <details
            v-for="(item, index) in accordionItems"
            :key="index"
            :open="openStates[index]"
            class="accordion-item"
            @toggle="handleToggle($event, index)"
        >
          <summary class="accordion-summary">
            <span class="accordion__title">{{ item.title }}</span>
            <span class="accordion__icon"><img
                src="/icons/medical-plus.svg"
                alt=""
            ></span>
          </summary>
          <div class="accordion-content">
            <p>{{ item.content }}</p>
          </div>
        </details>
      </div>
    </div>
  </div>
</template>


<style scoped>
.container {
  padding-block: var(--section-padding-y) calc(var(--section-padding-y) * 2);
}

.accordion {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  justify-content: space-between;
}

.accordion__faq {
  display: flex;
  column-gap: 10px;

  h2 {
    padding-left: 70px;
    position: relative;
    font-size: 58px;
    line-height: 1.2;
    margin: 0;
  }

  span {
    position: absolute;
    left: 0;
    top: 10px;
    border-radius: 50%;
    padding: 10px;
    border: 1px solid var(--color-primaty);
    font-size: 58px;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

details {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-primaty);
  border-radius: var(--border-radius-l);
  row-gap: 20px;
  width: 100%;
  cursor: pointer;
}

.accordion__title {
  font-size: 24px;
  font-weight: 500;
}

.accordion__icon img {
  transition: var(--transition-duration);
  width: 30px;
  height: 30px;
}

.accordion__container {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.accordion-summary {
  display: flex;
  column-gap: 11px;
  padding: 30px 34px 30px 30px;
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: var(--transition-duration);

  p {
    font-family: var(--fonts-second);
    color: var(--color-text-muted);
  }
}

details[open] {
  .accordion__icon img {
    transform: rotate(45deg);
  }

  .accordion-content {
    max-height: 300px;
    padding: 0 30px 30px 30px;
  }
}

@media (max-width: 1000px) {
  .accordion {
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
}
</style>