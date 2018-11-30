// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{ id: 1, text: '味道不错' }, { id: 2, text: '干净卫生' } ,{ id: 3, text: '服务热情' } ,{ id: 4, text: '价格实惠' }],
    // ids:
    lists:[],
    star1: '',
    starMap: [
      '0',
      '1',
      '2',
      '3',
      '4',
    ],
  },
  // 点击下拉显示框
  selectTap() {
    this.setData({
      show: !this.data.show
    });
  },
  sec: function (e) {
    this.setData({
      id: e.currentTarget.id
    })
  },
    myStarChoose1(e) {
    console.log(e)
    let star1 = parseInt(e.target.dataset.star) || 0;
    this.setData({
      star1: star1,
    });
  },
  sure:function(){
    wx.navigateTo({
      url: '../share/share',
    })
  },
// 选择标签
  select_date: function (e) {
    console.log(e)
    var index = e.currentTarget.dataset.index     //数组下标
    var list = this.data.list      //数组
    var lists = this.data.lists          //选择后的数组
    list[index].checked = !list[index].checked
    if (list[index].checked == true) {
      lists.push(e.currentTarget.dataset.name)
    }
    else {
      for (var i = 0; i < lists.length; i++) {
        if (lists[i] == e.currentTarget.dataset.name) {
          // console.log('点击取消')
          lists.splice(i, 1)
          console.log('删除后', lists)
        }
      }
    }
    // var welfs = String(Welf)
    // console.log('welfs', welfs)
    this.setData({
      list: list,
      lists: lists
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      id:options.id
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