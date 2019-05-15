<template>
    <div>
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="text">
                <div>
                    2016年，有不少山东考生报考了211高校郑州大学的部分专业，然而让他们大跌眼镜的是录取通知书竟然是其二级学院“郑州大学西亚斯国际学院”发放的。在随后的两年多时间里，有的学生家长将郑州大学告上法庭，有的则因无法退档，只好去上学，却发现自己学的专业，没有经过教育部批准。

                    如今，西亚斯国际学院已经脱离郑大成为独立的民办高校，可家长们还是搞不明白，当年报考的郑州大学，怎么就变成了民办高校呢？

                    报考郑州大学 通知书公章却是“西亚斯国际学院”

                    2016年，山东潍坊市民王先生的儿子高考成绩高出了山东省二本线70分，在查询山东省招办发放的报考指南时，他发现，作为211的郑州大学，在山东省也招收本科二批，只是在专业解释中，说办学地点在“西亚斯国际学院”。王先生认为，孩子只要能上郑大，在哪个学院上课，没有关系，报名录取后，他们一家却高兴不起来，“当时很高兴，但是我收到录通知书，打开一看，里边的通知书是郑州大学西亚斯国际学院发放的，他的抬头和公章，内容都是西亚斯国际学院，我一看这就不对了。因为我根本就没有报这个学校，我报的是郑大。怎么发这个学校呢？”

                    录取专业不在教育部批准范围内

                    王先生再三向山东省招办确认，孩子的确是被郑州大学录取的，录取专业为“通信工程(办学地点：郑州大学西亚斯国际学院)”，而西亚斯国际学院，虽然是教育部批准的中外合作办学机构，当年却不具有法人资格，不能独立招生，更不能独立发放录取通知书，查询教育部网站，王先生更是发现，西亚斯学院虽然经过批准，却只能招收工商管理、国际金融、英语等六个专业，这其中，并没有孩子报名的“通信工程”。王先生认为：“我们报的是郑州大学，应该由郑州大学发文书，在2016年全国高考招生工作规定上有明确的规定，这个是他违法的一个关键点了。西亚斯国际学院只招六个专业，其中没有通信工程专业，它只是一个办学地点，只是一个上课的地方。”
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "swiperText",
        components: {
            swiper,
            swiperSlide
        },
        data(){
            return {
                swiperOption: {
                    direction: 'vertical',
                    slidesPerView: 'auto',
                    freeMode: true,
                    mousewheel: true
                }
            }
        },
    }
</script>

<style scoped>
    .swiper {
        height: 300px;
        overflow: hidden;
    }
    .text {
        font-size: 18px;
        text-align: left;
        padding: 30px;
        height: auto;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
</style>
