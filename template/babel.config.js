module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.json'],
        alias: {
          'components': './src/components',
          'components/*': './src/components/*',
          'hooks': './src/hooks',
          'hooks/*': './src/hooks/*',
          'common': './src/common',
          'common/*': './src/common/*',
          'navigation': './src/navigation',
          'navigation/*': './src/navigation/*',
          'screens': './src/screens',
          'screens/*': './src/screens/*',
          'utils': './src/utils',
          'utils/*': './src/utils/*',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    'react-native-reanimated/plugin',
  ],
  ignore: [
    "**/*.test.js"
  ]
};
