//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperImages: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
    nav: [],
    scrollX: true,
    currentNav: "",
    toNav: "",
    distanceX: 0,
    goods: []
  }, 
  tapNav: function(e) {
    var width = wx.getSystemInfoSync().windowWidth
    var size = this.data.nav.length
    var index = e.currentTarget.dataset.index -2
    var disx = (index)*width /size
    this.setData({
      currentNav: e.currentTarget.id,
      distanceX: disx
    })
  },
  onLoad: function () {
    this.setData({
      swiperImages: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ],
      nav: [
        {id: "all", name: "全部"},
        {id: "food", name: "食品"},
        {id: "clothes", name: "服装"},
        {id: "goods", name: "日用品"},
        {id: "souvenir", name: "纪念品"},
        {id: "makeup", name: "化妆品"},
        {id: "others", name: "其他"}
      ],
      currentNav: "all",
      toNav: "makeup",
      goods: [
        { id: 1, name: "蜂蜜", image: "http://k.sinaimg.cn/n/sports/transform/20160305/GTwE-fxqafhk7443442.jpg/w5709a2.jpg", price: 11},
        { id: 2, name: "茶叶", image: "http://img1.cache.netease.com/news/2016/9/26/201609260027512b2d1.png", price: 12},
        { id: 3, name: "鸡蛋", image: "http://k.sinaimg.cn/n/sports/transform/20160305/GTwE-fxqafhk7443442.jpg/w5709a2.jpg", price: 23},
        { id: 4, name: "蕨菜", image: "http://img1.cache.netease.com/news/2016/9/26/201609260027512b2d1.png", price: 14},
        { id: 5, name: "番薯", image: "http://k.sinaimg.cn/n/sports/transform/20160305/GTwE-fxqafhk7443442.jpg/w5709a2.jpg", price: 15},
        { id: 6, name: "豌豆", image: "http://img1.cache.netease.com/news/2016/9/26/201609260027512b2d1.png", price: 16},
        { id: 7, name: "豆腐", image: "http://k.sinaimg.cn/n/sports/transform/20160305/GTwE-fxqafhk7443442.jpg/w5709a2.jpg", price: 17},
        { id: 8, name: "芹菜", image: "http://img1.cache.netease.com/news/2016/9/26/201609260027512b2d1.png", price: 18},
        { id: 9, name: "甲鱼", image: "http://k.sinaimg.cn/n/sports/transform/20160305/GTwE-fxqafhk7443442.jpg/w5709a2.jpg", price: 19}
      ]
    })
  }
})
