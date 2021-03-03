const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js",
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ]
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
};
