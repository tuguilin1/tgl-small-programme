//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isiconShow:true,
    placeholder:"placeholder",
    value:"",
    list:[76,225,253,296,337,236,311,2,85,309],
    food:[],
    start:0
  },
  onLoad:function(){
        this.getfood()
  },
  bindFocus:function(){
    this.setData({
      isiconShow:false,
      placeholder:"",
      iscontainerShow:false
    })
  },
  getfood:function(){
    let that = this
    wx.request({
        url: 'http://127.0.0.1:3000/classify',
        data: {
            classid:this.data.list[Math.floor(Math.random()*10)],
            start:this.data.start,
            num:20,
            appkey:"a463821a7f0fe98dbc3da2055678d238"
        },
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
          console.log(res.data)
          if(res.data.result.status === '0'){
            that.setData({
              food:that.data.food.concat(res.data.result.result.list),
              iscontainerShow:true,
            })
          }
        }
    })
    that.setData({
      start:that.data.start+20
    })
  },
  bindBlur:function(e){
    this.setData({
      value:e.detail.value
    })
    if(e.detail.value === ""){
      this.setData({
        isiconShow:true,
        placeholder:"placeholder"
      })
    }
  },
  onReachBottom:function(){
    this.getfood()
  }
})