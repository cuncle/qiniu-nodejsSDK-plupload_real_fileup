/*
 * 配置参数：配置个人的七牛账号的公钥和私钥等账户信息
 */
module.exports = {
    'ACCESS_KEY': '您的七牛个人账户私钥',   // 改为您的七牛个人账户私钥
    'SECRET_KEY': '您的七牛个人账户私钥',   // 改为您的七牛个人账户私钥
    'Bucket_Name': '您的七牛个人账户空间名',    // 改为您的七牛个人账户空间名
    'Port': 19111,                      // 端口
    'Uptoken_Url': '/api/fileupload/uptoken',     // 获取上传凭证的api路径
    'Domain': '您的七牛子域名'    // 改为您的七牛子域名，自定义域名。
        //  公共资源文件下载时则是根据绑定的自定义域名和上传时返回的key值来下载
        //  私有资源的下载需要下载凭证，和上传文件类似
    };
