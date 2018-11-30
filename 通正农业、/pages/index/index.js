//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [{ id: 1, name: "美食" }, { id: 2, name: "超市" }, { id: 3, name: "小吃" }, { id:4, name: "蔬菜" }, { id: 5, name: "水果" }, { id: 6, name: "停车" },],
    id:1,
    img: [{ id: 1, name: "美食", img: '../../img/tc-212-kb-2 (1).png' }, { id: 2, name: "超市", img: '../../img/tc-212-kb-2 (4).png' }, { id: 3, name: "小吃", img: '../../img/tc-212-kb-2 (3).png' }, { id: 4, name: "蔬菜", img: '../../img/tc-212-kb-2 (5).png' }, { id: 5, name: "水果", img: '../../img/tc-212-kb-2 (6).png' }, { id: 6, name: "停车", img: '../../img/tc-212-kb-2 (2).png' },],
  },
  list:function(e){
    this.setData({
      id: e.currentTarget.id
    })
  },
  food:function(e){
    wx.navigateTo({
      url: '../food/food?id=' + e.currentTarget.id + '&tit=' + e.currentTarget.dataset.tit,
    })
  },
  // 详情
  business_detail:function(e){
    wx.navigateTo({
      url: '../business_detail/business_detail?id=' + e.currentTarget.id,
    })
  },
   // 收款
  receivables: function (e) {
    wx.navigateTo({
      url: '../receivables/receivables'
    })
  },
  onLoad: function () {

  },

})
