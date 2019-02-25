const path = require('path');

module.exports = function(baseConfig, env, defaultConfig) {
  defaultConfig.module.rules.push({
    test: [/\.stories\.tsx?$/, /stories\/index.js/],
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'typescript' }
      }
    ],
    enforce: 'pre'
  });

  return defaultConfig;
};
