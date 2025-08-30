<script setup>
import Logo from "@/components/icons/logo.vue";
import Cart from "@/components/icons/cart.vue";
import BurgerButton from "@/components/burgerButton.vue";
import BagShopping from "@/components/icons/bag-shopping.vue";
import {computed, inject, ref} from "vue";

defineOptions({
  name: 'HeaderComponent'
})
const isDataLoaded = inject('is-data-loaded')
const activeGoods = inject('active-goods')
const modalOpen = ref(false)

const menuItems = [
  {title: 'Home', route: 'home.index'},
  {title: 'Shop', route: 'shop.index'},
  {title: 'About', route: 'about.index'},
  {title: 'Contact', route: 'contact.index'}
]
const mobileMenuActive = ref(false)

const goodsCounts = computed(() => {
  return activeGoods.reduce((counts, item) => {
    counts[item.id] = (counts[item.id] || 0) + 1
    return counts
  }, {})
})

const uniqueActiveGoods = computed(() => {
  return activeGoods.filter(
      (product, index, arr) => arr.findIndex(item => item.id === product.id) === index
  )
})

const getGoodsCount = (productId) => {
  return goodsCounts.value[productId] || 0
}

const removeGoods = (product) => {
  const filtered = activeGoods.filter(activeProduct => activeProduct.id !== product.id)
  activeGoods.length = 0
  activeGoods.push(...filtered)
}
</script>

<template>
  <header>
    <div class="container row">
      <div class="logo">
        <router-link :to="{name: 'home.index'}">
          <logo/>
          <span>Medifit</span>
        </router-link>
      </div>
      <ul class="menu-list">
        <li
            v-for="(item, index) in menuItems"
            :key="index"
            class="menu-list__item"
        >
          <router-link :to="{ name: item.route }">{{ item.title }}</router-link>
        </li>
      </ul>
      <div class="btns">
        <button @click.prevent="modalOpen = !modalOpen" class="cart">
          <cart/>
          <span>{{ activeGoods.length }}</span>
        </button>
        <burger-button
            @click="mobileMenuActive= !mobileMenuActive"
            :class="mobileMenuActive && 'is-active'"
        />
      </div>
    </div>
    <div v-if="mobileMenuActive" class="modal">
      <div class="logo">
        <router-link :to="{name: 'home.index'}">
          <logo/>
          <span>Medifit</span>
        </router-link>
      </div>
      <ul class="menu-list">
        <li
            v-for="(item, index) in menuItems"
            :key="index"
            class="menu-list__item"
        >
          <router-link
              @click="mobileMenuActive = !mobileMenuActive"
              :to="{ name: item.route }"
          >{{
              item.title
            }}
          </router-link>
        </li>
      </ul>
    </div>
  </header>
  <div
      @click.self="modalOpen = !modalOpen"
      v-if="modalOpen"
      class="modal-shop__shadow"
  >
    <div class="modal-shop">
      <div class="modal-shop__header">
        <h3>Your shopping cart</h3>
        <button @click.prevent="modalOpen = !modalOpen" class="modal__close">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <router-link
            @click="modalOpen = !modalOpen"
            class="modal-shop__checkout"
            :to="{name: 'contact.index'}"
        >Checkout
          <BagShopping/>
        </router-link>
      </div>
      <div v-if="isDataLoaded">
        <ul class="modal-shop__list">
          <li
              v-for="product in uniqueActiveGoods"
              :key="product.id"
              class="modal-shop__item"
          >
            <img
                class="modal-shop__img"
                :src="`/goods/${product['image-name']}.jpg`"
                :alt="product.title"
                loading="lazy"
            >
            <ul class="modal-shop__extra-list">
              <li class="modal-shop__name">{{ product.title }}</li>
              <li class="modal-shop__price">$ {{ product.price }} USD</li>
              <li class="modal-shop__counter">
                In cart :{{
                  getGoodsCount(product.id)
                }}
                <button @click.prevent="removeGoods(product)">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </li>
          <li v-if="activeGoods.length <= 0">
            Now Empty
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-index-header);
  background-color: var(--color-body);
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 27px;
}

.logo {
  display: flex;
  column-gap: 8px;
  align-items: center;
}

.logo a {
  text-decoration: none;
}

.logo span {
  font-size: 34px;
  line-height: 1.2;
}

.btns {
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-list {
  display: flex;
  column-gap: 30px;
  align-items: center;

  @media (max-width: 769px) {
    display: none;
  }
}

.menu-list__item {
  font-size: 18px;
  line-height: 1.5;
}

.menu-list__item a {
  text-decoration: none;
}

.cart {
  padding-top: 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 48px;
    height: 48px;
  }
}

.cart span {
  position: absolute;
  top: -4px;
  right: 0;
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-accent);
  width: 22px;
  height: 22px;
  border: 1px solid var(--color-primaty);
  border-radius: 50%;
}

.modal {
  position: fixed;
  inset: 0;
  background-color: var(--color-bg-second);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 50px;
  height: 100vh;
  width: 100vw;
  z-index: var(--z-index-burger-menu);

  .menu-list {
    display: flex;
    flex-direction: column;
    row-gap: 40px;
  }
}

.modal-shop__shadow {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: var(--z-index-modal-shop);
}

.modal-shop {
  width: 90vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--color-white);
  border-radius: var(--border-radius-l);
  padding: 50px 20px;
}

.modal-shop__header {
  display: flex;
  column-gap: 30px;
  align-items: center;
  margin-bottom: 20px;

  h3 {
    font-size: 36px;
    margin: 0;
  }


}

.modal__close {
  order: 1;
  width: 40px;
  height: 40px;
}

.modal__close:hover {
  color: var(--color-accent);
}

.modal-shop__list {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  flex-wrap: wrap;
  width: 100%;
  min-height: 300px;
  padding: 10px 20px;
  border: 1px solid;
  border-radius: 10px;


  ul {
    list-style: none;
    padding-left: 0;
  }
}

.modal-shop__item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  border: 1px solid var(--color-text-muted);
  border-radius: var(--border-radius-m);
  padding: 10px 20px;
}

.modal-shop__name {
  font-size: 24px;
}

.modal-shop__counter {
  display: flex;
  align-items: center;
  color: var(--color-text);

  button {
    display: flex;
    align-items: center;
    width: 30px;
    height: 30px;
  }

  button:hover {
    color: var(--color-errors);
  }
}

.modal-shop__extra-list {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.modal-shop__checkout {
  display: flex;
  align-items: center;
  column-gap: 5px;
  justify-content: space-between;
  color: var(--color-white);
  background-color: var(--color-primaty);
  border-radius: var(--border-radius-l);
  height: var(--button-height);
  padding-inline: 14px;
}

.modal-shop__checkout:hover {
  color: var(--color-accent);
}

@media (max-width: 789px) {

  .modal-shop__header {
    flex-direction: column;

    h3 {
      font-size: 30px;
    }

    button {
      order: -1;
      width: 40px;
      height: 40px;
      margin-bottom: 10px;
    }
  }

  .modal-shop__item {
    width: 330px;
  }

  .modal-shop__img {
    width: 160px;
  }
}

</style>