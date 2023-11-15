<template>
    <div class="header-layout-container container-web">
        <div class='header-layout-left'>
            <div class="header-layout-img-wrapper" @click="gohome">
                <img src="../assets/header-logo.png"/>
            </div>
            <span class="header-layout-left-title btk">BTK</span>
            <span class="header-layout-left-title web">Web3</span>
        </div>
        <div class='header-layout-content'>
            <router-link class="item sale" :to="{ path:'/'}" >{{ $t('home.menu.nft-public-sale') }}</router-link>
            <router-link class="item craft" :to="{ path:'/'}">{{ $t('home.menu.craft') }}</router-link>
            <router-link class="item pledge" :to="{ path:'/'}">{{ $t('home.menu.pledge') }}</router-link>
            <router-link class="item node" :to="{ path:'/'}">{{ $t('home.menu.community-node') }}</router-link>
        </div>
        <div class='header-layout-right'>
            <img @click="handleLanguageChange(isActive)" src="../assets/community-icon.png"/>
            <!-- <a-select
                class="header-layout-right-select"
                v-model="languageValue"
                @change="handleLanguageChange"
            >
                <a-select-option value="zh-CN">🇨🇳</a-select-option>
                <a-select-option value="en-US">🇺🇸</a-select-option>
            </a-select> -->
        </div>
        <div class='header-layout-content-h5'>
            <div class="btn" @click="connect" v-if="!account">{{ $t('home.menu.LinkToThePurse') }}</div>
            <div class="btn account" v-else>{{account.length> 38 ? (account | getAccount) : account}}</div>
            <a-icon type="align-right" class="right-icon" @click="showDrawer"/>
        </div>
        <a-drawer
            title=""
            placement="left"
            :closable="false"
            :visible="visible"
            @close="onClose"
            
        >
        <div class='drawer-content'>
            <div class='header-layout-left h5'>
                <div class="header-layout-img-wrapper" @click="gohome">
                    <!-- <img src="../assets/logo.png"/> -->
                </div>
                <span class="header-layout-left-title">CUBE DAO</span>
            </div>
            <a class="item" @click="go('/')"  >{{ $t('home.menu.home') }}</a>
            <a class="item"  @click="go('/node/rules')" >{{ $t('home.menu.NodeCampaign') }}</a>
            <div class="item gov">{{ $t('home.menu.ProposedGovernance') }}
                <span class="soon">{{ $t('home.menu.ComingSoon') }}</span>
            </div>
            <a class="item"  @click="go('/mine/index')" >{{ $t('home.menu.mine') }}</a>
        </div>
        <a-select
                class="header-layout-right-select"
                v-model="languageValue"
                @change="handleLanguageChange"
            >
                <a-select-option value="zh-CN">🇨🇳</a-select-option>
                <a-select-option value="en-US">🇺🇸</a-select-option>
            </a-select>
        </a-drawer>
    </div>
    
</template>
<script>
import storage from 'store'
import {config} from '@/config/index'
import { hexValue } from '@ethersproject/bytes'
import { loadLanguageAsync } from '../locales/index'
export default {
    data () {
        return {
            account: '',
            visible: false,
            languageValue: 'zh-CN',
            isActive: 'zh-CN'
        }
    },
    filters: {
      getAccount(account) {
          return account.substr(0, 6) + '...' +  account.substr(38);
      }
    },
    mounted() {
        this.connect()
        setInterval(() => {
            this.connect()
        }, 5000);
    },
    methods: {
        async connect() {
            // const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            // if(ethereum.chainId !== hexValue(config.chainId) ) {
            //     this.account = 'Network Error'
            //     return
            // }
            // this.account = accounts[0].substr(0, 6) + '...' +  accounts[0].substr(38);
            // this.$store.commit('SET_ACCOUNT', accounts[0])
            // storage.set('account', accounts[0])
        },
        showDrawer() {
            this.visible = true;
        },
        onClose() {
            this.visible = false;
        },
        go(path) {
            this.visible = false;
            this.$router.push(path)
        },
        gohome() {
            this.$router.push('/')
        },
        handleLanguageChange(value) {
            if(value == 'zh-CN') {
                this.isActive = 'en-US'
                
            } else {
                this.isActive = 'zh-CN'
            }
            this.$store.commit('SET_LANGUAGE', this.isActive)
            loadLanguageAsync(this.$store.state.app.lang)
            
        }
    }
}
</script>

