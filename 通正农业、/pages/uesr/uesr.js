// pages/uesr/uesr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  fans:function(){
    wx.navigateTo({
      url: '../fans/fans',
    })
  },
  my_income: function () {
    wx.navigateTo({
      url: '../my_income/my_income',
    })
  },
  my_bill: function () {
    wx.navigateTo({
      url: '../my_bill/my_bill',
    })
  },
  my_collection: function () {
    wx.navigateTo({
      url: '../my_collection/my_collection',
    })
  },
  my_comment: function () {
    wx.navigateTo({
      url: '../my_comment/my_comment',
    })
  },
  my_share: function () {
    wx.navigateTo({
      url: '../my_share/my_share',
    })
  },
  my_is_business:function(){
    wx.navigateTo({
      url: '../my_is_business/my_is_business',
    })
  },
  customer_phone: function () {
    wx.navigateTo({
      url: '../customer_phone/customer_phone',
    })
  },
  feedback: function () {
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})