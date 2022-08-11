# cesium_quickstart

cesium + vue 快速入门应用

> 参考: [https://cesium.com/learn/cesiumjs-learn/cesiumjs-quickstart/](https://cesium.com/learn/cesiumjs-learn/cesiumjs-quickstart/)

## CESIUM

3D 地理空间平台

Cesium 是用于软件应用程序的开放平台，旨在释放 3D 数据的力量。

## 快速入门

#### 1. 创建项目&配置

- 创建vue项目

```
vue create cesium_quickstart
 ```

- 创建账户并获取token

略， 查看参考

- npm导入

```
// 安装cesium
npm -S i cesium
```

> 需要在服务器上托管一些静态文件, 并配置CESIUM_BASE_URL
>
> Treeshaking: 启用CesiumJS模块的tree-shaking，以便未使用的模块不包含在生产包中

```
npm install strip-pragma-loader --save-dev

# vue.config.js
const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const cesiumSource = 'node_modules/cesium/Build/Cesium'

module.exports = {
    publicPath: './',
    assetsDir: "./static",
    runtimeCompiler: true,
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                CESIUM_BASE_URL: JSON.stringify('static')
            }),
            new CopyWebpackPlugin([{from: path.join(cesiumSource, 'Workers'), to: 'static/Workers'}]),
            new CopyWebpackPlugin([{from: path.join(cesiumSource, 'Assets'), to: 'static/Assets'}]),
            new CopyWebpackPlugin([{from: path.join(cesiumSource, 'ThirdParty'), to: 'static/ThirdParty'}]),
            new CopyWebpackPlugin([{from: path.join(cesiumSource, 'Widgets'), to: 'static/Widgets'}])
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    enforce: 'pre',
                    include: path.resolve(__dirname, cesiumSource),
                    use: [{
                        loader: 'strip-pragma-loader',
                        options: {
                            pragmas: {
                                debug: false
                            }
                        }
                    }]
                }
            ]
        }
    }
}
```

#### 2. 使用cesium

> main.js

- 导入Cesium静态资产文件

```
import "cesium/Build/Cesium/Widgets/widgets.css";
```

- 设置你的access_token

```
Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2YzVlMWU5Zi1mODcwLTQzZDEtYTYwOS1hM2IyOTZkOWJkNDkiLCJpZCI6NTgxMjQsImlhdCI6MTYyMjg3OTkyM30.O7_u_MGY66QR8oJOmr1xgKHN_sd3cD2zL195HV7fRu8';
```

> App.vue

```
import {
  Viewer,
  Cartesian3
} from "cesium";

// 使用ID初始化HTML元素中的Cesium viewer。
let viewer = new Viewer("map", {
  imageryProvider: undefined,
  terrainProvider: undefined,

  // 隐藏小部件
  animation: true,
  timeline: true,
  baseLayerPicker: false,
  fullscreenButton: false,
  geocoder: false,
  homeButton: false,
  infoBox: false,
  sceneModePicker: false,
  selectionIndicator: false,
  navigationHelpButton: false,
});

// 视野跳转
viewer.camera.flyTo({
  destination : Cartesian3.fromDegrees(64.3474, 45.85465, 4500000.0),
  duration: 1,
});
```
