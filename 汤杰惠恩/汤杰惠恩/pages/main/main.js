// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{ id: 1, img: '../../img/gdwj@3x (2).png' }, { id: 2, img: '../../img/gdwj@3x (3).png' }]
  },
  list:function(e){
    wx.navigateTo({
      url: '../investigation/investigation',
    })
  },
  list1:function(){
    wx.navigateTo({
      url: '../allInvestigation/allInvestigation',
    })
  },
  myPresentation:function(){
    wx.navigateTo({
      url: '../myPresentation/myPresentation',
    })
  },
  user:function(){
    wx.navigateTo({
      url: '../user/user',
    })
  },
  doctor:function(){
    wx.navigateTo({
      url: '../doctor/doctor',
    })
  },
  product_detail:function(e){
    wx.navigateTo({
      url: '../product_detail/product_detail?id=' + e.currentTarget.id,
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