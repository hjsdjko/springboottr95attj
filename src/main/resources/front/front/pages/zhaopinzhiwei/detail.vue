
<template>
<view>
<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
	<view class="content">
		<view class="container" :style='{"padding":"0","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","position":"relative","height":"100%"}'>
						<swiper :style='{"width":"100%","background":"#fff","height":"500rpx","order":"2"}' class="swiper" :indicator-dots='false' :autoplay='false' :circular='false' indicator-active-color='#000000' indicator-color='rgba(0, 0, 0, .3)' :duration='500' :interval='5000' :vertical='true'>
				<swiper-item :style='{"width":"100%","background":"#fff","height":"500rpx"}' v-for="(swiper,index) in swiperList" :key="index">
					<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"500rpx"}' mode="aspectFill" v-if="swiper.substring(0,4)=='http'" :src="swiper"></image>
					<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"500rpx"}' mode="aspectFill" v-else :src="baseUrl+swiper"></image>
				</swiper-item>
			</swiper>
												            <view :style='{"padding":"24rpx","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","height":"auto","order":"3"}' class="detail-content">
				<view :style='{"margin":"0 0 24rpx 0","borderColor":"#ccc","flexWrap":"wrap","borderWidth":"0","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"space-between","height":"auto","order":"2"}' class="detail-list-item price">
					<view :style='{"display":"flex"}' v-if="storeupFlag==1" @click="shoucang">
						<text class="icon iconfont icon-shoucang12" :style='{"margin":"0 4rpx 0 0","lineHeight":"80rpx","fontSize":"36rpx","color":"#FFC336"}'></text>
						<text :style='{"color":"#FFC336","lineHeight":"80rpx","fontSize":"28rpx"}'>取消收藏</text>
					</view>
					<view :style='{"padding":"0","display":"flex","order":"1"}' v-if="storeupFlag==0" @click="shoucang">
						<text class="icon iconfont icon-shoucang10" :style='{"margin":"0 8rpx 0 0","lineHeight":"80rpx","fontSize":"36rpx","color":"#FFC336"}'></text>
						<text :style='{"color":"#666","lineHeight":"80rpx","fontSize":"28rpx"}'>收藏</text>
					</view>
				</view>

				<view :style='{"margin":"0 0 12rpx 0","borderColor":"#ccc","borderWidth":"0","display":"flex","width":"100%","borderStyle":"solid","height":"auto","order":"3"}' class="detail-list-item title">
					<view :style='{"padding":"0 10rpx 0 0","color":"#424EF0","textAlign":"right","width":"auto","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}' class="lable">招聘职位：</view>
					<view :style='{"padding":"0px","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#666","flex":"1"}' class="text">{{detail.zhaopinzhiwei}}</view>
				</view>

				<view class="detail-list-item" :style='{"margin":"0 0 12rpx 0","borderColor":"#ccc","borderWidth":"0","display":"flex","width":"100%","borderStyle":"solid","height":"auto","order":"3"}'>
					<view class="lable" :style='{"padding":"0 10rpx 0 0","color":"#424EF0","textAlign":"right","width":"auto","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>企业名称：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#666","flex":"1"}'>{{detail.qiyemingcheng}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 12rpx 0","borderColor":"#ccc","borderWidth":"0","display":"flex","width":"100%","borderStyle":"solid","height":"auto","order":"3"}'>
					<view class="lable" :style='{"padding":"0 10rpx 0 0","color":"#424EF0","textAlign":"right","width":"auto","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>上班时间：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#666","flex":"1"}'>{{detail.shangbanshijian}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 12rpx 0","borderColor":"#ccc","borderWidth":"0","display":"flex","width":"100%","borderStyle":"solid","height":"auto","order":"3"}'>
					<view class="lable" :style='{"padding":"0 10rpx 0 0","color":"#424EF0","textAlign":"right","width":"auto","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>上班地点：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#666","flex":"1"}'>{{detail.shangbandidian}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 12rpx 0","borderColor":"#ccc","borderWidth":"0","display":"flex","width":"100%","borderStyle":"solid","height":"auto","order":"3"}'>
					<view class="lable" :style='{"padding":"0 10rpx 0 0","color":"#424EF0","textAlign":"right","width":"auto","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>薪资待遇：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#666","flex":"1"}'>{{detail.xinzidaiyu}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 12rpx 0","borderColor":"#ccc","borderWidth":"0","display":"flex","width":"100%","borderStyle":"solid","height":"auto","order":"3"}'>
					<view class="lable" :style='{"padding":"0 10rpx 0 0","color":"#424EF0","textAlign":"right","width":"auto","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>招聘人数：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#666","flex":"1"}'>{{detail.zhaopinrenshu}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 12rpx 0","borderColor":"#ccc","borderWidth":"0","display":"flex","width":"100%","borderStyle":"solid","height":"auto","order":"3"}'>
					<view class="lable" :style='{"padding":"0 10rpx 0 0","color":"#424EF0","textAlign":"right","width":"auto","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>负责人：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#666","flex":"1"}'>{{detail.fuzeren}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 12rpx 0","borderColor":"#ccc","borderWidth":"0","display":"flex","width":"100%","borderStyle":"solid","height":"auto","order":"3"}'>
					<view class="lable" :style='{"padding":"0 10rpx 0 0","color":"#424EF0","textAlign":"right","width":"auto","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>联系方式：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#666","flex":"1"}'>{{detail.lianxifangshi}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 12rpx 0","borderColor":"#ccc","borderWidth":"0","display":"flex","width":"100%","borderStyle":"solid","height":"auto","order":"3"}'>
					<view class="lable" :style='{"padding":"0 10rpx 0 0","color":"#424EF0","textAlign":"right","width":"auto","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>邮箱：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#666","flex":"1"}'>{{detail.youxiang}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 12rpx 0","borderColor":"#ccc","borderWidth":"0","display":"flex","width":"100%","borderStyle":"solid","height":"auto","order":"3"}'>
					<view class="lable" :style='{"padding":"0 10rpx 0 0","color":"#424EF0","textAlign":"right","width":"auto","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>企业账号：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#666","flex":"1"}'>{{detail.qiyezhanghao}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 12rpx 0","borderColor":"#ccc","borderWidth":"0","display":"flex","width":"100%","borderStyle":"solid","height":"auto","order":"3"}'>
					<view class="lable" :style='{"padding":"0 10rpx 0 0","color":"#424EF0","textAlign":"right","width":"auto","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>点击次数：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#666","flex":"1"}'>{{detail.clicknum}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 12rpx 0","borderColor":"#ccc","borderWidth":"0","display":"flex","width":"100%","borderStyle":"solid","height":"auto","order":"3"}'>
					<view class="lable" :style='{"padding":"0 10rpx 0 0","color":"#424EF0","textAlign":"right","width":"auto","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>收藏数：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#666","flex":"1"}'>{{detail.storeupnum}}</view>
				</view>



				<view class="detail-list-item" :style='{"margin":"0 0 12rpx 0","borderColor":"#ccc","borderWidth":"0","display":"flex","width":"100%","borderStyle":"solid","height":"auto","order":"3"}'>
					<view class="lable" :style='{"padding":"0 10rpx 0 0","color":"#424EF0","textAlign":"right","width":"auto","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>职位要求：</view>
					<view class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#666","flex":"1"}'>{{detail.zhiweiyaoqiu}}</view>
				</view>

				<view v-if="userid" class="detail-list-item" :style='{"margin":"0 0 12rpx 0","borderColor":"#ccc","borderWidth":"0","display":"flex","width":"100%","borderStyle":"solid","height":"auto","order":"3"}'>
					<view class="lable" :style='{"padding":"0 10rpx 0 0","color":"#424EF0","textAlign":"right","width":"auto","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>审核状态：</view>
					<view v-if="detail.sfsh=='是'" class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#666","flex":"1"}'>通过</view>
					<view v-if="detail.sfsh=='否'" class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#666","flex":"1"}'>不通过</view>
					<view v-if="detail.sfsh=='待审核'" class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#666","flex":"1"}'>待审核</view>
				</view>
				<view v-if="userid" class="detail-list-item" :style='{"margin":"0 0 12rpx 0","borderColor":"#ccc","borderWidth":"0","display":"flex","width":"100%","borderStyle":"solid","height":"auto","order":"3"}'>
					<view class="lable" :style='{"padding":"0 10rpx 0 0","color":"#424EF0","textAlign":"right","width":"auto","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>审核回复</view>
					<view class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#666","flex":"1"}'>{{detail.shhf}}</view>
				</view>

				<view class="detail-list-item rich" :style='{"margin":"0 0 24rpx 0","borderColor":"#ccc","color":"#000","borderWidth":"0","display":"flex","width":"100%","borderStyle":"solid","height":"auto","order":"3"}'>
					<view class="lable" :style='{"padding":"0 10rpx 0 0","color":"#424EF0","textAlign":"right","display":"block","width":"auto","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>招聘详情：</view>
					<view class="rich-text" :style='{"padding":"0","margin":"0","lineHeight":"48rpx","color":"#666","flex":"1"}'>
						<rich-text :nodes="detail.zhaopinxiangqing"></rich-text>
					</view>
				</view>



				<view class="bottom-content bg-white tabbar border shop" :style='{"padding":"10rpx 0","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","justifyContent":"center","height":"auto","order":"8"}'>

					<button :style='{"border":"0","padding":"0 20rpx","margin":"0 10rpx 8rpx","color":"#fff","borderRadius":"10rpx","background":"#424EF0","width":"calc(25% - 20rpx)","fontSize":"26rpx","height":"60rpx"}' v-if="userid&&isAuth('zhaopinzhiwei','在线应聘')" @tap="onAcrossTap('yingpinxinxi','是','','','')" class="cu-btn bg-brown round shadow-blur" >在线应聘</button>
					<button :style='{"border":"0","padding":"0 20rpx","margin":"0 10rpx 8rpx","color":"#fff","borderRadius":"10rpx","background":"#424EF0","width":"calc(25% - 20rpx)","fontSize":"26rpx","height":"60rpx"}' v-if="!userid&&isAuthFront('zhaopinzhiwei','在线应聘')" @tap="onAcrossTap('yingpinxinxi','是','','','')" class="cu-btn bg-brown round shadow-blur" >在线应聘</button>
					<button :style='{"border":"0","padding":"0 20rpx","margin":"0 10rpx 8rpx","color":"#fff","borderRadius":"10rpx","background":"#424EF0","width":"calc(25% - 20rpx)","fontSize":"26rpx","height":"60rpx"}' v-if="userid&&isAuth('zhaopinzhiwei','在线咨询')" @tap="onAcrossTap('zaixianzixun','是','','','')" class="cu-btn bg-brown round shadow-blur" >在线咨询</button>
					<button :style='{"border":"0","padding":"0 20rpx","margin":"0 10rpx 8rpx","color":"#fff","borderRadius":"10rpx","background":"#424EF0","width":"calc(25% - 20rpx)","fontSize":"26rpx","height":"60rpx"}' v-if="!userid&&isAuthFront('zhaopinzhiwei','在线咨询')" @tap="onAcrossTap('zaixianzixun','是','','','')" class="cu-btn bg-brown round shadow-blur" >在线咨询</button>
					<button :style='{"border":"0","padding":"0 20rpx","margin":"0 10rpx 8rpx","color":"#fff","borderRadius":"10rpx","background":"#424EF0","width":"calc(25% - 20rpx)","fontSize":"26rpx","height":"60rpx"}' v-if="userid&&isAuth('zhaopinzhiwei','审核')" @tap="onSHTap">审核</button>
					<button :style='{"border":"0","padding":"0 20rpx","margin":"0 10rpx 8rpx","color":"#fff","borderRadius":"10rpx","background":"#424EF0","width":"calc(25% - 20rpx)","fontSize":"26rpx","height":"60rpx"}' v-if="!userid&&isAuthFront('zhaopinzhiwei','审核')" @tap="onSHTap">审核</button>
					
				</view>
			</view>
		</view>
		<!-- 确认完成弹窗 -->
		<uni-popup class="popup-content" ref="popup" type="center">
			<form class="popup-form" style="background: #fff;width: 300px;display: block;border-radius: 10px;padding: 20px;text-align: center;">
				<view class=" margin-top">
					<picker @change="sfshChange" :value="sfshIndex" :range="sfshOptions">
						<view class="uni-input">{{detail.sfsh?detail.sfsh:'选择审核结果'}}</view>
					</picker>
				</view>
				<view class="">
					<!-- <view class="title">审核回复</view> -->
					<textarea style="width: 200px;" v-model="detail.shhf" placeholder="审核回复"></textarea>
					<!-- <input v-model="douyinId" placeholder="审核回复" name="input"></input> -->
				</view>
				<view class="btn-content">
					<button style="margin: 0 10px" @tap="onCloseWinTap" class="cu-btn bg-cyan">取消</button>
					<button style="margin: 0 10px" @tap="onFinishTap" class="cu-btn bg-red">确认</button>
				</view>
			</form>
		</uni-popup>
	</view>
</mescroll-uni>
</view>
</template>

<script>
	export default {
		data() {
			return {
				btnColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				id: '',
                userid: '',
				detail: {},
				swiperList: [],
				commentList: [],
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 3, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				user: {},
				sfshIndex: -1,
				sfshOptions: ['通过','不通过', '待审核'],
				storeupFlag: 0,
				count: 0,
				timer: null,
				title:'',
			}
		},
		components: {
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
		},
		async onLoad(options) {
			// #ifdef APP-PLUS
			let page = getCurrentPages()
			this.href = this.baseUrl + 'front/h5/#/' + page[page.length - 1].route
			// #endif
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			this.id = options.id;
            if(options.userid) {
                this.userid = options.userid;
            }
			// 渲染数据
			this.init();
		},
		// #ifdef MP-WEIXIN
		onShareAppMessage(){
			var obj = {
				title: this.title,
				imageUrl: this.swiperList[0]?this.baseUrl + this.swiperList[0]: ''
			}
			return obj
		},
		// #endif
        onUnload() {
            if(this.timer) {
                clearInterval(this.timer);
            }
        },
		async onShow(options) {
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			this.btnColor = this.btnColor.sort(()=> {
				return (0.5-Math.random());
			});
			this.getStoreup();
			let crossCleanType = uni.getStorageSync('crossCleanType')
            if(crossCleanType) {
				uni.removeStorageSync('crossCleanType')
                res = await this.$api.info('zhaopinzhiwei', this.id);
                this.detail = res.data;
				this.title = this.detail.zhaopinzhiwei
            }
		},
		destroyed: function() {
			//window.clearInterval(this.inter);
		},
		methods: {
			// 拨打电话
			callClick(row){
				uni.makePhoneCall({
					phoneNumber: row
				})
			},
			// 支付
			onPayTap(){
				let that = this
				if(!this.user){
					this.$utils.msg("请先登录")
					setTimeout(()=>{
						that.$utils.jump('../login/login')
					},1500)
					return false
				}
                if(this.detail.sfsh!='是') {
                	this.$utils.msg("请审核通过后再操作");
                	return
                }
				uni.setStorageSync('paytable','zhaopinzhiwei');
				uni.setStorageSync('payObject',this.detail);
				this.$utils.jump('../pay-confirm/pay-confirm?type=1')
			},
            onDetailTap(item) {
                uni.setStorageSync("useridTag",this.userid);
                this.$utils.jump(`./detail?id=${item.id}&userid=`+this.userid)
            },
			// 收藏
			async getStoreup() {
				if(!this.user){
					return false
				}
				let params = {
					page: 1,
					limit: 1,
					refid : this.id,
					tablename : 'zhaopinzhiwei',
					userid: this.user.id,
					type: 1,
				}
				let res = await this.$api.list(`storeup`, params);
				this.storeupFlag = res.data.list.length;
			},
			async shoucang(){
				let that = this
				if(!this.user){
					this.$utils.msg("请先登录")
					setTimeout(()=>{
						that.$utils.jump('../login/login')
					},1500)
					return false
				}
				let _this = this;
				let params = {
					page: 1,
					limit: 1,
					refid : _this.detail.id,
					tablename : 'zhaopinzhiwei',
					userid: _this.user.id,
					type: 1,
				}
				let res = await _this.$api.list(`storeup`, params);
				if (res.data.list.length == 1) {
					let storeupId = res.data.list[0].id;
					uni.showModal({
						title: '提示',
						content: '是否取消',
						success: async function(res) {
							if (res.confirm) {
								_this.detail.storeupnum--
								await _this.$api.update('zhaopinzhiwei',_this.detail)
								await _this.$api.del('storeup', JSON.stringify([storeupId]));
								_this.$utils.msg('取消成功');
								_this.getStoreup();
							}
						}
					});
					return;
				}
				uni.showModal({
					title: '提示',
					content: '是否收藏',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.add('storeup', {
								userid: _this.user.id,
								name: _this.detail.zhaopinzhiwei,
								picture: _this.swiperList[0],
								refid: _this.detail.id,
								tablename: 'zhaopinzhiwei',
                                type: 1
							});
							_this.detail.storeupnum++
							await _this.$api.update('zhaopinzhiwei',_this.detail)
							_this.$utils.msg('收藏成功');
							_this.getStoreup();
						}
					}
				});
			},
			// 跨表
			async onAcrossTap(tableName,crossOptAudit,crossOptPay,statusColumnName,tips,statusColumnValue,type=1){
				let that = this
				if(!this.user){
					this.$utils.msg("请先登录")
					setTimeout(()=>{
						that.$utils.jump('../login/login')
					},1500)
					return false
				}
				if(crossOptAudit=='是'&&this.detail.sfsh!='是') {
					this.$utils.msg("请审核通过后再操作");
					return
				}
				uni.setStorageSync('crossTable','zhaopinzhiwei');
				uni.setStorageSync(`crossObj`, this.detail);
				uni.setStorageSync(`statusColumnName`, statusColumnName);
				uni.setStorageSync(`statusColumnValue`, statusColumnValue);
				uni.setStorageSync(`tips`, tips);
				if(statusColumnName!=''&&!statusColumnName.startsWith("[")) {
					var obj = uni.getStorageSync('crossObj');
					for (var o in obj){
						if(o==statusColumnName && obj[o]==statusColumnValue){
							this.$utils.msg(tips);
							return
						}
					}
				}
				this.$utils.jump(`../${tableName}/add-or-update?cross=true`);
			},
			// 获取详情
			async init(type=1){
                if(this.timer) {
                    clearInterval(this.timer);
                }
				let res = await this.$api.info('zhaopinzhiwei', this.id);
				this.detail = res.data;

				this.title = this.detail.zhaopinzhiwei
				// 轮播图片
				this.swiperList = this.detail.tupian ? this.detail.tupian.split(",") : [];
				

				//修改富文本的图片样式
				this.detail.zhaopinxiangqing = this.detail.zhaopinxiangqing.replace(/img src/gi,"img style=\"width:100%;\" src");
				if(type==2){
					this.detail.discussnum++
					await this.$api.update('zhaopinzhiwei',this.detail)
				}
			},
			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},

			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				mescroll.resetUpScroll()
			},

			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
				mescroll.endSuccess(mescroll.size, this.hasNext);

            },



			onChatTap() {
				this.$utils.jump('../chat/chat')
			},
			// 下载
			download(url){
				let _this = this;
				url=_this.$base.url +  url;
				uni.downloadFile({
					url: url,
					success: (res) => {
						if (res.statusCode === 200) {
							_this.$utils.msg('下载成功');
							 window.open(url);
						}
					}
				});
			},
			//
			onCartTabTap() {
				this.$utils.tab('../shop-cart/shop-cart')
			},
			onSHTap() {
				if(this.detail.sfsh=='是'||this.detail.sfsh=='否') {
				    this.$utils.msg('已审核完成');
				    return;
				}
				this.$refs.popup.open()
			},
			// 完成审核
			async onFinishTap() {
				if(!this.detail.sfsh){
					this.$utils.msg('请选择审核状态');
					return
				}
				if(!this.detail.shhf){
					this.$utils.msg('请填写审核回复');
					return
				}
				if(this.detail.sfsh=="通过"){
					this.detail.sfsh = '是'
				}
				if(this.detail.sfsh=="不通过"){
					this.detail.sfsh = '否'
				}
				if(this.detail.sfsh=="待审核"){
					this.detail.sfsh = '待审核'
				}
				await this.$api.update('zhaopinzhiwei', this.detail);
				this.$utils.msg('审核成功');
				this.$refs.popup.close();
			},
			// 关闭窗口
			onCloseWinTap() {
				this.$refs.popup.close()
			},
			sfshChange(e){
				this.sfshIndex = e.target.value
				this.detail.sfsh = this.sfshOptions[this.sfshIndex]
			},
		}
	}
</script>

<style lang="scss">
	page {
	  --animate-duration: 1s;
	  --animate-delay: 1s;
	  --animate-repeat: 1;
	}
	
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
	
	.seat-list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		background: #FFFFFF;
		margin: 20upx;
		border-radius: 20upx;
		padding: 20upx;
		font-size: 30upx;
		.seat-item {
			width: 33.33%;
			display: flex;
			align-items: center;
			flex-direction: column;
			margin-bottom: 20upx;
	
			.seat-icon {
				width: 50upx;
				height: 50upx;
				margin-bottom: 10upx;
			}
		}
	}
	
	audio {
		display: flex;
		flex-direction: column;
	}
	
	.audio /deep/ .uni-audio-default {
		width: inherit;
	}
	

</style>
