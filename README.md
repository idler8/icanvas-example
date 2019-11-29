# **iCanvas开发实战案例**

## 预览
[Web版在线试玩](https://idler8.github.io/icanvas-example?_blank)
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

### 核心代码库
[@icanvas/core](https://idler8.github.io/icanvas?_blank)
### 运行浏览器开发模式
```bash
#运行开发模式
rollup -c build/serve.js --watch -- target=serve dev
#等同于
npm run serve
#浏览器打开 http://localhost:8080 以手机模式查看游戏界面
```
### 进行代码开发
- 编译文件夹 build/ 放置多种游戏编译目标逻辑
  - 项目配置 build/project.json 默认映射为全局ENV.project变量
  - 开发 build/serve.js 编译为浏览器实时开发模式
  - 微信 build/wxgame.js 编译为微信包
  - 浏览器 build/web.js 编译为浏览器包
- 核心文件夹 core/ 按需设置多种游戏兼容核心
  - 浏览器 core/web.js 包含多种浏览器兼容功能
  - 微信 core/wxgame.js 包含多种微信兼容功能
  - 微信开放域 core/open.js 包含多种微信开放域专用功能
- 资源文件夹 resource/ 可以储存各种资源
  - 本地资源 resource/local 编译后储存在本地项目resource下
  - 远程资源 resource/remote 编译时上传到配置的远程路径内
- 代码文件夹 src/ 编辑游戏逻辑
  - 入口脚本文件 index.js 加载游戏启动逻辑
  - 脚本文件夹 scripts/ 存放各种业务逻辑脚本
  - 场景文件夹 scenes/ 存放多个游戏顶级场景
  - 组件文件夹 components/ 存放游戏界面可复用组件
- 代码文件夹 src.open/ 编辑微信开放域界面
  - 内部结构同上
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
