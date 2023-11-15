<template>
    <div class="footer-layout-container">
        <div class="footer-layout-wrapper">
            <div class="left">
                <!-- <img src="../assets/logo.png" /> -->
                <div class="left-content">
                    <div class="img-wrapper">
                        <img src="../assets/header-logo.png"/>
                    </div>
                    <span class="btk">BTK</span>
                    <span class="web">Web3</span>
                </div>
                <div class="left-text">
                    联系我们：web3@bitlinkex.com
                </div>
            </div>
            <div class="right">
                <div class="right-about">
                    <div class="title">关于</div>
                    <div class="text">BTK META 白皮书</div>
                    <div class="text text-bottom">BTK META  审计报告</div>
                </div>
                <div class="right-support">
                    <div class="title">支持</div>
                    <div class="text">FAQ</div>
                </div>
                <div class="right-medium">
                    <div class="title">社交媒体</div>
                    <div class="text">
                        <div class="img">
                            <img src="../assets/twitter-icon.png"/>
                        </div>
                        <div class="img">
                            <img src="../assets/telegram-icon.png"/>
                        </div>
                        <div class="img">
                            <img src="../assets/facebook-icon.png"/>
                        </div>
                        <div class="img">
                            <img src="../assets/youtube-icon.png"/>
                        </div>
                        <div class="img">
                            <img src="../assets/footer-icon.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@media (min-width:959.95px) {
    .footer-layout-container{
        width: 100%;
        .footer-layout-wrapper{
            width: 100%;
            margin: 0 auto;
            padding: 80px 120px 80px 120px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid #F3F6F7;
            .left{
                display: flex;
                flex-direction: column;
                height: 97px;
                .left-content{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    font-weight: 600;
                    font-size: 27px;
                    .img-wrapper{
                        width: 41.29px;
                        height: 37.5px;
                        img{
                            width: 100%;
                        }
                    }
                    .img-wrapper{
                        cursor: pointer;
                    }
                    .btk{
                        padding-left: 15px;
                        text-align: center;
                        padding-top: 12px;
                        color: #F3BA2E;
                    }
                    .web{
                        padding-left: 5px;
                        text-align: center;
                        padding-top: 12px;
                        color: #121314;
                    }

                }
                .left-text{
                    padding-top: 24px;
                    font-weight: 400;
                    font-size: 14px;
                }
                
            }
            .right{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: 693px;
                height: 97px;
                .right-about{
                    width: 140px;
                    .title{
                        padding-bottom: 24px;
                        font-weight: 500;
                        font-size: 24px;
                    }
                    .text{
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 16px;
                        color: #121314;
                    }
                    .text-bottom{
                        padding-top: 16px;
                    }
                }
                .right-support{
                    width: 48px;
                    .title{
                        padding-bottom: 24px;
                        font-weight: 500;
                        font-size: 24px;
                    }
                    .text{
                        font-weight: 400;
                        font-size: 14px;
                    }
                }
                .right-medium{
                    width: 256px;
                    .title{
                        padding-bottom: 24px;
                        font-weight: 500;
                        font-size: 24px;
                    }
                    .text{
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        .img{
                            padding-right: 24px;
                            img{
                                width: 32px;
                                height: 32px;
                            }
                            img:hover{
                                cursor: pointer;
                            }
                        }   
                        
                    }
                }
            }
        }
    }
}
@media (max-width:959.95px) {
    .footer-layout-container{
        width: 100%;
        
        .footer-layout-wrapper{
            
        }
    }
}

</style>
