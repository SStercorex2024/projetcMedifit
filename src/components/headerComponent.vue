<script setup>
import Logo from "@/components/icons/logo.vue";
import Cart from "@/components/icons/cart.vue";
import BurgerButton from "@/components/burgerButton.vue";
import {inject, onMounted, ref} from "vue";

defineOptions({
  name: 'HeaderComponent'
})

const activeGoods = inject('active-goods')

const menuItems = [
  {title: 'Home', route: 'home.index'},
  {title: 'Shop', route: 'shop.index'},
  {title: 'About', route: 'about.index'},
  {title: 'Contact', route: 'contact.index'}
]
const mobileMenuActive = ref(false)

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
        <button class="cart">
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
          <router-link :to="{ name: item.route }">{{
              item.title
            }}
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #EEEDE7;
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
}

.cart span {
  position: absolute;
  top: -4px;
  right: 0;
  font-size: 10px;
  line-height: 1.5;
  color: var(--color-accent);
  width: 15px;
  height: 15px;
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
</style>