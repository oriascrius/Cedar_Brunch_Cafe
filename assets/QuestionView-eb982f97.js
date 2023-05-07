import{_ as u,o as i,c as n,b as e,d,w as c,r as o,R as f,F as b,i as y,A as E,B as S,t as p,y as B,z as A}from"./index-4f005452.js";import{A as V,N as F,S as I,a as T}from"./navigation.min-59e89c6d.js";const P="/Cedar_Brunch_Cafe/assets/Question_Banner-08ad4c06.jpg",$={data(){return{QuestionBanner:P}}},C={class:"position-relative"},R=["src"],D=e("button",{type:"button",class:"btn btn-custom_btn-color btn-lg text-white","data-aos":"fade-down"}," 享用時光 ",-1);function N(a,v,m,_,s,h){const l=o("router-link");return i(),n("header",null,[e("div",C,[e("img",{src:`${s.QuestionBanner}`,alt:"關於我們圖片",class:"img-fluid"},null,8,R),d(l,{to:"/products",style:{position:"absolute",left:"50%",transform:"translateX(-50%) translateY(50%)",bottom:"60px"}},{default:c(()=>[D]),_:1})])])}const k=u($,[["render",N]]);const{VITE_API:Q,VITE_PATH:O}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"qoqvuedemo",BASE_URL:"/Cedar_Brunch_Cafe/",MODE:"production",DEV:!1,PROD:!0},L={data(){return{products:[],modules:[V,F],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}},methods:{getProducts(){this.$http.get(`${Q}api/${O}/products/all`).then(a=>{this.products=a.data.products}).catch(a=>{alert(a.response.data.message)})}},components:{RouterView:f,QuestionHeader:k,Swiper:I,SwiperSlide:T},mounted(){this.getProducts()}},H=a=>(B("data-v-39ebdb15"),a=a(),A(),a),M={class:"container text-custom_medium-green"},q=y('<div class="row" data-v-39ebdb15><div class="col-lg-8 mx-auto" data-v-39ebdb15><h5 class="mt-7 fw-bold text-center" data-v-39ebdb15>FAQ</h5><h1 class="h2 fw-bold text-center" data-v-39ebdb15>常見問題</h1><hr class="mt-4" data-v-39ebdb15><div class="accordion mt-5" id="accordionExample" data-aos="fade-down" data-v-39ebdb15><div class="accordion-item" data-v-39ebdb15><h2 class="accordion-header" id="headingOne" data-v-39ebdb15><button class="accordion-button text-custom_medium-green fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" data-v-39ebdb15> Ｑ1.「 CEDAR 」能刷卡消費嗎？ </button></h2><div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" data-v-39ebdb15><div class="accordion-body text-custom_medium-green fw-bold" data-v-39ebdb15> 店內消費可以使用現金、LINE Pay、街口支付。<br data-v-39ebdb15> 線上訂購可以使用刷卡服務唷。 </div></div></div><div class="accordion-item" data-v-39ebdb15><h2 class="accordion-header" id="headingTwo" data-v-39ebdb15><button class="accordion-button collapsed text-custom_medium-green fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" data-v-39ebdb15> Ｑ2.「 CEDAR 」能帶寵物去用餐嗎？ </button></h2><div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" data-v-39ebdb15><div class="accordion-body text-custom_medium-green fw-bold" data-v-39ebdb15> 我們是寵物友善餐廳，歡迎帶寵物一起過來用餐唷。 </div></div></div><div class="accordion-item" data-v-39ebdb15><h2 class="accordion-header" id="headingThree" data-v-39ebdb15><button class="accordion-button collapsed text-custom_medium-green fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" data-v-39ebdb15> Ｑ3.「 CEDAR 」附近有停車場嗎？ </button></h2><div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" data-v-39ebdb15><div class="accordion-body text-custom_medium-green fw-bold" data-v-39ebdb15> 因為我們位於淡水老街後方，所以可以停在淡水捷運站以及附近的立體停車場唷。 </div></div></div><div class="accordion-item" data-v-39ebdb15><h2 class="accordion-header" id="headingFour" data-v-39ebdb15><button class="accordion-button collapsed text-custom_medium-green fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" data-v-39ebdb15> Ｑ4.「 CEDAR 」可以訂位嗎？ </button></h2><div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample" data-v-39ebdb15><div class="accordion-body text-custom_medium-green fw-bold" data-v-39ebdb15> 請幫我們提前來電: +886 2 1234 1234。<br data-v-39ebdb15> 先詢問現場人員訂位狀況，或是到我們的LINE、FB進行留言，我們會再給予回覆，謝謝您。 </div></div></div><div class="accordion-item" data-v-39ebdb15><h2 class="accordion-header" id="headingFive" data-v-39ebdb15><button class="accordion-button collapsed text-custom_medium-green fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" data-v-39ebdb15> Ｑ5.「 CEDAR 」的營業時間？ </button></h2><div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample" data-v-39ebdb15><div class="accordion-body text-custom_medium-green fw-bold" data-v-39ebdb15> 我們營業時間：<br data-v-39ebdb15>星期六、星期日 09:00 AM - 17:00 PM <br data-v-39ebdb15>星期一 ~ 星期五 08:00 AM - 16:00 PM <br data-v-39ebdb15>如有特殊節日、活動，我們會在官方網站、LINE、FB公告營業狀況以及時間唷。 </div></div></div><div class="accordion-item" data-v-39ebdb15><h2 class="accordion-header" id="headingSix" data-v-39ebdb15><button class="accordion-button collapsed text-custom_medium-green fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" data-v-39ebdb15> Ｑ6.「 CEDAR 」可以外送嗎？ </button></h2><div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample" data-v-39ebdb15><div class="accordion-body text-custom_medium-green fw-bold" data-v-39ebdb15> 我們目前沒有外送唷，但能在這裡直接下訂餐點，或是撥打我們電話、聯繫LINE、FB，我們將會處理您的餐點唷。 </div></div></div><div class="accordion-item" data-v-39ebdb15><h2 class="accordion-header" id="headingSeven" data-v-39ebdb15><button class="accordion-button collapsed text-custom_medium-green fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven" data-v-39ebdb15> Ｑ7.「 CEDAR 」會更換菜單嗎？ </button></h2><div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample" data-v-39ebdb15><div class="accordion-body text-custom_medium-green fw-bold" data-v-39ebdb15> 我們菜單會一年更改一次，提供不同選擇。<br data-v-39ebdb15> 我們也會不時地推出活動，有特別的餐點推出，請隨時關注我們的官方網站、FB、LINE以獲取最新資訊。 </div></div></div></div></div></div><div class="mt-7 py-2" data-v-39ebdb15><h4 class="h5 fw-bold" data-v-39ebdb15>DISHES</h4><h2 class="h3 fw-bold" data-v-39ebdb15>熱門餐點</h2></div>',2),U={class:"card",style:{width:"100%",height:"100%"}},j=["src","alt"],z={class:"mt-3 list-unstyled"},X={class:"ms-4"},Y={class:"ms-4"},G={class:"text-custom_medium-green"},J={class:"ms-4"},K=H(()=>e("button",{type:"button",class:"btn btn-custom_btn-color text-white"},"探索更多",-1));function W(a,v,m,_,s,h){const l=o("RouterView"),g=o("QuestionHeader"),r=o("router-link"),w=o("swiper-slide"),x=o("swiper");return i(),n(b,null,[d(l),d(g),e("div",M,[q,d(x,{"data-aos":"fade-up",slidesPerView:3,spaceBetween:20,loop:!0,speed:1e3,navigation:s.navigation,autoplay:{delay:6e3,disableOnInteraction:!0},modules:s.modules,breakpoints:{320:{slidesPerView:1,spaceBetween:10},640:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:2,spaceBetween:20},1024:{slidesPerView:3,spaceBetween:20}},class:"mySwiper mt-3"},{default:c(()=>[(i(!0),n(b,null,E(s.products,t=>(i(),S(w,{key:t.id},{default:c(()=>[e("div",U,[d(r,{to:`/product/${t.id}`,style:{width:"100%",height:"416px",overflow:"hidden"}},{default:c(()=>[e("img",{src:t.imageUrl,alt:t.title,style:{width:"100%",height:"416px",cursor:"pointer"}},null,8,j)]),_:2},1032,["to"]),e("ul",z,[e("li",X,[e("h5",null,p(t.title),1)]),e("li",Y,[e("p",G,"NT$ "+p(t.price),1)]),e("li",J,[d(r,{to:"/products"},{default:c(()=>[K]),_:1})])])])]),_:2},1024))),128))]),_:1},8,["navigation","modules"])])],64)}const ae=u(L,[["render",W],["__scopeId","data-v-39ebdb15"]]);export{ae as default};
