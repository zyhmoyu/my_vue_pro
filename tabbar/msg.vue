<template>
	<div class="app-msg">
		<div class="mui-navbar-inner mui-bar mui-bar-nav">
			<div class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<a @click.prevent.stop="leftmove" class="mui-control-item" href="#item1mobile">
						互动
					</a>
					<a @click.prevent.stop="rightmove" class="mui-control-item" href="#item2mobile">
						系统
					</a>
				</div>
				<div id="sliderProgressBar" class="mui-slider-progress-bar mui-col-xs-4"></div>
			</div>
		</div>
		<div class="mobile">
			<router-view></router-view>	
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				Imsg:false,
				Imsglist:[],
				Gmsg:false,
				Gmsglist:[],
			}
		},
		methods:{
			leftmove(){
				var spb = document.getElementById("sliderProgressBar")
				spb.style.left=47+"px"
				this.$router.push("Intermsg")
			},
			rightmove(){
				var spb = document.getElementById("sliderProgressBar")
				spb.style.left=227+"px"
				this.$router.push("gmmsg")
			}
		}
	}
</script>

<style>
	body{
		height: 100%;
		background: #fff;
	}
	.app-msg .mui-bar{
		box-shadow: none;
		margin: 0;
	}
	#sliderProgressBar{
		background: #FFC600;
		width: 80px;
		/*47*/
		/*227px*/
		left: 47px;
		bottom: 0px;
		transition: all .3s;
	}
	.app-msg .mobile{
		margin-top: 50px;
	}
</style>