<template>
  <RouterView></RouterView>
  <ContactHeader></ContactHeader>
  <div class="container text-custom_medium-green">
    <div class="row justify-content-center align-items-center text-center">
      <h5 class="mt-7 fw-bold text-center">Contact Us</h5>
      <h1 class="h2 text-center fw-bold">聯絡我們</h1>
      <hr class="mt-4" />
      <ul class="col-md-6 list-unstyled mt-5" data-aos="fade-up">
        <li>
          <p class="lh-lg">
            松柏食光<br />新北市淡水區中山北路三段 123 號<br />電話: +886 2 1234 1234
          </p>
        </li>
        <li class="mt-5">
          <p class="lh-lg">
            營業時間：<br />星期六、星期日 09:00 AM - 17:00 PM<br />星期一 ~ 星期五 08:00 AM - 16:00
            PM
          </p>
        </li>
      </ul>
      <div class="col-md-4 mt-5" data-aos="fade-down">
        <!-- <img src="/images/BusinessCard_Front.png" class="img-fluid" alt="名片" /> -->
        <!-- <img src="/images/BusinessCard_Reverse.png" class="mt-3 img-fluid" alt="名片" /> -->
        <img :src="`${BusinessCardFront}`" class="img-fluid" alt="名片" />
         <img :src="`${BusinessCardReverse}`" class="img-fluid  mt-2" alt="名片" />
      </div>
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import ContactHeader from '@/components/front-end/ContactHeader.vue';
import BusinessCardFront from '@/assets/images/BusinessCard_Front.png';
import BusinessCardReverse from '@/assets/images/BusinessCard_Reverse.png';

export default {
  data() {
    return { BusinessCardFront, BusinessCardReverse };
  },
  components: { RouterView, ContactHeader },
};
</script>
