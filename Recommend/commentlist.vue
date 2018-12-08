<template>
	<div class="app-comlist">
		<div class="mui-card">
			<div class="mui-card-header mui-card-media my-dn">
					<p class="listtotal">新鲜热评(<span v-text="count"></span>)</p>
			</div>
		</div>
		<div class="mui-card-content">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in comlist" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.avatar">
						<div class="mui-media-body">
							<p class='mui-ellipsis'>
								<span v-text="item.uname">幸福</span>
								<a class="redo"><span class="mui-icon mui-icon-redo"></span></a>
								<a class="like"><span class="mui-icon-extra mui-icon-extra-like" v-text="item.clike"></span></a>
							</p>
							<p class="listinfo" v-text="item.content"></p>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				comlist:[],
				count:0,
				pno:0,
			}
		},
		methods:{
			reqcom(){
				var c = this.$route.query.id
				this.$http.get('recommends/commlist?nid='+c+'&pno='+this.pno).then(result=>{
					this.comlist = result.body.comnet
					this.count = result.body.count.c
				})
			}
		},
		created(){
			this.reqcom()
		}
	}
</script>

<style>
	.app-comlist {
		padding-bottom: 50px;
	}
	.app-comlist .mui-card{
		box-shadow: none;
	}
	.app-comlist .mui-card .listtotal{
		color: #333;
		margin: 0;
	}
	.app-comlist .mui-card .listtotal:before{
		content: "";
		display: inline-block;
		width: 5px;
		height: 20px;
		background: rgb(255, 198, 0);
		vertical-align: middle;
		margin-right: 10px;
	}
	.app-comlist .mui-card-content .mui-table-view .mui-table-view-cell:after{
		display: none;
	}
	.app-comlist .mui-card-content .mui-table-view .mui-media img.mui-pull-left{
		width: 35px;
		height: 35px;
		border-radius: 50%;
	}
	.app-comlist .mui-card-content .mui-table-view .mui-media .mui-media-body p.listinfo{
		font-size: 18px;
		color: #333;
		white-space: normal;
		padding-top: 8px;
	}
	.app-comlist .mui-card-content .mui-table-view .mui-media .mui-media-body p.mui-ellipsis .mui-icon-extra:before{
		margin-right: 5px;
	}
	.app-comlist .mui-card-content .mui-table-view .mui-media .mui-media-body p.mui-ellipsis a{
		float: right;
		color: #AAAAAA;
	}
	.app-comlist .mui-card-content .mui-table-view .mui-media .mui-media-body p.mui-ellipsis a>span{
		
		font-size: 14px;
	}
	.app-comlist .mui-card-content .mui-table-view .mui-media .mui-media-body p.mui-ellipsis a.like{
		margin-right: 20px;
	}
</style>