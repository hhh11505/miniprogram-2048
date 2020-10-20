//logs.js
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: ''
    })
  },
  onLoad (options) {
    var that = this
    wx.getUserInfo({
      success(res) {
        that.setData({
          userInfo:res.userInfo
        })
      }
    })
  },
  onShareAppMessage(){
    return {
      title: '2048',
      path: '/pages/index/index',
      imageUrl:'/img/logo.png'
    }
  },
  about() {
    wx.showModal({
      title: '2048小游戏',
      content: '建议和反馈请填写反馈意见栏',
      showCancel: false
    })
  }
})