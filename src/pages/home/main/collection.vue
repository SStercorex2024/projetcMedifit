<script setup>
import {inject, onMounted, ref, watch} from "vue";
import SectionComponent from "@/components/sectionComponent.vue";
import ProductCards from "@/components/productCrads.vue";
import img from '/src/assets/images/collection-extra-bg.jpg?w=635&format=avif'

defineOptions({
  name: 'Collection'
})
const allData = inject('all-data')
const inputVal = ref('')
const errorEmail = ref('')
const personEmail = ref({
  email: ''
})
let currentEmail = ref('')
const productsTwo = ref([])
const submittedEmails = ref([])

onMounted(() => {
  getProductsTwo()
})

const getProductsTwo = () => {
  if (allData.value && allData.value.goods_two) {
    productsTwo.value = allData.value.goods_two
  }
}

const addPersonEmail = (email) => {
  if (!validateEmail(email)) {
    return
  }

  personEmail.value.email = inputVal.value

  submittedEmails.value.push({
    id: Date.now().toString(),
    email: personEmail.value.email,
    timestamp: new Date().toISOString()
  })

  inputVal.value = ''
  personEmail.value.email = ''
}

const validateEmail = (email) => {
  const allowedDomains = ["@gmail.com", "@yahoo.com"]
  const emailParts = email.split("@")

  if (emailParts.length !== 2) {
    errorEmail.value = 'Incorrect email, we accept gmail.com and yahoo.com'
    return false
  }

  const currentDomain = "@" + emailParts[1]

  if (!allowedDomains.includes(currentDomain)) {
    errorEmail.value = 'Incorrect email, we accept only "@gmail.com" and "@yahoo.com"'
    return false
  }
  return true
}

const isDataLoaded = inject('is-data-loaded')

watch(currentEmail, (newEmail, oldEmail) => {
  if (newEmail !== oldEmail) {
    inputVal.value = currentEmail.value
    errorEmail.value = ''
  }
})
</script>

<template>
  <section-component
      class-section="collection"
      title-content="Explore Our store Collection"
      :sectionBgAccent="true"
      :isTitle="true"
      :isPaddingYBig="true"
  >
    <div v-if="isDataLoaded">
      <product-cards :products="productsTwo"/>
    </div>
    <div class="collection__extra">
      <img
          class="collection__extra-img"
          :src="img"
          alt="woman"
          width="635"
          loading="lazy"
      >
      <div class="collection__extra-content">
        <div class="collection__extra-header">
          <p>
            Join our newsletter
          </p>
          <h3>
            Sign Up for an Instant 15% Discount
          </h3>
        </div>
        <div class="collection__extra-footer">
          <div class="input__wrapper">
            <input
                v-model="currentEmail"
                type="email"
                placeholder="Medifit@gmail.com"
            >
            <div v-if="errorEmail.length > 0">
              <p class="input-error"> {{ errorEmail }}</p>
            </div>
          </div>
          <button @click.prevent="addPersonEmail(currentEmail)">Sign
            up
          </button>
        </div>
      </div>
    </div>
  </section-component>
</template>

<style scoped>
.collection__extra {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  padding-top: var(--section-padding-y);
}

.collection__extra-img {
  border-radius: var(--border-radius-m);
  height: fit-content;
}

.collection__extra-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-white);
  padding: 60px 55px;
  border-radius: var(--border-radius-l);
}

.collection__extra-header {
  text-align: center;

  p {
    font-size: 24px;
    font-weight: 500;
    color: var(--color-text-muted);
  }

  h3 {
    font-size: 48px;
    font-weight: 500;
    line-height: 1.2;
    margin-block: 0;
  }
}

.collection__extra-footer {
  display: flex;
  column-gap: 16px;

  input {
    height: var(--button-height);
    padding-left: 42px;
    border: 1px solid var(--color-primaty);
    border-radius: var(--border-radius-l);
    background-color: var(--color-inner-bg);
    color: var(--color-primaty);
  }

  input::placeholder {
    font-family: var(--fonts-second);
    color: var(--color-text-muted);
  }

  button {
    color: var(--color-white);
    padding-inline: 28px;
    height: var(--button-height);
    border-radius: var(--border-radius-l);
    background-color: var(--color-primaty);
    text-wrap: nowrap;
  }

  button:hover {
    color: var(--color-accent);
  }
}

.input__wrapper {
  position: relative;
}

.input__wrapper:before {
  position: absolute;
  content: '';
  background-image: url("/icons/letter.svg");
  background-size: cover;
  background-position: center center;
  top: 50%;
  left: 10px;
  width: 24px;
  height: 24px;
  translate: 0 -50%;
}

.input-error {
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  font-size: 14px;
  color: var(--color-errors);
}

@media (max-width: 1200px) {
  .collection__extra-footer {
    button {
      font-size: 14px;
    }
  }

  .collection__extra-content {
    padding: 50px 20px;
    row-gap: 40px;
  }
}

@media (max-width: 960px) {
  .collection__extra-header {
    h3 {
      font-size: 28px;
    }
  }

  .collection__extra {
    row-gap: 20px;
    grid-template-columns: 1fr;
    grid-template-rows: .5fr 1fr;
    align-self: center;
  }

  .collection__extra-img {
    order: 1;
    height: max-content;
    object-fit: cover;
  }
}

@media (max-width: 480px) {
  .collection__extra-footer {
    flex-wrap: wrap;
    row-gap: 10px;

    button {
      width: 100%;
    }
  }

  .input__wrapper {
    width: 100%;

    input {
      width: 100%;
    }
  }
}

</style>