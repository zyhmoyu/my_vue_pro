<template>
	<div class="app-info">
		<div class="mui-navbar-inner mui-bar mui-bar-nav">
			<button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
				<span class="mui-icon mui-icon-left-nav" @click="backe"></span>
			</button>
			<h1 class="mui-center mui-title">详情</h1>
		</div>
		<div class="mui-card" v-for="item in list" :key="item.id">
			<div class="mui-card-header mui-card-media my-dn">
				<img :src="item.avatar" />
				<div class="mui-media-body">
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
					<div v-for="im in imgs" v-if="im.id==item.id" :key="im.mid">
						<video :src="im.img" controls></video>
					</div>
				</div>
				<ul class="mui-table-view mui-grid-view mui-grid-9" v-else-if="item.intype=='img'">
					<li class="mui-table-view-cell mui-media mui-col-xs-4" v-for="im in imgs" v-if="item.id==im.id">
						<a class="my-a" href="#" >
							<img :src="im.img" />
						</a>
					</li>
				</ul>
			</div>
			<div class="mui-card-footer my-dn">
				<a><span class="mui-icon mui-icon-redo my-size my-icon" v-text="item.zl"></span></a>
				<a id="icon-chatbubble"><span class="my-icon my-size mui-icon mui-icon-chatbubble" v-text="item.pl"></span></a>
				<a><span class="my-icon my-size mui-icon-extra mui-icon-extra-like" v-text="item.likes" @click="liked"></span></a>
			</div>
		</div>
		<router-view ref="comlist"></router-view>
		<div id="blacka" @click="nblurs"></div>
		<nav class="mui-bar mui-bar-tab">
			<div class="mui-input-row" style="margin: 5px;">
				<textarea style="margin: 0;" id="textarea" rows="1" @focus="nfocus($event)" placeholder="期待您的神评论"></textarea>
				<a><span @click="postcom" class="mui-icon mui-icon-paperplane"></span></a>
			</div>
		</nav>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	export default {
		data() {
			return {
				list: [],
				imgs: [],
				cx:''
			}
		},
		//数据查询数据库
		methods: {
			getparent() {
				var iid = this.$route.query.id
				var foc = this.$route.query.foc
				this.$http.get("recommends/recommendinfo?iid=" + iid).then(result => {
					this.list = result.body.listinfo
					this.imgs = result.body.imgs
				})
				if(foc!="undefined"){
					this.onfocus()
				}
			},
			backe() {
				var url = this.$route.query.type
				this.$router.push("/Recommend?type=" + url)
			},
			onfocus(){
				var textarea = document.querySelector(".app-info .mui-bar-tab .mui-input-row textarea")
				textarea.focus()
			},
			nfocus(e){
				var blacka = document.getElementById("blacka")
				e.target.parentElement.classList.add("input-onfa-my")
				blacka.style.height ="1000px"
			},
			nblurs(){
				var textarea = document.getElementById("textarea")
				textarea.parentElement.classList.remove("input-onfa-my")
				blacka.style.height = "0px"
			},
			liked(){
				this.list[0].likes++
			},
			postcom(){
				var texta = document.getElementById("textarea")
				var content = texta.value
				var uid = sessionStorage.getItem("uid")
				var nid = this.$route.query.id
				var url = "recommends/cominfo?content="+content+"&nid="+nid+"&uid="+uid;
				this.$http.get(url).then(res=>{
					if(res.body.code==1){
						Toast("评论成功")
						texta.value = ""
						this.$refs.comlist.reqcom()
					}
				})
			}
		},
		mounted(){
			this.getparent()
		}
	}
</script>

<style>
	.app-info {
		padding: 50px 0;
	}
	#blacka{
		content: "";
		display: block;
		height: 0;
		width: 100%;
		background-color: rgba(0,0,0,.4);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
	}
	.app-info .mui-bar-nav{
		box-shadow: none;
	}
	.app-info .mui-card {
		margin: 0;
	}
	.app-info .mui-card .my-dn a>span:before{
		margin-right:5px ;
	}
	.app-info .mui-bar-tab{
		z-index: 1000;
	}
	.app-info .mui-bar-tab .mui-input-row:not(.input-onfa-my) .mui-icon-paperplane{
		display: none;
	}
	.app-info .mui-bar-tab .input-onfa-my{
		overflow: visible;
		white-space: nowrap;
		display: flex;
		position: relative;
		z-index: 101;
	}
	.app-info .mui-bar-tab .input-onfa-my:after{
		content: '';
		display: inline-block;
		height: 43px;
		width: 0px;
		position: relative;
		z-index: 200;
	}
	.app-info .mui-bar-tab .mui-icon-paperplane{
		padding: 0;
		font-size: 40px;
		color: #666;
	}
</style>