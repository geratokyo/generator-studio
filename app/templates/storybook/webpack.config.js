// const genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js");

// const path = require("path");

// module.exports = (baseConfig, env) => {
//   const config = genDefaultConfig(baseConfig, env);

//   config.resolve.extensions.push(".ts", ".tsx");

//   config.module.rules[0].test = /\.(ts|tsx)$/;
//   config.module.rules[0].query.presets = ["@babel/preset-env"];

//   config.module.rules.unshift({
//     test: /\.(ts|tsx)$/,
//     loader: require.resolve("ts-loader"),
//     include: [path.resolve(__dirname, "../src")],
//     options: {
//       transpileOnly: true
//     }
//   });

//   // [ts-loader, babel-loader, ...]

//   return config;
// };


const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  // For example, add typescript loader:
  baseConfig.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../<%= srcDir %>src")
  });
  
  baseConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, "../<%= srcDir %>src"),
    loader: require.resolve("awesome-typescript-loader")
  });


  baseConfig.resolve.extensions.push(".ts", ".tsx");

  return baseConfig;
};