(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-zaixianzixun-add-or-update"],{1736:function(e,i,t){var r=t("24fb");i=r(!1),i.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-58ba976f]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=i},"1d37":function(e,i,t){"use strict";t.r(i);var r=t("3f65"),n=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(i,e,(function(){return r[e]}))}(a);i["default"]=n.a},"38ea":function(e,i,t){var r=t("1736");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=t("4f06").default;n("48cc45c2",r,!0,{sourceMap:!1,shadowMode:!1})},"3f65":function(e,i,t){"use strict";var r=t("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,t("a481"),t("f559"),t("ac6a"),t("28a5"),t("c5f6"),t("96cf");var n=r(t("3b8d")),a=r(t("e2b1")),o=r(t("064f")),s=r(t("bd56")),u={data:function(){return{cross:"",ruleForm:{zixunbiaoti:"",zixunwenti:"",zixunshijian:"",qiyezhanghao:"",qiyemingcheng:"",zhanghao:"",xingming:"",touxiang:"",shhf:""},user:{},ro:{zixunbiaoti:!1,zixunwenti:!1,zixunshijian:!1,qiyezhanghao:!1,qiyemingcheng:!1,zhanghao:!1,xingming:!1,touxiang:!1,shhf:!1}}},components:{wPicker:a.default,xiaEditor:o.default,multipleSelect:s.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){var t,r,n,a,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.zixunshijian=this.$utils.getCurDateTime(),t=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(t);case 4:if(r=e.sent,this.user=r.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ro.zhanghao=!0,this.ruleForm.xingming=this.user.xingming,this.ro.xingming=!0,this.ruleForm.touxiang=this.user.touxiang,this.ro.touxiang=!0,this.ruleForm.userid=uni.getStorageSync("appUserid"),i.refid&&(this.ruleForm.refid=Number(i.refid),this.ruleForm.nickname=uni.getStorageSync("nickname")),!i.id){e.next=20;break}return this.ruleForm.id=i.id,e.next=18,this.$api.info("zaixianzixun",this.ruleForm.id);case 18:r=e.sent,this.ruleForm=r.data;case 20:if(this.cross=i.cross,!i.cross){e.next=60;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 24:if((e.t1=e.t0()).done){e.next=60;break}if(a=e.t1.value,"zixunbiaoti"!=a){e.next=30;break}return this.ruleForm.zixunbiaoti=n[a],this.ro.zixunbiaoti=!0,e.abrupt("continue",24);case 30:if("zixunwenti"!=a){e.next=34;break}return this.ruleForm.zixunwenti=n[a],this.ro.zixunwenti=!0,e.abrupt("continue",24);case 34:if("zixunshijian"!=a){e.next=38;break}return this.ruleForm.zixunshijian=n[a],this.ro.zixunshijian=!0,e.abrupt("continue",24);case 38:if("qiyezhanghao"!=a){e.next=42;break}return this.ruleForm.qiyezhanghao=n[a],this.ro.qiyezhanghao=!0,e.abrupt("continue",24);case 42:if("qiyemingcheng"!=a){e.next=46;break}return this.ruleForm.qiyemingcheng=n[a],this.ro.qiyemingcheng=!0,e.abrupt("continue",24);case 46:if("zhanghao"!=a){e.next=50;break}return this.ruleForm.zhanghao=n[a],this.ro.zhanghao=!0,e.abrupt("continue",24);case 50:if("xingming"!=a){e.next=54;break}return this.ruleForm.xingming=n[a],this.ro.xingming=!0,e.abrupt("continue",24);case 54:if("touxiang"!=a){e.next=58;break}return this.ruleForm.touxiang=n[a].split(",")[0],this.ro.touxiang=!0,e.abrupt("continue",24);case 58:e.next=24;break;case 60:this.styleChange(),this.$forceUpdate(),uni.getStorageSync("raffleType")&&null!=uni.getStorageSync("raffleType")&&(uni.removeStorageSync("raffleType"),setTimeout((function(){o.onSubmitTap()}),300));case 63:case"end":return e.stop()}}),e,this)})));function i(i){return e.apply(this,arguments)}return i}(),methods:{zixunwentiChange:function(e){this.ruleForm.zixunwenti=e},styleChange:function(){this.$nextTick((function(){}))},zixunshijianConfirm:function(e){console.log(e),this.ruleForm.zixunshijian=e.result,this.$forceUpdate()},touxiangTap:function(){var e=this;this.$api.upload((function(i){e.ruleForm.touxiang="upload/"+i.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var i,t,r,n,a,o,s,u,l,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.zixunwenti){e.next=3;break}return this.$utils.msg("咨询问题不能为空"),e.abrupt("return");case 3:if(!this.cross){e.next=20;break}if(uni.setStorageSync("crossCleanType",!0),a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){e.next=20;break}if(i||(i=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=16;break}for(s in i)s==a&&(i[s]=o);return u=uni.getStorageSync("crossTable"),e.next=14,this.$api.update("".concat(u),i);case 14:e.next=20;break;case 16:t=Number(uni.getStorageSync("appUserid")),r=i["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 20:if(!r||!t){e.next=43;break}return this.ruleForm.crossuserid=t,this.ruleForm.crossrefid=r,l={page:1,limit:10,crossuserid:t,crossrefid:r},e.next=26,this.$api.list("zaixianzixun",l);case 26:if(c=e.sent,!(c.data.total>=n)){e.next=33;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 33:if(!this.ruleForm.id){e.next=38;break}return e.next=36,this.$api.update("zaixianzixun",this.ruleForm);case 36:e.next=40;break;case 38:return e.next=40,this.$api.add("zaixianzixun",this.ruleForm);case 40:this.$utils.msgBack("提交成功");case 41:e.next=51;break;case 43:if(!this.ruleForm.id){e.next=48;break}return e.next=46,this.$api.update("zaixianzixun",this.ruleForm);case 46:e.next=50;break;case 48:return e.next=50,this.$api.add("zaixianzixun",this.ruleForm);case 50:this.$utils.msgBack("提交成功");case 51:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var i=new Date,t=i.getFullYear(),r=i.getMonth()+1,n=i.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,n=n>9?n:"0"+n,"".concat(t,"-").concat(r,"-").concat(n)},toggleTab:function(e){if(this.ro[e])return!1;this.$refs[e].show()}}};i.default=u},"6e77":function(e,i,t){"use strict";var r={"xia-editor":t("064f").default,"w-picker":t("e2b1").default},n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{style:{width:"100%",padding:"0",position:"relative",background:"#fff",height:"100%"}},[t("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"24rpx",background:"#fff",display:"block",height:"auto"}},[t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("咨询标题")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.zixunbiaoti,placeholder:"咨询标题",type:"text"},model:{value:e.ruleForm.zixunbiaoti,callback:function(i){e.$set(e.ruleForm,"zixunbiaoti",i)},expression:"ruleForm.zixunbiaoti"}})],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("咨询时间")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.zixunshijian,placeholder:"咨询时间"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.toggleTab("zixunshijian")}},model:{value:e.ruleForm.zixunshijian,callback:function(i){e.$set(e.ruleForm,"zixunshijian",i)},expression:"ruleForm.zixunshijian"}})],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("企业账号")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.qiyezhanghao,placeholder:"企业账号",type:"text"},model:{value:e.ruleForm.qiyezhanghao,callback:function(i){e.$set(e.ruleForm,"qiyezhanghao",i)},expression:"ruleForm.qiyezhanghao"}})],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("企业名称")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.qiyemingcheng,placeholder:"企业名称",type:"text"},model:{value:e.ruleForm.qiyemingcheng,callback:function(i){e.$set(e.ruleForm,"qiyemingcheng",i)},expression:"ruleForm.qiyemingcheng"}})],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("账号")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.zhanghao,placeholder:"账号",type:"text"},model:{value:e.ruleForm.zhanghao,callback:function(i){e.$set(e.ruleForm,"zhanghao",i)},expression:"ruleForm.zhanghao"}})],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("姓名")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.xingming,placeholder:"姓名",type:"text"},model:{value:e.ruleForm.xingming,callback:function(i){e.$set(e.ruleForm,"xingming",i)},expression:"ruleForm.xingming"}})],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.touxiangTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("头像")]),e.ruleForm.touxiang?t("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:e.baseUrl+e.ruleForm.touxiang.split(",")[0],mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0 20rpx 0 0",color:"#333",textAlign:"right",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",fontWeight:"500"}},[e._v("咨询问题")]),t("xia-editor",{ref:"editor",style:{minHeight:"500rpx",border:"2rpx solid #efefef",width:"calc(100% - 160rpx)",padding:"20rpx",height:"auto"},attrs:{placeholder:"咨询问题"},on:{editorChange:function(i){arguments[0]=i=e.$handleEvent(i),e.zixunwentiChange.apply(void 0,arguments)}},model:{value:e.ruleForm.zixunwenti,callback:function(i){e.$set(e.ruleForm,"zixunwenti",i)},expression:"ruleForm.zixunwenti"}})],1),t("v-uni-view",{staticClass:"btn",style:{width:"100%",flexWrap:"wrap",justifyContent:"space-between",display:"flex",height:"auto"}},[t("v-uni-button",{staticClass:"bg-red",style:{border:"0",padding:"0px",margin:"0 auto 20rpx",color:"rgb(255, 255, 255)",borderRadius:"10rpx",background:"#4753F2",width:"70%",lineHeight:"80rpx",fontSize:"28rpx",height:"80rpx"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),t("w-picker",{ref:"zixunshijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(i){arguments[0]=i=e.$handleEvent(i),e.zixunshijianConfirm.apply(void 0,arguments)}}})],1)],1)},a=[];t.d(i,"b",(function(){return n})),t.d(i,"c",(function(){return a})),t.d(i,"a",(function(){return r}))},db92:function(e,i,t){"use strict";t.r(i);var r=t("6e77"),n=t("1d37");for(var a in n)"default"!==a&&function(e){t.d(i,e,(function(){return n[e]}))}(a);t("dc5f");var o,s=t("f0c5"),u=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"58ba976f",null,!1,r["a"],o);i["default"]=u.exports},dc5f:function(e,i,t){"use strict";var r=t("38ea"),n=t.n(r);n.a}}]);