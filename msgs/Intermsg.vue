<template>
	<div class="app-intermsg">
		<div id="item1mobile" class="mui-slider-item mui-control-content mui-active">
			<div class="mui-scroll" v-if="list.length>0">
				<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						第一个选项卡子项-1
					</li>
					<li class="mui-table-view-cell">
						第一个选项卡子项-2
					</li>
				</ul>
			</div>
			<div class="nomsg" v-else>
				<img src="http://127.0.0.1:3006/img/msgkong.PNG"/>
				<p>暂时没有消息用哦</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[]
			}
		}
	}
</script>

<style>
	.nomsg{
		background: #fff;
		text-align: center;
		padding-top: 50px;
	}
</style>