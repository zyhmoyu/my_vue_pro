<template>
	<div class="app-regist">
		<div class="mui-navbar-inner mui-bar mui-bar-nav">
			<button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
				<span class="mui-icon mui-icon-left-nav" @click="backe"></span>
			</button>
			<h1 class="mui-center mui-title">注册</h1>
		</div>
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="login-img">
					<img src="http://127.0.0.1:3006/img/login-img.png"/>
				</div>
				<div class="mui-input-row">
						<label>
							<span class="mui-icon-extra mui-icon-extra-prech">
							</span>
						</label>
						<input type="text" placeholder="请输入手机号" maxlength="11" v-model="phonenum">
					</div>
				<div class="mui-input-row my-yanz">
						<label>
							<span class="mui-icon-extra my-ecur">
							</span>
						</label>
						<input type="text" placeholder="验证码" v-model="veri">
						<span class="my-yanzheng" @click="getvericode">获取验证码</span>
					</div>
				<div class="mui-input-row mui-password">
						<label>
							<span class="mui-icon mui-icon-locked"></span>
						</label>
						<input type="password" placeholder="请输入密码" maxlength="6" v-model="upwd">
					</div>
				<button type="button" class="mui-btn mui-btn-block login-btn" @click="postregist">注册</button>
			</div>
		</div>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	export default{
		data(){
			return {
				phonenum:'',
				veri:'',
				upwd:'',
				yanzcode:''
			}
		},
		props:["backc"],
		methods:{
			backe(){
				var backs=this.backc.replace(/s1/g,"/")
				backs = backs.replace(/\/\/Home\//g,"\/s1Homes1")
				if(backs.indexOf("//")>-1){
					backs = backs.replace(/\/\//g,"/s1")
				}
				this.$router.push(backs)
			},
			getvericode(){
				var reg = /^1[34578]\d{9}$/
				if(reg.test(this.phonenum)){
					var csyz = "qwertyuiopasdfghjklzxcvbnm1234567890"
					var c = ''
					for(var i=0;i<4;i++){
						c += csyz.charAt(Math.floor(Math.random()*csyz.length))
					}
					Toast({
						message:c.toUpperCase(),
						className:"fonts"
					})
					this.yanzcode = c.toUpperCase()
				}else{
					Toast("手机号格式不正确")
				}
			},
			postregist(){
				var veri = this.veri
				var yanzcode = this.yanzcode
				if(veri == yanzcode&&veri!=""){
					var phonenum = this.phonenum
					var upwd = this.upwd
					this.axios({
						method:"post",
						url:"login/regist",
						data:this.qs.stringify({phonenum,
						upwd})
					}).then(result=>{
						if(result.data.code>0){
							var path = this.$route.path
							path=path.replace(/\//g,"s1",)
							this.$router.push('/Home/me?upwd='+upwd+"&phonenum="+phonenum)
						}else{
							
						}
					})
				}else{
					Toast('验证码不正确')
				}
				
				
			}
		},
		created(){
			
		}
	}
</script>

<style>
	.app-regist{
		background: #fff;
		padding: 50px 0;
	}
	.app-regist .mui-bar-nav{
		background: #fff;
		box-shadow: none;
	}
	.app-regist .mui-icon-left-nav{
		color: #333;
	}
	.app-regist .mui-card{
		margin: 0;
		padding-top: 50px;
	}
	.app-regist .mui-card .mui-card-content{
		text-align: center;
	}
	.app-regist .mui-card .mui-card-content .mui-input-row{
		margin: 20px 0;
	}
	.app-regist .mui-card .mui-card-content .mui-input-row:after{
		content: "";
		display: block;
		width: 80%;
		margin: 0 auto;
		height: 1px;
		background: #DEDEDE;
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translate(-50%);
	}
	.app-regist .mui-card .mui-card-content .login-img img{
		width: 200px;
	}
	.app-regist .mui-card .mui-card-content .mui-btn{
		width: 70%;
		margin: 30px auto;
		border-radius: 30px;
		font-size: 20px;
	}
	.app-regist .mui-card .mui-card-content .mui-btn.login-btn{
		background: #dedede;
		border: 0;
		color: #fff;
	}
	.app-regist .mui-card .mui-card-content .mui-btn.login-btn{
		color:#fff;
		border-color: rgb(255, 198, 0);
	}
	.my-ecur:before{
		content: "";
		display: inline-block;
		width: 24px;
		height: 24px;
		background: url(/icon/ecurityCode.svg);
	}
	.my-yanz{
		position: relative;
	}
	.my-yanzheng{
		display: inline-block;
		height: 40px;
		color: rgb(255, 198, 0);
		line-height: 40px;
		position: absolute;
		right: 15%;
		top: 0;
	}
	.fonts{
		font-size: 24px;
	}
</style>