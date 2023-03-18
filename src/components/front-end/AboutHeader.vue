<template>
  <header>
    <div class="position-relative">
      <!-- <img src="/images/AboutUs_Banner.jpg" alt="關於我們圖片" class="img-fluid" /> -->
      <img
        :src="`${AboutUsBanner}`"
        alt="關於我們圖片"
        class="img-fluid"
        style="object-fit: cover"
      />
      <router-link
        to="/products"
        style="
          position: absolute;
          left: 50%;
          transform: translateX(-50%) translateY(50%);
          bottom: 60px;
        "
        ><button
          type="button"
          class="btn btn-custom_btn-color btn-lg text-white"
          data-aos="fade-down"
        >
          享用時光
        </button>
      </router-link>
    </div>
  </header>
</template>

<script>
import AboutUsBanner from '@/assets/images/AboutUs_Banner.jpg';

export default {
  data() {
    return {
      AboutUsBanner,
    };
  },
};
</script>
