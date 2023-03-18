<template>
  <header
    :style="{ backgroundImage: `url(${Error404})` }"
    style="
      height: auto;
      max-width: 100%;
      background-repeat: no-repeat;
      background-position: bottom center;
      background-size: cover;
      background-color: rgba(0, 0, 0, 0.5);
    "
  >
    <div
      class="d-flex align-items-center justify-content-center"
      style="height: 100vh; weight=100vh;"
    >
      <h1 class="h3 text-dark fw-bold p-4">這裡是錯誤網址，請點擊按鈕回到首頁</h1>
      <router-link to="/products"
        ><button type="button" class="btn btn-custom_btn-color btn-lg text-white">
          Back To Home
        </button>
      </router-link>
    </div>
  </header>
</template>

<script>
import Error404 from '@/assets/images/Error_404.jpg';

export default {
  name: 'ErrorView',
  data() {
    return { Error404 };
  },
};
</script>
