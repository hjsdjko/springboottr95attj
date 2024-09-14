<template>
<view class="content">
	<view :style='{"flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20231129/cb9d27e196cc4dbfaae5eb6243153f59.png)","display":"flex","width":"100%","backgroundSize":"100%","backgroundPosition":"top center","backgroundRepeat":"no-repeat","height":"100%"}'>
		<view class="list-swiper-4" :style='{"width":"calc(100% - 40rpx)","margin":"0 auto","position":"relative","height":"360rpx","order":"2"}' @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
			<view :style='{"overflow":"hidden","top":"0%","borderRadius":"20rpx","left":"0%","background":"#fff","width":"100%","position":"absolute","height":"360rpx"}' class="item animate__animated" :class="prevNumList4 == index  ? 'animate__backOutRight' : (numList4 == index  ? 'animate__bounce' : '')" v-for="(swiper,index) in swiperList" :key="index" v-if="numList4 == index || prevNumList4 == index">
				<image :style='{"width":"100%","objectFit":"cover","borderRadius":"10rpx","display":"block","height":"360rpx"}' mode="aspectFill" :src="baseUrl+swiper.img" @tap="onSwiperTap(swiper)"></image>
				<view :style='{"padding":"8rpx 20rpx","margin":"-20rpx 0 0 0","transform":"translate3d(-50%, -50%, 0)","top":"50%","color":"#000","left":"50%","background":"rgba(255, 255, 255, 0.3)","display":"none","lineHeight":"1.5","fontSize":"40rpx","position":"absolute"}'>{{ swiper.title }}</view>
			</view>
			<view class="animate__navigation" :style='{"alignItems":"center","left":"0%","bottom":"0%","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute","justifyContent":"center","height":"40rpx"}'>
				<block v-for="(swiper,index) in swiperList" :key="index">
					<text class="navigation-item" v-if="numList4 == index" :style='{"width":"16rpx","margin":"0 4rpx","borderRadius":"100%","background":"#424EF0","height":"16rpx"}'></text>
					<text class="navigation-item" v-if="numList4 != index" :style='{"width":"16rpx","margin":"0 4rpx","borderRadius":"100%","background":"#fff","height":"16rpx"}'></text>
				</block>
			</view>
		</view>
		<!-- menu -->
		<view v-if="true" class="menu" :style='{"padding":"0 0 20rpx","margin":"0","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","justifyContent":"space-between","height":"auto","order":"3"}'>
            <block v-for="(item,index1) in menuList" v-bind:key="item.roleName">
                <block v-if="index1==0" v-bind:key="index" v-for=" (menu,index) in item.frontMenu">
                    <block v-bind:key="sort" v-for=" (child,sort) in menu.child">
                        <block v-bind:key="sort2" v-for=" (button,sort2) in child.buttons">
                            <view :style='{"width":"23%","padding":"12rpx 0 0","margin":"10rpx 0 0","height":"auto"}' class="menu-list" v-if="button=='查看' && child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' " @tap="onPageTap2('../'+child.tableName+'/list')">
                                <view class="iconarr" :class="child.appFrontIcon" :style='{"padding":"0","margin":"0px auto","color":"#fff","borderRadius":"10rpx","textAlign":"center","background":"linear-gradient(180deg, #B7F0E6 0%, #4FBDA6 100%)","display":"block","width":"90rpx","lineHeight":"90rpx","fontSize":"64rpx","height":"90rpx"}'></view>
                                <view :style='{"padding":"0","margin":"12rpx auto 0","color":"#333","textAlign":"center","width":"100%","lineHeight":"32rpx","fontSize":"26rpx"}'>{{child.menu.split("列表")[0]}}</view>
                            </view>
                        </block>
                    </block>
                </block>
            </block>
		</view>
		<!-- menu -->
		<!-- 商品推荐 -->
		<view class="listBox recommend" :style='{"border":"2rpx solid #F5F7FA","margin":"0 0 20rpx","background":"#fff","borderWidth":"10rpx 0 0","order":"5"}'>
			<view class="title" :style='{"width":"100%","padding":"20rpx 24rpx","margin":"0","background":"none"}'>
				<view :style='{"border":"2rpx solid #424EF0","padding":"0 0 0 10rpx","color":"#424EF0","borderRadius":"4rpx 0 0 4rpx","borderWidth":"0 0 0 10rpx","fontSize":"32rpx","lineHeight":"48rpx","fontWeight":"bold"}'>招聘职位推荐</view>
			</view>
			<!-- 样式2 -->
			<view class="list-box style2" :style='{"width":"100%","padding":"24rpx","height":"auto"}'>
			  <view class="tabView" :style='{"width":"100%","flexWrap":"wrap","justifyContent":"flex-start","display":"flex"}'>
			    <view class="tab" :class="zhaopinzhiweiIndex2 == index ?'tabActive':''" v-for="(item,index) in zhaopinzhiweiCateList2" :key="index" @click="recommendTabClick2(index,'zhaopinzhiwei')">
			      <text class="icon iconfont icon-zhankai19" :style='{"margin":"0 4rpx 0 0","lineHeight":"68rpx","fontSize":"26rpx","color":"inherit","display":"none"}'></text>
			      <text :style='{"color":"inherit","lineHeight":"68rpx","fontSize":"26rpx"}'>{{item.qiyemingcheng}}</text>
			    </view>
			  </view>
			  <view :style='{"padding":"24rpx 0","margin":"0","flexWrap":"wrap","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
			    <view @tap="onDetailTap('zhaopinzhiwei',product.id)" v-for="(product,index) in zhaopinzhiweilist" :key="index" class="list-item" :style='{"boxShadow":"none","margin":"0 0 20rpx","backgroundColor":"#fff","flexWrap":"wrap","display":"flex","width":"48%","height":"auto"}'>
					<view :style='{"padding":"4rpx 20rpx","color":"#000","width":"100%","lineHeight":"1.4","fontSize":"28rpx","fontWeight":"bold","order":"2"}' class="list-item-title ">{{product.zhaopinzhiwei}}</view>
					<image :style='{"padding":"0","margin":"0","objectFit":"cover","borderRadius":"10rpx","display":"block","width":"100%","height":"300rpx","order":"1"}' class="list-item-image" mode="aspectFill" v-if="product.tupian.substring(0,4)=='http'" :src="product.tupian"></image>
					<image :style='{"padding":"0","margin":"0","objectFit":"cover","borderRadius":"10rpx","display":"block","width":"100%","height":"300rpx","order":"1"}' class="list-item-image" mode="aspectFill" v-else :src="product.tupian?baseUrl+product.tupian.split(',')[0]:''"></image>
				  <view :style='{"padding":"0 20rpx","display":"none"}'>
			        <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#666"}'></text>
			        <text :style='{"color":"#666","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.addtime}}</text>
			      </view>
			      <view :style='{"padding":"0 20rpx","display":"none"}'>
			        <text class="icon iconfont icon-geren16" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#666"}'></text>
			        <text :style='{"color":"#666","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.qiyezhanghao}}</text>
			      </view>
			      <view :style='{"width":"calc(100% / 3)","padding":"8rpx 0 0","textAlign":"center","order":"4"}'>
			        <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#666"}'></text>
			        <text :style='{"color":"#666","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.storeupnum}}</text>
			      </view>
			      <view :style='{"width":"calc(100% / 3)","padding":"8rpx 0 0","textAlign":"center","order":"5"}'>
			        <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#666"}'></text>
			        <text :style='{"color":"#666","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.clicknum}}</text>
			      </view>
			    </view>
			  </view>
			</view>
		</view>
		<view class="listBox recommend" :style='{"border":"2rpx solid #F5F7FA","margin":"0 0 20rpx","background":"#fff","borderWidth":"10rpx 0 0","order":"5"}'>
			<view class="title" :style='{"width":"100%","padding":"20rpx 24rpx","margin":"0","background":"none"}'>
				<view :style='{"border":"2rpx solid #424EF0","padding":"0 0 0 10rpx","color":"#424EF0","borderRadius":"4rpx 0 0 4rpx","borderWidth":"0 0 0 10rpx","fontSize":"32rpx","lineHeight":"48rpx","fontWeight":"bold"}'>宣讲会推荐</view>
			</view>
			<!-- 样式2 -->
			<view class="list-box style2" :style='{"width":"100%","padding":"24rpx","height":"auto"}'>
			  <view class="tabView" :style='{"width":"100%","flexWrap":"wrap","justifyContent":"flex-start","display":"flex"}'>
			    <view class="tab" :class="xuanjianghuiIndex2 == index ?'tabActive':''" v-for="(item,index) in xuanjianghuiCateList2" :key="index" @click="recommendTabClick2(index,'xuanjianghui')">
			      <text class="icon iconfont icon-zhankai19" :style='{"margin":"0 4rpx 0 0","lineHeight":"68rpx","fontSize":"26rpx","color":"inherit","display":"none"}'></text>
			      <text :style='{"color":"inherit","lineHeight":"68rpx","fontSize":"26rpx"}'>{{item.qiyemingcheng}}</text>
			    </view>
			  </view>
			  <view :style='{"padding":"24rpx 0","margin":"0","flexWrap":"wrap","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
			    <view @tap="onDetailTap('xuanjianghui',product.id)" v-for="(product,index) in xuanjianghuilist" :key="index" class="list-item" :style='{"boxShadow":"none","margin":"0 0 20rpx","backgroundColor":"#fff","flexWrap":"wrap","display":"flex","width":"48%","height":"auto"}'>
					<view :style='{"padding":"4rpx 20rpx","color":"#000","width":"100%","lineHeight":"1.4","fontSize":"28rpx","fontWeight":"bold","order":"2"}' class="list-item-title ">{{product.qiyemingcheng}}</view>
					<view :style='{"padding":"4rpx 20rpx","color":"#000","width":"100%","lineHeight":"1.4","fontSize":"28rpx","fontWeight":"bold","order":"2"}' class="list-item-title ">{{product.zaizhaozhiwei}}</view>
					<image :style='{"padding":"0","margin":"0","objectFit":"cover","borderRadius":"10rpx","display":"block","width":"100%","height":"300rpx","order":"1"}' class="list-item-image" mode="aspectFill" v-if="product.fengmian.substring(0,4)=='http'" :src="product.fengmian"></image>
					<image :style='{"padding":"0","margin":"0","objectFit":"cover","borderRadius":"10rpx","display":"block","width":"100%","height":"300rpx","order":"1"}' class="list-item-image" mode="aspectFill" v-else :src="product.fengmian?baseUrl+product.fengmian.split(',')[0]:''"></image>
				  <view :style='{"padding":"0 20rpx","display":"none"}'>
			        <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#666"}'></text>
			        <text :style='{"color":"#666","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.addtime}}</text>
			      </view>
			      <view :style='{"padding":"0 20rpx","display":"none"}'>
			        <text class="icon iconfont icon-geren16" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#666"}'></text>
			        <text :style='{"color":"#666","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.qiyezhanghao}}</text>
			      </view>
			      <view :style='{"width":"calc(100% / 3)","padding":"8rpx 0 0","textAlign":"center","order":"4"}'>
			        <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#666"}'></text>
			        <text :style='{"color":"#666","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.storeupnum}}</text>
			      </view>
			      <view :style='{"width":"calc(100% / 3)","padding":"8rpx 0 0","textAlign":"center","order":"5"}'>
			        <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#666"}'></text>
			        <text :style='{"color":"#666","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.clicknum}}</text>
			      </view>
			    </view>
			  </view>
			</view>
		</view>
		<!-- 商品推荐 -->
		
		<!-- 商品列表 -->
		<view class="listBox list" :style='{"border":"2rpx solid #F5F7FA","width":"100%","margin":"0 0 20rpx","background":"#fff","borderWidth":"10rpx 0 0","order":"6"}'>
			<view class="title" :style='{"width":"100%","padding":"20rpx 24rpx","margin":"0","background":"none","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"border":"2rpx solid #424EF0","padding":"0 0 0 10rpx","color":"#424EF0","borderRadius":"4rpx 0 0 4rpx","borderWidth":"0 0 0 10rpx","fontSize":"32rpx","lineHeight":"48rpx","fontWeight":"bold"}'>招聘指南</view>
				<view :style='{"alignItems":"center","justifyContent":"center","display":"flex"}' @tap="onPageTap('zhaopinzhinan')">
				  <text :style='{"color":"#9e9e9e","fontSize":"26rpx"}'>查看更多</text>
				  <text class="icon iconfont icon-gengduo1" :style='{"color":"#9e9e9e","margin":"0 0 0 8rpx","fontSize":"26rpx"}'></text>
				</view>
			</view>
		  <!-- 样式3 -->
		  <view v-if="3 == 3" class="list-box style3" :style='{"width":"100%","padding":"24rpx","margin":"0","height":"auto"}'>
			<view @tap="onDetailTap('zhaopinzhinan',product.id)" v-for="(product,index) in homezhaopinzhinanlist" :key="index" class="list-item" :style='{"margin":"0 0 20rpx","borderRadius":"10rpx","flexWrap":"wrap","background":"#F9FAFD","display":"flex","width":"100%","height":"auto"}'>
			  <image :style='{"width":"240rpx","objectFit":"cover","borderRadius":"10rpx","display":"block","height":"240rpx"}' class="list-item-image" mode="aspectFill" v-if="product.fengmian.substring(0,4)=='http'" :src="product.fengmian"></image>
			  <image :style='{"width":"240rpx","objectFit":"cover","borderRadius":"10rpx","display":"block","height":"240rpx"}' class="list-item-image" mode="aspectFill" v-else :src="product.fengmian?baseUrl+product.fengmian.split(',')[0]:''"></image>
			  <view class="list-item-body" :style='{"padding":"0","margin":"0","alignItems":"center","flexWrap":"wrap","display":"flex","width":"calc(100% - 240rpx)","height":"auto"}'>
				<view :style='{"padding":"0 20rpx","margin":"0","color":"#000","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"bold","order":"1"}' class="list-item-title">{{product.biaoti}}</view>
				<view :style='{"padding":"0 20rpx","margin":"0","color":"#000","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"bold","order":"1"}' class="list-item-title">{{product.fabushijian}}</view>
				<view :style='{"width":"100%","padding":"0 20rpx","order":"7"}'>
				  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#666"}'></text>
				  <text :style='{"color":"#666","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.addtime}}</text>
				</view>
				<view :style='{"width":"25%","padding":"0 20rpx","display":"inline-block","order":"5"}'>
				  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#666"}'></text>
				  <text :style='{"color":"#666","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.clicknum}}</text>
				</view>
			  </view>
			</view>
		  </view>
		</view>
		<!-- 商品列表 -->
		<!-- 新闻资讯 -->
		<!-- 新闻资讯 -->
	</view>
