<template>
    <div class="bac">
        <div>
            <!-- 头部 -->
            <header class="header">
                <!-- logo -->
                <img class="pslogo" src="../../assets/logo1.png" alt="pskj">
                <div>
                    <div class="menu">
                        <div>首页</div>
                        <div @mouseenter='headerMenu(2)' @mouseleave='headerOver'>公司简介</div>
                        <div @mouseenter='headerMenu(3)' @mouseleave='headerOver'>产品中心</div>
                        <div @mouseenter='headerMenu(4)' @mouseleave='headerOver'>新闻动态</div>
                        <div>联系我们</div>
                    </div>
                    <!-- 公司简介 二级 -->
                    <div class="introduction_2" v-show='bannersmenu2'>
                        <div @mouseenter='headerMenu(2)' @mouseleave='headerOver'>合作伙伴</div>
                        <div @mouseenter='headerMenu(2)' @mouseleave='headerOver'>服务保证</div>
                        <div @mouseenter='headerMenu(2)' @mouseleave='headerOver'>产品保修</div>
                        <div @mouseenter='headerMenu(2)' @mouseleave='headerOver'>服务中心</div>
                        <div @mouseenter='headerMenu(2)' @mouseleave='headerOver'>资质证明</div>
                    </div>
                    <!-- 产品中心 二级 -->
                    <div class="introduction_2 showTitle3" v-show='bannersmenu3'>
                        <div @mouseenter='headerMenu(3)' @mouseleave='headerOver'>测径仪</div>
                        <div @mouseenter='headerMenu(3)' @mouseleave='headerOver'>故障仪</div>
                        <div @mouseenter='headerMenu(3)' @mouseleave='headerOver'>火花机</div>
                        <div @mouseenter='headerMenu(3)' @mouseleave='headerOver'>配件</div>
                    </div>
                    <!-- 新闻动态 二级 -->
                    <div class="introduction_2 showTitle4" v-show='bannersmenu4'>
                        <div @mouseenter='headerMenu(4)' @mouseleave='headerOver'>行业动态</div>
                        <div @mouseenter='headerMenu(4)' @mouseleave='headerOver'>公司新闻</div>
                    </div>
                </div>
                <!-- 二级导航背景横栏 -->
                <div class="hidebox" v-show='banner_two'></div>
            </header>
            <!-- 主体 路由页面嵌套 -->
            <article>
                <router-view />
            </article>
            <footer class="footer">
                Copyright © 2014-2022 某某有限公司 版权所有 ICP备案*********号
            </footer>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                banner_two: false,
                bannersmenu2: false,
                bannersmenu3: false,
                bannersmenu4: false,
            }
        },
        methods: {
            // 顶部导航hover事件
            headerMenu(num) {
                this.banner_two = true
                if (num == 2) {
                    this.bannersmenu2 = true
                } else if (num == 3) {
                    this.bannersmenu3 = true
                } else if (num == 4) {
                    this.bannersmenu4 = true
                }
            },
            // 移出
            headerOver() {
                this.banner_two = false
                this.bannersmenu2 = false
                this.bannersmenu3 = false
                this.bannersmenu4 = false
            },
        }
    }
</script>
<style scoped>
    .bac {
        background: #F6F6F6;

    }

    .header {
        height: 100px;
        width: 100%;
        background: #003595;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;
    }

    .menu {
        display: flex;
        color: #ccc;
        font-size: 22px;
        height: 100%;
        line-height: 100px;
        position: relative;
    }

    .menu>div {
        width: 120px;
        text-align: center;
        cursor: pointer;
    }

    .menu>div:hover {
        background: #122265;
    }

    .pslogo {
        width: 240px;
        height: 60px;
    }

    .hidebox {
        width: 100%;
        height: 88px;
        position: absolute;
        bottom: -88px;
        background: #122265;
        z-index: 1;
    }

    .introduction_2 {
        position: absolute;
        height: 88px;
        bottom: -88px;
        background: #122265;
        z-index: 66;
        display: flex;
        /* justify-content: space-around; */
        text-align: center;
        line-height: 88px;
        color: #fff;
        cursor: pointer;
        font-size: 20px;
    }

    .introduction_2>div {
        width: 120px;
        height: 100%;
    }

    .introduction_2>div:hover {
        color: #ccc;
    }

    .showTitle3 {
        margin-left: 120px;
    }

    .showTitle4 {
        margin-left: 360px;
    }

    .footer {
        width: 100%;
        height: 90px;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>