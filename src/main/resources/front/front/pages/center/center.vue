<template>
	<view class="content">
		<view :style='{"width":"100%","padding":"0","position":"relative","background":"#fff","height":"100%"}'>
			<view v-if="user&&user.id" :style='{"padding":"0 24rpx","margin":"0 0 20rpx 0","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20231130/3c38da0e34cf4de5a288e38a32314361.png)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","position":"relative","backgroundRepeat":"no-repeat","height":"280rpx"}' @tap="onPageTap('../user-info/user-info')" class="header" v-bind:class="{'status':isH5Plus}">
				<view :style='{"alignContent":"center","alignItems":"flex-start","flexWrap":"wrap","flex":"1","display":"flex","height":"100%"}' v-if="tableName=='qiuzhizhe'" class="userinfo">
					<image :style='{"width":"88rpx","padding":"0","margin":"0 32rpx 0 0","borderRadius":"100%","height":"88rpx"}' :src="user.touxiang?baseUrl+user.touxiang:'/static/gen/upload.png'"></image>
					<view :style='{"width":"calc(100% - 128rpx)","alignItems":"center","flexDirection":"column","justifyContent":"center","display":"flex"}' class="info">
						<view :style='{"width":"100%","lineHeight":"48rpx","fontSize":"24rpx","color":"#000"}'>{{user.zhanghao}}<text v-if="user.vip&& user.vip=='是'">(VIP)</text></view>
					</view>
					
					<view :style='{"width":"100%","padding":"20rpx 0 0","alignItems":"center","justifyContent":"flex-start","display":"flex"}' class="info">
						<view :style='{"width":"auto","margin":"0 20rpx 0 0","lineHeight":"36rpx","fontSize":"24rpx","color":"#000","textAlign":"left"}'>手机：{{user.shouji}}</view>
					</view>
				</view>
				<view :style='{"alignContent":"center","alignItems":"flex-start","flexWrap":"wrap","flex":"1","display":"flex","height":"100%"}' v-if="tableName=='qiye'" class="userinfo">
					<image :style='{"width":"88rpx","padding":"0","margin":"0 32rpx 0 0","borderRadius":"100%","height":"88rpx"}' :src="user.touxiang?baseUrl+user.touxiang:'/static/gen/upload.png'"></image>
					<view :style='{"width":"calc(100% - 128rpx)","alignItems":"center","flexDirection":"column","justifyContent":"center","display":"flex"}' class="info">
						<view :style='{"width":"100%","lineHeight":"48rpx","fontSize":"24rpx","color":"#000"}'>{{user.qiyezhanghao}}<text v-if="user.vip&& user.vip=='是'">(VIP)</text></view>
						<view :style='{"overflow":"hidden","whiteSpace":"nowrap","color":"#fff","display":"none","width":"100%","lineHeight":"36rpx","fontSize":"24rpx","textOverflow":"ellipsis"}'>{{user.shhf}}</view>
					</view>
					
					<view :style='{"width":"100%","padding":"20rpx 0 0","alignItems":"center","justifyContent":"flex-start","display":"flex"}' class="info">
						<view :style='{"width":"auto","margin":"0 20rpx 0 0","lineHeight":"36rpx","fontSize":"24rpx","color":"#000","textAlign":"left"}'>联系方式：{{user.lianxifangshi}}</view>
					</view>
				</view>
				<view :style='{"padding":"0 0 0 20rpx","alignItems":"center","top":"40rpx","display":"flex","width":"auto","position":"absolute","right":"40rpx","justifyContent":"center","height":"auto"}' class="setting">
					<text class="icon iconfont icon-qita6" :style='{"border":"0","width":"44rpx","lineHeight":"1","fontSize":"32rpx","color":"#000","borderRadius":"0"}'></text>
					<text :style='{"color":"#000","lineHeight":"1","fontSize":"26rpx"}'>设置</text>
				</view>
			</view>
			
			<view v-else :style='{"padding":"0 24rpx","margin":"0 0 20rpx 0","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20231130/3c38da0e34cf4de5a288e38a32314361.png)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","position":"relative","backgroundRepeat":"no-repeat","height":"280rpx"}' @tap="loginClick" class="header" v-bind:class="{'status':isH5Plus}">
				<view :style='{"alignItems":"center","color":"#666","display":"flex","width":"100%","fontSize":"36rpx","justifyContent":"center","height":"100%"}'>登录/注册</view>
			</view>
			
			<view :style='{"width":"100%","background":"#fff","height":"auto"}' class="list">
				
				<view :style='{"border":"2rpx solid #F5F7FA","width":"100%","borderWidth":"10rpx 0 0","height":"auto"}'>
					<view :style='{"width":"100%","padding":"0 20rpx","background":"none","justifyContent":"space-between","display":"flex","height":"auto"}'>
						<view :style='{"border":"2rpx solid #424EF0","padding":"0 0 0 10rpx","margin":"20rpx 0","color":"#424EF0","borderRadius":"4rpx 0 0 4rpx","borderWidth":"0 0 0 10rpx","fontSize":"28rpx","lineHeight":"40rpx","fontWeight":"bold"}'>我的服务</view>
					</view>
					<view :style='{"width":"100%","padding":"0 24rpx","flexWrap":"wrap","display":"flex","height":"auto"}'>
					
						<block v-for="item in menuList" v-bind:key="item.roleName">
							<block v-if="role==item.roleName" v-bind:key="menu.menu" v-for="(menu,index) in item.backMenu">
								<block v-bind:key="child.tableName" v-for=" (child,sort) in menu.child">
									<view :style='{"borderColor":"#F5F7FA","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="child.tableName!='orders/已发货' && child.tableName!='orders/已退款' &&child.tableName!='orders/已取消' && child.tableName!='orders/未支付' && child.tableName!='orders/已支付' && child.tableName!='orders/已完成' && child.tableName!='exampaper' && child.tableName!='examquestion' " @tap="onPageTap('../'+child.tableName+'/list?userid='+user.id+'&menuJump='+child.menuJump)" class="li" hover-class="hover">
										<view :style='{"color":"#424EF0","lineHeight":"1","fontSize":"40rpx"}' :class="child.appFrontIcon"></view>
										<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"88rpx","fontSize":"28rpx","color":"#333","flex":"1"}' class="text">{{child.menu}}</view>
										<view :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#9e9e9e"}' class="icon iconfont icon-jinru"></view>
									</view>
								</block>
							</block>
						</block>
						
						<view v-if="user&&user.id" @tap="passwordShow()" :style='{"borderColor":"#F5F7FA","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="li" hover-class="hover">
							<view :style='{"color":"#424EF0","lineHeight":"1","fontSize":"40rpx"}' class="cuIcon-lock"></view>
							<view class="text" :style='{"width":"100%","padding":"0 20rpx","lineHeight":"88rpx","fontSize":"28rpx","color":"#333","flex":"1"}'>修改密码</view>
							<view :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#9e9e9e"}' class="icon iconfont icon-jinru"></view>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 推荐 -->
			<view class="recommend" :style='{"border":"2rpx solid #F5F7FA","padding":"0 20rpx","margin":"20rpx 0 0 0","background":"#fff","borderWidth":"10rpx 0 0","width":"100%","height":"auto"}' v-if="recommendList.length">
				<view :style='{"border":"2rpx solid #4753F2","padding":"0 0 0 10rpx","margin":"20rpx 0","color":"#4753F2","borderRadius":"4rpx 0 0 4rpx","background":"none","borderWidth":"0 0 0 10rpx","width":"100%","lineHeight":"40rpx","fontSize":"28rpx","fontWeight":"bold"}'>为你推荐</view>
				<view :style='{"padding":"0 0 200rpx","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
					<view v-for="(item,index) in recommendList" :key="index" :style='{"width":"48%","margin":"20rpx 0 0 0","background":"#fff","height":"auto"}' @click="recommendDetail(item.id)">
						<image :style='{"width":"100%","objectFit":"cover","borderRadius":"10rpx","display":"block","height":"200rpx"}' :src="item[recommendPicture]?(baseUrl + item[recommendPicture].split(',')[0]):''"></image>
						<view :style='{"padding":"0 8rpx","lineHeight":"1.5","fontSize":"28rpx","color":"#000"}'>{{item[recommendTitle]}}</view>
						<view :style='{"padding":"0 8rpx","lineHeight":"24rpx","fontSize":"24rpx","color":"#999","textAlign":"right"}'>{{item.addtime}}</view>
					</view>
				</view>
			</view>
			<view style="width: 100%;height: 80px"></view>
		</view>
		<uni-popup class="popup-content" ref="passwordPopup" type="bottom">
			<view class="passwordForm">
				<view class="passwordInput">
					<input type="password" v-model="passwordForm.mima" placeholder="原密码" />
				</view>
				<view class="passwordInput">
					<input type="password" v-model="passwordForm.newmima" placeholder="新密码" />
				</view>
				<view class="passwordInput">
					<input type="password" v-model="passwordForm.newmima1" placeholder="确认密码" />
				</view>
				<view class="passwordBtnView">
					<button class="passwordBtn" @click="updatePassword">更新</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>
