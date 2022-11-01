import { createApp } from 'vue'
import App from './App.vue'
// import Vue from 'vue'
// import Router from 'vue-router'


import router from './router/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as echarts from 'echarts'
// import vue3SeamlessScroll from "vue3-seamless-scroll";
// import vueSeamlessScroll from 'vue-seamless-scroll'
// Vue.use(vueSeamlessScroll)

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
// app.echarts=echarts
app.config.globalProperties.$echarts = echarts
// app.use(vue3SeamlessScroll);
// app.use(vueSeamlessScroll)
app.mount('#app')
// createApp(App).mount('#app')
