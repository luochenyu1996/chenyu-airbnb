const path = require('path')
const CracoLessPlugin = require('craco-less');
const resolve = (pathname) => path.resolve(__dirname, pathname)


module.exports = {
    //less 配置
    plugins: [
        {
            plugin: CracoLessPlugin,
            // options: {
            //     lessLoaderOptions: {
            //         lessOptions: {
            //             modifyVars: {'@primary-color': '#1DA57A'},
            //             javascriptEnabled: true,
            //         },
            //     },
            // },
        },
    ],
    // 别名配置
    webpack: {
        alias: {
            // "@":path.resolve(__dirname, "src")
            "@": resolve("src"),
            "components": resolve("src/components"),
            "utils": resolve("src/utils")
        }
    }
}
