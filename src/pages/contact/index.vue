<script setup>
import ContactForm from "@/pages/contact/main/contactForm.vue";
import Accordion from "@/pages/contact/main/accordion.vue";

defineOptions({
  name: 'Contact'
})
</script>

<template>
  <main>
    <contact-form/>
    <accordion/>
  </main>
</template>

<style scoped>
main {
  margin-top: 107px;
}
</style>