// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityId:null,  // 城市ID 
    moiveList:[],  // 存放城市电影数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  // 处理事件
  // 获取input框的值
  getValue(value){
    // console.log(value.detail.value)
    this.setData({
      cityId:value.detail.value
    })
  },
  change() {
    console.log(this.data.cityId)
    this.getInfo(this.data.cityId,(res)=>{
      // console.log(res)
      // 作出事件处理的后判断 
      if (res.statusCode === 200) {
        this.data.moiveList = res.data.data.comingList
      }
    })
  },
  // change2(e) {
  //   console.log(e)
  // },
  // change3(e) {
  //   console.log(e)
  // },
  getInfo(id,cb) {
    wx.request({
      url: 'http://39.97.33.178/api/movieComingList?cityId='+id, // 仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // console.log(res.data)
        cb(res)
      },
      error(err){
        console.log(err)
      }
    })
  }
})