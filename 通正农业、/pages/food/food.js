// pages/food/food.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sort:false,
    list: [{ id: 1, text: '火锅' }, { id: 2, text: '川菜' }, { id: 3, text: '自助餐' }, { id: 4, text: '粉面馆' }, { id: 5, text: '烧烤' }, { id: 6, text: '串串香' }, { id: 7, text: '串串香' }, { id: 8, text: '串串香' },],
    id:1,
  },
  // 详情
  business_detail: function (e) {
    wx.navigateTo({
      url: '../business_detail/business_detail?id=' + e.currentTarget.id,
    })
  },
  // 判断弹窗
  show:function(e){
    this.setData({
      ids: e.currentTarget.id
    })
    if (e.currentTarget.id==1){
      this.setData({
        sort: true,
        s1: false,
        s2: true,
      })
    }
    if (e.currentTarget.id == 2) {
      this.setData({
        sort: true,
        s1: true,
        s2: false,
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var id = options.id
    wx.setNavigationBarTitle({
      title: options.tit,
    })
  },
  list: function (e) {
    this.setData({
      id: e.currentTarget.id
    })
  },
  bindSorttap:function(){
      this.setData({
        sort: false,
      })
  },
  // 选定
  sure: function () {
    this.setData({
      sort: false,
    })
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