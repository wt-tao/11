// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
    save:function(){
      var that = this
    
      //将canvas画布转化为图片
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: that.data.windowWidth,
        height: that.data.windowWidth * that.data.scale,
        destWidth: that.data.windowWidth * 4,
        destHeight: that.data.windowWidth * 4 * that.data.scale,
        canvasId: 'canvas',
        success: function (res) {
          console.log('朋友圈分享图生成成功:' + res.tempFilePath)
          // wx.previewImage({
          //   current: res.tempFilePath, // 当前显示图片的http链接
          //   urls: [res.tempFilePath] // 需要预览的图片http链接列表
          // })
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
        success: function (res) {
          console.log(res)
          wx.showModal({
            content: '图片已保存到相册，赶紧晒一下吧~',
            showCancel: false,
            confirmText: '好的',
            confirmColor: '#333',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定');
                /* 该隐藏的隐藏 */
                // that.setData({
                //   hidden: true
                // })
              }
            }
          })
        }
      })
        },
        fail: function (err) {
          console.log('失败')
          console.log(err)
        }
      })
     

    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({
      success: res => {
        console.log(res);
        that.setData({
          Width: res.screenWidth,
          Height: res.screenHeight
        })
        console.log(that.data.Width)
      }
    })
    var width = that.data.Width
    var height = that.data.Height
    var bgimg = '../../img/tc-212-kb-2 (5).png'
    var xx = '../../img/pjxx_kb.png'
    var cat = wx.createCanvasContext('canvas')
    cat.setFillStyle('white')
    cat.fillRect(0, 0, width / 0.2, height/0.2)
    cat.drawImage(bgimg, 0, 0, width / 1.44, height / 4)

    // 画星星
    cat.drawImage(xx, 10, height / 4.6, 15, 15, )
    cat.drawImage(xx, 26, height / 4.6, 15, 15, )
    cat.drawImage(xx, 42, height / 4.6, 15, 15, )
    cat.drawImage(xx, 58, height / 4.6, 15, 15, )
    cat.drawImage(xx, 74, height / 4.6, 15, 15, )

    cat.setFontSize('15')
    cat.setTextAlign('left')    // 文字左对齐
    cat.setFillStyle('#fff')  // 文字颜色：黑色
    cat.fillText("5.0分", 100, height / 4.25)
    cat.save()

    // 画头像
    cat.beginPath();
    cat.arc(width/10.5, height / 3.2, 30, 0, 2 * Math.PI);
    cat.stroke();
    //使用clip() 方法从原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内
    cat.clip()
    cat.drawImage(xx, width / 8 - 0.08 * width, height / 3.5, 0.10 * width, 0.10 * width)
    cat.restore()

    // 画昵称
    cat.setFontSize('13')
    cat.setTextAlign('left')    // 文字左对齐
    cat.setFillStyle('#000')  // 文字颜色：黑色
    cat.fillText("这是昵称", 80, height / 3.1)

    // 画想法
    cat.setFontSize('13')
    cat.setTextAlign('left')    // 文字左对齐
    cat.setFillStyle('#000')  // 文字颜色：黑色
    cat.fillText("吃过", 180, height / 3.1)

    // 画内容
    var text = '这是一段文字用于文本自动换行文本长度自行设置欢迎大家指出缺陷';//这是要绘制的文本
    var chr = text.split("");//这个方法是将一个字符串分割成字符串数组
    var temp = "";
    var row = [];
    cat.setFontSize(13)
    cat.setFillStyle("#999")
    for (var a = 0; a < chr.length; a++) {
      if (cat.measureText(temp).width < width/1.8) {
        temp += chr[a];
      }
      else {
        a--; //这里添加了a-- 是为了防止字符丢失，效果图中有对比
        row.push(temp);
        temp = "";
      }
    }
    row.push(temp);

    //如果数组长度大于2 则截取前两个
    if (row.length > 2) {
      var rowCut = row.slice(0, 2);
      var rowPart = rowCut[1];
      var test = "";
      var empty = [];
      for (var a = 0; a < rowPart.length; a++) {
        if (cat.measureText(test).width < 220) {
          test += rowPart[a];
        }
        else {
          break;
        }
      }
      empty.push(test);
      var group = empty[0] + "..."//这里只显示两行，超出的用...表示
      rowCut.splice(1, 1, group);
      row = rowCut;
    }
    for (var b = 0; b < row.length; b++) {
      cat.fillText(row[b], 10, height / 2.6 + b * 30, height / 2.2);
    }

    // 画虚线
    cat.setStrokeStyle("#cccccc")//设置线条的颜色
    cat.setLineWidth(1)//设置线条宽度
    function drawDashLine(ctx, x1, y1, x2, y2, dashLength) {  //传cat对象，始点x和y坐标，终点x和y坐标，虚线长度
      var dashLen = dashLength === undefined ? 3 : dashLength,
        xpos = x2 - x1, //得到横向的宽度;
        ypos = y2 - y1, //得到纵向的高度;
        numDashes = Math.floor(Math.sqrt(xpos * xpos + ypos * ypos) / dashLen);
      //利用正切获取斜边的长度除以虚线长度，得到要分为多少段;
      for (var i = 0; i < numDashes; i++) {
        if (i % 2 === 0) {
          cat.moveTo(x1 + (xpos / numDashes) * i, y1 + (ypos / numDashes) * i);
          //有了横向宽度和多少段，得出每一段是多长，起点 + 每段长度 * i = 要绘制的起点；
        } else {
          cat.lineTo(x1 + (xpos / numDashes) * i, y1 + (ypos / numDashes) * i);
        }
      }
      cat.stroke();
    }

    drawDashLine(cat, 10, height / 2.2, width / 1.43, height / 2.2, 5);//横向虚线

    //绘制二维码
    cat.drawImage(xx, 10, height / 2.15, 80, 80)

    // 识别text
    cat.setFontSize('13')
    cat.setTextAlign('left')    // 文字左对齐
    cat.setFillStyle('#999')  // 文字颜色：黑色
    cat.fillText("长按识别二维码", 100, height / 1.97)


    cat.setFontSize('13')
    cat.setTextAlign('left')    // 文字左对齐
    cat.setFillStyle('#999')  // 文字颜色：黑色
    cat.fillText("查看商家", 100, height / 1.85)


    cat.draw()

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