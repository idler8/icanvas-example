# **iCanvas开发实战案例**

## 预览
[Web版在线试玩(Canvas2D)](https://idler8.github.io/icanvas-example?_blank)
[Web版在线试玩(WebGL)](https://idler8.github.io/icanvas-example/webgl.html?_blank)
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
npm run serve
#等同于
rollup -c build/serve.js --watch -- target=serve dev
#浏览器打开 http://localhost:8080 以手机模式查看游戏界面
```
### 进行代码开发
- rollup打包配置 rollup.config.js
- 项目打包配置 icanvas.config.js
- 插件文件夹 plugins/
- 资源文件夹 resource/
- 代码文件夹 src/ 编辑游戏逻辑
  - 入口脚本文件 index.js 加载游戏启动逻辑
  - 场景文件夹 scenes/ 存放多个游戏顶级场景
- 代码文件夹 src.open/ 编辑微信开放域界面
  - 入口脚本文件 index.js 加载游戏启动逻辑
  - 场景文件夹 scenes/ 存放多个游戏顶级场景
### 进行项目打包
```bash
#完整打包命令

#可选参数dev:是否调试模式（压缩代码）
#可选参数target:打包目标
#可选参数webgl:是否使用webgl渲染核心
#可选参数qiniu:远程资源包版本号
#可选参数upload:本次打包是否进行上传操作（同一个资源版本只需上传一次）
#可选参数version:正式包版本号
#可选参数debug:是否打印打包参数
npm run [target] [webgl] [dev] [qiniu=R1] [upload] [version=V1.0.0] [debug]
```
