module.exports = (config) => {
  config.set({
    frameworks: ['mocha', 'karma-typescript'],
    files: ['src/**/*.ts'],
    preprocessors: {
      '**/*.ts': ['karma-typescript'],
    },
    reporters: ['progress', 'karma-typescript'],
    browsers: ['ChromeWithoutMdns'],
    customLaunchers: {
      ChromeWithoutMdns: {
        base: 'Chrome',
        flags: ['--disable-field-trial-config', '--disable-features=WebRtcHideLocalIpsWithMdns'],
      },
    },
    singleRun: true,
    karmaTypescriptConfig: {
      tsconfig: './tsconfig.json',
    },
  });
};
