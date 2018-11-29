<template>
	<div class="app-home">
			<nav class="mui-bar mui-bar-tab" @click.stop.prevent="remove($event)">
				<a href="#/Recommend?type=Recommend" class="mui-tab-item first-my">
					推荐
				</a>
				<a href="#/Recommend?type=video" class="mui-tab-item">
					视频
				</a>
				<a href="#/Recommend?type=Paragraph" class="mui-tab-item">
					段子
				</a>
				<a href="#/Recommend?type=OddPhotos" class="mui-tab-item">
					趣图
				</a>
				<a href="#/Recommend?type=Expression" class="mui-tab-item">
					表情
				</a>
			</nav>
		<router-view ref="recm"></router-view>
		<a class="reload" @click.prevent.stop="refreshempty"><span class="mui-icon mui-icon-refreshempty"></span></a>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				zurl:""
			}
		},
		methods: {
			remove(e){
				var a =e.target
				var arr=a.parentElement.children
				var reult = a.className.indexOf("first-my") >-1
				
				if(!reult){
					for(var a1 of arr){
						
						if(a1.className.indexOf("first-my") >-1){
							a1.classList.remove("first-my")
						}
					}
					a.classList.add("first-my")
					var text = a.innerText
					if(text=="推荐"){
						this.$router.push("/Recommend?type=Recommend")
					}else if(text=="视频"){
						this.$router.push("/Recommend?type=video")
					}else if(text=="段子"){
						this.$router.push("/Recommend?type=Paragraph")
					}else if(text=="趣图"){
						this.$router.push("/Recommend?type=OddPhotos")
					}else if(text=="表情"){
						this.$router.push("/Recommend?type=Expression")
					}
					this.$refs.recm.resources()
				}else{
					var url = e.target.href.split("#")[1]
					this.refresh(url)
				}
			},
			//刷新
			refreshempty(){
				this.$refs.recm.resources()
			},
			refresh(url){
				this.$router.push(url)
			},
			backc(){
				var url = this.$route.query
				var i = 0
				if(url.type==undefined||url.type=='Recommend'){
					i=1
				}else if(url.type=='video'){
					i=2
				}else if(url.type=='Paragraph'){
					i=3
				}else if(url.type=='OddPhotos'){
					i=4
				}else if(url.type=='Expression'){
					i=5
				}
				this.zurl=url.type
				var c = document.querySelector(`.app-home .mui-bar-tab.mui-bar a:nth-child(${i})`)
				if(c!=null){
					var childs = c.parentElement.children
					for(var a1 of childs){
						if(a1.className.indexOf("first-my") >-1){
								a1.classList.remove("first-my")
						}
					}
					c.classList.add("first-my")
				}
			},
		},
		mounted(){
			this.backc()
		}
	}
</script>
<style scoped>
	.app-home .mui-bar-tab.mui-bar {
		top: 0;
		position: static;
		box-shadow: none;
		-webkit-box-shadow: none;
		position: fixed;
	}
	.app-home .mui-bar-tab.mui-bar .first-my,
	.app-home .mui-bar-tab.mui-bar .router-link-active {
		color: rgb(255, 198, 0);
		position: relative;
	}
	.app-home .mui-bar-tab.mui-bar .first-my:after,
	.app-home .mui-bar-tab.mui-bar .router-link-active:after {
		content: "";
		display: block;
		height: 3px;
		width: 25%;
		background: rgb(255, 198, 0);
		border-radius: 1.5px;
		margin: 0 auto;
		margin-top: 3px;
		/* position: absolute;
		bottom: 8px;
		left: 27px; */
	}

	.app-home .reload{
		display: block;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		text-align: center;
		background: #fff;
		box-shadow: 0 0 2px #333;
		position: fixed;
		bottom: 70px;
		right: 30px;
	}

	.app-home .mui-icon.mui-icon-refreshempty {
		color: rgb(255, 198, 0);
		font-size: 36px;

	}
</style>
