 //获取应用实例
 const app = getApp()
 Page({
   /**
    * 页面的初始数据
    */
   data: {
     sh: app.globalData.abc,//获取屏幕高度
     statusBarHeight:app.globalData.statusBarHeight,
     changeIndex: 0,
     videos: []  
   },
   onLoad(){
     let _that = this; 
     wx.request({
       url: 'http://10.252.211.211:8080/oss/list',
       success(rs){
            rs.data.data.forEach( (v)=>{
                  let x = {
                      id:v.id,
                      video:v.videoUrl
                  } 
                  _that.data.videos.push(x);
            });
            _that.setData({videos:_that.data.videos})
       }
     })
   },
    
   //划动切换
   slide(e) {
     this.setData({
       changeIndex: e.detail.current 
     })
   }
 })