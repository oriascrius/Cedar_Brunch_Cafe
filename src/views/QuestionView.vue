<template>
  <RouterView></RouterView>
  <QuestionHeader></QuestionHeader>
  <div class="container text-custom_medium-green">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <h5 class="mt-7 fw-bold text-center">FAQ</h5>
        <h1 class="h2 fw-bold text-center">常見問題</h1>
        <hr class="mt-4" />
        <div class="accordion mt-5" id="accordionExample" data-aos="fade-down">
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
                Ｑ1.「 CEDAR 」能刷卡消費嗎？
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body text-custom_medium-green fw-bold">
                店內消費可以使用現金、LINE Pay、街口支付。<br />
                線上訂購可以使用刷卡服務唷。
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
                Ｑ2.「 CEDAR 」能帶寵物去用餐嗎？
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body text-custom_medium-green fw-bold">
                我們是寵物友善餐廳，歡迎帶寵物一起過來用餐唷。
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
                Ｑ3.「 CEDAR 」附近有停車場嗎？
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body text-custom_medium-green fw-bold">
                因為我們位於淡水老街後方，所以可以停在淡水捷運站以及附近的立體停車場唷。
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
                Ｑ4.「 CEDAR 」可以訂位嗎？
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body text-custom_medium-green fw-bold">
                請幫我們提前來電: +886 2 1234 1234。<br />
                先詢問現場人員訂位狀況，或是到我們的LINE、FB進行留言，我們會再給予回覆，謝謝您。
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button
                class="accordion-button collapsed text-custom_medium-green fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Ｑ5.「 CEDAR 」的營業時間？
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body text-custom_medium-green fw-bold">
                我們營業時間：<br />星期六、星期日 09:00 AM - 17:00 PM <br />星期一 ~ 星期五 08:00
                AM - 16:00 PM
                <br />如有特殊節日、活動，我們會在官方網站、LINE、FB公告營業狀況以及時間唷。
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingSix">
              <button
                class="accordion-button collapsed text-custom_medium-green fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Ｑ6.「 CEDAR 」可以外送嗎？
              </button>
            </h2>
            <div
              id="collapseSix"
              class="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body text-custom_medium-green fw-bold">
                我們目前沒有外送唷，但能在這裡直接下訂餐點，或是撥打我們電話、聯繫LINE、FB，我們將會處理您的餐點唷。
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingSeven">
              <button
                class="accordion-button collapsed text-custom_medium-green fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                Ｑ7.「 CEDAR 」會更換菜單嗎？
              </button>
            </h2>
            <div
              id="collapseSeven"
              class="accordion-collapse collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body text-custom_medium-green fw-bold">
                我們菜單會一年更改一次，提供不同選擇。<br />
                我們也會不時地推出活動，有特別的餐點推出，請隨時關注我們的官方網站、FB、LINE以獲取最新資訊。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-7 py-2">
      <h4 class="h5 fw-bold">DISHES</h4>
      <h2 class="h3 fw-bold">熱門餐點</h2>
    </div>
    <swiper
      data-aos="fade-up"
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
.accordion {
  --bs-accordion-bg: #fef5f2;
  --bs-accordion-border-color: #c7d2a4;
}
</style>
