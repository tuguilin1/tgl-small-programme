Page({
	data:{
		list:[]
	},
	onLoad:function(option){
		this.searchFood(option.name)
	},
	searchFood:function(keyword){
	    let that = this
	    wx.request({
	        url: 'http://127.0.0.1:3000/search',
	        data: {
	           	keyword:keyword,
	            num:15,
	            appkey:"a463821a7f0fe98dbc3da2055678d238"
	        },
	        header: {
	            'content-type': 'application/json'
	        },
	        success: function(res) {
	          console.log(res.data)
	          if(res.data.result.status === '0'){
	            that.setData({
	              list:res.data.result.result.list,
	            })
	          }
	        }
	 	})
	}
})