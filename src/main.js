import Vue from "vue"; //导入第三方包
import AppComponent from "./component/App.vue";

new Vue({
	el:"#app",
	render:c=>c(AppComponent)
})