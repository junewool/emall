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
    toNav: ""
  }, 
  tapNav: function(e) {
    console.log(e)
    this.setData({
      currentNav: e.currentTarget.id
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
      toNav: "all"
    })
  }
})
