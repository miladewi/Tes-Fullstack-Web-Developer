// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;
module.exports = {
  // module: {
  //   rules: [
  //     // ... other rules omitted

  //     // this will apply to both plain `.scss` files
  //     // AND `<style lang="scss">` blocks in `.vue` files

  //     {
  //       test: [/\.scss$/, /\.mp3$/, /\.jsx?$/],
  //       loader: "eslint-loader",
  //       include: path.resolve(process.cwd(), "src"),
  //       enforce: "pre",
  //       options: {
  //         fix: true
  //       },
  //       use: ["vue-style-loader", "css-loader", "sass-loader"]
  //     },
  //     {
  //       test: /\.jsx?$/, // both .js and .jsx
  //       loader: "eslint-loader",
  //       include: path.resolve(process.cwd(), "src"),
  //       enforce: "pre",
  //       options: {
  //         fix: true
  //       }
  //     }
  //   ]
  // },
  chainWebpack: config => {
    config.plugins.delete("prefetch");
    config.plugins.delete("preload");
    // config.performance
    //   .maxEntrypointSize(1000000)
    //   .maxAssetSize(1000000)
  },
  // configureWebpack: {
  //   plugins: [new BundleAnalyzerPlugin()]
  // },
  // publicPath:
  //  process.env.NODE_ENV === "production"
  //    ? "https://devchat.dial.id/"
  //    : "https://devchat.dial.id/",
  //  ? 'https://panel.dial.id/'
  //  : 'https://panel.dial.id/',
  productionSourceMap: false,
  devServer: {
    // proxy: "https://api.aksesciptasolusi.com/"
    // proxy: 'http://172.168.100.10:1869/',
  }
};
