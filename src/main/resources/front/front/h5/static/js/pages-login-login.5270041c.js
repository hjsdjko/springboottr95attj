(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{3285:function(e,t,n){"use strict";n.r(t);var i=n("6263"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},6263:function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var r=i(n("3b8d")),a=i(n("2971")),o={data:function(){return{username:"",password:"",loginType:1,codes:[{num:1,color:"#000",rotate:"10deg",size:"16px"},{num:2,color:"#000",rotate:"10deg",size:"16px"},{num:3,color:"#000",rotate:"10deg",size:"16px"},{num:4,color:"#000",rotate:"10deg",size:"16px"}],options:["请选择登录用户类型"],optionsValues:["","qiuzhizhe","qiye"],index:0,roleNum:0}},onLoad:function(){var e=["请选择登录用户类型"],t=a.default.list();this.menuList=t;for(var n=0;n<this.menuList.length;n++)"是"==this.menuList[n].hasFrontLogin&&(e.push(this.menuList[n].roleName),this.roleNum++);1==this.roleNum&&(this.index=1),this.options=e,this.styleChange()},onShow:function(){},mounted:function(){},methods:{styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(e){uni.setStorageSync("loginTable",e),this.$utils.jump("../register/register")},onLoginTap:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.username){e.next=3;break}return this.$utils.msg("请输入用户名"),e.abrupt("return");case 3:if(this.password){e.next=6;break}return this.$utils.msg("请输入用户密码"),e.abrupt("return");case 6:if(this.optionsValues[this.index]){e.next=9;break}return this.$utils.msg("请选择登录用户类型"),e.abrupt("return");case 9:this.loginPost();case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),loginPost:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.login("".concat(this.optionsValues[this.index]),{username:this.username,password:this.password});case 2:return t=e.sent,uni.removeStorageSync("useridTag"),uni.setStorageSync("appToken",t.token),uni.setStorageSync("nickname",this.username),uni.setStorageSync("nowTable","".concat(this.optionsValues[this.index])),e.next=9,this.$api.session("".concat(this.optionsValues[this.index]));case 9:t=e.sent,t.data.touxiang?uni.setStorageSync("headportrait",t.data.touxiang):t.data.headportrait&&uni.setStorageSync("headportrait",t.data.headportrait),uni.setStorageSync("userSession",JSON.stringify(t.data)),uni.setStorageSync("appUserid",t.data.id),t.data.vip&&uni.setStorageSync("vip",t.data.vip),uni.setStorageSync("appRole","".concat(this.options[this.index])),this.$utils.tab("../index/index");case 16:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value}}};t.default=o},"7d4d":function(e,t,n){"use strict";var i=n("f14f"),r=n.n(i);r.a},"7fde":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-6b39a742]{height:100%}.content[data-v-6b39a742]{height:100%;box-sizing:border-box}',""]),e.exports=t},"8b91":function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"box",style:{padding:"24rpx",background:"url(http://codegen.caihongy.cn/20231129/b245d02724c846eb81ec48ed8ffd3ba3.png)",width:"100%",backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat",height:"100%"}},[n("v-uni-view",{style:{width:"100%",padding:"24rpx 24rpx",position:"relative",flexWrap:"wrap",display:"flex",height:"auto"}},[n("v-uni-image",{style:{width:"120rpx",margin:"0 auto 24rpx",borderRadius:"50%",display:"block",height:"120rpx",order:"1"},attrs:{src:"http://codegen.caihongy.cn/20231129/60e9e3dac4104b1a8fa52d7c3a726a45.webp",mode:"aspectFill"}}),1==e.loginType?n("v-uni-view",{staticClass:"uni-form-item uni-column",style:{width:"100%",margin:"0 0 0",flexWrap:"wrap",display:"flex",height:"auto",order:"2"}},[n("v-uni-view",{staticClass:"label",style:{width:"100%",lineHeight:"88rpx",fontSize:"26rpx",color:"#000",textAlign:"left",fontWeight:"bold"}},[e._v("账号：")]),n("v-uni-input",{staticClass:"uni-input",style:{border:"2rpx solid #aaa",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"0",flex:"1",background:"none",borderWidth:"0 0 2rpx",fontSize:"28rpx",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"请输入账号"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1):e._e(),1==e.loginType?n("v-uni-view",{staticClass:"uni-form-item uni-column",style:{width:"100%",margin:"0 0 0",flexWrap:"wrap",display:"flex",height:"auto",order:"2"}},[n("v-uni-view",{staticClass:"label",style:{width:"100%",lineHeight:"88rpx",fontSize:"26rpx",color:"#000",textAlign:"left",fontWeight:"bold"}},[e._v("密码：")]),n("v-uni-input",{staticClass:"uni-input",style:{border:"2rpx solid #aaa",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"0",flex:"1",background:"none",borderWidth:"0 0 2rpx",fontSize:"28rpx",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"请输入密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1):e._e(),e.roleNum>1?n("v-uni-view",{style:{width:"100%",margin:"0 0 24rpx 0",display:"block",height:"auto",order:"4"}},[n("v-uni-view",{staticClass:"label",style:{width:"100%",lineHeight:"88rpx",fontSize:"26rpx",color:"#000",textAlign:"left",fontWeight:"bold"}},[e._v("用户类型：")]),n("v-uni-picker",{style:{width:"100%",lineHeight:"48rpx",fontSize:"24rpx",textDecoration:"underline",color:"#424EF0",textAlign:"left"},attrs:{value:e.index,range:e.options},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.optionsChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-picker-type"},[e._v(e._s(e.options[e.index]))])],1)],1):e._e(),1==e.loginType?n("v-uni-button",{staticClass:"btn-submit",style:{border:"0",padding:"0px",margin:"24rpx auto ",color:"rgb(255, 255, 255)",borderRadius:"8rpx",background:"url(http://codegen.caihongy.cn/20231129/e83626e1e97e489099693ee9348afd12.png)",width:"120rpx",lineHeight:"120rpx",fontSize:"0",backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat",fontWeight:"bold",height:"120rpx",order:"7"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onLoginTap.apply(void 0,arguments)}}},[e._v("→")]):e._e(),2==e.loginType?n("v-uni-button",{staticClass:"btn-submit",style:{border:"0",padding:"0px",margin:"24rpx auto ",color:"rgb(255, 255, 255)",borderRadius:"8rpx",background:"url(http://codegen.caihongy.cn/20231129/e83626e1e97e489099693ee9348afd12.png)",width:"120rpx",lineHeight:"120rpx",fontSize:"0",backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat",fontWeight:"bold",height:"120rpx",order:"7"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onFaceLoginTap.apply(void 0,arguments)}}},[e._v("人脸识别登录")]):e._e(),n("v-uni-view",{staticClass:"links",style:{margin:"0 0 24rpx 0",flexWrap:"wrap",display:"flex",width:"100%",justifyContent:"flex-end",height:"auto",order:"6"}},[n("v-uni-view",{staticClass:"link-highlight",style:{color:"#9E9E9E",padding:"0 12rpx",fontSize:"24rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onRegisterTap("qiuzhizhe")}}},[e._v("注册求职者")]),n("v-uni-view",{staticClass:"link-highlight",style:{color:"#9E9E9E",padding:"0 12rpx",fontSize:"24rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onRegisterTap("qiye")}}},[e._v("注册企业")])],1),n("v-uni-view",{staticClass:"idea1",style:{width:"100%",background:"red",display:"none",height:"80rpx"}},[e._v("idea1")]),n("v-uni-view",{staticClass:"idea2",style:{width:"100%",background:"red",display:"none",height:"80rpx"}},[e._v("idea2")]),n("v-uni-view",{staticClass:"idea3",style:{width:"100%",background:"red",display:"none",height:"80rpx"}},[e._v("idea3")])],1)],1)],1)},a=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))},a86a:function(e,t,n){"use strict";n.r(t);var i=n("8b91"),r=n("3285");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("7d4d");var o,s=n("f0c5"),u=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"6b39a742",null,!1,i["a"],o);t["default"]=u.exports},f14f:function(e,t,n){var i=n("7fde");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=n("4f06").default;r("4cba1c22",i,!0,{sourceMap:!1,shadowMode:!1})}}]);