<template>
	<div class="app-msgger">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods:{
			islogin(){
				this.axios({
					url:'login/islogin',
					method:"get"
				}).then(result=>{
					var obj = result.data
					if(obj.ok == 1){
						this.$router.push("/msg")	
					}else{
					}
				})
			}
		},
		created(){
			this.islogin()
		}
	}
</script>

<style scoped>
	body{
		background: #fff;
	}
</style>
