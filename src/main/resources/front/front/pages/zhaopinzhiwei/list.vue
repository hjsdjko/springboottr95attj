<template>
<!-- category 1 -->
<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
	<view class="content">
		<view :style='{"width":"100%","padding":"0","position":"relative","background":"#fff","height":"100%"}'>
			<view class="cu-bar bg-white search" :style='{"width":"100%","padding":"20rpx 24rpx","background":"#fff","display":"flex","height":"auto"}'>
				<picker v-if="queryList.length>1" mode="selector" :range="queryList" range-key="queryName" :value="queryIndex" @change="queryChange">
					<view :style='{"width":"40rpx","height":"auto"}'>
						<text class="icon iconfont icon-jiantou18" :style='{"width":"40rpx","fontSize":"40rpx","lineHeight":"80rpx","color":"#424EF0"}'></text>
					</view>
				</picker>
				<view :style='{"margin":"0 12rpx","flex":"1","position":"relative"}' v-if="queryIndex==0" class="search-form round">
					<text class="icon iconfont icon-fangdajing07" :style='{"color":"rgb(153, 153, 153)","left":"0px","textAlign":"center","width":"80rpx","fontSize":"40rpx","lineHeight":"80rpx","position":"absolute","right":"0px"}'></text>
					<input :style='{"border":"2rpx solid #424EF0","padding":"12rpx 20rpx 12rpx 80rpx","color":"#000","borderRadius":"40rpx","background":"#fff","width":"100%","lineHeight":"56rpx","fontSize":"28rpx","height":"80rpx"}' v-model="searchForm.zhaopinzhiwei" type="text" placeholder="招聘职位" ></input>
				</view>
				<view :style='{"margin":"0 12rpx","flex":"1","position":"relative"}' v-if="queryIndex==1" class="search-form round">
					<text class="icon iconfont icon-fangdajing07" :style='{"color":"rgb(153, 153, 153)","left":"0px","textAlign":"center","width":"80rpx","fontSize":"40rpx","lineHeight":"80rpx","position":"absolute","right":"0px"}'></text>
					<input :style='{"border":"2rpx solid #424EF0","padding":"12rpx 20rpx 12rpx 80rpx","color":"#000","borderRadius":"40rpx","background":"#fff","width":"100%","lineHeight":"56rpx","fontSize":"28rpx","height":"80rpx"}' v-model="searchForm.qiyemingcheng" type="text" placeholder="企业名称" ></input>
				</view>
				<view :style='{"margin":"0 12rpx","flex":"1","position":"relative"}' v-if="queryIndex==2" class="search-form round">
					<text class="icon iconfont icon-fangdajing07" :style='{"color":"rgb(153, 153, 153)","left":"0px","textAlign":"center","width":"80rpx","fontSize":"40rpx","lineHeight":"80rpx","position":"absolute","right":"0px"}'></text>
					<input :style='{"border":"2rpx solid #424EF0","padding":"12rpx 20rpx 12rpx 80rpx","color":"#000","borderRadius":"40rpx","background":"#fff","width":"100%","lineHeight":"56rpx","fontSize":"28rpx","height":"80rpx"}' v-model="searchForm.shangbandidian" type="text" placeholder="上班地点" ></input>
				</view>
				<button :style='{"border":"2rpx solid #424EF0","padding":"0px","margin":"0","color":"#424EF0","borderRadius":"40rpx","background":"none","width":"136rpx","lineHeight":"80rpx","fontSize":"28rpx","height":"80rpx"}' @tap="search" class="cu-btn shadow-blur round">搜索</button>
			</view>
			

			<view :style='{"width":"calc(100% - 40rpx)","padding":"0 20rpx","margin":"0 auto 20rpx","flexWrap":"wrap","background":"#F9FAFD","display":"flex"}'>
				<view @click="sortClick('clicknum')" :style='{"border":"0","padding":"0 12rpx","margin":"0 8rpx 0 0","outline":"0","borderRadius":"8rpx","background":"none","display":"flex"}'>
					<text :style='{"color":"#000","lineHeight":"56rpx","fontSize":"24rpx"}'>点击量</text>
					<text v-if="listSort!='clicknum'" class="icon iconfont icon-liulan13" :style='{"margin":"0 0 0 8rpx","lineHeight":"56rpx","fontSize":"24rpx","color":"#333"}'></text>
					<text v-else-if="listSort=='clicknum'&&listOrder=='asc'" class="icon iconfont icon-jiantou06" :style='{"margin":"0 0 0 8rpx","lineHeight":"56rpx","fontSize":"24rpx","color":"#333"}'></text>
					<text v-else-if="listSort=='clicknum'&&listOrder=='desc'" class="icon iconfont icon-jiantou07" :style='{"margin":"0 0 0 8rpx","lineHeight":"56rpx","fontSize":"24rpx","color":"#333"}'></text>
				</view>
				<view @click="sortClick('addtime')" :style='{"border":"0","padding":"0 12rpx","margin":"0 8rpx 0 0","outline":"0","borderRadius":"8rpx","background":"none","display":"flex"}'>
					<text :style='{"color":"#333","lineHeight":"56rpx","fontSize":"24rpx"}'>按日期</text>
					<text v-if="listSort!='addtime'" class="icon iconfont icon-zaixianyanzi" :style='{"margin":"0 0 0 8rpx","lineHeight":"56rpx","fontSize":"24rpx","color":"#333"}'></text>
					<text v-else-if="listSort=='addtime'&&listOrder=='asc'" class="icon iconfont icon-jiantou06" :style='{"margin":"0 0 0 8rpx","lineHeight":"56rpx","fontSize":"24rpx","color":"#333"}'></text>
					<text v-else-if="listSort=='addtime'&&listOrder=='desc'" class="icon iconfont icon-jiantou07" :style='{"margin":"0 0 0 8rpx","lineHeight":"56rpx","fontSize":"24rpx","color":"#333"}'></text>
				</view>
			</view>
			<view :style='{"width":"100%","background":"#fff","height":"auto"}'>
				<scroll-view scroll-x="true" class="category-one" :style='{"width":"calc(100% - 40rpx)","margin":"0 auto","whiteSpace":"nowrap","background":"none","display":"flex","height":"auto"}'>
					<view :class='categoryName === item.qiyemingcheng ? "active" : ""' class="tab" v-for="(item,index) in categoryList" :key="index" @tap="categoryClick(item.qiyemingcheng)">{{item.qiyemingcheng}}</view>
				</scroll-view>
			
			
			

				<view id="list-box7" class="list-box7 waterfall-body" :style='{"width":"100%","padding":"20rpx 20rpx 0","alignItems":"flex-start","display":"flex","height":"auto"}'>
					<view id="waterfall-left-column-list-6" class="waterfall-column-list-6" :style='{"width":"50%","margin":"0 12rpx 0 0","flex":"1","flexDirection":"column","display":"flex"}'>
						<view @tap="onDetailTap(product)" :style='{"boxShadow":"none","margin":"0 0 20rpx 0","position":"relative"}' v-for="product in leftListList6" :key="product.id" class="left-content">
							<image :style='{"width":"100%","objectFit":"cover","borderRadius":"10rpx","display":"block","height":"300rpx"}' mode="widthFix" v-if="preHttp(product.tupian)" :src="product.tupian"></image>
							<image :style='{"width":"100%","objectFit":"cover","borderRadius":"10rpx","display":"block","height":"300rpx"}' mode="widthFix" v-else :src="product.tupian?baseUrl+product.tupian.split(',')[0]:''"></image>
							<view :style='{"width":"100%","flexWrap":"wrap","background":"none","display":"flex"}'>
								<view :style='{"padding":"0 20rpx","color":"#000","width":"100%","lineHeight":"2","fontSize":"28rpx","fontWeight":"bold","order":"1"}' class="title ">{{product.zhaopinzhiwei}}</view>
								<view :style='{"width":"100%","padding":"6rpx 20rpx 0","order":"7"}'>
									<text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#9E9E9E"}'></text>
									<text :style='{"color":"#9E9E9E","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.addtime}}</text>
								</view>
								<view :style='{"padding":"0 20rpx","display":"none"}'>
									<text class="icon iconfont icon-geren16" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#fff"}'></text>
									<text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.qiyezhanghao}}</text>
								</view>
								<view :style='{"width":"calc(100% / 3)","padding":"0 20rpx","display":"inline-block","order":"3"}'>
									<text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#9E9E9E"}'></text>
									<text :style='{"color":"#9E9E9E","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.storeupnum}}</text>
								</view>
								<view :style='{"width":"calc(100% / 3)","padding":"0 20rpx","display":"inline-block","order":"5"}'>
									<text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#9E9E9E"}'></text>
									<text :style='{"color":"#9E9E9E","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.clicknum}}</text>
								</view>
							</view>
							<!-- #ifdef MP-WEIXIN -->
							<view :style='{"width":"100%","padding":"8rpx 20rpx","justifyContent":"space-between","display":"flex","height":"auto"}'>
								<view :style='{"padding":"16rpx 0","display":"flex"}' v-if="(userid && isAuth('zhaopinzhiwei','修改')) || (!userid && isAuthFront('zhaopinzhiwei','修改'))" @tap.stop.proevent="onUpdate" :data-row="product">
									<text :style='{"margin":"0 10rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#9e9e9e","display":"inline-block"}' class="cuIcon-edit"></text>
									<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#9e9e9e","display":"inline-block"}'>修改</text>
								</view>
								<view :style='{"padding":"16rpx 0","display":"flex"}' v-if="(userid && isAuth('zhaopinzhiwei','删除')) || (!userid && isAuthFront('zhaopinzhiwei','删除'))" @tap.stop.proevent="onDelete" :data-row="product">
									<text :style='{"margin":"0 8rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#9e9e9e","display":"inline-block"}' class="cuIcon-delete"></text>
									<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#9e9e9e","display":"inline-block"}'>删除</text>
								</view>
							</view>
							<!-- #endif -->
							<!-- #ifndef MP-WEIXIN -->
							<view :style='{"width":"100%","padding":"8rpx 20rpx","justifyContent":"space-between","display":"flex","height":"auto"}'>
								<view :style='{"padding":"16rpx 0","display":"flex"}' v-if="(userid && isAuth('zhaopinzhiwei','修改')) || (!userid && isAuthFront('zhaopinzhiwei','修改'))" @tap.stop.proevent="onUpdateTap(product)">
									<text :style='{"margin":"0 10rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#9e9e9e","display":"inline-block"}' class="cuIcon-edit"></text>
									<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#9e9e9e","display":"inline-block"}'>修改</text>
								</view>
								<view :style='{"padding":"16rpx 0","display":"flex"}' v-if="(userid && isAuth('zhaopinzhiwei','删除')) || (!userid && isAuthFront('zhaopinzhiwei','删除'))" @tap.stop.proevent="onDeleteTap(product.id)">
									<text :style='{"margin":"0 8rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#9e9e9e","display":"inline-block"}' class="cuIcon-delete"></text>
									<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#9e9e9e","display":"inline-block"}'>删除</text>
								</view>
							</view>
							<!-- #endif -->
						</view>
					</view>
					
					<view id="waterfall-right-column-list-6" class="waterfall-column-list-6" :style='{"width":"50%","margin":"0 0 0 12rpx","flex":"1","flexDirection":"column","display":"flex"}'>
						<view @tap="onDetailTap(product)" :style='{"boxShadow":"none","margin":"0 0 20rpx 0","position":"relative"}' v-for="product in rightListList6" :key="product.id" class="right-content">
							<image :style='{"width":"100%","objectFit":"cover","borderRadius":"10rpx","display":"block","height":"300rpx"}' mode="widthFix" v-if="preHttp(product.tupian)" :src="product.tupian"></image>
							<image :style='{"width":"100%","objectFit":"cover","borderRadius":"10rpx","display":"block","height":"300rpx"}' mode="widthFix" v-else :src="product.tupian?baseUrl+product.tupian.split(',')[0]:''"></image>

							<view :style='{"width":"100%","flexWrap":"wrap","background":"none","display":"flex"}'>
								<view :style='{"padding":"0 20rpx","color":"#000","width":"100%","lineHeight":"2","fontSize":"28rpx","fontWeight":"bold","order":"1"}' class="title ">{{product.zhaopinzhiwei}}</view>
								<view :style='{"width":"100%","padding":"6rpx 20rpx 0","order":"8"}'>
									<text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#9e9e9e"}'></text>
									<text :style='{"color":"#9e9e9e","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.addtime}}</text>
								</view>
								<view :style='{"padding":"0 20rpx","display":"none"}'>
									<text class="icon iconfont icon-geren16" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#fff"}'></text>
									<text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.qiyezhanghao}}</text>
								</view>
								<view :style='{"width":"calc(100% / 3)","padding":"0 20rpx","display":"inline-block","order":"3"}'>
									<text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#9e9e9e"}'></text>
									<text :style='{"color":"#9e9e9e","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.storeupnum}}</text>
								</view>
								<view :style='{"width":"calc(100% / 3)","padding":"0 20rpx","display":"inline-block","order":"4"}'>
									<text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#9e9e9e"}'></text>
									<text :style='{"color":"#9e9e9e","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.clicknum}}</text>
								</view>
							</view>
							<!-- #ifdef MP-WEIXIN -->
							<view :style='{"width":"100%","padding":"8rpx 20rpx","justifyContent":"space-between","display":"flex","height":"auto"}'>
								<view :style='{"padding":"16rpx 0","display":"flex"}' v-if="(userid && isAuth('zhaopinzhiwei','修改')) || (!userid && isAuthFront('zhaopinzhiwei','修改'))" @tap.stop.proevent="onUpdate" :data-row="product">
									<text :style='{"margin":"0 10rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#9e9e9e","display":"inline-block"}' class="cuIcon-edit"></text>
									<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#9e9e9e","display":"inline-block"}'>修改</text>
								</view>
								<view :style='{"padding":"16rpx 0","display":"flex"}' v-if="(userid && isAuth('zhaopinzhiwei','删除')) || (!userid && isAuthFront('zhaopinzhiwei','删除'))" @tap.stop.proevent="onDelete" :data-row="product">
									<text :style='{"margin":"0 8rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#9e9e9e","display":"inline-block"}' class="cuIcon-delete"></text>
									<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#9e9e9e","display":"inline-block"}'>删除</text>
								</view>
							</view>
							<!-- #endif -->
							<!-- #ifndef MP-WEIXIN -->
							<view :style='{"width":"100%","padding":"8rpx 20rpx","justifyContent":"space-between","display":"flex","height":"auto"}'>
								<view :style='{"padding":"16rpx 0","display":"flex"}' v-if="(userid && isAuth('zhaopinzhiwei','修改')) || (!userid && isAuthFront('zhaopinzhiwei','修改'))" @tap.stop.proevent="onUpdateTap(product)">
									<text :style='{"margin":"0 10rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#9e9e9e","display":"inline-block"}' class="cuIcon-edit"></text>
									<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#9e9e9e","display":"inline-block"}'>修改</text>
								</view>
								<view :style='{"padding":"16rpx 0","display":"flex"}' v-if="(userid && isAuth('zhaopinzhiwei','删除')) || (!userid && isAuthFront('zhaopinzhiwei','删除'))" @tap.stop.proevent="onDeleteTap(product.id)">
									<text :style='{"margin":"0 8rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#9e9e9e","display":"inline-block"}' class="cuIcon-delete"></text>
									<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#9e9e9e","display":"inline-block"}'>删除</text>
								</view>
							</view>
							<!-- #endif -->
						</view>
					</view>
				</view>
			

			</view>
			
			
			
		</view>

		<button :style='{"border":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,.3)","color":"rgb(255, 255, 255)","bottom":"40rpx","right":"120rpx","outline":"none","borderRadius":"100%","background":"#424EF0","width":"80rpx","lineHeight":"80rpx","fontSize":"28rpx","position":"absolute","height":"80rpx","zIndex":"999"}' v-if="userid && isAuth('zhaopinzhiwei','新增')" class="add-btn" @click="onAddTap()">新增</button>
		<button :style='{"border":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,.3)","color":"rgb(255, 255, 255)","bottom":"40rpx","right":"120rpx","outline":"none","borderRadius":"100%","background":"#424EF0","width":"80rpx","lineHeight":"80rpx","fontSize":"28rpx","position":"absolute","height":"80rpx","zIndex":"999"}' v-if="!userid && isAuthFront('zhaopinzhiwei','新增')" class="add-btn" @click="onAddTap()">新增</button>
	</view>
