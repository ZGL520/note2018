# 插件

nodemon node开发中自动跟新修改，可全局安装，启动命令  项目下：nodemon

mongoose express MongoDB插件，使用如下

    //连接MongoDB
    mongoose.connect('mongodb://localhost/taichi', {
    // useMongoClient:true,
    useNewUrlParser: true
    })
        .then(() => {
      console.log('mongodb connected...')
    })
    .catch((error) => {
      console.log(error)
    });
    
    
    
body-parser    