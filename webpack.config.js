const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    mode: "development",

    // FOR SINGLE ENTRY POINT
    // entry: path.resolve(__dirname, "src/index.js"),

    // FOR MULTIPLE ENTRY POINT
    entry: {
        bundle: path.resolve(__dirname, "src/index.js"),
    },

    output: {
        path: path.resolve(__dirname, "dist"),

        // FOR STATIC NAME WHEN USING SINGLE ENTRY POINT
        // filename: "bundle.js",

        // FOR DYNAMIC NAME WHEN USING MULTIPLE ENTRY POINT
        // filename: "[name].js", // IT WILL PICK NAME AS bundle.js BECAUSE WE GAVE KEY bundle IN entry

        filename: "[name][contenthash].js", // IN ORDER TO AVOID CACHE PROBLEM WE ARE USING DIFFERENT HASH EACH TIME

        assetModuleFilename: "[name][ext]", // TO KEEP THE ORIGINAL FILENAME AS IT WAS

        clean: true, // CLEAR OUTPUT FOLDER THEN ADD NEW OUTPUT FILES
    },

    devtool: "source-map", // HELPFUL FOR DEBUGGING

    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"), // WHICH FILE IT SHOULD SERVE WHEN RUNNING SERVER
        },
        port: 3000,
        open: true, // WHEN RUN COMMAND OPEN BROWSER TRUE
        hot: true, // HOT RELOADING
        compress: true,
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.(sa|c|sc)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },

            {
                test: /\.(png|jpeg|jpg|svg|webp)$/i,
                type: "asset/resource",
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack",
            filename: "index.html",
            template: "src/template.html",
        }),

        new BundleAnalyzerPlugin(),
    ],
};
