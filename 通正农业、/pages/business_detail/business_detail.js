// pages/business_detail/business_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  business_introduce:function(e){
    wx.navigateTo({
      url: '../business_introduce/business_introduce',
    })
  },
  comment_detail: function (e) {
    wx.navigateTo({
      url: '../comment_detail/comment_detail',
    })
  },
  comment: function (e) {
    wx.navigateTo({
      url: '../comment/comment?id=' + e.currentTarget.id,
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