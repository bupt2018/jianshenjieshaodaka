Page({
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545218023962&di=347789249019e0de96f3bee4a3224327&imgtype=0&src=http%3A%2F%2Fi7.hexunimg.cn%2F2014-11-24%2F170727544.jpg',
      'http://b200.photo.store.qq.com/psb?/V10yB0id3qeOZl/VVVtULFhwHiJlMM.OiN.TjSoplprif2Idal0016t6A0!/m/dM9jQ3f4AQAAnull&bo=yAAsAQAAAAAFB8E!&rf=photolist&t=5',
      'http://b350.photo.store.qq.com/psb?/V10yB0id3qeOZl/EWjJg5KfpsuOjHmS6oR6laNLzocQwsEbHKjteuektKw!/m/dH7koNDBMAAAnull&bo=qAAsAQAAAAAFB6E!&rf=photolist&t=5'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,

  },
jumpBtn: function(options){
   wx.navigateTo({
     url: '/pages/JXXL/JXXL',
   })




}

})

