<template>
  <div class="RecommendBg" style="background: rgba(116, 125, 84, 0.8)">
    <div class="container mt-4">
      <div class="row justify-content-around mt-7">
        <div class="p-5 text-white">
          <h4 class="h5 fw-bold text-center">MENU</h4>
          <h2 class="h3 fw-bold text-center">松柏主打推薦</h2>
        </div>
        <div class="col-lg-6 col-md-12 position-relative" data-aos="fade-up">
          <img
            :src="`${HotMenu001}`"
            alt="主打推薦"
            class="img-fluid rounded-3 RecommendImages"
            style="height: 648px; width: 100%"
          />
          <div class="RecommendUpCard rounded-3 position-absolute border border-2 p-3">
            <h5>「鮭魚班尼迪克蛋」</h5>
            <p>每一天的早起都值得吃個班尼迪克蛋！</p>
            <router-link to="/product/-NQMwp2XllOm2B1b51Wp">
              <button type="button" class="btn btn-outline-custom_btn-color">餐點詳情</button>
            </router-link>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 position-relative" data-aos="fade-up">
          <img
             :src="`${HotMenu002}`"
            alt="主打推薦"
            class="img-fluid rounded-3 RecommendImages"
            style="height: 648px; width: 100%"
          />
          <div class="RecommendDownCard rounded-3 position-absolute border border-2 p-3">
            <h5>「水果鮮奶油鬆餅」</h5>
            <p>充滿活力的周末，從精緻的點心開始。</p>
            <router-link to="/product/-NQMxd5Ep1pxqDTv0Gw0">
              <button type="button" class="btn btn-outline-custom_btn-color">
                餐點詳情
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HotMenu001 from '@/assets/images/HotMenu_001.jpg';
import HotMenu002 from '@/assets/images/HotMenu_002.jpg';

export default {
  data() {
    return {
      HotMenu001,
      HotMenu002,
    };
  },
};
</script>

<style scoped>
.RecommendBg {
  height: 954px;
  width: 100%;
}
.RecommendDownCard {
  top: 580px;
  /* left: 350px; */
  left: 50%;
  transform: translateX(-50%);
  width: 368px;
  height: 150px;
  background-color: #ffffff;
  position: absolute;
  color: #747d54;
}
.RecommendUpCard {
  top: 580px;
  /* left: 500px; */
  left: 50%;
  transform: translateX(-50%);
  width: 368px;
  height: 150px;
  background-color: #ffffff;
  position: absolute;
  color: #747d54;
}
@media (min-width: 380px) {
  .RecommendImages {
    height: 100%;
    width: 100%;
    margin-bottom: 100px;
  }
  .RecommendBg {
    height: 1700px;
    width: 100%;
  }
  .RecommendUpCard {
    left: 50%;
    transform: translateX(-50%);
    bottom: 670px;
  }
  .RecommendDownCard {
    left: 50%;
    transform: translateX(-50%);
    bottom: 670px;
  }
}
@media (min-width: 500px) {
  .RecommendImages {
    height: 100%;
    width: 100%;
    margin-bottom: 100px;
  }
  .RecommendBg {
    height: 1700px;
    width: 100%;
  }
  .RecommendUpCard {
    left: 50%;
    transform: translateX(-50%);
    bottom: 670px;
  }
  .RecommendDownCard {
    left: 50%;
    transform: translateX(-50%);
    bottom: 670px;
  }
}
@media (min-width: 770px) {
  .RecommendImages {
    height: 100%;
    width: 100%;
    margin-bottom: 100px;
  }
  .RecommendBg {
    height: 1700px;
    width: 100%;
  }
  .RecommendUpCard {
    left: 50%;
    transform: translateX(-50%);
    bottom: 670px;
  }
  .RecommendDownCard {
    left: 50%;
    transform: translateX(-50%);
    bottom: 670px;
  }
}
@media (min-width: 992px) {
  .RecommendImages {
    height: 100%;
    width: 100%;
    margin-bottom: 100px;
  }
  .RecommendBg {
    height: 954px;
    width: 100%;
  }
  .RecommendUpCard {
    left: 50%;
    transform: translateX(-50%);
    bottom: 670px;
  }
  .RecommendDownCard {
    left: 50%;
    transform: translateX(-50%);
    bottom: 670px;
  }
}
@media (min-width: 1200px) {
  .RecommendImages {
    height: 100%;
    width: 100%;
    margin-bottom: 100px;
  }
  .RecommendBg {
    height: 954px;
    width: 100%;
  }
  .RecommendUpCard {
    left: 50%;
    transform: translateX(-50%);
    bottom: 670px;
  }
  .RecommendDownCard {
    left: 50%;
    transform: translateX(-50%);
    bottom: 670px;
  }
}
@media (min-width: 1400px) {
  .RecommendImages {
    height: 100%;
    width: 100%;
    margin-bottom: 100px;
  }
  .RecommendBg {
    height: 954px;
    width: 100%;
  }
  .RecommendUpCard {
    left: 68%;
    transform: translateX(-50%);
    bottom: 670px;
  }
  .RecommendDownCard {
    left: 68%;
    transform: translateX(-50%);
    bottom: 670px;
  }
}
</style>
