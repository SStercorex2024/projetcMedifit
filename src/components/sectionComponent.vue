<script setup>
defineOptions({
  name: 'SectionComponent'
})

const props = defineProps({
  isTitle: {
    type: Boolean,
    default: false
  },
  titleContent: {
    type: String,
    required: true
  },
  isPaddingTopBig: {
    type: Boolean,
    default: false
  },
  isPaddingBottomBig: {
    type: Boolean,
    default: false
  },
  isPaddingYBig: {
    type: Boolean,
    default: false
  },
  sectionBgAccent: {
    type: Boolean,
    default: false
  },
  classSection: {
    type: String,
    required: true
  }
})


</script>

<template>
  <section
      :class="[props.sectionBgAccent && 'section-bg-accent',
               props.isPaddingTopBig && 'section-padding-top-big',
               props.isPaddingBottomBig && 'section-padding-bottom-big',
               props.isPaddingYBig && 'section-padding-y-big',
               (!props.isPaddingTopBig && !props.isPaddingBottomBig && !props.isPaddingYBig) && 'section-padding-y-regular',
               props.classSection
               ]"
      :aria-labelledby="`#section-title-${props.classSection}`"
  >
    <h1 class="visually-hidden" :id="`section-title-${props.classSection}`">
      {{ props.titleContent }}
    </h1>
    <div class="container">
      <div class="section__content">
        <h3 v-if="props.isTitle" class="section__title">{{
            props.titleContent
          }}
        </h3>
        <slot/>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-bg-accent {
  background-color: var(--color-border);
}

.section-padding-y-big {
  padding-block: calc(var(--section-padding-y) * 2);
}

.section-padding-top-big {
  padding-block: calc(var(--section-padding-y) * 2) var(--section-padding-y);
}

.section-padding-bottom-big {
  padding-block: var(--section-padding-y) calc(var(--section-padding-y) * 2);
}

.section-padding-y-regular {
  padding-block: var(--section-padding-y) calc(var(--section-padding-y) * 2);
}

.section__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 60px;

  @media (max-width: 1000px) {
    row-gap: 20px;
  }
}

.section__title {
  font-size: 48px;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 32px;
  }
  @media (max-width: 600px) {
    font-size: 24px;
  }
}
</style>