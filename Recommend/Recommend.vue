<template>
	<div class="app-rec my-pt-50">
		<div class="mui-card" v-for="item in list" :key="item.id">
			<div class="mui-card-header mui-card-media my-dn">
				<!--http://127.0.0.1:3006/img/ces3.jpg-->
				<img :src="item.avatar" />
				<div class="mui-media-body" @click="jumpinfo(item.id)">
					<a><span class="mui-icon mui-icon-closeempty"></span></a>
					<p v-text="item.uname"></p>
					<!--小学妹-->
				</div>
			</div>
			<div class="mui-card-content my-textarea">
				<!--50元吃出500元的感觉-->
				<p v-text="item.infotxt"></p>
			</div>
			<div class="mui-card-content">
				<!-- 用if来判断 -->
				<div v-if="item.intype=='video'">
					<div v-for="im in imgs" v-if="im.id==item.id" :key="im.index">
						<video :src="im.img" controls></video>
					</div>
				</div>
				<ul class="mui-table-view mui-grid-view mui-grid-9" v-else-if="item.intype=='img'">
					<li class="mui-table-view-cell mui-media mui-col-xs-4" v-for="im in imgs" v-if="item.id==im.id" :key="im.index">
						<a class="my-a" href="#" >
							<img :src="im.img" />
						</a>
					</li>
				</ul>
			</div>
			<div class="mui-card-footer my-dn">
				<a><span class="mui-icon mui-icon-redo my-size my-icon" v-text="item.zl" @click="zl(item.id)"></span></a>
				<a id="icon-chatbubble"><span class="my-icon my-size mui-icon mui-icon-chatbubble" v-text="item.pl" @click="jumpinfo(item.id,true)"></span></a>
				<a><span class="my-icon my-size mui-icon-extra mui-icon-extra-like" v-text="item.likes" @click="updata(item.id,item.likes)"></span></a>
			</div>
		</div>
	</div>
</template>
<script>
	import {Toast} from "mint-ui"
	export default {
		data(){
			return {
				list:[],
				imgs:[],
			}
		},
		methods:{
			resources(){
				var url = this.$route.query.type
				if(url==undefined){
					url='recommend'
				}
				this.$http.get(`recommends/recommend?type=${url}`).then(result=>{
					this.list = result.body.listinfo
					this.imgs = result.body.imgs
				})
			},
			jumpinfo(id,foc){
				var url = this.$route.query.type
				if(url == undefined){
					url="recommend"
				}
				this.$router.push("/Recommend/Recommendinfo?type="+url+"&id="+id+"&foc="+foc)
			},
			updata(id,likes){
				var uid = sessionStorage.getItem("uid")
				if(uid=="null"){
					Toast("请登录")
					return
				}else{
					var url = "recommends/liked?uptype=likes&nid="+id+"&uid="+uid
					this.axios.get(url).then(result=>{
						if(result.data.code==1){
							var up = likes+1
							this.axios.get("recommends/updatelist?update="+up+"&id="+id+"&updatetype=likes").then(res=>{
								// console.log(res)
								if(res.data.code==1){
									Toast("点赞成功")
									for(var item of this.list){
										if(item.id == id){
												item.likes++
										}
									}
								}
							})
							// 17645746545
							// 17643246545
							// 123456
						}else{
							Toast("您已点过赞了")
						}
					})
				}
			},
			zl(id){
				Toast("此功能未开发出来")
			}
		},
		created(){
			this.resources()
		}
	}
</script>

<style>
	.app-rec.my-pt-50{
		padding: 50px 0;
		background: #fff;
	}
	.mui-card-footer a{
		color: #999;
	}
	.my-icon.my-size{
		font-size: 14px;
	}
	.my-dn.mui-card-footer:before,
	.my-dn.mui-card-header:after{
		display: none;
	}
	.my-textarea p{
		color: #333;
		padding: 10px 0 0 30px;
		margin-bottom: 0;
	}
	.mui-card-header>img:first-child{
		border-radius: 50%;
	}
	.mui-media-body>a{
		float: right;
		color: #999;
	}
	.app-rec .mui-card{
		margin-left: 0;
		margin-right: 0;
	}
	.mui-card-content video{
		width: 100%;
		height: 250px;
	}
	.mui-card .mui-card-content .mui-table-view .mui-table-view-cell,
	.mui-card .mui-card-content .mui-table-view .mui-table-view-cell a.my-a{
		padding: 0;
	}
	.mui-card-content .mui-table-view .mui-table-view-cell img{
		width: 100%;
		height: 140px;
	}
	.mui-card .mui-card-content .mui-table-view .mui-table-view-cell:only-child{
		width: 100%;
	}
	.mui-card .mui-card-content .mui-table-view .mui-table-view-cell:only-child img{
		width: 100%;
	}
	.app-rec .mui-card .mui-card-footer a>span:before{
		margin-right: 8px;
	}
	
</style>
