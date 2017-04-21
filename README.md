# SimpleMockServer
简单的mock server,在后台未给出接口之间进行简单的mock。

### 版本 0.0.1版本

现学现卖的，好多没考虑到。

### 用法

要先安装好nodejs

将自己的协议输出到protocol文件夹下，格式如下：

```
        {
            "path": "/address/getAllProvinces",
            "desc":"获取可选省份",
            "method": "GET",
            "content-type":"JSON",
            "return": {
                "code": 0,
                "data": [
                    {
                        "provinceId":1,
                        "provinceName":"北京"
                    },
                    {
                        "provinceId":2,
                        "provinceName":"河南"      
                    }
               ]
            }
        },
```

修改对应的path,desc,return相关内容。

node index.js即可在终端看到对应的地址。连接测试。


### 效果图

![](https://github.com/Guolei1130/SimpleMockServer/blob/master/assets/apilist.png?raw=true)

![](https://github.com/Guolei1130/SimpleMockServer/blob/master/assets/api.png?raw=true)

![](https://github.com/Guolei1130/SimpleMockServer/blob/master/assets/console.png?raw=true)
