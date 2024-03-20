const path = require('path');

// Jestのカスタム設定を読み込む
const customJestConfig = require('./jest.config');

module.exports = {
    // Webpackの設定をカスタマイズ
    webpack: function (config, env) {
        // エイリアス'@'をsrcディレクトリに設定
        config.resolve.alias['@'] = path.resolve(__dirname, 'src');
        return config;
    },
    // Jestの設定をカスタマイズ
    jest: function (config) {
        // Jestのカスタム設定を適用
        return { ...config, ...customJestConfig };
    },
};
