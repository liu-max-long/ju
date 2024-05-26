// pages/food/food.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityname:"北京",
    goodsList: [],
    list: [
      {
        foodname: "美容养颜",
        image: "/images/item1.jpg",
        type: 0
      },
      {
        foodname: "保健调养",
        image: "/images/item2.jpg",
        type: 1
      },
      {
        foodname: "补养",
        image: "/images/item3.jpg",
        type: 2
      },
      {
        foodname: "减肥",
        image: "/images/item4.jpg",
        type: 3
      },
      {
        foodname: "母婴",
        image: "/images/item5.jpg",
        type: 4
      },
      {
        foodname: "气节",
        image: "/images/item6.jpg",
        type: 5
      },
      {
        foodname: "常见食疗",
        image: "/images/item7.jpg",
        type: 6
      },
      {
        foodname: "维生素",
        image: "/images/item8.jpg",
        type: 7
      },
    ],

  },
  gotoSelectCityFn() {
    wx.navigateTo({
      url: '/pages/selectCity/selectCity',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //发起请求 请求商品数据
    // wx.request({
    //   url: 'http://localhost:5000/api/foods/list',
    //   data: {
    //     city: this.data.cityname,
    //     page: 1
    //   },
    //   success: res => {
    //     console.log("商品列表");
    //     console.log(res);
    //     this.setData({
    //       goodsList: res.data.list
    //     })
    //   }
    // })
  },
  gotoTypeDetail(e) {
    console.log(e);
    wx.navigateTo({
      url: '/pages/typeDetail/typeDetail?id='+e.currentTarget.dataset.id,
    })
  },
  gotogoodsDetailFn(e){
    console.log(e);
    wx.navigateTo({
      url: '/pages/goodsDetail/goodsDetail?id='+e.currentTarget.dataset.id,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    wx.request({
      url: 'http://localhost:5000/api/foods/list',
      data: {
        city: this.data.cityname,
        page: 1
      },
      success: res => {
        console.log("商品列表");
        console.log(res);
        this.setData({
          goodsList: res.data.list
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})