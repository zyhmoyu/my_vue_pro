import Vue from 'vue'
import App from './App.vue'
import router from './router'
import'mint-ui/lib/style.css'
import axios from 'axios'
Vue.config.productionTip = false
//5: 设置请求的根路径 

//6:全局设置post 时候表头的数据组织格式为 application/x-www-form-urlencoded
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
import qs from "qs"



Vue.prototype.axios = axios
Vue.prototype.qs = qs

axios.defaults.withCredentials=true
axios.defaults.baseURL = "http://127.0.0.1:3006/"
axios.defaults.headers.post["Content-Type"] = 'application/x-www-form-urlencoded'

var params = new URLSearchParams()

//引入组件mintui库的Header
import {Header,Swipe,SwipeItem,Button,Navbar,TabItem} from "mint-ui"
import vueresource from "vue-resource"
// 注册当前项目中
Vue.use(vueresource)
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Button.name,Button)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)

// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
//创建过滤器
Vue.filter("datefilter",function(val){
	var data = new Date(val)
	var y = data.getFullYear()
	var m = data.getMonth()+1
	var d = data.getDate()
	var h = data.getHours()
	var mi = data.getMinutes()
	var s = data.getSeconds()
	m = m<10?"0"+m : m
	d = d<10?"0"+d : d
	h = h<10?"0"+h : h
	mi = mi<10?"0"+mi : mi
	s = s<10?"0"+s : s
	/* m<10&&m=("0"+m)
	d<10&&d=("0"+d)
	h<10&&h=("0"+h)
	mi<10&&mi=("0"+mi)
	s<10&&s=("0"+s) */
	return `${y}-${m}-${d} ${h}:${mi}:${s}`
})
Vue.http.options.root  = "http://127.0.0.1:3006/";
Vue.http.options.emulateJSON = true;


import './lib/mui/css/icons-extra.css'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
