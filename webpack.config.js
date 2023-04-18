const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack")

module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js",
        publicPath:"/",
        assetModuleFilename:"assets/images/[hash][ext][query]"
    },
    resolve:{
        extensions:[".js",".jsx"],
        alias:{
            "@styles":path.resolve(__dirname,"src/styles"),
            "@pages":path.resolve(__dirname,"src/pages"),
            "@containers":path.resolve(__dirname,"src/containers"),
            "@components":path.resolve(__dirname,"src/components"),
            "@fonts":path.resolve(__dirname,"src/fonts"),
            "@images":path.resolve(__dirname,"src/images"),
            "@routes":path.resolve(__dirname,"src/routes")
        }
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:{
                    loader:"babel-loader",
                },
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:"html-loader"
                    }
                ]
            },
            {
                test:/\.(css|scss)$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(woff|woff2)$/i,  // Tipos de fuentes a incluir
                type: 'asset/resource',  // Tipo de módulo a usar (este mismo puede ser usado para archivos de imágenes)
                generator: {
                  filename: 'static/fonts/[hash][ext][query]',  // Directorio de salida
                },
            },{
                test:/ \.(png|svg|jpg|jpeg)$/i,
                type: 'asset/resource',
                generator:{
                    filename:"static/images/[hash][ext][query]"
                }
            }
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            filename:"./index.html"
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),
        new Dotenv(),
    ],
    devServer:{
        historyApiFallback:true,
        static:{
            directory:path.join(__dirname,"dist"),
        },
        compress:true,
        port:3010,
        open:true
    }
}