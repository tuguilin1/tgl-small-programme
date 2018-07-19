Page({
	chooseFood:function(e){
		let name = e.target.dataset.name
		if(!name){
			return
		}else{
			wx.navigateTo({
				url:`/pages/foods/foods?name=${name}`
			})
		}
	}
})