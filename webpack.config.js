module.exports = {
    entry: {
        mod: './dist/mod.js',
        ucs: './dist/ucs.js'
    },
    experiments: {
        outputModule: true
    },
    mode: 'production',
    output: {
        filename: '[name].js',
        library: {
            type: 'module'
        },
        module: true,
        path: __dirname
    }
}