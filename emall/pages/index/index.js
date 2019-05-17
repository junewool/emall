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
    circular: true
  },
  onLoad: function () {
    this.setData({
      swiperImages: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
        ]
    })
  }
})
