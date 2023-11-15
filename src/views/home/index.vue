<template>
    <div class="home-container">
        <div class="home-wrapper">
            <div class="home-banner">
                <div class="home-banner-left">
                    <div class="home-banner-left-text">
                        {{ $t('home.banner.Welcoming-address') }}
                    </div>
                </div>
                <div class="home-banner-right">
                    <div class="banner-right-1">
                            <swiper 
                                :options="swiperOption"
                            >
                                <swiper-slide>
                                    <div class="left-img">
                                        <img style="width: 220px;height: 220px; border-radius:24px;" src="../../assets/home-banner-left-1.png"/>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="left-img">
                                        <img style="width: 220px;height: 220px; border-radius:24px;" src="../../assets/home-banner-left-2.png"/>
                                    </div>
                                </swiper-slide>
                            </swiper>
                    </div>
                    <div class="banner-right-2">
                        <swiper 
                                :options="swiperOptionRight"
                            >
                                <swiper-slide>
                                    <div class="right-img">
                                        <img style="width: 220px;height: 220px; border-radius:24px;" src="../../assets/home-banner-right-1.png"/>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="right-img">
                                        <img style="width: 220px;height: 220px; border-radius:24px;" src="../../assets/home-banner-right-2.png"/>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="right-img">
                                        <img style="width: 220px;height: 220px; border-radius:24px;" src="../../assets/home-banner-right-3.png"/>
                                    </div>
                                </swiper-slide>
                            </swiper>
                    </div>
                </div>
            </div>
            <!-- <div class="home-tab">
                <div class="home-tab-wrapper">
                    <div class="tab">
                        <div class="tab-list" 
                            v-for="(item, index) in tabList" 
                            :key="index" 
                            @click="handleTabClick(index)" 
                            :class="[index == tabIndex ? 'tabActive': '']">
                            {{ item.name }}
                        </div>
                    </div>
                    <div class="content"></div>
                </div>
            </div> -->
            <div class="home-early-access">
                <div class="early-desc">
                    <img src="../../assets/early-access-icon.png"/>
                    <div class="desc">
                        <div class="title">{{ $t('home.early-access.title') }}</div>
                        <div class="text">
                            {{ $t('home.early-access.text') }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="home-about-btk">
                <div class="about-btk-top-bg">
                    <img src="../../assets/about-btk-top-bg.png"/>
                </div>
                <div class="about-btk">
                    <div class="btk-title">{{ $t('home.about-btk.title') }}</div>
                    <div class="btk-item token-bg">
                        <img src="../../assets/btk-token-icon.png"/>
                        <div class="item-content content-left">
                            <div class="item-title">{{ $t('home.about-btk-token.title') }}</div>
                            <div class="item-node">{{ $t('home.about-btk-token.node') }}</div>
                            <div class="item-text">{{ $t('home.about-btk-token.text') }}</div>
                        </div>
                    </div>
                    <div class="btk-item nft-bg">
                        <div class="item-content content-right">
                            <div class="item-title">{{ $t('home.about-btk-ecosystem.title') }}</div>
                            <div class="item-node">{{ $t('home.about-btk-ecosystem.node') }}</div>
                            <div class="item-text">{{ $t('home.about-btk-ecosystem.text') }}</div>
                        </div>
                        <img src="../../assets/nft-ecology-icon.png"/>
                    </div>
                    <div class="btk-item pledge-bg">
                        <img src="../../assets/pledge-icon.png"/>
                        <div class="item-content content-left">
                            <div class="item-title">{{ $t('home.about-btk-pledge.title') }}</div>
                            <div class="item-node">{{ $t('home.about-btk-pledge.node') }}</div>
                            <div class="item-text">{{ $t('home.about-btk-pledge.text') }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="home-route-map">
                <div class="route-map-title">路线图</div>
                <div class="route-map-steps">
                    <a-steps :current="1">
                        <template #progressDot="{ index, status, prefixCls }">
                            <a-popover>
                            <template #content>
                                <span>step {{ index }} status: {{ status }}</span>
                            </template>
                            <span :class="`${prefixCls}-icon-dot`" />
                            </a-popover>
                        </template>
                        <a-step v-for="(item, index) in stepList" :key="index" :title="item.title" :description="item.description" />
                    </a-steps>
                </div>
            </div> -->
            <div>
                <div class="home-route-map">
                    <div class="route-map-title">{{ $t('home.route-map.title') }}</div>
                    <div class="route-map-step">
                        <!-- <div class="route-map-step-title">
                            <div class="title1">
                                <div class="title-line"></div>
                                <div class="title-point"></div>
                                <div class="title-line1"></div>
                                <div class="title-point"></div>
                            </div>
                            <div class="title2">
                                <div class="title-line"></div>
                                <div class="title-point"></div>
                            </div>
                            <div class="title3">
                                <div class="title-line"></div>
                                <div class="title-point"></div>
                            </div>
                            <div class="title4">
                                <div class="title-line"></div>
                            </div>
                        </div> -->
                        <div class="route-map-step-text">
                            <div class="text1">
                                <div class="text1-tail"></div>
                                <div class="text1-icon">
                                    <span class="icon-point"></span>
                                </div>
                                <div class="text1-item">
                                    <div class="text-title">{{ $t('home-route-map.second.title.first') }}</div>
                                    <div class="text-desc">{{ $t('home-route-map.second.line.first.text1') }}<br/>{{ $t('home-route-map.second.line.first.text2') }}<br/>{{ $t('home-route-map.second.line.first.text3') }}</div>
                                </div>
                            </div>
                            <div class="text2">
                                <div class="text2-tail"></div>
                                <div class="text2-tail1"></div>
                                <div class="text2-icon">
                                    <span class="icon-point"></span>
                                </div>
                                <div class="text2-item">
                                    <div class="text-title">{{ $t('home-route-map.second.title.second') }}</div>
                                    <div class="text-desc">{{ $t('home-route-map.second.line.second.text1') }}<br/>{{ $t('home-route-map.second.line.second.text2') }}</div>
                                </div>
                            </div>
                            <div class="text3">
                                <div class="text3-tail"></div>
                                <div class="text3-tail1"></div>
                                <div class="text3-icon">
                                    <span class="icon-point"></span>
                                </div>
                                <div class="text3-item">
                                    <div class="text-title">{{ $t('home-route-map.second.title.third') }}</div>
                                    <div class="text-desc">{{ $t('home-route-map.second.line.third.text1') }}<br/>{{ $t('home-route-map.second.line.third.text2') }}</div>
                                </div>
                            </div>
                            <div class="text4">
                                <div class="text4-tail"></div>
                                <div class="text4-icon">
                                    <span class="icon-point"></span>
                                </div>
                                <div class="text4-item">
                                    <div class="text-title">{{ $t('home-route-map.second.title.four') }}</div>
                                    <div class="text-desc">{{ $t('home-route-map.second.line.four.text1') }}<br/>{{ $t('home-route-map.second.line.four.text2') }}<br/>{{ $t('home-route-map.second.line.four.text3') }}<br/>{{ $t('home-route-map.second.line.four.text4') }}<br/>{{ $t('home-route-map.second.line.four.text5') }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            tabList:[
                {
                    index: 1,
                    name: 'BTK代币概览'
                },
                {
                    index: 2,
                    name: 'NFT藏品概览'
                }
            ],
            tabIndex: 0,
            stepList:[
                {
                    index: 1,
                    title: '已完成：',
                    description: '- BTK抢购- 白皮书发布- BitlinkWeb3网站全球上线'
                },
                {
                    index: 2,
                    title: '正在进行：',
                    description: '- BTK IDO- DEX创建BTK交易对及流动性'
                },
                {
                    index: 3,
                    title: '即将到来：',
                    description: '- BTK IEO- NFT项目预热'
                },
                {
                    index: 4,
                    title: '未来展望：',
                    description: '- 推出NFT质押功能- NFT项目的预售和公售- NFT市场全面开放- 激活社区节点功能- BTK CEX 交易对开放及流动性维护'
                }
            ],
            storeImgUrl: this.$store.state.app.lang,
            swiperOption: {
                slidesPerView: 2,
                autoplay: {
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                    delay: 0
                },
                speed: 2000,
                loop: true,
                direction: 'vertical'
            },
            swiperOptionRight: {
                slidesPerView: 2,
                autoplay: {
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                    delay: 0,
                    reverseDirection: true
                },
                speed: 2000,
                loop: true,
                direction: 'vertical',
            }
        }
    },
    watch: {
        '$store.state.app.lang': {
            handler(newVal, oldVal) {
                this.storeImgUrl = newVal
            }
        }
    },
    methods: {
        handleTabClick(index) {
            this.tabIndex = index
        }
    }
}
</script>
<style lang="scss">
@media (min-width:959.95px) {
.home-container{
    width: 100%;
    height: 100%;
    .home-wrapper{
        width: 100%;
        height: 100%;
        position: relative;
        .home-banner{
            width: 100%;
            height: 498px;
            display: flex;
            flex-direction: row;
            padding: 0px 115px;
            background: url('../../assets/banner-bg.png') no-repeat;
            background-size: 100% 100%;
            .home-banner-left{
                width: 693px;
                height: 100%;
                .home-banner-left-text{
                    width: 627px;
                    height: 180px;
                    margin-top: 159px;
                    font-size: 56px;
                    line-height: 90px;
                    font-weight: 700;
                }
            }
            .home-banner-right{
                height: 100%;
                display: flex;
                flex: 1;
                flex-direction: row;
                justify-content: space-between;
                .banner-right-1{
                    height: 100%;
                    overflow: hidden;
                }
                // .banner-right-1{
                //     width: 240px;
                //     height: 100%;
                //     background: url('../../assets/home-banner-right-1.png') no-repeat;
                //     background-size: 100% 100%;
                // }
                // .banner-right-2{
                //     width: 240px;
                //     height: 100%;
                //     background: url('../../assets/home-banner-right-2.png') no-repeat;
                //     background-size: 100% 100%;
                // }
            }
        }
        .home-tab{
            width: 100%;
            height: 624px;
            padding-top: 57px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            .home-tab-wrapper{
                width: 83%;
                height: 510px;
                border: 1px solid #F3F6F7;
                border-radius: 12px;
                padding: 40px;
                .tab{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    width: 323px;
                    .tab-list{
                        width: 147px;
                        height: 42px;
                        font-weight: 700;
                        font-size: 24px;
                    }
                    .tab-list:hover{
                        cursor: pointer;
                    }
                    .tabActive{
                        color: #F3BA2E;
                        border-bottom: 2px solid #F3BA2E;
                    }
                }
                .content{
                    flex: 1;
                    border: 1px solid #F3F6F7;
                    margin-top: 20px;
                    height: 363px;
                    border-radius: 12px;
                }
            }
        }
        .home-early-access{
            padding-top: 48px;
            .early-desc{
                width: 1200px;
                height: 330px;
                background: #0D0D0D;
                margin: 0 auto;
                border-radius: 20px;
                padding-left: 37px;
                padding-top: 6px;
                display: flex;
                flex-direction: row;
                align-items: center;
                img{
                    width: 527.36px;
                    height: 317px;
                }
                .desc{
                    width: 517.79px;
                    padding-left: 48.41px;
                    .title{
                        font-weight: 500;
                        font-size: 36px;
                        color: #FFFFFF;
                    }
                    .text{
                        font-weight: 500;
                        font-size: 16px;
                        color: #81868C;
                        padding-top: 16px;
                        
                    }
                }
            }
        }
        .home-about-btk{
            padding-top: 80px;
            .about-btk{
                width: 83%;
                height: 1258px;
                margin: 0 auto;
                .btk-title{
                    font-weight: 700;
                    font-size: 40px;
                    padding-bottom: 48px;
                }
                .btk-item{
                    width: 100%;
                    height: 384px;
                    padding-left: 86px;
                    padding-right: 86px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    img{
                        width: 406.88px;
                        height: 341.98px;
                    }
                    .item-content{
                        .item-title{
                            font-weight: 700;
                            font-size: 32px;
                        }
                        .item-node{
                            font-weight: 500;
                            font-size: 20px;
                            padding-top: 20px;
                        }
                        .item-text{
                            font-weight: 400;
                            font-size: 20px;
                            color: #81868C;
                            padding-top: 20px;
                        }
                    }
                    .content-left{
                        padding-left: 40px;
                    }
                    .content-right{
                        padding-right: 40px;
                    }
                }
                .token-bg{
                    background: url('../../assets/btk-token-bg.png') no-repeat;
                    background-size: 100% 100%;
                }
                .nft-bg{
                    background: url('../../assets/nft-ecology-bg.png') no-repeat;
                    background-size: 100% 100%;
                }
                .pledge-bg{
                    background: url('../../assets/btk-token-bg.png') no-repeat;
                    background-size: 100% 100%;
                }
            }
        }
        // .home-route-map{
        //     width: 100%;
        //     height: 639px;
        //     padding: 121px  120px;
        //     .route-map-title{
        //         width: 100%;
        //         display: flex;
        //         flex-direction: row;
        //         align-items: center;
        //         justify-content: center;
        //         font-size: 32px;
        //         font-weight: 700;
        //         padding-bottom: 40px;
        //     }
        //     .route-map-steps{
        //         width: 100%;
        //         height: 257px;
        //         padding: 40px 24px 24px 24px;
        //     }
        // }
        .home-route-map{
            width: 100%;
            height: 639px;
            background: url('../../assets/home-route-map-bg-1.png') no-repeat;
            background-size: 100% 100%;
            padding: 121px  120px;
            .route-map-title{
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                font-size: 32px;
                font-weight: 700;
                padding-bottom: 40px;
            }
            .route-map-step{
                width: 100%;
                height: 257px;
                background: #FFFFFF;
                padding: 40px 24px 24px 24px;
                overflow: hidden;
                .route-map-step-title{
                    width: 100%;
                    height: 20px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    .title1{
                        width: 372px;
                        height: 4px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        background: #FFFFFF;
                        .title-line{
                            width: 70px;
                            height: 4px;
                            background: #F3BA2E;
                        }
                        .title-point{
                            width: 12px;
                            height: 12px;
                            border-radius: 50%;
                            margin: 0 3px;
                            background: #F3BA2E;
                        }
                        .title-line1{
                            width: 278px;
                            height: 4px;
                            background: #F3BA2E;
                        }
                    }
                    .title2{
                        width: 260px;
                        height: 4px;
                        background: #FFFFFF;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        .title-line{
                            width: 242px;
                            height: 4px;
                            background: #E9EFF2;
                        }
                        .title-point{
                            width: 12px;
                            height: 12px;
                            border-radius: 50%;
                            margin: 0 3px;
                            background: #E9EFF2;
                        }
                    }
                    .title3{
                        width: 260px;
                        height: 4px;
                        background: #FFFFFF;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        .title-line{
                            width: 242px;
                            height: 4px;
                            background: #E9EFF2;
                        }
                        .title-point{
                            width: 12px;
                            height: 12px;
                            border-radius: 50%;
                            margin: 0 3px;
                            background: #E9EFF2;
                        }
                    }
                    .title4{
                        width: 260px;
                        height: 4px;
                        background: #E9EFF2;
                    }
                }
                .route-map-step-text{
                    display: flex;
                    flex-direction: row;
                    .text1{
                        // width: 375px;
                        width: 25%;
                        display: flex;
                        flex-direction: column;
                        // padding-left: 55px;

                        position: relative;
                        padding-top: 20px;
                        .text1-tail{
                            position: absolute;
                            top: 0;
                            width: 100%;
                            height: 4px;
                            background: #F3BA2E;
                        }
                        .text1-icon{
                            position: absolute;
                            top: -6px;
                            width: 18px;
                            height: 18px;
                            border-radius: 50%;
                            left: 30px;
                            background: #FFFFFF;
                            z-index: 10;
                            text-align: center;
                            .icon-point{
                                display: inline-block;
                                width: 12px;
                                height: 12px;
                                border-radius: 50%;
                                background: #F3BA2E;
                            }
                        }

                        .text-title{
                            font-weight: 700;
                            font-size: 20px;
                        }
                        .text-desc{
                            padding-top: 14px;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 24px;
                        }
                    }
                    .text2{
                        // width: 260px;
                        width: 25%;
                        position: relative;
                        padding-top: 20px;

                        .text2-tail{
                            position: absolute;
                            top: 0;
                            width: 100%;
                            height: 4px;
                            background: #F3BA2E;
                        }
                        .text2-tail1{
                            position: absolute;
                            top: 0;
                            right: 0;
                            width: 85%;
                            height: 4px;
                            background: #E9EFF2;
                        }
                        .text2-icon{
                            position: absolute;
                            top: -6px;
                            width: 18px;
                            height: 18px;
                            border-radius: 50%;
                            left: 30px;
                            background: #FFFFFF;
                            z-index: 10;
                            text-align: center;
                            .icon-point{
                                display: inline-block;
                                width: 12px;
                                height: 12px;
                                border-radius: 50%;
                                background: #F3BA2E;
                            }
                        }

                        .text-title{
                            font-weight: 700;
                            font-size: 20px;
                        }
                        .text-desc{
                            padding-top: 14px;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 24px;
                        }
                    }
                    .text3{
                        // width: 260px;
                        width: 25%;
                        position: relative;
                        padding-top: 20px;
                        .text3-tail{
                            position: absolute;
                            top: 0;
                            width: 100%;
                            height: 4px;
                            background: #E9EFF2;
                        }
                        .text3-icon{
                            position: absolute;
                            top: -6px;
                            width: 18px;
                            height: 18px;
                            border-radius: 50%;
                            left: 30px;
                            background: #FFFFFF;
                            z-index: 10;
                            text-align: center;
                            .icon-point{
                                display: inline-block;
                                width: 12px;
                                height: 12px;
                                border-radius: 50%;
                                background: #E9EFF2;
                            }
                        }
                        .text-title{
                            font-weight: 700;
                            font-size: 20px;
                        }
                        .text-desc{
                            padding-top: 14px;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 24px;
                        }
                    }
                    .text4{
                        // width: 260px;
                        // padding-left: 40px;
                        width: 25%;
                        position: relative;
                        padding-top: 20px;
                        .text4-tail{
                            position: absolute;
                            top: 0;
                            width: 100%;
                            height: 4px;
                            background: #E9EFF2;
                        }
                        .text4-icon{
                            position: absolute;
                            top: -6px;
                            width: 18px;
                            height: 18px;
                            border-radius: 50%;
                            left: 30px;
                            background: #FFFFFF;
                            z-index: 10;
                            text-align: center;
                            .icon-point{
                                display: inline-block;
                                width: 12px;
                                height: 12px;
                                border-radius: 50%;
                                background: #E9EFF2;
                            }
                        }
                        .text-title{
                            font-weight: 700;
                            font-size: 20px;
                        }
                        .text-desc{
                            padding-top: 14px;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 24px;
                        }
                    }
                }
            }
        }
        // .home-route-map-e{
        //     width: 100%;
        //     height: 639px;
        //     background: url('../../assets/home-route-map-bg-e.png') no-repeat;
        //     background-size: 100% 100%;
        // }
    }
    .about-btk-top-bg{
        position: absolute;
        top: 739px;
        left: -31px;
        width: 504px;
        height: 286px;
        img{
            width: 100%;
        }
    }
}
.swiper-container{
    height: 498px!important;
}
.swiper-slide{
    padding: 20px 0px!important;
}

}

@media (max-width:959.95px) {
    .home-container{
        width: 100%;
        height: 100%;
        overflow-y: hidden;
        overflow-x: hidden;
        .home-wrapper{
            width: 100%;
            margin: 0 auto;
        }
    }
}
</style>