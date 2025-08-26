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
  sectionBgAccent: {
    type: Boolean,
    default: false
  }
})


</script>

<template>
  <section
      :class="[props.sectionBgAccent && 'section-bg-accent',
               props.isPaddingTopBig ? 'section-padding-top-big'
                                   : 'section-padding-y-regular',
               props.isPaddingBottomBig ? 'section-padding-bottom-big'
                                   : 'section-padding-y-regular'
              ]"
  >
    <h1 class="visually-hidden">
      {{ props.titleContent }}
    </h1>
    <div class="container">
      <div>
        <h3 v-if="props.isTitle">{{ props.titleContent }}</h3>
      </div>
      <slot/>
    </div>
  </section>
</template>

<style scoped>
.section-bg-accent {
  background-color: var(--color-border);
}

.section-padding-y-big {
  padding-block: var(--section-padding-y);
}

.section-padding-top-big {
  padding-block: calc(var(--section-padding-y) * 2) var(--section-padding-y);
}

.section-padding-y-regular {
  padding-block: var(--section-padding-y) calc(var(--section-padding-y) * 2);
}
</style>