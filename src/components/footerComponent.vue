<script setup>
import Logo from "@/components/icons/logo.vue";
import Facebook from "@/components/icons/facebook.vue";
import Instagram from "@/components/icons/instagram.vue";
import Twitter from "@/components/icons/twitter.vue";
import Youtube from "@/components/icons/youtube.vue";
import Location from "@/components/icons/location.vue";
import Phone from "@/components/icons/phone.vue";
import Letter from "@/components/icons/letter.vue";

defineOptions({
  name: 'FooterComponent'
})

const menuItems = [
  {title: 'Home', route: 'home.index'},
  {title: 'Shop', route: 'shop.index'},
  {title: 'About', route: 'about.index'},
  {title: 'Contact', route: 'contact.index'}
]

const utilityItems = ['Style guide', 'Instruction', 'Changelog', 'Licenses', 'Link in bio', 'Password protected']

const addressInfo = {
  title: 'Address',
  desc: `1640 Parker Rd. Allentown,\nNew Mexico 31134`,
}

const contactItems = {
  title: 'Contact',
  email: 'hello@gmail.com',
  phone: '(209) 555-0104',
}

</script>

<template>
  <footer>
    <div class="container">
      <div class="footer__body">
        <div class="footer__list-wrapper">
          <div class="footer__pages">
            <h3 class="footer__title">Pages</h3>
            <ul class="footer__list">
              <li v-for="(page, index) in menuItems" :key="index">
                <router-link :to="{ name: page.route}">
                  {{ page.title }}
                </router-link>
              </li>
            </ul>
          </div>
          <div class="footer__utility">
            <h3 class="footer__title">Utility</h3>
            <ul class="footer__list">
              <li v-for="(utility, index) in utilityItems" :key="index">
                <a href="#">
                  {{ utility }}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__logo">
          <router-link class="footer__logo-wrapper" :to="{name: 'home.index'}">
            <logo/>
            <span>Medifit</span>
          </router-link>
          <p class="footer__desc">
            We provides the ultimate solution for your online store and all the
            healthcare needs.
          </p>
          <ul class="footer__social">
            <li>
              <a href="#">
                <facebook/>
              </a>
            </li>
            <li>
              <a href="#">
                <instagram/>
              </a>
            </li>
            <li>
              <a href="#">
                <youtube/>
              </a>
            </li>
            <li>
              <a href="#">
                <twitter/>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div class="footer__address">
            <label class="footer__title">{{ addressInfo.title }}</label>
            <div class="footer__desc-icon">
              <location/>
              <address>{{ addressInfo.desc }}</address>
            </div>
          </div>
          <div class="footer__contact">
            <h3 class="footer__title">{{ contactItems.title }}</h3>
            <div class="footer__desc-icon">
              <phone/>
              <a :href="`tel:${contactItems.phone}`">{{
                  contactItems.phone
                }}
              </a>
            </div>
            <div class="footer__desc-icon">
              <letter/>
              <a :href="`email:${contactItems.email}`">{{
                  contactItems.email
                }}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__privat">
        <div>
          <p>
            Design By
            <a href="#">Webestica</a>
            , Powered By
            <a href="">Webflow</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--color-border);
  border-top: 1px solid var(--color-bg-second);
  border-radius: var(--border-radius-l);
}

.footer__body {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  column-gap: 30px;
  padding-block: calc(var(--section-padding-y) * 2) var(--section-padding-y);

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
}

.footer__list {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.footer__list li {
  color: var(--color-text-muted);

  .router-link-active {
    opacity: 1;
    color: var(--color-primaty);
  }
}

.footer__title {
  margin-bottom: 20px;
}

.footer__desc {
  text-align: center;
  font-family: var(--fonts-second);
}

.footer__desc-icon {
  color: var(--color-text-muted);
}

.footer__social {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 25px;
}

.footer__social li a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: white;
  background-color: var(--color-primaty);
  border-radius: var(--border-radius-m);
}

.footer__social li a:hover {
  color: var(--color-accent);
}

.footer__logo {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-self: center;
  align-items: center;
  max-width: 300px;
}

.footer__logo span {
  font-size: 70px;
}

.footer__list-wrapper {
  display: flex;
  column-gap: 35px;
}

.footer__privat {
  width: 100%;
  padding-block: 34px;
  text-align: center;
  border-top: 1px solid var(--color-bg-second);
}

.footer__desc-icon {
  display: flex;
  align-items: center;
  justify-content: left;
  column-gap: 6px;
}

.footer__logo-wrapper {
  display: flex;
  align-items: center;
  column-gap: 4px;
  opacity: 1;
}

.footer__address {
  .footer__title {
    display: block;
  }

  address {
    white-space: pre-line;
  }
}

.footer__contact {
  margin-top: 40px;
}

@media (max-width: 940px) {
  .footer__body {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px 40px;
    padding-block: var(--section-padding-y);
  }

  .footer__logo {
    order: -1;
    min-width: 100vw;

    p {
      width: 300px;
    }
  }

  .footer__pages,
  .footer__utility {
    text-align: center;
  }
}

@media (max-width: 600px) {
  .footer__list-wrapper {
    width: 100%;
    justify-content: space-around;
  }
}
</style>