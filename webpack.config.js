module.exports = {
    entry: "./app/App.js",
    output: {
        filename: "public/bundle.js"
    },

    devServer {
        inline: true,
        port: 3333
    }
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
            {test: /\.png$/, loader: 'url', exclude: /node_modules/}
        ]
    }
};
