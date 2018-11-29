import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import textContainer from "./components/textContainer.vue"
import HomeContainer from './components/tabbar/HomeContainer.vue';
import parent from './components/tabbar/parent.vue';
import findcom from './components/tabbar/findcom.vue'
import msgger from './components/tabbar/msgges.vue';
import msg from './components/tabbar/msg.vue';

import Recommend from './components/Recommend/Recommend.vue'
import Recommendinfo from './components/Recommend/Recommendinfo.vue'
import commentlist from './components/Recommend/commentlist.vue'

import me from './components/my/me.vue'

import login from './components/login/login.vue';
import regist from './components/login/regist.vue';

import gmmsg from './components/msgs/gmmsg.vue';
import Intermsg from './components/msgs/Intermsg.vue';


Vue.use(Router)


export default new Router({
  routes: [
	  {path:'/',component:HomeContainer,children:[
				{path:'/',component:Recommend},
			]},
		{path:'/parent',component:parent,children:[
			{path:'/',component:HomeContainer,children:[
				{path:'/',component:Recommend},
			]},
			{path:'/test',component:textContainer},
			{path:'/Home',component:HomeContainer,children:[
				{path:'/',component:Recommend},
				{path:'/Recommend',component:Recommend},
			]},
			{path:'/Home/findcom',component:findcom},
			{path:'/Home/me',component:me},
			{path:'/Home/msgger/:back',component:msgger,props:true,children:[
				{path:'/',component:login},
				{path:'/msg',component:msg,children:[
					{path:'/',component:Intermsg},
					{path:'/Intermsg',component:Intermsg},
					{path:'/gmmsg',component:gmmsg},
				]},
			]},
			{path:'/Home/login/:back',component:login,props:true},
			{path:'/Home/regist/:backc',component:regist,props:true},
		]},
		{path:'/Recommend/Recommendinfo',component:Recommendinfo,children:[
			{path:'/',component:commentlist},
			{path:'/commentlist',component:commentlist},
		]},
  ]
})
