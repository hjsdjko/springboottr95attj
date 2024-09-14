<template>
<view class="content">
	<view class="box" :style='{"padding":"24rpx","background":"url(http://codegen.caihongy.cn/20231129/c84856a045c74a3fb061ed3793ce05d8.png)","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","height":"auto"}'>
		<view :style='{"width":"100%","padding":"24rpx","position":"relative","flexWrap":"wrap","display":"flex","height":"auto"}'>
			<image :style='{"width":"120rpx","margin":"0 auto 24rpx","borderRadius":"50%","display":"block","height":"120rpx"}' src="http://codegen.caihongy.cn/20231129/06147b195009465c9c4b2a781a122253.webp" mode="aspectFill"></image>
			<view :style='{"width":"100%","margin":"0 0 0px 0","flexWrap":"wrap","display":"flex","height":"auto"}' v-if="tableName=='qiuzhizhe'" class="uni-form-item uni-column">
				<view :style='{"width":"100%","lineHeight":"88rpx","fontSize":"26rpx","color":"#000","textAlign":"left","fontWeight":"bold"}' class="label">账号：</view>
				<input :style='{"border":"2rpx solid #aaa","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"0","background":"none","borderWidth":"0 0 2rpx","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.zhanghao"  type="text"  class="uni-input" name="" placeholder="账号" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 0px 0","flexWrap":"wrap","display":"flex","height":"auto"}' v-if="tableName=='qiuzhizhe'" class="uni-form-item uni-column">
				<view :style='{"width":"100%","lineHeight":"88rpx","fontSize":"26rpx","color":"#000","textAlign":"left","fontWeight":"bold"}' class="label">密码：</view>
				<input :style='{"border":"2rpx solid #aaa","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"0","background":"none","borderWidth":"0 0 2rpx","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.mima" type="password"  class="uni-input" name="" placeholder="密码" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 0px 0","flexWrap":"wrap","display":"flex","height":"auto"}' v-if="tableName=='qiuzhizhe'" class="uni-form-item uni-column">
				<view :style='{"width":"100%","lineHeight":"88rpx","fontSize":"26rpx","color":"#000","textAlign":"left","fontWeight":"bold"}' class="label">确认密码：</view>
				<input :style='{"border":"2rpx solid #aaa","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"0","background":"none","borderWidth":"0 0 2rpx","width":"100%","fontSize":"28rpx","height":"88rpx"}' v-model="ruleForm.mima2" type="password" class="uni-input" name="" placeholder="确认密码" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 0px 0","flexWrap":"wrap","display":"flex","height":"auto"}' v-if="tableName=='qiuzhizhe'" class="uni-form-item uni-column">
				<view :style='{"width":"100%","lineHeight":"88rpx","fontSize":"26rpx","color":"#000","textAlign":"left","fontWeight":"bold"}' class="label">姓名：</view>
				<input :style='{"border":"2rpx solid #aaa","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"0","background":"none","borderWidth":"0 0 2rpx","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.xingming"  type="text"  class="uni-input" name="" placeholder="姓名" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 0px 0","flexWrap":"wrap","display":"flex","height":"auto"}' v-if="tableName=='qiuzhizhe'" class="uni-form-item uni-column">
				<view :style='{"width":"100%","lineHeight":"88rpx","fontSize":"26rpx","color":"#000","textAlign":"left","fontWeight":"bold"}' class="label">年龄：</view>
				<input :style='{"border":"2rpx solid #aaa","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"0","background":"none","borderWidth":"0 0 2rpx","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.nianling"  type="text"  class="uni-input" name="" placeholder="年龄" />
			</view>
            <view :style='{"width":"100%","margin":"0 0 0px 0","flexWrap":"wrap","display":"flex","height":"auto"}' v-if="tableName=='qiuzhizhe'" class="">
				<view :style='{"width":"100%","lineHeight":"88rpx","fontSize":"26rpx","color":"#000","textAlign":"left","fontWeight":"bold"}' class="label">性别：</view>
				<picker :style='{"width":"100%","margin":"0 0 24rpx 0","display":"block","height":"auto"}' v-if="tableName=='qiuzhizhe'"  @change="qiuzhizhexingbieChange" :value="qiuzhizhexingbieIndex" :range="qiuzhizhexingbieOptions">
					<view>
						<view :style='{"width":"100%","lineHeight":"48rpx","fontSize":"24rpx","textDecoration":"underline","color":"#424EF0"}' class="uni-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
					</view>
				</picker>
			</view>
			<view :style='{"width":"100%","margin":"0 0 0px 0","flexWrap":"wrap","display":"flex","height":"auto"}' v-if="tableName=='qiuzhizhe'" class="uni-form-item uni-column">
				<view :style='{"width":"100%","lineHeight":"88rpx","fontSize":"26rpx","color":"#000","textAlign":"left","fontWeight":"bold"}' class="label">手机：</view>
				<input :style='{"border":"2rpx solid #aaa","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"0","background":"none","borderWidth":"0 0 2rpx","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.shouji"  type="text"  class="uni-input" name="" placeholder="手机" />
			</view>
            <view :style='{"width":"100%","margin":"0 0 0px 0","flexWrap":"wrap","display":"flex","height":"auto"}' v-if="tableName=='qiuzhizhe'" @tap="qiuzhizhetouxiangTap" class="">
				<view :style='{"width":"100%","lineHeight":"88rpx","fontSize":"26rpx","color":"#000","textAlign":"left","fontWeight":"bold"}' class="label">头像：</view>
				<image :style='{"width":"140rpx","borderRadius":"16rpx","display":"block","height":"140rpx"}' v-if="ruleForm.touxiang" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
                <image :style='{"width":"140rpx","borderRadius":"16rpx","display":"block","height":"140rpx"}' v-else class="avator" src="../../static/gen/upload.png" mode=""></image>
            </view>
			<view :style='{"width":"100%","margin":"0 0 0px 0","flexWrap":"wrap","display":"flex","height":"auto"}' v-if="tableName=='qiye'" class="uni-form-item uni-column">
				<view :style='{"width":"100%","lineHeight":"88rpx","fontSize":"26rpx","color":"#000","textAlign":"left","fontWeight":"bold"}' class="label">企业账号：</view>
				<input :style='{"border":"2rpx solid #aaa","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"0","background":"none","borderWidth":"0 0 2rpx","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.qiyezhanghao"  type="text"  class="uni-input" name="" placeholder="企业账号" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 0px 0","flexWrap":"wrap","display":"flex","height":"auto"}' v-if="tableName=='qiye'" class="uni-form-item uni-column">
				<view :style='{"width":"100%","lineHeight":"88rpx","fontSize":"26rpx","color":"#000","textAlign":"left","fontWeight":"bold"}' class="label">密码：</view>
				<input :style='{"border":"2rpx solid #aaa","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"0","background":"none","borderWidth":"0 0 2rpx","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.mima" type="password"  class="uni-input" name="" placeholder="密码" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 0px 0","flexWrap":"wrap","display":"flex","height":"auto"}' v-if="tableName=='qiye'" class="uni-form-item uni-column">
				<view :style='{"width":"100%","lineHeight":"88rpx","fontSize":"26rpx","color":"#000","textAlign":"left","fontWeight":"bold"}' class="label">确认密码：</view>
				<input :style='{"border":"2rpx solid #aaa","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"0","background":"none","borderWidth":"0 0 2rpx","width":"100%","fontSize":"28rpx","height":"88rpx"}' v-model="ruleForm.mima2" type="password" class="uni-input" name="" placeholder="确认密码" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 0px 0","flexWrap":"wrap","display":"flex","height":"auto"}' v-if="tableName=='qiye'" class="uni-form-item uni-column">
				<view :style='{"width":"100%","lineHeight":"88rpx","fontSize":"26rpx","color":"#000","textAlign":"left","fontWeight":"bold"}' class="label">企业名称：</view>
				<input :style='{"border":"2rpx solid #aaa","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"0","background":"none","borderWidth":"0 0 2rpx","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.qiyemingcheng"  type="text"  class="uni-input" name="" placeholder="企业名称" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 0px 0","flexWrap":"wrap","display":"flex","height":"auto"}' v-if="tableName=='qiye'" class="uni-form-item uni-column">
				<view :style='{"width":"100%","lineHeight":"88rpx","fontSize":"26rpx","color":"#000","textAlign":"left","fontWeight":"bold"}' class="label">负责人：</view>
				<input :style='{"border":"2rpx solid #aaa","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"0","background":"none","borderWidth":"0 0 2rpx","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.fuzeren"  type="text"  class="uni-input" name="" placeholder="负责人" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 0px 0","flexWrap":"wrap","display":"flex","height":"auto"}' v-if="tableName=='qiye'" class="uni-form-item uni-column">
				<view :style='{"width":"100%","lineHeight":"88rpx","fontSize":"26rpx","color":"#000","textAlign":"left","fontWeight":"bold"}' class="label">联系方式：</view>
				<input :style='{"border":"2rpx solid #aaa","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"0","background":"none","borderWidth":"0 0 2rpx","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.lianxifangshi"  type="text"  class="uni-input" name="" placeholder="联系方式" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 0px 0","flexWrap":"wrap","display":"flex","height":"auto"}' v-if="tableName=='qiye'" class="uni-form-item uni-column">
				<view :style='{"width":"100%","lineHeight":"88rpx","fontSize":"26rpx","color":"#000","textAlign":"left","fontWeight":"bold"}' class="label">邮箱：</view>
				<input :style='{"border":"2rpx solid #aaa","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"0","background":"none","borderWidth":"0 0 2rpx","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.youxiang"  type="text"  class="uni-input" name="" placeholder="邮箱" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 0px 0","flexWrap":"wrap","display":"flex","height":"auto"}' v-if="tableName=='qiye'" class="uni-form-item uni-column">
				<view :style='{"width":"100%","lineHeight":"88rpx","fontSize":"26rpx","color":"#000","textAlign":"left","fontWeight":"bold"}' class="label">企业地址：</view>
				<input :style='{"border":"2rpx solid #aaa","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"0","background":"none","borderWidth":"0 0 2rpx","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.qiyedizhi"  type="text"  class="uni-input" name="" placeholder="企业地址" />
			</view>
            <view :style='{"width":"100%","margin":"0 0 0px 0","flexWrap":"wrap","display":"flex","height":"auto"}' v-if="tableName=='qiye'" @tap="qiyetouxiangTap" class="">
				<view :style='{"width":"100%","lineHeight":"88rpx","fontSize":"26rpx","color":"#000","textAlign":"left","fontWeight":"bold"}' class="label">封面：</view>
				<image :style='{"width":"140rpx","borderRadius":"16rpx","display":"block","height":"140rpx"}' v-if="ruleForm.touxiang" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
                <image :style='{"width":"140rpx","borderRadius":"16rpx","display":"block","height":"140rpx"}' v-else class="avator" src="../../static/gen/upload.png" mode=""></image>
            </view>
			<view :style='{"width":"100%","margin":"0 0 0px 0","flexWrap":"wrap","display":"flex","height":"auto"}' v-if="tableName=='qiye'" class="">
				<view :style='{"width":"100%","lineHeight":"88rpx","fontSize":"26rpx","color":"#000","textAlign":"left","fontWeight":"bold"}' class="label">企业介绍：</view>
				<xia-editor ref="editor" :style='{"minHeight":"500rpx","border":"2rpx solid #efefef","width":"calc(100% - 160rpx)","padding":"20rpx","height":"auto"}' v-model="ruleForm.qiyejieshao" placeholder="企业介绍" @editorChange="qiyejieshaoChange"></xia-editor>
			</view>
			<button :style='{"border":"0","padding":"0px","margin":"24rpx auto","color":"rgb(255, 255, 255)","borderRadius":"8rpx","background":"url(http://codegen.caihongy.cn/20231129/e83626e1e97e489099693ee9348afd12.png)","width":"120rpx","lineHeight":"120rpx","fontSize":"32rpx","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","height":"120rpx"}' class="btn-submit" @tap="register" type="primary"></button>
			
			<view class="idea1" :style='{"width":"100%","background":"red","display":"none","height":"80rpx"}'>idea1</view>
			<view class="idea2" :style='{"width":"100%","background":"red","display":"none","height":"80rpx"}'>idea2</view>
			<view class="idea3" :style='{"width":"100%","background":"red","display":"none","height":"80rpx"}'>idea3</view>
		</view>
	</view>
