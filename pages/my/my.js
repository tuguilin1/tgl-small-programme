Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isUserShow:false
  },
  onLoad: function() {
    let that = this;
    wx.getSetting({
      success: function(res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称;
          that.setData({
            isUserShow:true
          })
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo: function(e) {
    console.log(e.detail.userInfo,2)
  }
})