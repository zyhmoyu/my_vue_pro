<template>
	<div class="app-me">
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class="login-my">
						<a @click.prev="login" >
						<div class="text-my">
							<div class="image-my">
								<img :src="avatar" />
							</div>
							<div class="text-login">
								<h4 v-text="uname"></h4>
								<p v-if="reso==0">快登录和大家一起嗨吧</p>
							</div>
						</div>
						</a>
					</div>
					<div class="circle"></div>
				</div>
			</div>
		</div>
		<ul class="mui-table-view mui-table-view-chevron">
			<li class="mui-table-view-cell">
				<a href="#notifications" class="mui-navigate-right">
					我的评论
					<span class="mui-badge mui-badge-inverted">0</span>
				</a>
			</li>
			<li class="mui-table-view-cell">
				<a href="#privacy" class="mui-navigate-right">
					我收藏的
					<span class="mui-badge mui-badge-inverted">0</span>
					</a>
			</li>
			<li class="mui-table-view-cell">
				<a href="#general" class="mui-navigate-right">
					我赞过的
					<span class="mui-badge mui-badge-inverted">0</span>
					</a>
			</li>
		</ul>
		<ul class="mui-table-view mui-table-view-chevron">
			<li class="mui-table-view-cell">
				<a href="#notifications" class="mui-navigate-right">意见反馈</a>
			</li>
			<li class="mui-table-view-cell">
				<a href="#privacy" class="mui-navigate-right">给个好评</a>
			</li>
			<li class="mui-table-view-cell">
				<a href="#general" class="mui-navigate-right">
					版本更新
					<span class="mui-badge mui-badge-inverted">v1.4.6</span>
					</a>
			</li>
			<li class="mui-table-view-cell">
				<a href="#general" class="mui-navigate-right">
					清除缓存
					<span class="mui-badge mui-badge-inverted">0M</span>
					</a>
			</li>
			<li class="mui-table-view-cell">
				非WIFT下允许播放视频
				<div class="mui-switch mui-active mui-switch-mini">
					<div class="mui-switch-handle" @click.stop="switc($event)"></div>
				</div>
			</li>
			<li class="mui-table-view-cell">
				WIFI下自动播放视频
				<div class="mui-switch mui-active mui-switch-mini">
					<div class="mui-switch-handle" @click="switc($event)"></div>
				</div>
			</li>
		</ul>
		<button v-if="reso==1" type="button" class="mui-btn mui-btn-block login-btn signout" @click="signout">注册</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				reso:0,
				avatar:'http://127.0.0.1:3006/img/Screenshot_2018-11-05-08-01-19.png',
				uname:'登录'
			};
		},
		methods:{
			switc(e){
				var ac = e.target.parentNode.classList
				if(ac.contains("mui-active")){
					ac.remove("mui-active")
				}else{
					ac.add("mui-active")
				}
			},
			login(){
				var path = this.$route.path
				path=path.replace(/\//g,"s1",)
				this.$router.push('login/'+path)
			},
			islogin(){
				this.axios({
					url:'login/islogin',
					method:"get"
				}).then(result=>{
					var obj = result.data
					if(obj.ok == 1){
						this.uname=obj.uname;
						this.avatar=obj.avatar
						this.reso=1
						sessionStorage.setItem("uid",obj.id)
					}else{
						this.reso=0
					}
				})
			},
			signout(){
				this.axios({
					url:'login/signout',
					method:"get"
				}).then(result=>{
					this.avatar = "http://127.0.0.1:3006/img/Screenshot_2018-11-05-08-01-19.png"
					this.reso=0
					this.uname="登录";
				})
			},
			reloads(){
				this.$router.go(0)
				
			}
		},
		created() {
			this.islogin()
		}
	}
</script>

<style>
	.app-me {
		padding-bottom: 50px;
		background: #ececec;
	}
	.app-me .mui-card{
		margin: 0;
		background-image: -webkit-linear-gradient(50deg,rgb(255, 198, 0) 0%,rgb(255,228,28) 100%);
		overflow: hidden;
		margin-bottom: 10px;
	}
	.app-me .mui-card .mui-card-content .mui-card-content-inner{
		height: 190px;
		position: relative;
		padding: 0;
	}
	.app-me .mui-card .mui-card-content .mui-card-content-inner .circle{
		width: 125%;
		height: 150%;
		border-radius: 50%;
		background: #fff;
		position: absolute;
		top: 0px;
		left: 0px;
		transform: translateX(-10%) translateY(30%);
		z-index: 1;
	}
	.app-me .mui-card .mui-card-content-inner .login-my{
		position: absolute;
		top: 50px;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;
		z-index: 2;
	}
	.app-me .mui-card .mui-card-content-inner .login-my .text-my{
		position: relative;
		z-index: 20;
		
	}
	.app-me .mui-card .mui-card-content-inner .image-my{
		width:60px;
		height: 60px;
		border-radius: 50%;
		border: 1px solid #dedede;
		background: #eee;
		margin: 0 auto;
		margin-bottom: 20px;
		overflow: hidden;
	}
	.app-me .mui-card .mui-card-content-inner .image-my img{
		width: 100%;
	}

	.app-me .mui-card .mui-card-content .mui-card-content-inner .login-my .text-login{
		color: #aaa;
	}
	.app-me .mui-card .mui-card-content .mui-card-content-inner .login-my .text-login h4{
		color: #777;
	}
	.app-me .mui-table-view-chevron{
		margin-bottom: 10px;
	}
	.app-me .mui-table-view-cell .mui-switch-mini{
		background: #d8d8d8;
	}
	.app-me .mui-table-view-cell .mui-switch-mini div{
		width: 25px;
		height: 25px;
		background: #F4F4F4;
		box-shadow: none;
		margin-top: 2px;
	}
	.app-me .mui-table-view-cell .mui-switch-mini.mui-active{
		background: #FFD925;
		border-color: transparent;
	}
	.app-me .mui-table-view-cell .mui-switch-mini.mui-active div{
		background: #FFA800;
		box-shadow: none;
	}
	.signout.login-btn{
		width: 90%;
		margin: 20px auto;
		border-radius: 27px;
		background: #fff;
	}
</style>
