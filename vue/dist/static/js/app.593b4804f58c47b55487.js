webpackJsonp([0],{"+Xhn":function(t,i){},0:function(t,i){},"0DO4":function(t,i){},"4PL9":function(t,i){},NHnr:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=a("7+uW"),s={data:function(){return{items:[{id:1,title:"This book",author:"this author"},{id:2,title:"That book",author:"that author"}],id:"books"}},mounted:function(){this.pullItems()},methods:{pullItems:function(){var t=this;this.$http.get("/api/books").then(function(i){t.items=i.body},function(t){console.log(t)})},navigateToMessage:function(t){var i=this;this.$router.push({path:"/books/"+t}).catch(function(t){i.$router.push({path:"/"})})}}},o={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"shop"},[a("div",{staticClass:"special-offer"}),t._v(" "),a("div",{staticClass:"shop-content"},[a("h2",[t._v("Top sellers")]),t._v(" "),a("ul",t._l(t.items,function(i){return a("li",{key:i.TITLE,staticClass:"preview",on:{click:function(a){return t.navigateToMessage(i.id)}}},[a("div",{staticClass:"preview-title"},[t._v(t._s(i.title))]),t._v(" "),a("div",{staticClass:"preview-author"},[t._v("by "+t._s(i.author))]),t._v(" "),t._m(0,!0)])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"preview-details"},[i("p",[this._v("★★★★☆")]),this._v(" "),i("p",[this._v("$14.95")])])}]};var n=a("VU/8")(s,o,!1,function(t){a("gr0L")},"data-v-6396baf4",null).exports,r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"sidebar"},[a("div",{staticClass:"category-title-wrapper"},[a("h2",[t._v("Books")])]),t._v(" "),a("ul",[a("li",[t._v("Fiction\n      "),a("ul",{staticClass:"sidebar-list"},[a("li",[a("a",{attrs:{href:""}},[t._v("Crime & Thrillers")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Novels & Stories")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Erotic Novels")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Sci-Fi")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Fantasy")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Horror")])])])]),t._v(" "),a("li",[t._v("Non-Fiction\n      "),a("ul",{staticClass:"sidebar-list"},[a("li",[a("a",{attrs:{href:""}},[t._v("History")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Psychology")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Philosophy")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Cooking")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Economics")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Mathematics")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Business")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Finance")])])])])]),t._v(" "),a("div",{staticClass:"category-title-wrapper"},[a("h2",[t._v("DVDs")])]),t._v(" "),a("ul",[a("li",[t._v("Fiction\n      "),a("ul",{staticClass:"sidebar-list"},[a("li",[a("a",{attrs:{href:""}},[t._v("Crime & Thrillers")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Documentaries")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("TV")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Sci-Fi")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Fantasy")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Horror")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Cartoons")])])])])])])}]};var l=a("VU/8")({data:function(){return{msg:"Welcome to Your Vue.js App"}}},r,!1,function(t){a("+Xhn")},"data-v-d90ba14a",null).exports,c={data:function(){return{bookName:"placeholder name",bookAuthor:"placeholder name",bookPrice:"$14.95",bookStock:"3",bookId:this.$route.params.id,details:""}},mounted:function(){this.pullDetails()},methods:{pullDetails:function(){var t=this;this.$http.get("/api/books/"+this.bookId).then(function(i){t.bookName=i.body.title,t.bookAuthor=i.body.author},function(t){console.log(t)})},addToCart:function(){window.localStorage.setItem("myBook",this.bookName)}}},v={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"detail"},[a("div",{staticClass:"detail-wrapper"},[a("div",{staticClass:"detail-content"},[a("div",{staticClass:"detail-text-content"},[a("h2",[t._v(t._s(t.bookName))]),t._v(" "),a("p",[t._v("by "+t._s(t.bookAuthor))]),t._v(" "),a("p",[t._v("\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          ")]),t._v(" "),a("p",[t._v("Price: "+t._s(t.bookPrice))]),t._v(" "),a("p",[t._v("Left in stock: "+t._s(t.bookStock))])]),t._v(" "),a("div",{staticClass:"detail-image-container"},[a("img",{attrs:{src:"/static/generic-book.jpg"}}),t._v(" "),a("div",{staticClass:"centered"},[a("p",{staticClass:"title"},[t._v(t._s(t.bookName))]),t._v(" "),a("p",[t._v(t._s(t.bookAuthor))])])])]),t._v(" "),a("button",{staticClass:"call-to-action",on:{click:function(i){return t.addToCart()}}},[t._v("Add to cart")])])])},staticRenderFns:[]};var u=a("VU/8")(c,v,!1,function(t){a("0DO4")},"data-v-77cb9e58",null).exports,d={data:function(){return{loggedIn:!1,email:"",error:""}},methods:{show:function(){this.$modal.show("modal-login")},signIn:function(){this.loggedIn=!0,this.$modal.hide("modal-login")},signOut:function(){this.loggedIn=!1},signUp:function(){this.$modal.show("modal-signup")},submitSignUp:function(){this.email?(console.log("email found"),this.loggedIn=!0,this.$modal.hide("modal-signup")):(this.error="error",console.log("no email found"))},navigateToCart:function(){var t=this;this.$router.push({path:"/cart"}).catch(function(i){t.$router.push({path:"/"})})}}},p={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"topbar"},[t._m(0),t._v(" "),a("input",{attrs:{type:"text",name:"fname"}}),t._v(" "),a("button",{attrs:{id:"button-search"}},[t._v("Search")]),t._v(" "),t.loggedIn?a("div",{attrs:{id:"login-message"}},[t._v("Welcome back, "+t._s(t.email))]):t._e(),t._v(" "),a("p",{attrs:{id:"clock"}},[t._v("3:43pm 23/06/2002")]),t._v(" "),a("div",{staticClass:"account"},[t.loggedIn?a("button",{attrs:{id:"logout"},on:{click:function(i){return t.signOut()}}},[t._v("Log out")]):a("button",{attrs:{id:"login"},on:{click:function(i){return t.show()}}},[t._v("Log in")]),t._v(" "),a("button",{staticClass:"call-to-action",attrs:{id:"signup"},on:{click:function(i){return t.signUp()}}},[t._v("Sign up")]),t._v(" "),a("button",{attrs:{id:"cart"},on:{click:function(i){return t.navigateToCart()}}},[a("img",{attrs:{id:"cart-img",src:"static/icon-cart.png"}})])]),t._v(" "),a("hr"),t._v(" "),a("modal",{attrs:{name:"modal-login"}},[a("div",{staticClass:"box"},[a("div",{staticClass:"box-part",attrs:{id:"bp-left"}},[a("div",{staticClass:"partition",attrs:{id:"partition-login"}},[a("div",{staticClass:"partition-title"},[t._v("LOG IN")]),t._v(" "),a("div",{staticClass:"partition-form"},[a("form",{attrs:{autocomplete:"false"}},[a("div",{staticClass:"autocomplete-fix"},[a("input",{attrs:{disabled:"",type:"password"}})]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"textfield-modal",attrs:{id:"n-email",type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(i){i.target.composing||(t.email=i.target.value)}}}),t._v(" "),a("input",{staticClass:"textfield-modal",attrs:{id:"n-password2",type:"password",placeholder:"Password"}})]),t._v(" "),a("div",{staticStyle:{"margin-top":"42px"}}),t._v(" "),a("div",{staticClass:"button-set"},[a("button",{attrs:{id:"goto-signin-btn"},on:{click:t.signIn}},[t._v("Sign In")])])])])]),t._v(" "),a("div",{staticClass:"box-part",attrs:{id:"bp-right"}},[a("div",{staticClass:"box-messages"})])])]),t._v(" "),a("modal",{attrs:{name:"modal-signup",height:"auto"}},[a("div",{staticClass:"box"},[a("div",{staticClass:"box-part",attrs:{id:"bp-left"}},[a("div",{staticClass:"partition",attrs:{id:"partition-register"}},[a("div",{staticClass:"partition-title"},[t._v("SIGN UP")]),t._v(" "),a("div",{staticClass:"partition-form"},[a("form",{attrs:{autocomplete:"false"}},[a("div",{staticClass:"autocomplete-fix"},[a("input",{attrs:{disabled:"",type:"password"}})]),t._v(" "),a("input",{staticClass:"textfield-modal",attrs:{id:"s-name",type:"text",placeholder:"Name"}}),t._v(" "),a("input",{staticClass:"textfield-modal",attrs:{id:"s-surname",type:"text",placeholder:"Surname"}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"textfield-modal",attrs:{id:"s-email",type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(i){i.target.composing||(t.email=i.target.value)}}}),t._v(" "),a("input",{staticClass:"textfield-modal",attrs:{id:"s-password2",type:"password",placeholder:"Password"}}),t._v(" "),a("input",{staticClass:"textfield-modal",attrs:{id:"s-company",type:"text",placeholder:"Company (optional)"}}),t._v(" "),a("br"),t._v(" "),a("label",{attrs:{id:"account-usage"}},[t._v("I will be using my account for:")]),a("br"),t._v(" "),a("input",{attrs:{type:"radio",id:"myself",name:"user-type",value:"myelf"}}),t._v(" "),a("label",{attrs:{for:"myself"}},[t._v("Myself")]),a("br"),t._v(" "),a("input",{attrs:{type:"radio",id:"business",name:"user-type",value:"business"}}),t._v(" "),a("label",{attrs:{for:"business"}},[t._v("My business")]),a("br"),t._v(" "),a("br"),t._v(" "),a("input",{attrs:{type:"checkbox",id:"marketing-agreement",name:"marketing-agreement"}}),t._v(" "),a("label",{attrs:{for:"marketing-agreement"}},[t._v("I would like to receive promotional emails")]),a("br"),t._v(" "),a("input",{attrs:{type:"checkbox",id:"privacy-policy",name:"privacy-policy"}}),t._v(" "),a("label",{attrs:{for:"privacy-policy"}},[t._v("I have read and accept the privacy policy")]),a("br")]),t._v(" "),t.error?a("div",{attrs:{id:"error-message"}},[t._v("\n              Please fill in all fields.\n            ")]):t._e(),t._v(" "),a("div",{staticStyle:{"margin-top":"42px"}}),t._v(" "),a("div",{staticClass:"button-set"},[a("button",{attrs:{id:"register-btn"},on:{click:function(i){return t.submitSignUp()}}},[t._v("\n                Register\n              ")])])])])]),t._v(" "),a("div",{staticClass:"box-part",attrs:{id:"bp-right"}},[a("div",{staticClass:"box-messages"})])])])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("a",{attrs:{href:"/"}},[i("img",{attrs:{id:"logo",src:"static/logo-horizontal.png"}})])}]};var m=a("VU/8")(d,p,!1,function(t){a("jGgE")},"data-v-012d4bc4",null).exports,_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"cart"},[i("h1",[this._v("Your Shopping Cart")]),this._v(" "),i("p",[this._v("Your shopping cart is empty. Go buy some books!")])])}]};var h=a("VU/8")({},_,!1,function(t){a("4PL9")},"data-v-397e4ec5",null).exports,f={name:"App",data:function(){return{}},methods:{},components:{"component-sidebar":l,"component-shop":n,"component-detail":u,"component-topbar":m,"component-cart":h}},g={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),a("hr"),t._v(" "),a("component-topbar"),t._v(" "),a("hr"),t._v(" "),a("div",{attrs:{id:"app-content"}},[a("div",{staticClass:"main-container"},[a("router-view",{attrs:{name:"componentShop"}}),t._v(" "),a("router-view",{attrs:{name:"componentDetail"}}),t._v(" "),a("router-view",{attrs:{name:"componentSidebar"}}),t._v(" "),a("router-view",{attrs:{name:"componentCart"}})],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"top-special-offer"}},[i("h3",[this._v("\n      SPECIAL OFFER: 20% OFF BOOKS WITH "),i("i",[this._v("WORDS")]),this._v(" IN THEM!!! LIMITED TIME\n      ONLY!\n    ")])])}]};var b=a("VU/8")(f,g,!1,function(t){a("xhG2")},null,null).exports,C=a("/ocq"),y=a("8+8L");e.a.use(C.a),e.a.use(y.a);var k=new C.a({routes:[{path:"/",components:{componentSidebar:l,componentShop:n}},{path:"/books/:id",components:{componentSidebar:l,componentDetail:u}},{path:"/cart",components:{componentCart:h}}],mode:"history"}),x=a("rifk"),w=a.n(x);e.a.config.productionTip=!1,e.a.use(w.a),new e.a({el:"#app",router:k,components:{App:b},template:"<App/>",render:function(t){return t(b)}})},gr0L:function(t,i){},jGgE:function(t,i){},xhG2:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.593b4804f58c47b55487.js.map