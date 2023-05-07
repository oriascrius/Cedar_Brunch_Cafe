import{_ as f,a as u,L as w,m as v,c as d,b as t,F as h,A as m,t as a,d as p,w as b,r as C,o as n,h as y,K as k}from"./index-4f005452.js";import{c as g}from"./cart-a0e5f515.js";const x={name:"CartView",data(){return{couponCode:"",loadingItem:""}},mounted(){this.getCarts()},methods:{...u(g,["addToCart","getCarts","updateCartItem","deleteItem","deleteCars","addCouponCode"]),...u(w,["showLoading","hideLoading"])},computed:{...v(g,["cart"])}},V={class:"container text-custom_medium-green"},$={key:0,class:"row"},L=t("h3",{class:"mt-3 h4 fw-bold"},"購物車清單",-1),S={class:"col-md-8 mt-3","data-aos":"fade-up"},N={class:"table text-custom_medium-green"},B=t("thead",null,[t("tr",null,[t("th",{scope:"col",class:"border-0 ps-0"},"商品名稱"),t("th",{scope:"col",class:"border-0"},"商品數量"),t("th",{scope:"col",class:"border-0"},"商品小計"),t("th",{scope:"col",class:"border-0"})])],-1),F={scope:"row",class:"border-0 px-0 font-weight-normal py-4"},T=["src","alt"],U={class:"mb-0 fw-bold ms-3 d-inline-block"},j={class:"border-0 align-middle",style:{"max-width":"160px"}},q={class:"input-group pe-5"},A=t("div",{class:"input-group-prepend"},null,-1),D={class:"input-group input-group-sm"},M=["onUpdate:modelValue","onChange","disabled"],E=["value"],K={class:"ms-2"},O={class:"border-0 align-middle"},X={class:"mb-0 ms-auto"},z={class:"border-0 align-middle"},G=["onClick","disabled"],H={class:"col-md-4","data-aos":"fade-up"},J={class:"border p-4 mb-4"},P=t("h3",{class:"h4 fw-bold mb-4"},"訂單細節",-1),Q=t("table",{class:"table text-custom_medium-green border-bottom"},[t("tbody")],-1),R={class:"d-flex justify-content-between mt-4"},W=t("p",{class:"mb-0 h4 fw-bold"},"小計",-1),Y={class:"mb-0 h4 fw-bold"},Z=t("button",{type:"button",class:"btn btn-custom_btn-color text-white w-100 mt-4"}," 確認購物車 ",-1),I={class:"text-center mt-6"},tt=["disabled"],st={key:1,class:"row text-center","data-aos":"fade-up"},et=t("h4",{class:"text-custom_medium-green mt-7"}," 購物車目前空空如也～趕緊將喜歡的餐點加入其中吧！ ",-1),ot=t("button",{class:"mt-4 btn btn-custom_btn-color text-white w-25"},"前往選購",-1);function dt(o,c,nt,at,l,lt){var r,_;const i=C("router-link");return n(),d("div",V,[(r=o.cart.carts)!=null&&r.length?(n(),d("div",$,[L,t("div",S,[t("table",N,[B,t("tbody",null,[(n(!0),d(h,null,m(o.cart.carts,s=>(n(),d("tr",{key:s.id},[t("th",F,[t("img",{src:s.product.imageUrl,alt:s.title,style:{width:"72px",height:"72px","object-fit":"cover"}},null,8,T),t("p",U,a(s.product.title),1)]),t("td",j,[t("div",q,[A,t("div",D,[y(t("select",{name:"",id:"","onUpdate:modelValue":e=>s.qty=e,onChange:e=>o.updateCartItem(s),disabled:s.id===l.loadingItem},[(n(),d(h,null,m(20,e=>t("option",{value:e,key:e+"1233"},a(e),9,E)),64))],40,M),[[k,s.qty]]),t("div",K,a(s.product.unit),1)])])]),t("td",O,[t("p",X,"NT$ "+a(s.product.price),1)]),t("td",z,[t("button",{type:"button",class:"btn btn-sm btn-outline-custom_red",onClick:e=>o.deleteItem(s),disabled:s.id===l.loadingItem}," X ",8,G)])]))),128))])])]),t("div",H,[t("div",J,[P,Q,t("div",R,[W,t("p",Y,"NT$ "+a(Math.floor(o.cart.total)),1)]),p(i,{to:"/orderForm"},{default:b(()=>[Z]),_:1})]),t("div",I,[t("button",{class:"btn btn-outline-custom_red",type:"button",onClick:c[0]||(c[0]=s=>{var e;return o.deleteCars((e=o.cart)==null?void 0:e.carts)}),disabled:((_=o.cart)==null?void 0:_.carts.id)===l.loadingItem}," 清空購物車 ",8,tt)])])])):(n(),d("div",st,[et,p(i,{to:"/products",class:""},{default:b(()=>[ot]),_:1})]))])}const rt=f(x,[["render",dt]]);export{rt as default};
