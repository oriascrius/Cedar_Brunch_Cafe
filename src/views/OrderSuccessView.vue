<template>
  <header><img :src="`${OrderSuccess}`" alt="訂購成功圖片" class="img-fluid" /></header>
  <!-- 下方 -->
  <div class="container mt-7">
    <div class="row justify-content-center align-items-center">
      <div class="col-lg-6 py-5 text-center">
        <h2 class="text-custom_btn-color fw-bold h4">訂購成功</h2>
        <p class="text-muted mt-3">謝謝您的訂購，期待再次為您服務</p>
        <p class="text-muted mt-5">我們將會處理您的訂單<br />繼續選購請點擊回到首頁</p>
        <router-link to="/" class="btn btn-outline-custom_btn-color">Back To Home</router-link>
      </div>
      <div class="col-lg-6 py-5">
        <img :src="`${BusinessCardReverse}`" alt="名片圖" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<script>
import OrderSuccess from '@/assets/images/OrderSuccess.jpg';
import BusinessCardReverse from '@/assets/images/BusinessCard_Reverse.png';

export default {
  data() {
    return {
      OrderSuccess,
      BusinessCardReverse,
    };
  },
};
</script>
