// pages/my_is_business/my_is_business.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  information:function(){
    wx.navigateTo({
      url: 'information/information',
    })
  },
  business_introduce: function () {
    wx.navigateTo({
      url: 'business_introduce/business_introduce',
    })
  },
  business_photo: function () {
    wx.navigateTo({
      url: 'business_photo/business_photo',
    })
  },
  business_hours: function () {
    wx.navigateTo({
      url: 'business_hours/business_hours',
    })
  },
  commission_setting: function () {
    wx.navigateTo({
      url: 'commission_setting/commission_setting',
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