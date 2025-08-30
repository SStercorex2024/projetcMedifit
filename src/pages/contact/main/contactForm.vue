<script setup>
import SectionComponent from "@/components/sectionComponent.vue";
import {reactive, ref, watch} from "vue";

defineOptions({
  name: 'ContactForm'
})

const formData = ref({
  name: '',
  email: '',
  phone: '',
})

const formItems = [
  {
    label: 'Full name',
    for: 'name',
    model: 'name',
    icon: '/icons/user.svg',
    placeholder: 'John Doe',
    input: true
  },
  {
    label: 'Email address',
    for: 'email',
    model: 'email',
    icon: '/icons/envelope.svg',
    placeholder: 'JohnDoe@gmail.com',
    input: true
  },
  {
    label: 'Phone number',
    for: 'phone',
    model: 'phone',
    icon: '/icons/phone-second.svg',
    placeholder: '+44 777 666 000',
    input: true
  },
  {
    label: 'Message',
    for: 'message',
    icon: '/icons/pen-to-square.svg',
    placeholder: 'Hello ...',
    textarea: true
  },
]

const errorsForm = reactive({
  name: null,
  email: null,
  phone: null,
})

const submittedForms = ref([])

const addPerson = () => {
  if (!nameValidate(formData.value.name)) {
    return false
  }
  if (!emailValidate(formData.value.email)) {
    return false
  }
  if (!phoneValidate(formData.value.phone)) {
    return false
  }

  submittedForms.value.push({
    id: Date.now().toString(),
    ...formData.value,
    timestamp: new Date().toISOString()
  })

  alert('Great! We\'re on our way !')

  formData.value = {
    name: '',
    email: '',
    phone: '',
  }
}

const nameValidate = (name) => {
  if (name.length < 2 || /\d/.test(name)) {
    errorsForm.name = 'Incorrect name, minimum 2 letters without numbers.'
    return false
  }
  errorsForm.name = null
  return true
}

const emailValidate = (email) => {
  const allowedDomains = ["gmail.com", "yahoo.com"]
  const emailParts = email.split("@")

  if (emailParts.length !== 2) {
    errorsForm.email = 'Invalid email format.'
    return false
  }

  const currentDomain = emailParts[1]

  if (!allowedDomains.includes(currentDomain)) {
    errorsForm.email = 'Incorrect email, we accept only "@gmail.com" and "@yahoo.com".'
    return false
  }
  errorsForm.email = null
  return true
}

const phoneValidate = (phone) => {
  const cleanPhone = phone.replace(/\D/g, '')

  if (cleanPhone.length !== 11) {
    errorsForm.phone = 'Phone number must have 11 numbers.'
    return false
  }
  errorsForm.phone = null
  return true
}

watch(() => formData.value.name, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    errorsForm.name = null
  }
})

watch(() => formData.value.email, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    errorsForm.email = null
  }
})

watch(() => formData.value.phone, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    formData.value.phone = newVal.replace(/\D/g, '')
    errorsForm.phone = null
  }
})
</script>

<template>
  <section-component
      class-section="contactForm"
      title-content="Contact us"
      :is-title="true"
      :is-icon-with-title="'/icons/phone.svg'"
  >
    <p class="contactForm__desc">
      Have questions or need support? Get in touch with our team – we're here to
      help!
    </p>
    <form>
      <div
          v-for="(item, index) in formItems"
          :key="index"
          :class="[index === 2 && 'full-width', index === 3 && 'full-width',
                   index === 1 && 'second-full-width',index === 0 && 'second-full-width'
          ]"
      >
        <label v-if="item.label" :for="item.for">
          {{ item.label }}
        </label>
        <div class="input-wrapper ">
          <input
              v-if="item.input"
              v-model="formData[item.model]"
              :type="item.for"
              :placeholder="item.placeholder"
              :id="item.for"
              required
          >
          <textarea
              :id="item.for"
              v-if="item.textarea"
              :placeholder="item.placeholder"
          />
          <span :class="index === 3 && 'icon-message'">
            <img :src="item.icon" alt=""/>
          </span>
          <p v-if="errorsForm[item.model]" class="input-error">
            {{ errorsForm[item.model] }}
          </p>
        </div>
      </div>
      <button class="form-button" @click.prevent="addPerson">
        Submit
        <span>
          <img src="/icons/hand-pointer.svg" alt="">
        </span>
      </button>
    </form>
  </section-component>
</template>

<style scoped>
.contactForm__desc {
  max-width: 513px;
  font-family: var(--fonts-second);
  color: var(--color-text-muted);
  text-align: center;
}

form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 20px;

  input,
  textarea {
    width: 100%;
    border: 1px solid var(--color-primaty);
    border-radius: var(--border-radius-l);
  }

  textarea {
    padding: 14px 10px 10px 44px;
    min-height: 300px;
  }


  .full-width,
  .full-width {
    grid-column: 1/-1;
  }

  input {
    padding-left: 40px;
    height: 60px;
  }
}

.input-wrapper {
  position: relative;

  span {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    left: 15px;
    translate: 0 -50%;
    user-select: none;
    pointer-events: none;
  }

  .icon-message {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 30px;
    left: 15px;
    user-select: none;
    pointer-events: none;
  }
}

.input-error {
  position: absolute;
  font-size: 14px;
  color: var(--color-errors);
}

.form-button {
  height: var(--button-height);
  align-self: flex-start;
  width: fit-content;
  align-items: center;
  display: flex;
  border-radius: var(--border-radius-l);
  color: var(--color-white);
  padding-inline: 14px;
  text-transform: uppercase;
  background-color: var(--color-primaty);
}

.form-button:hover {
  color: var(--color-accent);
}

@media (max-width: 768px) {
  form {
    width: 80vw;
  }

  .second-full-width {
    grid-column: 1/-1;
  }

  .form-button {
    justify-content: center;
    width: inherit;
  }
}

</style>