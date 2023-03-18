<template>
  <!-- 最外層，可放 Loading 全部都能使用到 -->
  <Loading v-model:active="isLoading" :is-full-page="fullPage">
    <template v-slot:default>
      <img :src="`${loadingIcon}`" alt="loading圖" class="loadingIcon" />
    </template>
  </Loading>
  <RouterView />
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RouterView } from 'vue-router';
import { mapState, mapActions } from 'pinia';
import LoadingStore from '@/stores/Loading';
import loadingIcon from '@/assets/images/loading_icon.png';

export default {
  data() {
    return { loadingIcon };
  },
  components: {
    RouterView,
  },
  mounted() {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 1000,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  },
  computed: {
    ...mapState(LoadingStore, ['isLoading', 'fullPage']),
  },
  methods: {
    ...mapActions(LoadingStore, ['showLoading']),
  },
};
</script>

<style lang="scss">
@import '@/assets/all.scss';
</style>
