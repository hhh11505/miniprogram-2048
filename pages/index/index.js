//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    current: 0
  },  
  onReady: function() {
    this.load();
  },
  load: function() {
    var n = 1;
    var timer = setInterval(()=>{
      if(n == 4) {
        wx.switchTab({
          url: '../rule/index',
        })
        clearInterval(timer);
        
      }
      this.setData({
        current: this.data.current+1
      });
      if(this.data.current > 3) 
        this.setData({
          current: 0
        });
        n++;
    }, 400);
  }
})