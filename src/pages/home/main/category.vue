<script setup>
import SectionComponent from "@/components/sectionComponent.vue";
import Pils from "@/components/icons/pils.vue";
import Heart from "@/components/icons/heart.vue";
import Leaf from "@/components/icons/leaf.vue";
import Hearbreat from "@/components/icons/hearbreat.vue";
import Vials from "@/components/icons/vials.vue";
import MedicalPlus from "@/components/icons/medical-plus.vue";
import CategoryGoodsCards from "@/pages/home/main/categoryGoodsCards.vue";

defineOptions({
  name: 'Category'
})

</script>

<template>
  <section-component
      title-content="Shop by Category"
      :is-title="true"
      :isPaddingTopBig="true"
      :class-section="'category'"
  >
    <div class="category__cards">
      <ul class="category__list">
        <li class="category__item">
          <div class="category__icon-wrapper">
            <pils class="category__icon"/>
          </div>
          <dl>
            <dt>
              Medicine
            </dt>
            <dd>
              <a href="#"> 32 Items</a>
            </dd>
          </dl>
        </li>
        <li class="category__item">
          <div class="category__icon-wrapper">
            <heart class="category__icon"/>
          </div>
          <dl>
            <dt>
              Health care
            </dt>
            <dd>
              <a href="#"> 20 Items</a>
            </dd>
          </dl>
        </li>
        <li class="category__item">
          <div class="category__icon-wrapper">
            <leaf class="category__icon"/>
          </div>
          <dl>
            <dt>
              Beauty care
            </dt>
            <dd>
              <a href="#"> 30 Items</a>
            </dd>
          </dl>
        </li>
        <li class="category__item">
          <div class="category__icon-wrapper">
            <hearbreat class="category__icon"/>
          </div>
          <dl>
            <dt>
              Fitness
            </dt>
            <dd>
              <a href="#"> 35 Items</a>
            </dd>
          </dl>
        </li>
        <li class="category__item">
          <div class="category__icon-wrapper">
            <vials class="category__icon"/>
          </div>
          <dl>
            <dt>
              Lab equipment
            </dt>
            <dd>
              <a href="#"> 25 Items</a>
            </dd>
          </dl>
        </li>
        <li class="category__item">
          <div class="category__icon-wrapper">
            <medical-plus class="category__icon"/>
          </div>
          <dl>
            <dt>
              Medkits
            </dt>
            <dd>
              <a href="#"> 25 Items</a>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
    <category-goods-cards/>
  </section-component>
</template>

<style scoped>
.category__list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px 20px;
  align-items: center;
  justify-content: center;
}

.category__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 191px;
  height: 242px;
  row-gap: 20px;
  border-radius: var(--border-radius-l);
  border: 1px solid var(--color-text-muted);
  padding: 25px 38px;
}

.category__icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border-radius: 50%;
  width: 117px;
  height: 117px;
  border: 1px dashed var(--color-primaty);
}

.category__icon {
  width: 102px;
  height: 102px;
  padding: 26px;
  border-radius: 50%;
  color: var(--color-primaty);
  background-color: var(--color-bg-second);
}

.category__cards {
  dl {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 3px;
  }

  dt {
    text-wrap: nowrap;
    font-size: 18px;
    font-weight: 500;
  }

  dd {
    margin-left: 0;
    font-size: 16px;
    font-family: var(--fonts-second);
  }
}

@media (max-width: 420px) {
  .category__item {
    width: 300px;
  }
}
</style>