<template>
	<div class="app-find">
		<mt-swipe class="lunbo header-img" :auto="4000">
			<!--v-for="img in list" :key="img.id"-->
			<mt-swipe-item >
				<img src="http://127.0.0.1:3006/img/ces5.jpg" />
			</mt-swipe-item>
			<!--v-for="img in list" :key="img.id"-->
			<mt-swipe-item >
				<img src="http://127.0.0.1:3006/img/ces5.jpg" />
			</mt-swipe-item>
		</mt-swipe>
		<!--<div class="header-img">
			<img src="http://127.0.0.1:3006/img/ces5.jpg" alt="">
		</div>-->
		<h5><span>热门合辑</span></h5>
		<ul class="mui-table-view mui-table-view-chevron">
			<li class="mui-table-view-cell mui-media">
				<a class="mui-navigate-right">
					<img class="mui-media-object mui-pull-left" src="http://127.0.0.1:3006/img/ces4.jpg">
					<div class="mui-media-body">
						CBD
						<p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a class='mui-navigate-right' href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="http://127.0.0.1:3006/img/ces4.jpg">
					<div class="mui-media-body">
						远眺
						<p class='mui-ellipsis'>静静的看这个世界，最后终于疯了</p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a class="mui-navigate-right">
					<img class="mui-media-object mui-pull-left" src="http://127.0.0.1:3006/img/ces4.jpg">
					<div class="mui-media-body">
						幸福
						<p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {}
		}
	}
</script>

<style scoped="scoped">
	.app-find .header-img,
	.app-find .header-img img{
		width: 100%;
		height: 200px;
	}
	.app-find>h5{
		text-align: center;
		margin-bottom: 10px;
	}
	.app-find>h5>span:before,
	.app-find>h5>span:after{
		content: "";
		display: inline-block;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: #8f8f8f;
		vertical-align: middle;
	}
	.app-find>h5>span:before{
		margin-right: 10px;
	}
	.app-find>h5>span:after{
		margin-left: 10px;
	}
	.mui-table-view-cell:after{
		background: #dfdfdf;
	}
</style>
