const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const proxyReqHeaders = {
//     Cookie: 'UUAP_TRACE_TOKEN=1f353a0c4aaa5b8b90d6d58b731e8ed1; jsdk-uuid=733d4d88-b771-4d75-80f2-51656f619acc; jsdk-uuid=733d4d88-b771-4d75-80f2-51656f619acc; lang=zh-CN; SECURE_UUAP_P_TOKEN_OFFLINE=PT-872505755027869696-94SQxQfbmV-beta; UUAP_P_TOKEN_OFFLINE=PT-872505755027869696-94SQxQfbmV-beta; UUAP_TRACE_TOKEN_OFFLINE=1f353a0c4aaa5b8b90d6d58b731e8ed1; SECURE_UUAP_P_TOKEN=PT-875343903436738560-zAWYQqhIH7-uuap; UUAP_P_TOKEN=PT-875343903436738560-zAWYQqhIH7-uuap; UUAP_S_TOKEN=ST-875347542532210689-9auPY-uuap; BSG_B_TOKEN=0u4RT7gOddx9tLVTFmzQCOMw2CgGGZMTJBzwu0Rfl9A6OXsI1KTBabZ0J9X7rblLpeD61jUJx6ijIN1znjDm4DaQ0q6/y/EGXgbU670c6UM=; SECURE_BSG_B_TOKEN=0u4RT7gOddx9tLVTFmzQCOMw2CgGGZMTJBzwu0Rfl9A6OXsI1KTBabZ0J9X7rblLpeD61jUJx6ijIN1znjDm4DaQ0q6/y/EGXgbU670c6UM=; bdWikiBusinessUserGuid=Qb7S2VcD3L; jsdk-user=vrO2fazm5YQk6bs/VA59OA==; wizWikiCookieToken=DK-2m1XG0w4TS_OI_GoOCXVJ; RT="z=1&dm=baidu-int.com&si=d270f52d-47c5-47c8-95f6-e683c39e0296&ss=lje7xp9o&sl=8&tt=ct&bcn=https://fclog.baidu.com/log/weirwood?type=perf&ld=lmu8&nu=1edqsbx3t&cl=ng7y"',
//     Origin: 'https://ku.baidu-int.com',
//     Host: 'ku.baidu-int.com',
//     Referer: 'https://ku.baidu-int.com/home/fengyongjun'
// };
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    mode:'development',
    // devServer:{
    //     proxy: {
    //         'https://ku.baidu-int.com/knowledge/': { //用于定义哪些请求需要被代理
    //             target:'https://ku.baidu-int.com',//此处是目标主机（域名或ip）
    //             changeOrigin: true, //target为域名的话，需要这个  
    //             onProxyReq: (proxyReq, req, res) => {
    //                 if (proxyReqHeaders) {
    //                     for (const key in proxyReqHeaders) {
    //                         proxyReq.setHeader(key, proxyReqHeaders[key]);
    //                     }
    //                 }
    //             }
    //         },
    //     },
    //     static:path.resolve(__dirname,'src'),
        
    // },

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







