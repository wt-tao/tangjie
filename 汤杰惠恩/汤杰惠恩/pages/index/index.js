//index.js
var codes = require('../../utils/time.js')
//获取应用实例
const app = getApp()

Page({
  data: {
    isShow: false,         //默认按钮1显示，按钮2不显示
    sec: "60"
  },
 login:function(){
   wx.reLaunch({
     url: '../login/login',
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
  onLoad: function () {
   
  },
 
})