<script>
	import menu from '@/utils/menu'
	export default {
		data() {
			return {
				isH5Plus: true,
				user: {},
				tableName:'',
				role: '',
				menuList: [],
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
				recommendList: [],
				recommendTable: '',
				recommendTitle: '',
				recommendPicture: '',
				passwordForm: {
					mima: '',
					newmima: '',
					newmima1: '',
				},
			};
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
		},
		async onLoad(){
			let menus = menu.list();
			this.menuList = menus;
		},
		async onShow(){
            uni.removeStorageSync("useridTag");
			this.role = uni.getStorageSync("appRole");
			await this.getSession()
			this.getStoreup()
			this.tableName = uni.getStorageSync("nowTable");
			let menus = menu.list();
			this.menuList = menus;
			this.getRecommendList()
		},
		methods: {
			async getSession(){
				let table = uni.getStorageSync("nowTable");
				let res = await this.$api.session(table);
				this.user = res.data;
				this.$forceUpdate()
			},
			async getStoreup(){
				if(!this.user||!this.user.id){
					return false
				}
				let res = await this.$api.page('storeup',{userid: this.user.id,type: 1})
				this.user.storenum = Number(res.data.total)
				this.$forceUpdate()
			},
			loginClick(){
				uni.navigateTo({
					url: '../login/login'
				});
			},
			onPageTap(url) {
                uni.setStorageSync("useridTag",1);
				uni.navigateTo({
					url: url,
					fail: function() {
						uni.switchTab({
							url: url
						});
					}
				});
			},
			async getRecommendList(){
				let params = {
					page: 1,
					limit: 4
				}
				let res;
				res = await this.$api.recommend('zhaopinzhiwei', params);
				this.recommendList = res.data.list
				this.recommendTable = 'zhaopinzhiwei'
				this.recommendTitle = 'zhaopinzhiwei'
				this.recommendPicture = 'tupian'
				this.$forceUpdate()
			},
			recommendDetail(id) {
				uni.navigateTo({
					url: `../${this.recommendTable}/detail?id=${id}`,
					fail: function() {
						uni.switchTab({
							url: `../${this.recommendTable}/detail?id=${id}`
						});
					}
				});
			},
			passwordShow() {
				this.passwordForm = {
					mima: '',
					newmima: '',
					newmima1: '',
				}
				this.$forceUpdate()
				this.$refs.passwordPopup.open()
			},
			async updatePassword() {
				if (this.passwordForm.mima == ''){
					this.$utils.msg('原密码不能为空')
					return false
				}
				if (this.passwordForm.newmima == ''){
					this.$utils.msg('新密码不能为空')
					return false
				}
				if (this.passwordForm.newmima1 == ''){
					this.$utils.msg('确认密码不能为空')
					return false
				}
				let password = ''
				if (this.user.mima) {
					password = this.user.mima;
				} else if (this.user.password) {
					password = this.user.password;
				}
				let newpassword = this.passwordForm.mima
				if(password != newpassword){
					this.$utils.msg('原密码不正确')
					return false
				}
				if (this.passwordForm.newmima != this.passwordForm.newmima1){
					this.$utils.msg('两次密码不一致')
					return false
				}
				if (this.passwordForm.mima == this.passwordForm.newmima){
					this.$utils.msg('新密码与原密码相同！')
					return false
				}
				if (this.tableName == 'qiuzhizhe') {
				}
				if (this.tableName == 'qiye') {
				}
				this.user.password = this.passwordForm.newmima
				this.user.mima = this.passwordForm.newmima
				await this.$api.update(this.tableName,this.user)
				this.$utils.msg('修改密码成功,下次登录系统生效')
				this.$refs.passwordPopup.close()
				this.getSession()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: calc(100vh - 94px);
		box-sizing: border-box;
	}
	.passwordForm {
		width: 100%;
		padding: 10px 20px 60px;
		background: #fff;
	
		.passwordInput {
			background: #eee;
			margin: 0 0 10px;
			padding: 0 10px;
	
			input {
				height: 36px;
				line-height: 36px;
				font-size: 14px;
			}
		}
	
		.passwordBtnView {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 10px 0;
	
			.passwordBtn {
				padding: 0 20px;
				width: auto;
				height: 20px;
				line-height: 20px;
				font-size: 14px;
				color: #fff;
				background: #007aff;
				border: none;
				border-radius: 5px;
	
			}
		}
	}
</style>
