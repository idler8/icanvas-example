# **iCanvas开发实战案例**

## 安装
```bash
#克隆项目到文件夹二级目录
git clone https://github.com/idler8/icanvas-example.git ./游戏开发模版/project
#进入项目目录
cd ./游戏开发模版/project
#安装插件哭库
npm install
```
## 开发
### 运行浏览器开发模式
```bash
#运行开发模式
rollup -c build/serve.js --watch -- target=serve dev
#等同于
npm run serve
#浏览器打开 http://localhost:8080 以手机模式查看游戏界面
```
### 进行代码开发

### 进行项目打包
```bash
#完整打包命令
rollup -c 打包逻辑文件 -- 打包参数

#快捷命令 打包到微信(../wxgame/) 
#可选参数dev:是否测试模式（压缩代码）
#可选参数qiniu:远程资源包版本号
#可选参数upload:本次打包是否进行上传操作（同一个资源版本只需上传一次）
#可选参数version:正式包版本号
npm run wxgame [dev] [qiniu=R1] [upload] [version=V1.0.0]

#快捷命令 打包到浏览器(../web/) 
#可选参数dev:是否测试模式（压缩代码）
npm run web [dev]
```

## 扩展
### 可以在build文件夹下补充打包模式
### 可以在core文件夹下补充新的全局核心