</mescroll-uni>
</template>

<script>
	export default {
		data() {
			return {
				leftListList6: [],
				rightListList6: [],
				tempListList6: [],
				leftListNews7: [],
				rightListNews7: [],
				tempListNews7: [],
				btnColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				clicknumColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				queryList:[
					{
						queryName:"招聘职位",
					},
					{
						queryName:"企业名称",
					},
					{
						queryName:"上班地点",
					},
				],
				queryIndex: 0,
				list: [],
				lists: [],
                userid: '',
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				searchForm:{},
				categoryList:[],
				categoryName :'全部',
				CustomBar: '0',
				listSort: 'id',
				listOrder: 'desc',
			};
		},
		watch: {
			copyFlowListList6(nVal, oVal) {
				this.tempListList6 = this.cloneData(this.copyFlowListList6);
				this.splitDataList6();
			},
		},
		mounted() {
			this.tempListList6 = this.cloneData(this.copyFlowListList6);
			this.splitDataList6();
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
			copyFlowListList6() {
				return this.cloneData(this.list);
			},
			copyFlowListNews7() {
				return this.cloneData(this.list);
			},
		},
		async onShow() {
            if(uni.getStorageSync("useridTag")==1){
                this.userid=uni.getStorageSync("useridTag");
                uni.removeStorageSync("useridTag");
            } else {
                this.userid = "";
            }
			this.btnColor = this.btnColor.sort(()=> {
				return (0.5-Math.random());
			});
			this.clicknumColor = this.clicknumColor.sort(()=> {
				return (0.5-Math.random());
			});
            let res = {};
            if(this.userid) {
                res = await this.$api.page('qiye', {page:1,limit:100});
            } else {
                res = await this.$api.list('qiye', {page:1,limit:100});
            }
			res.data.list.splice(0,0,{id:0,qiyemingcheng:'全部'})
			this.categoryList = res.data.list;
			this.hasNext = true
			// 重新加载数据
			this.leftListList6 = []
			this.rightListList6 = []
			this.tempListList6 = []
			if (this.mescroll) this.mescroll.resetUpScroll()
		},
		onLoad(options) {
            if(uni.getStorageSync("useridTag")==1){
                this.userid=uni.getStorageSync("useridTag");
                uni.removeStorageSync("useridTag");
            } else {
                this.userid = "";
            }
			this.hasNext = true
			// 重新加载数据
			if (this.mescroll) this.mescroll.resetUpScroll()
		},
		components: {
		},
		methods: {
			async splitDataList6() {
				if (!this.tempListList6.length) return;
				let leftRect = await this.uGetRect('#waterfall-left-column-list-6');
				let rightRect = await this.uGetRect('#waterfall-right-column-list-6');
				// 如果左边小于或等于右边，就添加到左边，否则添加到右边
				let item = this.tempListList6[0];
				// 解决多次快速上拉后，可能数据会乱的问题，因为经过上面的两个await节点查询阻塞一定时间，加上后面的定时器干扰
				// 数组可能变成[]，导致此item值可能为undefined
				if (!item) return;
				
				if (leftRect.height < rightRect.height) {
					this.leftListList6.push(item);
				} else if (leftRect.height > rightRect.height) {
					this.rightListList6.push(item);
				} else {
					// 这里是为了保证第一和第二张添加时，左右都能有内容
					// 因为添加第一张，实际队列的高度可能还是0，这时需要根据队列元素长度判断下一个该放哪边
					if (this.leftListList6.length <= this.rightListList6.length) {
						this.leftListList6.push(item);
					} else {
						this.rightListList6.push(item);
					}
				}
				// 移除临时列表的第一项
				this.tempListList6.splice(0, 1);
				// 如果临时数组还有数据，继续循环
				if (this.tempListList6.length) {
					setTimeout(()=>{
						this.splitDataList6();
					}, 100)
					return
				}
			},
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
			sortClick(type){
				if(this.listSort==type){
					if(this.listOrder == 'desc'){
						this.listOrder = 'asc'
					}else{
						this.listOrder = 'desc'
					}
				}else{
					this.listSort = type
					this.listOrder = 'desc'
				}
				this.search()
			},
            priceChange(price) {
                return Number(price).toFixed(2);
            },
            preHttp(str) {
                return str && str.substr(0,4)=='http';
            },
			//查询条件切换
			queryChange(e) {
				this.queryIndex=e.detail.value;
				this.searchForm.zhaopinzhiwei="";
				this.searchForm.qiyemingcheng="";
				this.searchForm.shangbandidian="";
			},
			//类别搜索
			categoryClick(categoryName){
				this.leftListList6 = []
				this.rightListList6 = []
				this.tempListList6 = []
				this.categoryName = categoryName;
				this.mescroll.resetUpScroll();
			},
			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},
			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				// 重置分页参数页数为1
				mescroll.resetUpScroll()
			},
			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
				let params = {
					page: mescroll.num,
					limit: mescroll.size
				}
				params['sort'] = this.listSort;
				params['order'] = this.listOrder;

				if(this.categoryName!='全部'){
					params.qiyemingcheng = '%' + this.categoryName + '%'
				}
				if(this.searchForm.zhaopinzhiwei){
					params['zhaopinzhiwei'] = '%' + this.searchForm.zhaopinzhiwei + '%'
				}
				if(this.searchForm.qiyemingcheng){
					params['qiyemingcheng'] = '%' + this.searchForm.qiyemingcheng + '%'
				}
				if(this.searchForm.shangbandidian){
					params['shangbandidian'] = '%' + this.searchForm.shangbandidian + '%'
				}
				let user = uni.getStorageSync("appUserid")?JSON.parse(uni.getStorageSync('userSession')):{}
                let res = {}
                if(this.userid) {
                    res = await this.$api.page(`zhaopinzhiwei`, params);
                } else {
                    params['sfsh'] = '是';
                    res = await this.$api.list(`zhaopinzhiwei`, params);
                }

				// 如果是第一页数据置空
				if (mescroll.num == 1){
					this.leftListList6 = []
					this.rightListList6 = []
					this.tempListList6 = []
				}
				this.list = res.data.list;
				this.$forceUpdate()
				
				let length = Math.ceil(this.list.length/6)
				let arr = [];
				for (let i = 0; i<length; i++){
					arr[i] = this.list.slice(i*6, (i+1)*6)
				}
				this.lists = arr
				if (res.data.list.length == 0) this.hasNext = false;
				mescroll.endSuccess(mescroll.size, this.hasNext);
				this.tempListList6 = this.copyFlowListList6;
				this.splitDataList6();
			},
			// 详情
			onDetailTap(item) {
                uni.setStorageSync("useridTag",this.userid);
				this.$utils.jump(`./detail?id=${item.id}&userid=`+this.userid)
			},
			onUpdate(e){
				this.onUpdateTap(e.currentTarget.dataset.row)
			},
			// 修改
			onUpdateTap(row){
				if(row.sfsh=='是'||row.sfsh=='否'){
					this.$utils.msg('已审核完成,不能修改');
					return false
				}
                uni.setStorageSync("useridTag",this.userid);
				this.$utils.jump(`./add-or-update?id=${row.id}`)
			},
			// 添加
			onAddTap(){
                uni.setStorageSync("useridTag",this.userid);
				this.$utils.jump(`./add-or-update`)
			},
			onDelete(e){
				this.onDeleteTap(e.currentTarget.dataset.row.id)
			},
			onDeleteTap(id){
				var _this = this;
				uni.showModal({
					title: '提示',
					content: '是否确认删除',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.del('zhaopinzhiwei', JSON.stringify([id]));
							let obj = await _this.$api.list('storeup',{
								page: 1,
								limit: 100,
								tablename: 'zhaopinzhiwei',
								refid: id,
							})
							if(obj.data.list.length){
								let arr = []
								for(let x in obj.data.list){
									arr.push(obj.data.list[x].id)
								}
								await _this.$api.del('storeup',JSON.stringify(arr))
							}
							_this.$utils.msg('删除成功');
							_this.hasNext = true
							// 重置分页参数页数为1
							_this.search()
						}
					}
				});
			},
			// 搜索
			async search(){
				this.mescroll.num = 1
				this.leftListList6 = []
				this.rightListList6 = []
				this.tempListList6 = []
				let searchForm = {
					page: this.mescroll.num,
					limit: this.mescroll.size
				}
				searchForm['sort'] = this.listSort;
				searchForm['order'] = this.listOrder;

				if(this.searchForm.zhaopinzhiwei){
					searchForm['zhaopinzhiwei'] = '%' + this.searchForm.zhaopinzhiwei + '%'
				}
				if(this.categoryName!='全部'){
					searchForm.qiyemingcheng = '%' + this.categoryName + '%'
				}
				if(this.searchForm.qiyemingcheng){
					searchForm['qiyemingcheng'] = '%' + this.searchForm.qiyemingcheng + '%'
				}
				if(this.searchForm.shangbandidian){
					searchForm['shangbandidian'] = '%' + this.searchForm.shangbandidian + '%'
				}
                let res = {};
                if(this.userid) {
                    res = await this.$api.page(`zhaopinzhiwei`, searchForm);
                } else {
                    searchForm['sfsh'] = '是';
                    res = await this.$api.list(`zhaopinzhiwei`, searchForm);
                }
				// 如果是第一页数据置空
				if (this.mescroll.num == 1) this.list = [];
				this.list = this.list.concat(res.data.list);
				let length = Math.ceil(this.list.length/6)
				let arr = [];
				for (let i = 0; i<length; i++){
					arr[i] = this.list.slice(i*6, (i+1)*6)
				}
				this.lists = arr
				if (res.data.list.length == 0) this.hasNext = false;
				this.mescroll.endSuccess(this.mescroll.size, this.hasNext);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
	
	.category-one .tab {
		cursor: pointer;
		padding: 0 0;
		margin: 0 8rpx;
		color: #9E9E9E;
		background: none;
		display: inline-block;
		width: auto;
		font-size: 28rpx;
		line-height: 80rpx;
	}
	
	.category-one .tab.active {
		cursor: pointer;
		border: 2rpx solid #424EF0;
		padding: 0 0;
		margin: 0 8rpx;
		color: #424EF0;
		background: none;
		display: inline-block;
		width: auto;
		font-size: 28rpx;
		border-width: 0 0 4rpx;
		line-height: 80rpx;
	}
	
	.category-two .tab {
		cursor: pointer;
		padding: 0;
		color: #fff;
		background: blue;
		display: inline-block;
		width: 100%;
		font-size: 28rpx;
		line-height: 80rpx;
		text-align: center;
	}
	
	.category-two .tab.active {
		cursor: pointer;
		padding: 0;
		color: #fff;
		background: #000;
		display: inline-block;
		width: 100%;
		font-size: 28rpx;
		line-height: 80rpx;
		text-align: center;
	}
	
	.category-three .tab {
		cursor: pointer;
		padding: 0;
		color: #fff;
		background: burlywood;
		display: inline-block;
		width: 100%;
		font-size: 28rpx;
		line-height: 80rpx;
		text-align: center;
	}
	
	.category-three .tab.active {
		cursor: pointer;
		padding: 0;
		color: #fff;
		background: #000;
		display: inline-block;
		width: 100%;
		font-size: 28rpx;
		line-height: 80rpx;
		text-align: center;
	}
</style>
