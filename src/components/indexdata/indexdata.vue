<template>
    <div>
        <!-- 二级图 -->
        <header class="banner_img">
            <!-- <img class="banner_img" src="../../assets/mengceng.png" alt=""> -->
            <!-- logo -->
            <div class="comjj">
                <img class="logos" src="../../assets/logo.png" alt="">
                <p class="companyname">成都蓬生科技有限责任公司（PengSheng Science & Techniqe CO.,LTD.）</p>
                <p>是一家集科研、开发、生产各种电线电缆检查设备为一体，以高效为依托的高科技综合性经济实体。</p>
                <p class="comzz">好雨知时节，当春乃发生，随风潜入夜，润物细无声</p>
            </div>
            <img class="banner_img_bottom" src="../../assets/mengceng1.png" alt="">
        </header>
        <article>
            <!-- 分级标题 -->
            <div>
                <div class="erjiTitle">
                    <div>产品中心</div>
                    <el-divider content-position="center" class="erjiTitle_name" style="background: initial;">Product
                    </el-divider>
                </div>
            </div>
            <!-- 产品三图 -->
            <div class="product3">
                <div>
                    <div class="devname">测径仪</div>
                    <div class="devname_en">Diameter Gauge</div>
                    <img class="devimg" src="../../assets/cejingyi.png" alt="">
                    <div class="devdes">
                        <div>· 采用先进的数字信号处理技术</div>
                        <div>· 保证对火花点计数，不重不漏</div>
                    </div>
                </div>
                <div>
                    <div class="devname">故障仪</div>
                    <div class="devname_en">Fault instrument</div>
                    <img class="devimg" src="../../assets/cejingyi.png" alt="">
                    <div class="devdes">
                        <div>· 采用先进的数字信号处理技术</div>
                        <div>· 保证对火花点计数，不重不漏</div>
                    </div>
                </div>
                <div>
                    <div class="devname">火花机</div>
                    <div class="devname_en">Spark machine</div>
                    <img class="devimg" src="../../assets/cejingyi.png" alt="">
                    <div class="devdes">
                        <div>· 采用先进的数字信号处理技术</div>
                        <div>· 保证对火花点计数，不重不漏</div>
                    </div>
                </div>
            </div>
            <!-- 分级标题 -->
            <div>
                <div class="erjiTitle">
                    <div>合作伙伴</div>
                    <el-divider content-position="center" class="erjiTitle_name" style="background: initial;">
                        cooperative partner
                    </el-divider>
                </div>
            </div>
            <!-- 地图木模块 -->
            <div class="hzpartner4">
                <div>
                    <div class="scroll-content">
                        <div>
                            <div class="mc mc1"></div>
                            <div class="mc mc2"></div>
                            <vue-seamless-scroll :data="AgentList4" class="seamless-warp" :class-option="defaultOption">
                                <div v-for="(item, index) in AgentList4" :key="index" class="scroll-item">
                                    <p class="title">{{ item.title }}</p>
                                    <div class="isj">
                                        <div class="value" v-for="(item, index) in item.b" :key="index">
                                            {{ item.company }}
                                        </div>
                                    </div>
                                </div>
                            </vue-seamless-scroll>
                        </div>
                        <!-- v-show="isshow" -->
                        <div class="isshow"  v-show="isshow">
                            <div class="mc mc1"></div>
                            <div class="mc mc2"></div>
                            <div class="datas">
                                <p class="title">{{ AgentList4[0].title }}</p>
                                <div class="isj">
                                    <div class="value" v-for="(item, index) in AgentList4[0].b" :key="index">
                                        {{ item.company }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <!-- <div class="hovers" @mouseout="enter" @mouseover="leve">
                        移进来(假装地图)
                    </div> -->
                    <div ref="chart" id='chart' class="map"></div>
                </div>

            </div>
        </article>

    </div>
</template>
<script>
    import vueSeamlessScroll from "vue-seamless-scroll/src";
    import "../../assets/china.js"; // 引入中国地图数据
    export default {
        components: {
            vueSeamlessScroll,
        },
        data() {
            return {
                isshow: false,
                AgentList4: [
                    {
                        title: "标题1",
                        id: "1",
                        des: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
                        b: [
                            { company: "中国科技" },
                            { company: "四川科技" },
                            { company: "美的间合作过" },
                            { company: "美的间合作过" },
                            { company: "美的间合egfdg电饭锅电饭锅股份的共同体威尔作过美的间合egfdg电饭锅电饭锅股份的共同体威尔作过美的间合egfdg电饭锅电饭锅股份的共同体威尔作过美的间合egfdg电饭锅电饭锅股份的共同体威尔作过美的间合egfdg电饭锅电饭锅股份的共同体威尔作过美的间合egfdg电饭锅电饭锅股份的共同体威尔作过美的间合egfdg电饭锅电饭锅股份的共同体威尔作过美的间合egfdg电饭锅电饭锅股份的共同体威尔作过美的间合egfdg电饭锅电饭锅股份的共同体威尔作过美的间合egfdg电饭锅电饭锅股份的共同体威尔作过美的间合egfdg电饭锅电饭锅股份的共同体威尔作过美的间合egfdg电饭锅电饭锅股份的共同体威尔作过" },
                            
                        ],
                    },
                    {
                        title: "标题2",
                        id: "2",
                        des: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
                        b: [
                            { company: "中国科技" },
                            { company: "四川科技" },
                            { company: "美的间合作过" },
                        ],
                    },
                    {
                        title: "标题3",
                        id: "3",
                        des: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
                        b: [
                            { company: "中国科技" },
                            { company: "四川科技" },
                            { company: "美的间合作过" },
                        ],
                    },
                    {
                        title: "标题4",
                        id: "4",
                        des: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
                        b: [
                            { company: "中国科技" },
                            { company: "四川科技" },
                            { company: "美的间合作过" },
                        ],
                    },
                    {
                        title: "标题5",
                        id: "5",
                        des: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
                        b: [
                            { company: "中国科技" },
                            { company: "四川科技" },
                            { company: "美的间合作过" },
                        ],
                    },
                    {
                        title: "标题6",
                        id: "6",
                        des: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
                        b: [
                            { company: "中国科技" },
                            { company: "四川科技" },
                            { company: "美的间合作过" },
                        ],
                    },
                ],
            }
        },
        computed: {
            // 滚动数据样式设置
            defaultOption() {
                return {
                    step: 0.5, // 数值越大速度滚动越快
                    limitMoveNum: this.AgentList4.length,//2, // 开始无缝滚动的数据量 this.dataList.length
                    hoverStop: true, // 是否开启鼠标悬停stop
                    direction: 1, // 0向下 1向上 2向左 3向右
                    openWatch: true, // 开启数据实时监控刷新dom
                    singleHeight: 26, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
                    singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
                    waitTime: 0, // 单步运动停止的时间(默认值1000ms)
                };
            },
        },
        mounted() {
            this.inits();
        },
        methods: {
            // 移入
            leve() {
                this.isshow = true;
            },
            // 移出
            enter() {
                this.isshow = false;
            },
            inits() {
                const chart2 = this.$refs.chart;
                if (chart2) {
                    const myChart = this.$echarts.init(chart2);
                    var data = [
                        {
                            name: "内蒙古",
                            id: '1',
                            itemStyle: {
                                areaColor: "#56b1da",
                            },
                        },
                        {
                            name: "四川",
                            id: '2',
                            itemStyle: {
                                areaColor: "#56b1da",
                            },
                        },
                        {
                            name: "重庆",
                            id: '3',
                            itemStyle: {
                                areaColor: "#56b1da",
                            },
                        },
                    ];
                    var option = {

                        // backgroundColor: "black",
                        geo: {
                            map: "china",
                            aspectScale: 0.8,
                            layoutCenter: ["50%", "50%"],
                            // layoutSize: "120%",
                            layoutSize: "0%",
                            itemStyle: {

                                normal: {

                                    areaColor: {
                                        type: "linear-gradient",
                                        x: 0,
                                        y: 1200,
                                        x2: 1000,
                                        y2: 0,
                                        colorStops: [
                                            {
                                                offset: 0,
                                                color: "#152E6E", // 0% 处的颜色
                                            },
                                            {
                                                offset: 1,
                                                color: "#0673AD", // 50% 处的颜色
                                            },
                                        ],
                                        global: true, // 缺省为 false
                                    },
                                    shadowColor: "#0f5d9d",
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 15,
                                    opacity: 0.5,
                                },
                                emphasis: {
                                    areaColor: "#0f5d9d",
                                },
                            },
                            regions: [
                                //    {
                                //   name: "南海诸岛",
                                //   itemStyle: {
                                //     areaColor: "rgba(0, 10, 52, 1)",
                                //     borderColor: "rgba(0, 10, 52, 1)",
                                //     normal: {
                                //       opacity: 0,
                                //       label: {
                                //         show: false,
                                //         color: "#009cc9",
                                //       },
                                //     },
                                //   },
                                //   label: {
                                //     show: false,
                                //     color: "#FFFFFF",
                                //     fontSize: 12,
                                //   },
                                // },
                            ],
                        },
                        series: [
                            {
                                type: "map",
                                // selectedMode: "multiple",//是否能多点缓存
                                mapType: "china",
                                aspectScale: 0.8,
                                layoutCenter: ["50%", "50%"], //地图位置
                                layoutSize: "80%",
                                // layoutSize: "0%",
                                zoom: 1, //当前视角的缩放比例
                                // roam: true, //是否开启平游或缩放
                                scaleLimit: {
                                    //滚轮缩放的极限控制
                                    min: 1,
                                    max: 2,
                                },
                                label: {
                                    show: false,
                                    color: "#FFFFFF",
                                    fontSize: 16,
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: "#0c3653",
                                        borderColor: "#1cccff",
                                        borderWidth: 1.8,
                                        // borderWidth: 0,
                                    },
                                    emphasis: {
                                        areaColor: "#56b1da",
                                        label: {
                                            show: true,//鼠标hover时，显示省份名称
                                            color: "#fff",
                                        },
                                    },
                                },
                                data: data,
                            },
                            {
                                name: "Top 5",
                                type: "scatter",
                                coordinateSystem: "geo",
                                //   symbol: 'image://http://ssq168.shupf.cn/data/biaoji.png',
                                // symbolSize: [30,120],
                                // symbolOffset:[0, '-40%'] ,
                                label: {
                                    normal: {
                                        // show: false,
                                    },
                                },
                                itemStyle: {
                                    normal: {
                                        color: "#56b1da", //标志颜色
                                    },
                                },
                                data: data,
                                showEffectOn: "render",
                                rippleEffect: {
                                    brushType: "stroke",
                                },
                                hoverAnimation: true,
                                zlevel: 1,
                            },
                        ],

                    };
                    myChart.on('click', function (params) {
                        console.log(params)
                        console.log(params.name)

                    })
                    myChart.on('mouseover', (params) => {
                        console.log(params)
                        console.log(params.name)
                        this.isshow = true;
                    })
                    myChart.on('mouseout', (params) => {

                        this.isshow = false;
                    })
                    myChart.setOption(option);
                }
            },

        }
    }
