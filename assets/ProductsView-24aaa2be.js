import{P as x,M as h}from"./PaginationModal-e03bd290.js";import{_ as v,o as a,c as i,b as t,h as r,v as c,F as P,A as M,N as U,f as w,t as m,a as C,L as V,d as g,r as $}from"./index-4f005452.js";const{VITE_API:I,VITE_PATH:D}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"qoqvuedemo",BASE_URL:"/Cedar_Brunch_Cafe/",MODE:"production",DEV:!1,PROD:!0},E={props:{tempProduct:{type:Object,default(){return{}},required:!0},isNew:{type:Boolean,default:!1}},data(){return{}},methods:{upload(){const o=this.$refs.inputFile.files[0],e=new FormData;e.append("file-to-upload",o),this.$http.post(`${I}api/${D}/admin/upload`,e).then(l=>{this.$props.tempProduct.imageUrl=l.data.imageUrl}).catch(l=>{alert(l.response.data.message)})}}},T={class:"modal-dialog modal-xl"},A={class:"modal-content border-0"},L={class:"modal-header bg-dark text-white"},B={id:"productModalLabel",class:"modal-title"},N={key:0},q={key:1},O=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),F={class:"modal-body"},H={class:"row"},R={class:"col-sm-4"},S={class:"mb-3"},j=t("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),z=["src","alt"],G=t("h3",{class:"mb-3"},"多圖新增",-1),J={key:0},K={class:"mb-3"},Q=t("label",{for:"imageUrl",class:"form-label"},"圖片網址",-1),W=["onUpdate:modelValue"],X=["src"],Y={key:0},Z={key:1},tt={key:1},et={class:"col-sm-8"},st={class:"mb-3"},ot=t("label",{for:"title",class:"form-label"},"商品名稱",-1),lt={class:"row"},at={class:"mb-3 col-md-6"},it=t("label",{for:"category",class:"form-label"},"分類",-1),dt={class:"mb-3 col-md-6"},nt=t("label",{for:"price",class:"form-label"},"單位",-1),rt={class:"row"},ct={class:"mb-3 col-md-6"},pt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),ut={class:"mb-3 col-md-6"},mt=t("label",{for:"price",class:"form-label"},"售價",-1),ht=t("hr",null,null,-1),_t={class:"mb-3"},bt=t("label",{for:"description",class:"form-label"},"商品描述",-1),ft={class:"mb-3"},gt=t("label",{for:"content",class:"form-label"},"說明內容",-1),$t={class:"mb-3"},Pt={class:"form-check"},vt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),yt={class:"modal-footer"},kt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function wt(o,e,l,y,p,d){return a(),i("div",T,[t("div",A,[t("div",L,[t("h5",B,[l.isNew?(a(),i("span",N,"新增商品")):(a(),i("span",q,"編輯商品"))]),O]),t("div",F,[t("div",H,[t("div",R,[t("div",S,[j,r(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>this.$props.tempProduct.imageUrl=s),type:"text",class:"form-control mb-2",placeholder:"請輸入圖片連結"},null,512),[[c,this.$props.tempProduct.imageUrl]]),t("img",{class:"img-fluid",src:this.$props.tempProduct.imageUrl,alt:this.$props.tempProduct.title},null,8,z),t("input",{type:"file",ref:"inputFile",name:"file-to-upload",class:"form-control",onChange:e[1]||(e[1]=(...s)=>d.upload&&d.upload(...s))},null,544)]),G,Array.isArray(this.$props.tempProduct.imagesUrl)?(a(),i("div",J,[(a(!0),i(P,null,M(this.$props.tempProduct.imagesUrl,(s,u)=>(a(),i("div",{class:"mb-1",key:u},[t("div",K,[Q,r(t("input",{"onUpdate:modelValue":f=>this.$props.tempProduct.imagesUrl[u]=f,type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,8,W),[[c,this.$props.tempProduct.imagesUrl[u]]])]),t("img",{class:"img-fluid",src:s},null,8,X)]))),128)),!this.$props.tempProduct.imagesUrl.length||this.$props.tempProduct.imagesUrl[this.$props.tempProduct.imagesUrl.length-1]?(a(),i("div",Y,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=s=>this.$props.tempProduct.imagesUrl.push(""))}," 新增圖片 ")])):(a(),i("div",Z,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[3]||(e[3]=s=>this.$props.tempProduct.imagesUrl.pop())}," 刪除圖片 ")]))])):(a(),i("div",tt,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[4]||(e[4]=s=>o.$emit("createImages"))}," 新增圖片 ")]))]),t("div",et,[t("div",st,[ot,r(t("input",{id:"title","onUpdate:modelValue":e[5]||(e[5]=s=>this.$props.tempProduct.title=s),type:"text",class:"form-control",placeholder:"請輸入商品名稱"},null,512),[[c,this.$props.tempProduct.title]])]),t("div",lt,[t("div",at,[it,r(t("input",{id:"category","onUpdate:modelValue":e[6]||(e[6]=s=>this.$props.tempProduct.category=s),type:"text",class:"form-control",placeholder:"請輸入分類"},null,512),[[c,this.$props.tempProduct.category]])]),t("div",dt,[nt,r(t("input",{id:"unit","onUpdate:modelValue":e[7]||(e[7]=s=>this.$props.tempProduct.unit=s),type:"text",class:"form-control",placeholder:"請輸入單位"},null,512),[[c,this.$props.tempProduct.unit]])])]),t("div",rt,[t("div",ct,[pt,r(t("input",{id:"origin_price","onUpdate:modelValue":e[8]||(e[8]=s=>this.$props.tempProduct.origin_price=s),type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[c,this.$props.tempProduct.origin_price,void 0,{number:!0}]])]),t("div",ut,[mt,r(t("input",{id:"price","onUpdate:modelValue":e[9]||(e[9]=s=>this.$props.tempProduct.price=s),type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[c,this.$props.tempProduct.price,void 0,{number:!0}]])])]),ht,t("div",_t,[bt,r(t("textarea",{id:"description","onUpdate:modelValue":e[10]||(e[10]=s=>this.$props.tempProduct.description=s),type:"text",class:"form-control",placeholder:"請輸入商品描述"},`
              `,512),[[c,this.$props.tempProduct.description]])]),t("div",ft,[gt,r(t("textarea",{id:"description","onUpdate:modelValue":e[11]||(e[11]=s=>this.$props.tempProduct.content=s),type:"text",class:"form-control",placeholder:"請輸入說明內容"},`
              `,512),[[c,this.$props.tempProduct.content]])]),t("div",$t,[t("div",Pt,[r(t("input",{id:"is_enabled","onUpdate:modelValue":e[12]||(e[12]=s=>this.$props.tempProduct.is_enabled=s),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[U,this.$props.tempProduct.is_enabled]]),vt])])])])]),t("div",yt,[kt,t("button",{type:"button",class:"btn btn-custom_medium-green text-white",onClick:e[13]||(e[13]=s=>o.$emit("updateMeals",this.$props.isNew))}," 確認 ")])])])}const Mt=v(E,[["render",wt]]),xt={props:{tempProduct:{type:Object,default(){return{}},required:!0}},data(){return{}}},Ut={class:"modal-dialog"},Ct={class:"modal-content border-0"},Vt=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),It={class:"modal-body"},Dt={class:"text-danger"},Et={class:"modal-footer"},Tt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function At(o,e,l,y,p,d){return a(),i("div",Ut,[t("div",Ct,[Vt,t("div",It,[w(" 是否刪除 "),t("strong",Dt,m(l.tempProduct.title),1),w(" 商品(刪除後將無法恢復)。 ")]),t("div",Et,[Tt,t("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=s=>o.$emit("delMeals"))},"確認刪除")])])])}const Lt=v(xt,[["render",At]]),{VITE_API:_,VITE_PATH:b}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"qoqvuedemo",BASE_URL:"/Cedar_Brunch_Cafe/",MODE:"production",DEV:!1,PROD:!0},Bt={name:"ProductsView",props:["token"],data(){return{modal:{},products:[],tempProduct:{imagesUrl:[]},productId:"",isNew:!1,page:{}}},components:{Pagination:x,MealModal:Mt,DelmealModal:Lt},methods:{...C(V,["showLoading","hideLoading"]),getData(o=1){this.states={isLoading:!0,fullPage:!0};const e=`${_}api/${b}/admin/products?page=${o}`;this.$http.get(e).then(l=>{this.products=l.data.products,this.page=l.data.pagination,this.hideLoading()}).catch(l=>{alert(l.response.data.message),this.hideLoading()})},openModal(o,e){o==="new"?(this.tempProduct={imagesUrl:[]},this.isNew=!0,this.modal=new h(this.$refs.productModal,{keyboard:!1,backdrop:"static"}),this.modal.show()):o==="edit"?(this.tempProduct={...e},this.isNew=!1,this.modal=new h(this.$refs.productModal,{keyboard:!1,backdrop:"static"}),this.modal.show()):o==="delete"?(this.tempProduct={...e},this.modal=new h(this.$refs.delProductModal,{keyboard:!1,backdrop:"static"}),this.modal.show()):o==="lightbox"&&(this.tempProduct={...e},this.modal=new h(this.$refs.productModal,{keyboard:!1,backdrop:"static"}),this.modal.show())},updateProduct(){let o=`${_}api/${b}/admin/product`,e="post";this.isNew||(o=`${_}api/${b}/admin/product/${this.tempProduct.id}`,e="put"),this.$http[e](o,{data:this.tempProduct}).then(()=>{this.isNew?this.$swal.fire({toast:!0,position:"top-end",icon:"success",title:"新建一個新商品成功",showConfirmButton:!1,timer:1500}):this.$swal.fire({toast:!0,position:"top-end",icon:"success",title:"修改商品成功",showConfirmButton:!1,timer:1500}),this.modal.hide(),this.getData()}).catch(l=>{alert(l.response.data.message)})},delProduct(){const o=`${_}api/${b}/admin/product/${this.tempProduct.id}`;this.$http.delete(o).then(()=>{this.$swal.fire({toast:!0,position:"top-end",icon:"success",title:"刪除商品成功",showConfirmButton:!1,timer:1500}),this.modal.hide(),this.getData()}).catch(e=>{alert(e.data.message)})},createImages(){this.tempProduct.imagesUrl=[],this.tempProduct.imagesUrl.push("")}},mounted(){this.getData()}},Nt={class:"container"},qt={class:"text-end mt-4 me-5"},Ot={class:"table mt-4"},Ft=t("thead",null,[t("tr",null,[t("th",null,"分類"),t("th",null,"商品名稱"),t("th",{class:"text-center"},"商品圖片"),t("th",null,"原價"),t("th",null,"售價"),t("th",null,"是否啟用"),t("th",{class:"text-center"},"編輯")])],-1),Ht={class:"text-center"},Rt=["onClick"],St=["src","alt"],jt={key:0,class:"text-success"},zt={key:1,class:"text-danger"},Gt={class:"text-center"},Jt={class:"btn-group"},Kt=["onClick"],Qt=["onClick"],Wt={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},Xt={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"};function Yt(o,e,l,y,p,d){const s=$("pagination"),u=$("MealModal"),f=$("DelmealModal");return a(),i(P,null,[t("div",Nt,[t("div",qt,[t("button",{type:"button",class:"btn btn-custom_btn-color text-white",onClick:e[0]||(e[0]=n=>d.openModal("new"))}," 增加新商品 ")]),t("table",Ot,[Ft,t("tbody",null,[(a(!0),i(P,null,M(p.products,n=>(a(),i("tr",{key:n.id,class:"align-middle"},[t("td",null,m(n.category),1),t("td",null,m(n.title),1),t("td",Ht,[t("button",{type:"button",class:"btn btn-light",onClick:k=>d.openModal("lightbox",n)},[t("img",{src:n.imageUrl,alt:n.title,class:"rounded",style:{width:"100px",height:"100px","object-fit":"cover"}},null,8,St)],8,Rt)]),t("td",null,m(n.origin_price),1),t("td",null,m(n.price),1),t("td",null,[n.is_enabled?(a(),i("span",jt,"啟用")):(a(),i("span",zt,"未啟用"))]),t("td",Gt,[t("div",Jt,[t("button",{type:"button",class:"btn btn-sm btn-outline-custom_dark-green",onClick:k=>d.openModal("edit",n)}," 編輯 ",8,Kt),t("button",{type:"button",class:"btn btn-sm btn-outline-custom_red ms-md-2",onClick:k=>d.openModal("delete",n)}," 刪除 ",8,Qt)])])]))),128))])]),g(s,{pages:p.page,onChangePage:d.getData},null,8,["pages","onChangePage"])]),t("div",Wt,[g(u,{"temp-product":p.tempProduct,"is-new":p.isNew,onCreateImages:d.createImages,onUpdateMeals:d.updateProduct},null,8,["temp-product","is-new","onCreateImages","onUpdateMeals"])],512),t("div",Xt,[g(f,{"temp-product":p.tempProduct,onDelMeals:d.delProduct},null,8,["temp-product","onDelMeals"])],512)],64)}const ee=v(Bt,[["render",Yt]]);export{ee as default};
