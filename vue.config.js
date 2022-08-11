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