const path=require('path');
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    }
}

module:{
    rules:[{
        test:/\.css$/,
        use:[
            'style-loader',
            'css-loader'
        ]
    },
    {
        test:/\.(png|svg|jpg|gif)$/,
        use:[
            'file-loader'
        ]
    }
]
}

const HtmlWebpackPlugin = require('html-webpack-plugin');

Plugin:[
    new HtmlWebpackPlugin({
        title:'first project'
    })
]