<template>
  <RouterView></RouterView>
  <QuestionHeader></QuestionHeader>
  <div class="container text-custom_medium-green">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <h5 class="mt-7 fw-bold text-center">FAQ</h5>
        <h1 class="h2 fw-bold text-center">常見問題</h1>
        <hr class="mt-4" />
        <div class="accordion mt-5" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button text-custom_medium-green fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                特別的節日或活動時會有不同的營業時間嗎？
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show fs-7"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body text-custom_medium-green">
                在特別節日或活動期間，我們可能會有不同的營業時間，請隨時關注我們的官方網站、FB、Line以獲取最新資訊。
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed text-custom_medium-green fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                有提供外送服務嗎？
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body text-custom_medium-green">
                我們沒有外送服務喔。<br />但您可以先下訂餐點，我們會準備餐點，等待您來領取。
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed text-custom_medium-green fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                你們菜單會更換嗎？
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body text-custom_medium-green">
                目前菜單固定不會更改。
                但我們會不時地推出活動，有特別的餐點推出，請隨時關注我們的官方網站、FB、Line以獲取最新資訊。
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed text-custom_medium-green fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                你們的食材有採用有機或當地的農產品嗎？
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body text-custom_medium-green">
                我們非常重視食材的品質和來源，因此我們會採用當地和有機的農產品作為我們的食材。<br />我們也會根據季節性的變化調整我們的菜單，以確保客人品嚐到最新鮮、最好的食材。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-7">
      <h4 class="h5 fw-bold">DISHES</h4>
      <h2 class="h3 fw-bold">熱門餐點</h2>
    </div>
    <swiper
      :slidesPerView="3"
      :spaceBetween="20"
      :loop="true"
      :speed="1000"
      :navigation="navigation"
      :autoplay="{ delay: 6000, disableOnInteraction: true }"
      :modules="modules"
      :breakpoints="{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }"
      class="mySwiper mt-3"
    >
      <swiper-slide v-for="product in products" :key="product.id">
        <div class="card" style="width: 100%; height: 100%">
          <router-link
            :to="`/product/${product.id}`"
            style="width: 100%; height: 416px; overflow: hidden"
          >
            <img
              :src="product.imageUrl"
              :alt="product.title"
              style="width: 100%; height: 416px; cursor: pointer"
            />
          </router-link>
          <ul class="mt-3 list-unstyled">
            <li class="ms-4">
              <h5>{{ product.title }}</h5>
            </li>
            <li class="ms-4">
              <p class="text-custom_medium-green">NT$ {{ product.price }}</p>
            </li>
            <li class="ms-4">
              <router-link to="/products">
                <button type="button" class="btn btn-custom_btn-color text-white">探索更多</button>
              </router-link>
            </li>
          </ul>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper';
import QuestionHeader from '@/components/front-end/QuestionHeader.vue';
import 'swiper/css';
import 'swiper/css/navigation';

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      modules: [Autoplay, Navigation],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    };
  },
  methods: {
    // 商品列表 - 取得商品列表 API
    getProducts() {
      this.$http
        .get(`${VITE_API}api/${VITE_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
  components: {
    RouterView,
    QuestionHeader,
    Swiper,
    SwiperSlide,
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped>
.mySwiper img {
  transform: scale(1, 1);
  transition: all 1s ease-out;
}
.mySwiper img:hover {
  transform: scale(1.2, 1.2);
}
</style>
