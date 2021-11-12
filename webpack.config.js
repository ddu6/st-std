module.exports = {
    entry: {
        ucs: './dist/ucs.js',
        mod: './dist/mod.js'
    },
    mode: 'production',
    experiments: {
        outputModule: true
    },
    output: {
        filename: '[name].js',
        path: __dirname,
        library: {
            type: 'module'
        },
        module: true
    }
}