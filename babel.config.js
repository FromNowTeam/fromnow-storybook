module.exports = {
  presets: ['module:@react-native/babel-preset', '@babel/preset-react'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@fromnow': './libs/fromnow',
          '@assets': './libs/fromnow/src/assets',
          '@components': './libs/fromnow/src/components',
          '@screen': './libs/fromnow/src/screens',
          '@styles': './libs/fromnow/src/styles',
          '@hooks': './libs/fromnow/src/hooks',
          '@utils': './libs/fromnow/src/utils',
          '@store': './libs/fromnow/src/store',
          '@clientTypes': './libs/fromnow/src/types',
          '@api': './libs/fromnow/src/api',
        },
        extensions: ['.js', '.jsx', '.tsx', '.ios.js', '.android.js'],
      },
    ],
    [
      'babel-plugin-react-native-web',
      {
        commonjs: true,
      },
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};
