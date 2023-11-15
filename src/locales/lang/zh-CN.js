import antd from 'ant-design-vue/es/locale-provider/zh_CN'
import momentCN from 'moment/locale/zh-cn'

const components = {
  antLocale: antd,
  momentName: 'zh-cn',
  momentLocale: momentCN
}

const locale = {
  'message': '-',
  'home.menu.nft-public-sale': 'NFT公售',
  'home.menu.craft': '合成',
  'home.menu.pledge': '质押',
  'home.menu.community-node': '社区节点',
  'home.banner.Welcoming-address': 'Web3世界的无限价值 等待您来探索',
  'home.early-access.title': '抢先体验Bitlink的创新之旅',
  'home.early-access.text': '携手最前沿的区块链技术，为您打造一个多维的Web3生态平台。我们的Web3生态系统不仅仅是科技的集结，更是未来的塑造与财富的重塑。',
  'home.about-btk.title': '关于BTK WEB3',
  'home.about-btk-token.title': 'BTK通证',
  'home.about-btk-token.node': '"投资、治理、收益"',
  'home.about-btk-token.text': 'BTK，一个设计精巧的通证，旨在赋予用户权力，推动生态治理的深化。它不仅是投资渠道，更是用户参与Bitlink生态决策和分享平台增长红利的关键。',
  'home.about-btk-ecosystem.title': 'NFT生态',
  'home.about-btk-ecosystem.node': '创造、交易、增值',
  'home.about-btk-ecosystem.text': '我们的NFT不仅是数字艺术和收藏品的市场，它还是一个蓬勃发展的生态系统，用户可以创造、交易和质押NFT，实现艺术价值和财富增长的共同体验。',
  'home.about-btk-pledge.title': '质押 & 挖矿',
  'home.about-btk-pledge.node': '"创新金融，自主增值"',
  'home.about-btk-pledge.text': '质押和挖矿功能的融合，为您提供了一个不断增长资产的新领域。在Bitlink，通过参与流动性挖矿和资产质押，让您能够自主地增加财富。',
  'home.route-map.title': '路线图',
  'home-route-map.second.title.first': '已完成：',
  'home-route-map.second.line.first.text1': '- BTK抢购',
  'home-route-map.second.line.first.text2': '- 白皮书发布',
  'home-route-map.second.line.first.text3': '- BitlinkWeb3网站全球上线',
  'home-route-map.second.title.second': '正在进行：',
  'home-route-map.second.line.second.text1': '- BTK IDO',
  'home-route-map.second.line.second.text2': '- DEX创建BTK交易对及流动性',
  'home-route-map.second.title.third': '即将到来：',
  'home-route-map.second.line.third.text1': '- BTK IEO',
  'home-route-map.second.line.third.text2': '- NFT项目预热',
  'home-route-map.second.title.four': '未来展望：',
  'home-route-map.second.line.four.text1': '- 推出NFT质押功能',
  'home-route-map.second.line.four.text2': '- NFT项目的预售和公售',
  'home-route-map.second.line.four.text3': '- NFT市场全面开放',
  'home-route-map.second.line.four.text4': '- 激活社区节点功能',
  'home-route-map.second.line.four.text5': '- BTK CEX 交易对开放及流动性维护',
  
}

export default {
  ...components,
  ...locale
}
