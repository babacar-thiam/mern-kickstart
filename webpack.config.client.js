const path = require("path");
const HotModuleReplacementPlugin = require("webpack/lib/HotModuleReplacementPlugin");
const NoEmitOnErrorsPlugin = require("webpack/lib/NoEmitOnErrorsPlugin");
const CURRENT_WORKING_DIR = process.cwd();

const config = {
    name: "browser",
    mode: "development",
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(CURRENT_WORKING_DIR, 'client/src/index.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist'),
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new NoEmitOnErrorsPlugin()
    ],
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    }
}

module.exports = config;