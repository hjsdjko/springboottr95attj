<template>
	<view class="content">
		<view class="box" :style='{"padding":"24rpx","background":"url(http://codegen.caihongy.cn/20231129/b245d02724c846eb81ec48ed8ffd3ba3.png)","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","height":"100%"}'>
			<view :style='{"width":"100%","padding":"24rpx 24rpx","position":"relative","flexWrap":"wrap","display":"flex","height":"auto"}'>
				<image :style='{"width":"120rpx","margin":"0 auto 24rpx","borderRadius":"50%","display":"block","height":"120rpx","order":"1"}' src="http://codegen.caihongy.cn/20231129/60e9e3dac4104b1a8fa52d7c3a726a45.webp" mode="aspectFill"></image>
				<view v-if="loginType==1" :style='{"width":"100%","margin":"0 0 0","flexWrap":"wrap","display":"flex","height":"auto","order":"2"}' class="uni-form-item uni-column">
					<view :style='{"width":"100%","lineHeight":"88rpx","fontSize":"26rpx","color":"#000","textAlign":"left","fontWeight":"bold"}' class="label">账号：</view>
					<input v-model="username" :style='{"border":"2rpx solid #aaa","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"0","flex":"1","background":"none","borderWidth":"0 0 2rpx","fontSize":"28rpx","height":"88rpx"}' type="text" class="uni-input" name="" placeholder="请输入账号" />
				</view>
				<view v-if="loginType==1" :style='{"width":"100%","margin":"0 0 0","flexWrap":"wrap","display":"flex","height":"auto","order":"2"}' class="uni-form-item uni-column">
					<view :style='{"width":"100%","lineHeight":"88rpx","fontSize":"26rpx","color":"#000","textAlign":"left","fontWeight":"bold"}' class="label">密码：</view>
					<input v-model="password" :style='{"border":"2rpx solid #aaa","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"0","flex":"1","background":"none","borderWidth":"0 0 2rpx","fontSize":"28rpx","height":"88rpx"}' type="password" class="uni-input" name="" placeholder="请输入密码" />
				</view>
				<view v-if="roleNum>1" :style='{"width":"100%","margin":"0 0 24rpx 0","display":"block","height":"auto","order":"4"}'>
					<view :style='{"width":"100%","lineHeight":"88rpx","fontSize":"26rpx","color":"#000","textAlign":"left","fontWeight":"bold"}' class="label">用户类型：</view>
					<picker @change="optionsChange" :value="index" :range="options" :style='{"width":"100%","lineHeight":"48rpx","fontSize":"24rpx","textDecoration":"underline","color":"#424EF0","textAlign":"left"}'>
						<view class="uni-picker-type">{{options[index]}}</view>
					</picker>
				</view>
				

				
				<button v-if="loginType==1" class="btn-submit" @tap="onLoginTap" type="primary" :style='{"border":"0","padding":"0px","margin":"24rpx auto ","color":"rgb(255, 255, 255)","borderRadius":"8rpx","background":"url(http://codegen.caihongy.cn/20231129/e83626e1e97e489099693ee9348afd12.png)","width":"120rpx","lineHeight":"120rpx","fontSize":"0","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","fontWeight":"bold","height":"120rpx","order":"7"}'>→</button>
				<button v-if="loginType==2" class="btn-submit" @tap="onFaceLoginTap" type="primary" :style='{"border":"0","padding":"0px","margin":"24rpx auto ","color":"rgb(255, 255, 255)","borderRadius":"8rpx","background":"url(http://codegen.caihongy.cn/20231129/e83626e1e97e489099693ee9348afd12.png)","width":"120rpx","lineHeight":"120rpx","fontSize":"0","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","fontWeight":"bold","height":"120rpx","order":"7"}'>人脸识别登录</button>
				<view class="links" :style='{"margin":"0 0 24rpx 0","flexWrap":"wrap","display":"flex","width":"100%","justifyContent":"flex-end","height":"auto","order":"6"}'>
					<view class="link-highlight" @tap="onRegisterTap('qiuzhizhe')" :style='{"color":"#9E9E9E","padding":"0 12rpx","fontSize":"24rpx"}'>注册求职者</view>
					<view class="link-highlight" @tap="onRegisterTap('qiye')" :style='{"color":"#9E9E9E","padding":"0 12rpx","fontSize":"24rpx"}'>注册企业</view>
				</view>
				
				<view class="idea1" :style='{"width":"100%","background":"red","display":"none","height":"80rpx"}'>idea1</view>
				<view class="idea2" :style='{"width":"100%","background":"red","display":"none","height":"80rpx"}'>idea2</view>
				<view class="idea3" :style='{"width":"100%","background":"red","display":"none","height":"80rpx"}'>idea3</view>
			</view>
		</view>
	</view>
</template>

<script>
	import menu from '@/utils/menu'
	export default {
		data() {
			return {
				username: '',
				password: '',
                loginType:1,
				codes: [{
				  num: 1,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 2,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 3,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 4,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}],
				options: [
					'请选择登录用户类型',
				],
                optionsValues: [
					'',
                    'qiuzhizhe',
                    'qiye',
				],
				index: 0,
				roleNum:0,

			}
		},
		onLoad() {
			let options = ['请选择登录用户类型'];
			let menus = menu.list();
			this.menuList = menus;
			for(let i=0;i<this.menuList.length;i++){
				if(this.menuList[i].hasFrontLogin=='是'){
					options.push(this.menuList[i].roleName);
					this.roleNum++;
				}
			}
			if(this.roleNum==1) {
				this.index = 1;
			}	
			this.options = options;
			this.styleChange()
		},
		onShow() {
		},
		mounted() {
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.uni-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.loginFrom.content.input.backgroundColor
					// })
				})
			},
			onRegisterTap(tableName) {
                uni.setStorageSync("loginTable", tableName);
				this.$utils.jump('../register/register')
			},
			async onLoginTap() {
                if (!this.username) {
					this.$utils.msg('请输入用户名')
					return
				}
                if (!this.password) {
					this.$utils.msg('请输入用户密码')
					return
				}
                if (!this.optionsValues[this.index]) {
					this.$utils.msg('请选择登录用户类型')
					return
				}

				this.loginPost()

			},
			async loginPost() {
				
				let res = await this.$api.login(`${this.optionsValues[this.index]}`, {
					username: this.username,
					password: this.password
				});
				uni.removeStorageSync("useridTag");
				uni.setStorageSync("appToken", res.token);
				uni.setStorageSync("nickname",this.username);
				uni.setStorageSync("nowTable", `${this.optionsValues[this.index]}`);
				res = await this.$api.session(`${this.optionsValues[this.index]}`);
				if(res.data.touxiang) {
				    uni.setStorageSync('headportrait', res.data.touxiang);
				} else if(res.data.headportrait) {
				    uni.setStorageSync('headportrait', res.data.headportrait);
				}
				uni.setStorageSync('userSession',JSON.stringify(res.data))
				// 保存用户id
				uni.setStorageSync("appUserid", res.data.id);
				if(res.data.vip) {
					uni.setStorageSync("vip", res.data.vip);
				}
				uni.setStorageSync("appRole", `${this.options[this.index]}`);
				this.$utils.tab('../index/index');
			},
			optionsChange(e) {
				this.index = e.target.value
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		height: 100%;
	}
	
	.content {
		height: 100%;
		box-sizing: border-box;
	}
	
</style>
