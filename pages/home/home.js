// pages/home/home.js
const drawQrcode = require('../../ulits/qrcode.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
    this.getQrcode()
    setTimeout(() => {
      this.getQrcodePath()
    }, 200)

    setTimeout( () => {
      this.saveQrcodeImg()
    },200)
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

  },

  // 生成二维码 
  getQrcode() {
    drawQrcode({
      width: 200,
      height: 200,
      canvasId: 'myQrcode',
      // ctx: wx.createCanvasContext('myQrcode'),
      text: 'https://github.com/yingye',
      // v1.0.0+版本支持在二维码上绘制图
    })
    // this.getQrcodePath() 由于是异步的，需要做处理
  },  
  // 获取本地路径 
  getQrcodePath() {
    let that = this
    // 通过微信wx.canvasToTempFilePath
    wx.canvasToTempFilePath({
      x: 0, 
      y: 0, 
      width: 200, 
      height: 200,
      canvasId: 'myQrcode',
      success: function(res) {
        console.log(res.tempFilePath)
        that.setData({
          qrcodeImg: res.tempFilePath
        })
      }

    })
  },
  // 通过wx.saveImageToPhotosAlbum保存图片到本地
  saveQrcodeImg() {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.qrcodeImg,
      success: (res) => {
        console.log(res)
      }, 
      fail: (err) => {
        console.log(err)
      }
    })
  }
  
})