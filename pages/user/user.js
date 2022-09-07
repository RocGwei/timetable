Page({
    data:{
        userInfo:'',
    },
    onLoad()
    {
       let user= wx.getStorageSync('user');
       
    },
    login()
    {
      
       wx.getUserProfile({
         desc: '用于完善学生资料',
         success:res=>{
             let user=res.userInfo;
             //把用户信息缓存到本地
             wx.setStorageSync('user', user),
             console.log('授权成功')
            this.setData({
                userInfo:user,
             })
         },
         fail(res){
             console.log('授权失败')
         }
         
       })
    },
    //退出登录
    loginOut(){
   this.setData({
       userInfo:''
   })
    },
})
