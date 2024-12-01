module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@src': './src',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@theme': './src/theme',
          '@constants': './src/constants',
          '@store': './src/store',
        },
      },
    ],
    ['module:react-native-dotenv', { moduleName: 'react-native-dotenv', path: '.env' }],
  ],
};
