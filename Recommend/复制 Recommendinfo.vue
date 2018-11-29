<template>
	<div class="app-info">
		<div class="mui-navbar-inner mui-bar mui-bar-nav">
			<button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
				<span class="mui-icon mui-icon-left-nav" @click="backe"></span>
			</button>
			<h1 class="mui-center mui-title">详情</h1>
		</div>
		<div class="mui-card" v-for="item in list" :key="item.id" @click="jumpinfo(item.id,item)">
			<div class="mui-card-header mui-card-media my-dn">
				<!--http://127.0.0.1:3006/img/ces3.jpg-->
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
				<!--http://127.0.0.1:3006/video/ces.mp4-->
				<video v-if="item.infotype=='video'" :src="item.infoimg[0]" controls></video>
				<img v-else-if="item.infotype=='img'&&item.infoimg.length==1" :src="item.infoimg[0]" alt="" width="100%" />
				<ul class="mui-table-view mui-grid-view mui-grid-9" v-else-if="item.infotype=='img'&&item.infoimg.length>1">
					<li v-for="cc in item.infoimg" class="mui-table-view-cell mui-media mui-col-xs-4">
						<a class="my-a" href="#">
							<img :src="cc" />
						</a>
					</li>
				</ul>
			</div>
			<div class="mui-card-footer my-dn">
				<a><span class="mui-icon mui-icon-redo my-size my-icon" v-text="item.zl"></span></a>
				<a id="icon-chatbubble"><span class="my-icon my-size mui-icon mui-icon-chatbubble" v-text="item.pl"></span></a>
				<a><span class="my-icon my-size mui-icon-extra mui-icon-extra-like" v-text="item.like"></span></a>
			</div>
		</div>
		<router-view></router-view>
		<nav class="mui-bar mui-bar-tab">
			<div class="mui-input-row input-onfa-my" style="margin: 5px;">
				<textarea style="margin: 0;" id="textarea" rows="1" @focus="nfocus" placeholder="期待您的神评论"></textarea>
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				imgs: []
			}
		},
		//数据查询数据库
		methods: {
			getparent() {
				console.log()
				var iid = this.$route.query.id
				this.$http.get("recommends/recommendinfo?iid=" + iid).then(result => {
					console.log(result.body)
					this.list = result.body.listinfo
					this.imgs = result.body.imgs
				})
			},
			backe() {
				var url = this.$route.query.type
				this.$router.push("/Recommend?type=" + url)
			},
			nfocus(){
				console.log(1)
			}
		},
		created() {
			this.getparent()
		},
		updated(){
//			this.getparent()
		}
	}
</script>

<style>
	.app-info {
		padding: 50px 0;
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
	.app-info .mui-bar-tab .input-onfa-my{
		overflow: visible;
		white-space: nowrap;
		
	}
	.app-info .mui-bar-tab .input-onfa-my:after{
		content: "";
		display: inline-block;
		height: 43px;
		width: 50px;
		background: #000;
	}
</style>