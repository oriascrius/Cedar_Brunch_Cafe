import{_ as l,a as c,L as u,c as m,b as s,h as a,v as d,J as p,o as h}from"./index-4f005452.js";const{VITE_API:_}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"qoqvuedemo",BASE_URL:"/Cedar_Brunch_Cafe/",MODE:"production",DEV:!1,PROD:!0},f={data(){return{user:{username:"",password:""}}},methods:{login(){this.$http.post(`${_}admin/signin`,this.user).then(o=>{const{token:e,expired:i}=o.data;document.cookie=`qoqVueDemo=${e};expires=${new Date(i)}; path=/`,this.$router.push("/admin/products"),this.$swal.fire({toast:!0,position:"center",icon:"success",title:"登入成功",showConfirmButton:!0,timer:1500})}).catch(o=>{alert(o.response.data.message)})},...c(u,["showLoading","hideLoading"])},mounted(){setTimeout(()=>{this.hideLoading()},500)}},w={class:"container mt-5"},b={class:"row justify-content-center"},g={class:"col-md-6 text-center"},v=s("h2",{class:"h3 mb-5 font-weight-normal"},"後台管理系統",-1),x={class:"mb-4 col-8 mx-auto"},E=s("label",{for:"inputEmail",class:"sr-only mb-3"},"Email address",-1),V={class:"mb-2 col-8 mx-auto"},P=s("label",{for:"inputPassword",class:"sr-only mb-3"},"Password",-1),L={class:"mt-5"};function q(o,e,i,y,n,r){return h(),m("div",w,[s("form",b,[s("div",g,[v,s("div",x,[E,a(s("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"","onUpdate:modelValue":e[0]||(e[0]=t=>n.user.username=t)},null,512),[[d,n.user.username]])]),s("div",V,[P,a(s("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=t=>n.user.password=t)},null,512),[[d,n.user.password]])]),s("div",L,[s("button",{class:"btn btn-custom_medium-green col-3 text-white",type:"button",onClick:e[2]||(e[2]=p((...t)=>r.login&&r.login(...t),["prevent"]))}," 登入 ")])])])])}const D=l(f,[["render",q]]);export{D as default};
