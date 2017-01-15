module.exports = {
    entry: [
        './app/app.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: './public/bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};

