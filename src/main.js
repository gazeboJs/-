import Vue from "vue"; //导入第三方包
import AppComponent from "./component/App.vue";

// 渲染
new Vue({
	el:"#app",
	render:c=>c(AppComponent)
})