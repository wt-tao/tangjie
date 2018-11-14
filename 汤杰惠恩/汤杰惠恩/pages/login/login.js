// pages/login/login.js
var codes = require('../../utils/time.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:1,
    isShow: false,         //默认按钮1显示，按钮2不显示
    sec: "60"
  },
  login:function(){
    wx.reLaunch({
      url: '../index/index',
    })
  },
  logins:function(e){
    this.setData({
      id: e.currentTarget.id
    })
  },
  main:function(){
    wx.reLaunch({
      url: '../main/main',
    })
  },
  // 发送验证码
  getCode: function () {
    var phone = this.data.phone
    console.log(phone)
    var _this = this;　　　　//防止this对象的混杂，用一个变量来保存
    var time = _this.data.sec　　//获取最初的秒数

    // if (phone == undefined || phone.length < 11) {
    //   _this.wetoast.toast({
    //     title: '请输入正确手机号',
    //     duration: 2000,
    //   })
    // } else {
      codes.getCode(_this, time);　　//调用倒计时函数
      // wx.request({
      //   url: getApp().globalData.url + '/api/Number/Get',
      //   method: "GET",
      //   header: {
      //     // 'content-type': 'application/x-www-form-urlencoded;charset=utf-8', // 默认值
      //     'content-type': 'application/json;charset=utf-8',
      //   },
      //   data: {
      //     phone: phone,
      //   },
      //   success: function (res) {
      //     console.log(res)
      

      //   }
      // })
    // }
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