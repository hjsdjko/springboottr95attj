(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-qiyegonggao-add-or-update"],{"60cc":function(e,i,t){"use strict";var r=t("87c7"),n=t.n(r);n.a},"87c7":function(e,i,t){var r=t("886d");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=t("4f06").default;n("072f964a",r,!0,{sourceMap:!1,shadowMode:!1})},"886d":function(e,i,t){var r=t("24fb");i=r(!1),i.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-7f32e472]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=i},"8d6a":function(e,i,t){"use strict";var r=t("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,t("a481"),t("f559"),t("ac6a"),t("28a5"),t("c5f6"),t("96cf");var n=r(t("3b8d")),a=r(t("e2b1")),o=r(t("064f")),s=r(t("bd56")),u={data:function(){return{cross:"",ruleForm:{biaoti:"",jianjie:"",qiyemingcheng:"",fabushijian:"",fengmian:"",neirong:"",qiyezhanghao:"",shhf:"",storeupnum:""},qiyemingchengOptions:[],qiyemingchengIndex:0,user:{},ro:{biaoti:!1,jianjie:!1,qiyemingcheng:!1,fabushijian:!1,fengmian:!1,neirong:!1,qiyezhanghao:!1,sfsh:!1,shhf:!1,clicknum:!1,storeupnum:!1}}},components:{wPicker:a.default,xiaEditor:o.default,multipleSelect:s.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){var t,r,n,a,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.fabushijian=this.$utils.getCurDate(),t=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(t);case 4:return r=e.sent,this.user=r.data,this.ruleForm.qiyemingcheng=this.user.qiyemingcheng,this.ro.qiyemingcheng=!0,this.ruleForm.qiyezhanghao=this.user.qiyezhanghao,this.ro.qiyezhanghao=!0,e.next=12,this.$api.option("qiye","qiyemingcheng",{});case 12:if(r=e.sent,this.qiyemingchengOptions=r.data,this.qiyemingchengOptions.unshift("请选择企业名称"),this.ruleForm.userid=uni.getStorageSync("appUserid"),i.refid&&(this.ruleForm.refid=Number(i.refid),this.ruleForm.nickname=uni.getStorageSync("nickname")),!i.id){e.next=23;break}return this.ruleForm.id=i.id,e.next=21,this.$api.info("qiyegonggao",this.ruleForm.id);case 21:r=e.sent,this.ruleForm=r.data;case 23:if(this.cross=i.cross,!i.cross){e.next=67;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 27:if((e.t1=e.t0()).done){e.next=67;break}if(a=e.t1.value,"biaoti"!=a){e.next=33;break}return this.ruleForm.biaoti=n[a],this.ro.biaoti=!0,e.abrupt("continue",27);case 33:if("jianjie"!=a){e.next=37;break}return this.ruleForm.jianjie=n[a],this.ro.jianjie=!0,e.abrupt("continue",27);case 37:if("qiyemingcheng"!=a){e.next=41;break}return this.ruleForm.qiyemingcheng=n[a],this.ro.qiyemingcheng=!0,e.abrupt("continue",27);case 41:if("fabushijian"!=a){e.next=45;break}return this.ruleForm.fabushijian=n[a],this.ro.fabushijian=!0,e.abrupt("continue",27);case 45:if("fengmian"!=a){e.next=49;break}return this.ruleForm.fengmian=n[a].split(",")[0],this.ro.fengmian=!0,e.abrupt("continue",27);case 49:if("neirong"!=a){e.next=53;break}return this.ruleForm.neirong=n[a],this.ro.neirong=!0,e.abrupt("continue",27);case 53:if("qiyezhanghao"!=a){e.next=57;break}return this.ruleForm.qiyezhanghao=n[a],this.ro.qiyezhanghao=!0,e.abrupt("continue",27);case 57:if("clicknum"!=a){e.next=61;break}return this.ruleForm.clicknum=n[a],this.ro.clicknum=!0,e.abrupt("continue",27);case 61:if("storeupnum"!=a){e.next=65;break}return this.ruleForm.storeupnum=n[a],this.ro.storeupnum=!0,e.abrupt("continue",27);case 65:e.next=27;break;case 67:this.styleChange(),this.$forceUpdate(),uni.getStorageSync("raffleType")&&null!=uni.getStorageSync("raffleType")&&(uni.removeStorageSync("raffleType"),setTimeout((function(){o.onSubmitTap()}),300));case 70:case"end":return e.stop()}}),e,this)})));function i(i){return e.apply(this,arguments)}return i}(),methods:{neirongChange:function(e){this.ruleForm.neirong=e},styleChange:function(){this.$nextTick((function(){}))},fabushijianChange:function(e){this.ruleForm.fabushijian=e.target.value,this.$forceUpdate()},qiyemingchengChange:function(e){this.qiyemingchengIndex=e.target.value,this.ruleForm.qiyemingcheng=this.qiyemingchengOptions[this.qiyemingchengIndex]},fengmianTap:function(){var e=this;this.$api.upload((function(i){e.ruleForm.fengmian="upload/"+i.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var i,t,r,n,a,o,s,u,l,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.biaoti){e.next=3;break}return this.$utils.msg("标题不能为空"),e.abrupt("return");case 3:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){e.next=6;break}return this.$utils.msg("点击次数应输入整数"),e.abrupt("return");case 6:if(!this.ruleForm.storeupnum||this.$validate.isIntNumer(this.ruleForm.storeupnum)){e.next=9;break}return this.$utils.msg("收藏数应输入整数"),e.abrupt("return");case 9:if(!this.cross){e.next=26;break}if(uni.setStorageSync("crossCleanType",!0),a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){e.next=26;break}if(i||(i=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=22;break}for(s in i)s==a&&(i[s]=o);return u=uni.getStorageSync("crossTable"),e.next=20,this.$api.update("".concat(u),i);case 20:e.next=26;break;case 22:t=Number(uni.getStorageSync("appUserid")),r=i["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 26:if(!r||!t){e.next=49;break}return this.ruleForm.crossuserid=t,this.ruleForm.crossrefid=r,l={page:1,limit:10,crossuserid:t,crossrefid:r},e.next=32,this.$api.list("qiyegonggao",l);case 32:if(c=e.sent,!(c.data.total>=n)){e.next=39;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 39:if(!this.ruleForm.id){e.next=44;break}return e.next=42,this.$api.update("qiyegonggao",this.ruleForm);case 42:e.next=46;break;case 44:return e.next=46,this.$api.add("qiyegonggao",this.ruleForm);case 46:this.$utils.msgBack("提交成功");case 47:e.next=57;break;case 49:if(!this.ruleForm.id){e.next=54;break}return e.next=52,this.$api.update("qiyegonggao",this.ruleForm);case 52:e.next=56;break;case 54:return e.next=56,this.$api.add("qiyegonggao",this.ruleForm);case 56:this.$utils.msgBack("提交成功");case 57:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var i=new Date,t=i.getFullYear(),r=i.getMonth()+1,n=i.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,n=n>9?n:"0"+n,"".concat(t,"-").concat(r,"-").concat(n)},toggleTab:function(e){if(this.ro[e])return!1;this.$refs[e].show()}}};i.default=u},b0b8:function(e,i,t){"use strict";t.r(i);var r=t("cdf4"),n=t("c921");for(var a in n)"default"!==a&&function(e){t.d(i,e,(function(){return n[e]}))}(a);t("60cc");var o,s=t("f0c5"),u=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"7f32e472",null,!1,r["a"],o);i["default"]=u.exports},c921:function(e,i,t){"use strict";t.r(i);var r=t("8d6a"),n=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(i,e,(function(){return r[e]}))}(a);i["default"]=n.a},cdf4:function(e,i,t){"use strict";var r={"xia-editor":t("064f").default},n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{style:{width:"100%",padding:"0",position:"relative",background:"#fff",height:"100%"}},[t("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"24rpx",background:"#fff",display:"block",height:"auto"}},[t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("标题")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.biaoti,placeholder:"标题",type:"text"},model:{value:e.ruleForm.biaoti,callback:function(i){e.$set(e.ruleForm,"biaoti",i)},expression:"ruleForm.biaoti"}})],1),t("v-uni-view",{staticClass:" select",style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("企业名称")]),t("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{disabled:e.ro.qiyemingcheng,value:e.qiyemingchengIndex,range:e.qiyemingchengOptions},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.qiyemingchengChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"26rpx",color:"#4753F2"}},[e._v(e._s(e.ruleForm.qiyemingcheng?e.ruleForm.qiyemingcheng:"请选择企业名称"))])],1)],1),t("v-uni-view",{staticClass:" select",style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("发布时间")]),t("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{disabled:e.ro.fabushijian,mode:"date",value:e.ruleForm.fabushijian},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.fabushijianChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"26rpx",color:"#4753F2"}},[e._v(e._s(e.ruleForm.fabushijian?e.ruleForm.fabushijian:"请选择发布时间"))])],1)],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.fengmianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("封面")]),e.ruleForm.fengmian?t("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:e.baseUrl+e.ruleForm.fengmian.split(",")[0],mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("企业账号")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.qiyezhanghao,placeholder:"企业账号",type:"text"},model:{value:e.ruleForm.qiyezhanghao,callback:function(i){e.$set(e.ruleForm,"qiyezhanghao",i)},expression:"ruleForm.qiyezhanghao"}})],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("简介")]),t("v-uni-textarea",{style:{border:"0",padding:"24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"400rpx"},attrs:{placeholder:"简介"},model:{value:e.ruleForm.jianjie,callback:function(i){e.$set(e.ruleForm,"jianjie",i)},expression:"ruleForm.jianjie"}})],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0 20rpx 0 0",color:"#333",textAlign:"right",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",fontWeight:"500"}},[e._v("内容")]),t("xia-editor",{ref:"editor",style:{minHeight:"500rpx",border:"2rpx solid #efefef",width:"calc(100% - 160rpx)",padding:"20rpx",height:"auto"},attrs:{placeholder:"内容"},on:{editorChange:function(i){arguments[0]=i=e.$handleEvent(i),e.neirongChange.apply(void 0,arguments)}},model:{value:e.ruleForm.neirong,callback:function(i){e.$set(e.ruleForm,"neirong",i)},expression:"ruleForm.neirong"}})],1),t("v-uni-view",{staticClass:"btn",style:{width:"100%",flexWrap:"wrap",justifyContent:"space-between",display:"flex",height:"auto"}},[t("v-uni-button",{staticClass:"bg-red",style:{border:"0",padding:"0px",margin:"0 auto 20rpx",color:"rgb(255, 255, 255)",borderRadius:"10rpx",background:"#4753F2",width:"70%",lineHeight:"80rpx",fontSize:"28rpx",height:"80rpx"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)],1)},a=[];t.d(i,"b",(function(){return n})),t.d(i,"c",(function(){return a})),t.d(i,"a",(function(){return r}))}}]);