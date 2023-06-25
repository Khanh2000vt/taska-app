module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      // 'module-resolver',
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@api': './src/api',
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@firebase': './src/firebase',
          '@hooks': './src/hooks',
          '@interfaces': './src/interfaces',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@services': './src/services',
          '@themes': './src/themes',
          '@translations': './src/translations',
          '@utils': './src/utils',
          '@validates': './src/validates',
          // "@i18n": "./src/i18n",
          // "@routes": "./src/routes",
          // "@services": "./src/services",
          // '@env': './src/env.js',
        },
      },
    ],
  ],
};
