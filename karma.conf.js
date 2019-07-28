module.exports = (config) => {
  config.set({
    frameworks: ['mocha', 'karma-typescript'],
    files: ['src/**/*.ts'],
    preprocessors: {
      '**/*.ts': ['karma-typescript'],
    },
    reporters: ['progress', 'karma-typescript'],
    browsers: ['Chrome'],
    singleRun: true,
    karmaTypescriptConfig: {
      tsconfig: './tsconfig.json',
    },
  });
};
