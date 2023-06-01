const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports={
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    mode:'development',
    
    module:{
        rules:[{
            test:/\.css$/,
            use:[
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.jpe?g|png$/,
            exclude: /node_modules/,
            use: ["url-loader", "file-loader"]
        },
        {
            test:/\.(png|svg|jpg|gif)$/,
            use:[
                'file-loader'
            ]
        },
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
        {
            test:/\.(js|jsx)$/,
            exclude:/node_modules/,
            use:{
                  loader:"babel-loader",
                  options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    // plugins: ["@babel/plugin-transform-runtime"],
                    // 启用 StrictMode
                    // strictMode: true,
                  }
            }
          
        }
    ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'first project',
            template:'src/index.html'
        }),
        new CleanWebpackPlugin(),
    ]
}







