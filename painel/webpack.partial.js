const webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.ProvidePlugin({
           $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Hammer: "hammerjs/hammer"
        }),
        new webpack.DefinePlugin({
            "VERSION": JSON.stringify("4711")
        })
    ]
}