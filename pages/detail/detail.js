var WxParse = require('../../wxParse/wxParse.js');

Page({
	data:{
		materialList:[],
		cookName:"",
		cookTag:"",
		cookProcess:[],
		cookPic:[]
	},
	onLoad:function(option){
		this.getCook(option.id)
	},
	getCook:function(id){
		let that = this
		wx.request({
			url:"http://127.0.0.1:3000/cook",
			data:{
				id:id,
			},
			header:{
				'content-type': 'application/json'
			},
			success:function(res){
				
				if(res.data.result.status === "0"){
					let data = res.data.result.result
					WxParse.wxParse('article', 'html', data.content, that)
					that.setData({
						cookName:data.name,
						cookPic:data.pic,
						cookTag:data.content,
						materialList:data.material,
						cookProcess:data.process
					})
				}
			}
		})
	}
})