</view>
</template>

<script>
    import multipleSelect from "@/components/momo-multipleSelect/momo-multipleSelect";
	export default {
		data() {
			return {
                qiuzhizhexingbieOptions: [],
                qiuzhizhexingbieIndex: 0,
				ruleForm: {
                zhanghao: '',
                mima: '',
                xingming: '',
                nianling: '',
                xingbie: '',
                shouji: '',
                touxiang: '',
                qiyezhanghao: '',
                mima: '',
                qiyemingcheng: '',
                fuzeren: '',
                lianxifangshi: '',
                youxiang: '',
                qiyedizhi: '',
                touxiang: '',
                qiyejieshao: '',
                shhf: '',
				},
				tableName:""
			}
		},
        components: {
            multipleSelect
        },
        computed: {
            baseUrl() {
                return this.$base.url;
            },
        },
		async onLoad() {
			let res = [];
			let table = uni.getStorageSync("loginTable");
            this.tableName = table;

                        // 自定义下拉框值
			if(this.tableName=='qiuzhizhe'){
                this.qiuzhizhexingbieOptions = "男,女".split(',');
				this.ruleForm.xingbie=this.qiuzhizhexingbieOptions[0]
			}
			
			this.styleChange()
		},
		methods: {

            // 下拉变化
            qiuzhizhexingbieChange(e) {
                    this.qiuzhizhexingbieIndex = e.target.value
                    this.ruleForm.xingbie = this.qiuzhizhexingbieOptions[this.qiuzhizhexingbieIndex]
            },
            qiuzhizhetouxiangTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    _this.ruleForm.touxiang = 'upload/' + res.file;
					_this.$forceUpdate();
                });
            },
            qiyetouxiangTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    _this.ruleForm.touxiang = 'upload/' + res.file;
					_this.$forceUpdate();
                });
            },
            qiyejieshaoChange(e) {
                this.ruleForm.qiyejieshao = e
            },

            toggleTab(str) {
                this.$refs[str].show();
            },

			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.uni-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.registerFrom.content.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			// 注册
			async register() {
				
				if((!this.ruleForm.zhanghao) && `qiuzhizhe` == this.tableName){
					this.$utils.msg(`账号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `qiuzhizhe` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
                if(`qiuzhizhe` == this.tableName && (this.ruleForm.mima!=this.ruleForm.mima2)){
                    this.$utils.msg(`两次密码输入不一致`);
                    return
                }
				if((!this.ruleForm.xingming) && `qiuzhizhe` == this.tableName){
					this.$utils.msg(`姓名不能为空`);
					return
				}
				if(`qiuzhizhe` == this.tableName && this.ruleForm.nianling&&(!this.$validate.isIntNumer(this.ruleForm.nianling))){
					this.$utils.msg(`年龄应输入整数`);
					return
				}
				if(`qiuzhizhe` == this.tableName && this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
					this.$utils.msg(`手机应输入手机格式`);
					return
				}
				if((!this.ruleForm.qiyezhanghao) && `qiye` == this.tableName){
					this.$utils.msg(`企业账号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `qiye` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
                if(`qiye` == this.tableName && (this.ruleForm.mima!=this.ruleForm.mima2)){
                    this.$utils.msg(`两次密码输入不一致`);
                    return
                }
				if((!this.ruleForm.qiyemingcheng) && `qiye` == this.tableName){
					this.$utils.msg(`企业名称不能为空`);
					return
				}
				if(`qiye` == this.tableName && this.ruleForm.lianxifangshi&&(!this.$validate.isMobile(this.ruleForm.lianxifangshi))){
					this.$utils.msg(`联系方式应输入手机格式`);
					return
				}
				if(`qiye` == this.tableName && this.ruleForm.youxiang&&(!this.$validate.isEmail(this.ruleForm.youxiang))){
					this.$utils.msg(`邮箱应输入邮件格式`);
					return
				}
				await this.$api.register(`${this.tableName}`, this.ruleForm);
				this.$utils.msgBack('注册成功');;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
