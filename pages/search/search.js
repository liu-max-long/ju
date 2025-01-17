// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 发起请求 请求商品数据
   
  },
  bindsskFn(e){
    wx.request({
      url: 'http://localhost:5000/api/foods/search',
      data:{
        name:e.detail.value
      },
      success:res=>{
        console.log("商品列表");
          console.log(res);
          this.setData({
            goodsList:res.data.list
          })
      }
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