<style lang="scss" scoped>
@media (min-width:959.95px) {
    .header-layout-container{
        width: 100%;
        height: 64px;
        padding: 0px 24px 0px 24px;
        display: flex;
        flex-direction: row;
        align-items: center;
    .header-layout-left{
        display: flex;
        flex-direction: row;
        align-items: center;
        .header-layout-img-wrapper{
            width: 27.53px;
            height: 25px;
            img{
                width: 100%;
            }
        }
        .header-layout-img-wrapper:hover{
            cursor: pointer;
        }
        .header-layout-left-title{
            font-size: 18px;
            font-weight: 600;
            padding-top: 6px;
        }
        .btk{
            color: #F3BA2E;
            padding-left: 10px;
        }
        .web{
            color: #121314;
            padding-left: 5px;
        }
    }
    .header-layout-content{
        flex: 1;
        display: flex;
        flex-direction: row;
        color: #121314;
        align-items: center;
        .item{
            font-size: 14px;
            font-weight: 500;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            color: #121314;
            padding-left: 24px;
            padding-top: 6px;
        }
        .item:hover{
            cursor: pointer;
        }
    }
    .header-layout-content-h5 {
        display: none;
    }
    .header-layout-right{
        width: 24px;
        height: 24px;
        img{
            width: 100%
        }
        img:hover{
            cursor: pointer;
        }
    }
}
}
@media (max-width:959.95px) {
    .header-layout-container{
        width: 100%;
        height: 90px;
        display: flex;
        justify-content: space-between;
        padding-top: 16px;
    }
     .header-layout-left{
        display: flex;
        flex-direction: row;
        padding-left: 14px;
        &.h5 {
            margin-bottom: 30px;
        }
        .header-layout-img-wrapper{
            width: 30px;
            height: 32px;
            img{
                width: 100%;
            }
            margin-right: 10px;
        }
        .header-layout-left-title{
            font-size: 18px;
            font-weight: 500;
        }
    }
    .header-layout-content{
        display: none;
    }
     .btn{
        border: 1px solid #79F6F2;
        border-radius: 18px;
        // width: 80px;
        padding: 10px 18px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #75F9FB;
        font-size: 12px;
        font-weight: 600;
        color: #75F9FB;
        &.account {
            width: 140px;
        }
    }
    .btn:hover{
        cursor: pointer;
    }
    .header-layout-content-h5 {
        display: flex;
    }
    .header-layout-right{
        display: none;
    }
    .right-icon {
        padding-right: 14px;
        margin-left: 16px;
        font-size: 28px;
    }
    .ant-drawer-content {
        background-color: #07181B !important;
    }
    .drawer-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        .item{
            width: 150px;
            font-size: 14px;
            font-weight: bold;
            display: flex;
            // justify-content: center;
            align-items: center;
            color: #fff;
            position: relative;
            margin-bottom: 20px;
            &.gov {
                color: #8fa7a7!important;
                background: none;
                cursor: not-allowed !important;
            }
            .soon {
                // width: 63px;
                padding: 7px;
                height: 20px;
                background: rgba(245, 250, 125, 0.9);
                opacity: 1;
                border-radius: 18px;
                font-size: 10px;
                font-weight: 600;
                color: #07181B;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: -10px;
                right: 20px;
            }
        }
        
        .item:hover{
            cursor: pointer;
            color: #24F7FF;
        }
    }
}

</style>