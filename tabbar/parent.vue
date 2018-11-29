<template>
 <div class="app-container">
    <router-view></router-view>
	<nav class="mui-bar mui-bar-tab">
		<router-link to="/Home" class="mui-tab-item">
			<span class="mui-icon mui-icon-home"></span>
			<span class="mui-tab-label">首页</span>
		</router-link>
		<router-link to="/Home/findcom" class="mui-tab-item">
			<span class="mui-icon  mui-icon-search"></span>
			<span class="mui-tab-label">发现</span>
		</router-link>
		<a to="#" class="mui-tab-item" @click="jumpmsg($event)">
			<span class="mui-icon mui-icon-chat">
				<!--<span class="mui-badge">0</span>-->
			</span>
			<span class="mui-tab-label">消息</span>
		</a>
		<router-link class="mui-tab-item" to="/Home/me">
			<span class="mui-icon mui-icon-contact"></span>
			<span class="mui-tab-label">我的</span>
		</router-link>
	</nav>
 </div>
</template>
<script>
	export default{
		data(){
			return{}
		},
		methods:{
			jumpmsg(e){
				e.preventDefault()
				var c = this.$route.path
				c= c.replace(/\//g,"s1")
				this.$router.push('/Home/msgger/'+c)
			}
		}
	}
</script>
<style scoped="scoped">
	.router-link-exact-active{
		color: rgb(255, 198, 0);
	}
	body{
		height: 100%;
	}
</style>