</script>
<style scoped>
    .banner_img {
        width: 100%;
        height: 900px;
        background: url('../../assets/mengceng.png') no-repeat;
        background-size: 100% 100%;
        position: relative;
    }

    .banner_img_bottom {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        height: 160px;
    }

    .logos {
        width: 152px;
        height: 150px;
    }

    .companyname {
        font-weight: bold;
        margin-top: 36px;
    }

    .comjj {
        line-height: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 150px;
        font-size: 22px;
        color: #2b2b2b;
    }

    .comzz {
        margin-top: 40px;
        color: #0033cc;
    }

    /* 中间模块标题 */
    .erjiTitle {
        width: 550px;
        text-align: center;
        margin: 26px auto;
    }

    .erjiTitle>div {
        font-size: 32px;
        color: #0033CC;
    }

    ::v-deep .el-divider__text.is-center {
        font-size: 22px;
        color: #949494;
        background: #F6F6F6 !important;
    }

    /* 中间模块标题 */

    /* 产品三图 */
    .product3 {
        /*==============================垂直宽度统一90%==============================*/
        width: 90%;
        height: 820px;
        margin: 0 auto 70px;
        margin-top: 60px;
        display: flex;
        justify-content: space-between;
    }

    .product3>div {
        width: 32%;
        height: 100%;
        background: #fff;
        border-radius: 10px;
        box-shadow: 4px 4px 15px #e5e5e5;
        text-align: center;
    }

    .devimg {
        width: 70%;
        margin-top: 60px;

    }

    .devname {
        font-size: 42px;
        color: #4a4a4a;
        font-weight: bold;
        margin-top: 60px;
    }

    .devname_en {
        font-size: 32px;
        color: #0066ff;
        margin-top: 34px;
    }

    .devdes {
        margin: 60px 0;
        font-size: 20px;
        line-height: 30px;
    }

    /* 滚动 */
    .scroll-content {
        height: 100%;
        width: 100%;
        overflow: hidden;
        position: relative;
        margin: 0 auto;
        /* display: flex; */
        /* justify-content: center; */
    }

    .isj {
        display: flex;
        flex-wrap: wrap;
    }

    .title {
        color: rgb(37, 160, 231);
        font-size: 20px;
    }

    .value {
        font-size: 14px;
        margin-right: 20px;
        cursor: pointer;
    }

    .mc {
        width: 100%;
    height: 150px;
    }

    .mc1 {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        background: linear-gradient(#F6F6F6, #ffffff00);
    }

    .mc2 {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 10;
        background: linear-gradient(#ffffff00, #F6F6F6);
    }

    .hovers {
        /* background: chocolate; */
        width: 160px;
        height: 160px;
        cursor: pointer;
        margin: 50px auto;
    }

    .isshow {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: #F6F6F6;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* 合作伙伴 */
    .hzpartner4 {
        width: 90%;
        display: flex;
        margin: 90px auto;
        /* height: 650px; */
        height: 500px;
        /* background: rgb(207, 134, 134); */
    }

    .hzpartner4>div {
        width: 50%;
        /* background: initial; */
        /* border: 1px solid; */
    }

    .seamless-warp {
        width: 80%;
        margin: 0 auto;
    }

    .scroll-item {
        margin-top: 20px;
        line-height: 30px;
    }

    .map {
        width: 100%;
        /* height: 376px; */
        /* height: 100vh; */
        height: 100%;
        margin: 0 auto;
    }

    .datas {
        width: 80%;
        line-height: 30px;
    }
</style>