<!-- eslint-disable max-len -->
<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg">
      <router-link to="/" class="navbar-brand">
        <h1
          :style="{ backgroundImage: `url(${Logo})` }"
          style="background-size: cover; background-position: center; height: 62px; width: 297px"
        ></h1>
      </router-link>
      <button
        class="navbar-toggler custom-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- <div class="collapse navbar-collapse" id="navbarNav"> -->
      <div class="collapse navbar-collapse" :class="{ show: isNavOpen }" id="navbarNav">
        <ul class="navbar-nav ms-auto me-8 ps-8">
          <li class="nav-item py-4 mx-auto">
            <router-link to="/about" aria-current="page" class="text-decoration-none p-4"
              >ABOUT</router-link
            >
          </li>
          <li class="nav-item py-4 mx-auto">
            <router-link to="/products" class="text-decoration-none p-3">MENU</router-link>
          </li>
          <li class="nav-item py-4 mx-auto">
            <router-link to="/contact" class="text-decoration-none p-3">CONTACT</router-link>
          </li>
          <li class="nav-item py-4 mx-auto">
            <router-link to="/question" class="text-decoration-none p-3">FAQ</router-link>
          </li>
          <li class="nav-item py-2 mx-auto">
            <router-link to="/cart" class="cart_icon position-relative p-2">
              <!-- <img src="/images/ICON_CedarCafe_001.png" alt="購物車圖標" style="width: 50px" /> -->
              <img :src="`${CartIcon}`" alt="購物車圖標" style="width: 50px" />
              <span
                v-if="cart.carts?.length"
                class="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle"
                >{{ cart.carts?.length }}</span
              >
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import cartStore from '@/stores/cart';
import 'bootstrap/dist/js/bootstrap';
import Logo from '@/assets/images/Logo.png';
import CartIcon from '@/assets/images/CartIcon.png';

export default {
  data() {
    return {
      Logo,
      CartIcon,
      isNavOpen: false,
    };
  },
  // 取值
  computed: {
    ...mapState(cartStore, ['cart']),
  },
  // 方法
  methods: {
    ...mapActions(cartStore, ['getCarts']),
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
  mounted() {
    // 跳轉頁面後收闔 nav
    this.$router.beforeEach((to, from, next) => {
      // 在路由切換時關閉 navbar-collapse 元素
      this.isNavOpen = false;
      next();
    });
    this.getCarts();
  },
};
</script>
