import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/IndexView.vue'),
      },
      {
        path: '/products',
        name: '商品列表',
        component: () => import('../views/ProductsView.vue'),
      },
      {
        path: '/product/:id',
        name: '商品頁面',
        component: () => import('../views/ProductView.vue'),
      },
      {
        path: '/cart',
        name: '購物車',
        component: () => import('../views/OrderView.vue'),
      },
      {
        path: '/orderForm',
        name: '訂單表單',
        component: () => import('../views/OrderFormView.vue'),
      },
      {
        path: '/orderPay/:orderId',
        name: '訂單付款',
        component: () => import('../views/OrderPayView.vue'),
      },
      {
        path: '/orderSuccess',
        name: '訂單成功',
        component: () => import('../views/OrderSuccessView.vue'),
      },
      {
        path: '/about',
        name: '關於我們',
        component: () => import('../views/AboutView.vue'),
      },
      {
        path: '/contact',
        name: '聯絡我們',
        component: () => import('../views/ContactView.vue'),
      },
      {
        path: '/question',
        name: '常見問題',
        component: () => import('../views/QuestionView.vue'),
      },
    ],
  },
  {
    path: '/admin/:pathMatch(.*)*',
    redirect: { name: 'Login' },
  },
  // 網址錯誤時，導向自訂義 404 ErrorView 畫面
  { path: '/:catchAll(.*)', redirect: '/not-found' },
  {
    path: '/not-found',
    component: () => import('../views/ErrorView.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Dashboard/ProductsView.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/Dashboard/OrdersView.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/Dashboard/CouponsView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
