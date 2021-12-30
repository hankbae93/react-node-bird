// const CompressPlugin = require('compression-webpack-plugin') // 압축, gzip 확장자는 브라우저가 알아서 실행가능
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  })
module.exports = withBundleAnalyzer({
    compress: true,
    webpack(config, { webpack }) {
        const prod = process.env.NODE_ENV === 'production';
        // if (prod) {
        //     plugins.push(new CompressPlugin())
        // }
        return {
            ...config,
            mode: prod ? 'production' : 'development',
            devtool: prod ? 'inline-source-map' : 'eval', // 배포환경에서는 꼭 바꿔놔야된다.
            plugins: [
                ...config.plugins,
                new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ko$/)
            ]
            // module: {
            //     ...config.module,
            //     rules: [
            //         ...config.module.rules,
            //         {

            //         }
            //     ]
            // }
        }
    },
})