</view>
</template>

<script>
    import menu from '@/utils/menu'
	import '@/assets/css/global-restaurant.css'
	import uniIcons from "@/components/uni-ui/lib/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				startX: 0,
				prevNumList4: '',
				numList4: 0,
				timerList4: null,
				flagList4: false,
				navigationActive: {"width":"16rpx","margin":"0 4rpx","borderRadius":"100%","background":"#424EF0","height":"16rpx"},
				navigationDefault: {"width":"16rpx","margin":"0 4rpx","borderRadius":"100%","background":"#fff","height":"16rpx"},
				options2: {
					effect: 'flip',
					loop : true
				},
				options3: {
					effect: 'cube',
					loop : true,
					cubeEffect: {
						shadow: true,
						slideShadows: true,
						shadowOffset: 20,
						shadowScale: 0.94,
					}
				},
				rows: 2,
				column: 4,
				iconArr: [
				  'cuIcon-same',
				  'cuIcon-deliver',
				  'cuIcon-evaluate',
				  'cuIcon-shop',
				  'cuIcon-ticket',
				  'cuIcon-cascades',
				  'cuIcon-discover',
				  'cuIcon-question',
				  'cuIcon-pic',
				  'cuIcon-filter',
				  'cuIcon-footprint',
				  'cuIcon-pulldown',
				  'cuIcon-pullup',
				  'cuIcon-moreandroid',
				  'cuIcon-refund',
				  'cuIcon-qrcode',
				  'cuIcon-remind',
				  'cuIcon-profile',
				  'cuIcon-home',
				  'cuIcon-message',
				  'cuIcon-link',
				  'cuIcon-lock',
				  'cuIcon-unlock',
				  'cuIcon-vip',
				  'cuIcon-weibo',
				  'cuIcon-activity',
				  'cuIcon-friendadd',
				  'cuIcon-friendfamous',
				  'cuIcon-friend',
				  'cuIcon-goods',
				  'cuIcon-selection'
				],
                role : '',
                menuList: [],
                swiperMenuList:[],
                user: {},
                tableName:'',

				//轮播
				swiperList: [],
				zhaopinzhiweiIndex2: 0,
				zhaopinzhiweiCateList2: [],
				zhaopinzhiweilist: [],
				xuanjianghuiIndex2: 0,
				xuanjianghuiCateList2: [],
				xuanjianghuilist: [],
				homezhaopinzhinanlist: [],
				news: [],
				newsCateList2: [],
				newsIndex2: 0,
			}
		},
		watch: {
		},
		mounted() {
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
		},
        async onLoad(){
            
        },
		async onShow() {
			this.swiperMenuList = []
			this.role = uni.getStorageSync("appRole");
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.user = res.data;
			this.tableName = table;
			let menus = menu.list();
			this.menuList = menus;
			this.menuList.forEach((item,key) => {
			    if(key==0) {
			        item.frontMenu.forEach((item2,key2) => {
			            if(item2.child[0].buttons.indexOf("查看")>-1) {
			                this.swiperMenuList.push(item2);
			            }
			        })
			    }
			})
            // let res;
			// 轮播图
			let swiperList = []
			res = await this.$api.list('config', {
				page: 1,
				limit: 5
			});
			for (let item of res.data.list) {
				if (item.name.indexOf('picture') >= 0 && item.value && item.value!="" && item.value!=null ) {
					swiperList.push({
						img: item.value,
                        title: item.name,
						url: item.url
					});
				}
			}
			if (swiperList) {
				this.swiperList = swiperList;
			}
			
			this.prevNumList4 = this.swiperList.length - 1

			// 推荐信息
			if(uni.getStorageSync("appUserid")) {
			    res = await this.$api.page('qiye', {page:1,limit:100});
			} else {
			    res = await this.$api.list('qiye', {page:1,limit:100});
			}
			res.data.list.splice(0,0,{id:0,qiyemingcheng:'全部'})
			this.zhaopinzhiweiIndex2 = 0
			this.zhaopinzhiweiCateList2 = res.data.list
			// 推荐信息
			if(uni.getStorageSync("appUserid")) {
			    res = await this.$api.page('qiye', {page:1,limit:100});
			} else {
			    res = await this.$api.list('qiye', {page:1,limit:100});
			}
			res.data.list.splice(0,0,{id:0,qiyemingcheng:'全部'})
			this.xuanjianghuiIndex2 = 0
			this.xuanjianghuiCateList2 = res.data.list
			this.getRecommendList()
			this.getHomeList()
			this.getNewsList()
		},
		methods: {
			uGetRect(selector, all) {
				return new Promise(resolve => {
					uni.createSelectorQuery()
					.in(this)
					[all ? 'selectAll' : 'select'](selector)
					.boundingClientRect(rect => {
						if (all && Array.isArray(rect) && rect.length) {
							resolve(rect);
						}
						if (!all && rect) {
							resolve(rect);
						}
					})
					.exec();
				});
			},
			cloneData(data) {
				return JSON.parse(JSON.stringify(data));
			},
			newsTabClick2(index){
				this.newsIndex2 = index
				this.getNewsList()
			},
			async getNewsList(){
				let res;
				let params = {
					page: 1,
					limit: 6,
					sort: 'id',
					order: 'desc',
				}
				if(this.newsIndex2){
					params.typename = this.newsCateList2[this.newsIndex2].typename
				}
			},
			homeTabClick2(index,name){
				this['home' + name + 'Index2'] = index
				this.getHomeList()
			},
			async getHomeList(){
				let res;
				let params;
				params = {
					page:1,
					limit: 6,
				}
				res = await this.$api.list('zhaopinzhinan', params);
				this.homezhaopinzhinanlist = res.data.list
			},
			recommendTabClick2(index,name){
				this[name + 'Index2'] = index
				this.getRecommendList()
			},
			async getRecommendList(){
				let res;
				let params;
				// 推荐信息
				params = {
					page: 1,
					limit: 6,
                    sfsh: '是',
				}
				if(this.zhaopinzhiweiIndex2){
					params.qiyemingcheng = this.zhaopinzhiweiCateList2[this.zhaopinzhiweiIndex2].qiyemingcheng
				}
				res = await this.$api.recommend('zhaopinzhiwei', params);
				this.zhaopinzhiweilist = res.data.list
				

				// 推荐信息
				params = {
					page: 1,
					limit: 6,
                    sfsh: '是',
				}
				if(this.xuanjianghuiIndex2){
					params.qiyemingcheng = this.xuanjianghuiCateList2[this.xuanjianghuiIndex2].qiyemingcheng
				}
				res = await this.$api.recommend('xuanjianghui', params);
				this.xuanjianghuilist = res.data.list
				

			},
			autoPlayList4() {
				this.prevNumList4 = this.numList4
			
				this.numList4++
				if (this.numList4 == this.swiperList.length) this.numList4 = 0
			},
			touchStart(event) {
				this.startX = event.touches[0].clientX
				
				clearInterval(this.timerList4)
				this.flagList4 = true
			},
			touchMove(event) {
				const currentX = event.touches[0].clientX;
				const deltaX = currentX - this.startX;
				
				if (deltaX > 50) {
					// 向右滑动逻辑
					if (this.flagList4) {
						this.flagList4 = false
						
						this.prevNumList4 = this.numList4
						this.numList4++
						if (this.numList4 == this.swiperList.length) this.numList4 = 0
					}
					
				} else if (deltaX < -50) {
					// 向左滑动逻辑
					if (this.flagList4) {
						this.flagList4 = false
						
						this.prevNumList4 = this.numList4
						this.numList4--
						if (this.numList4 < 0) this.numList4 = this.swiperList.length - 1
					}
				}
			},
			touchEnd() {
				this.startX = 0
				this.flagList4 = false
			},
			//轮播图跳转
			onSwiperTap(e) {
				if(e.url) {
					if (e.url.indexOf('https') != -1) {
						window.open(e.url)
					} else {
						this.$utils.jump(e.url)
					}
				}
			},
			// 新闻详情
			onNewsDetailTap(id) {
				this.$utils.jump(`../news-detail/news-detail?id=${id}`)
			},
			// 推荐列表点击详情
			onDetailTap(tableName, id) {
				this.$utils.jump(`../${tableName}/detail?id=${id}`)
			},
			onPageTap(tableName){

				uni.navigateTo({
					url: `../${tableName}/list`,
					fail: function(){
						uni.switchTab({
							url: `../${tableName}/list`
						});
					}
				});
				// this.$utils.jump(`../${tableName}/list`)
			},
            onPageTap2(url) {
                uni.setStorageSync("useridTag",0);
                uni.navigateTo({
                    url: url,
                    fail: function() {
                        uni.switchTab({
                            url: url
                        });
                    }
                });
            }
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
	.list-swiper-4 .animate__animated {
		--animate-delay: 300ms;
	}
	.recommend {
		.style2 {
			.tabView {
				.tab {
					border: 0px solid rgb(64, 158, 255);
					border-radius: 0;
					padding: 0 0px;
					margin: 0 16rpx;
					color: #9E9E9E;
					background: #fff;
				}
				.tabActive {
					border: 2rpx solid #424EF0;
					border-radius: 0;
					padding: 0 0;
					margin: 0 16rpx;
					color: #424EF0;
					background: none;
					border-width: 0 0 4rpx;
				}
			}
		}
	}

	.news {
		.style2 {
			.tabView {
				.tab {
					border: none;
					border-radius: 40rpx;
					padding: 0 0;
					margin: 0 20rpx;
					color: #9E9E9E;
					background: none;
				}
				.tabActive {
					border: 2rpx solid #424EF0;
					border-radius: 0;
					padding: 0 0;
					margin: 0 20rpx;
					color: #424EF0;
					background: none;
					border-width: 0 0 6rpx;
				}
			}
		}
	}
</style>
