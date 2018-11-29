<template>
	<div class="app-login">
		<div class="mui-navbar-inner mui-bar mui-bar-nav">
			<button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
				<span class="mui-icon mui-icon-left-nav" @click="backe"></span>
			</button>
			<h1 class="mui-center mui-title">登录</h1>
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
						<input type="text" maxlength="11" placeholder="请输入手机号" @change="logins" v-model="phonenum">
					</div>
				<div class="mui-input-row mui-password">
						<label>
							<span class="mui-icon mui-icon-locked"></span>
						</label>
						<input type="password" placeholder="请输入密码" v-model="upwd" @change="logins">
					</div>
				<button type="button" class="mui-btn mui-btn-block login-btn" @click="plogin">登录</button>
				<button type="button" class="mui-btn mui-btn-block regist-btn" @click="registc">注册</button>
			</div>
		</div>
	</div>
</template>
<script>
	import {Toast} from 'mint-ui'
	export default {
		data(){
			return {
				phonenum:'',
				upwd:''
			}
		},
		props:["back"],
		updated(){
			this.logins()
		},
		methods:{
			logins(){
				var loginBtn = document.querySelector(".app-login .mui-card .mui-card-content .mui-btn.login-btn")
				if(this.phonenum!=""&&this.upwd!=""){
					loginBtn.classList.add("my-login")
				}else{
					if(loginBtn.className.indexOf("my-login")>-1){
						loginBtn.classList.remove("my-login")
					}
				}
			},
			backe(){
				var backs=this.$route.params.back
				    backs=backs.replace(/s1/g,"/")
				
				this.$router.push(backs)
			},
			registc(){
				var path = this.$route.path
				path=path.replace(/\//g,"s1",)
				this.$router.push('/Home/regist/'+path)
			},
			plogin(){
				var phonenum = this.phonenum
				var upwd = this.upwd
				
				this.axios({
					url:'login/plogin',
					method:'post',
					data:this.qs.stringify({phonenum,
						upwd})
					}).then(result=>{
					/*17647746545
					123456*/
					if(result.data.ok == 1){
						this.$router.push('/Home/me')
					}else{
						Toast(result.data.msg)
					}
				})
			}
		}
	}
</script>

<style>
	.app-login{
		padding: 50px 0;
	}
	.app-login .mui-bar-nav{
		background: #fff;
		box-shadow: none;
	}
	.app-login .mui-icon-left-nav{
		color: #333;
	}
	.app-login .mui-card{
		margin: 0;
		padding-top: 50px;
	}
	.app-login .mui-card .mui-card-content{
		text-align: center;
	}
	.app-login .mui-card .mui-card-content .mui-input-row{
		margin: 50px 0;
	}
	.app-login .mui-card .mui-card-content .login-img img{
		width: 200px;
	}
	.app-login .mui-card .mui-card-content .mui-btn{
		width: 70%;
		margin: 30px auto;
		border-radius: 30px;
		font-size: 20px;
	}
	.app-login .mui-card .mui-card-content .mui-btn.login-btn{
		background: #dedede;
		border: 0;
		color: #fff;
	}
	.app-login .mui-card .mui-card-content .mui-btn.login-btn.my-login{
		background: rgb(255, 198, 0);
		color: #000;
	}
	.app-login .mui-card .mui-card-content .mui-btn.regist-btn{
		color: rgb(255, 198, 0);
		border-color: rgb(255, 198, 0);
	}
</style>
