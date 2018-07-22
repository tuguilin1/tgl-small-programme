//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isiconShow:true,
    placeholder:"placeholder",
    value:"",
    list:[76,225,253,297,337,236,311,2,85,309],
    food:[],
    start:0,
    isloadShow:true
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
          
          if(res.data.result.status === '0'){
            that.setData({
              food:that.data.food.concat(res.data.result.result.list),
              iscontainerShow:true,
              isloadShow:false
            })
          }
        }
    })
    that.setData({
      start:that.data.start+20
    })
  },
  bindInput:function(e){
    this.setData({
      value:e.detail.value
    })
  },
  bindBlur:function(e){
    if(e.detail.value === ""){
      this.setData({
        isiconShow:true,
        placeholder:"placeholder"
      })
    }
  },
  bindConfirm:function(){
    if(this.data.value !== ""){
      wx.navigateTo({
        url:`/pages/foods/foods?name=${this.data.value}`
      })
    }
  },
  jumpDetail:function(e){
    let id = e.target.dataset.id;
    if(id){
      wx.navigateTo({
        url:`/pages/detail/detail?id=${id}`
      })
    }
  },
  onReachBottom:function(){
    this.setData({
      isloadShow:true
    })
    this.getfood()
  }
})
