module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    './src/setupTestServer',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|style|less|sass|scss|ttf|woff|woff2)$': 'identity-obj-proxy',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  transform: {
    '^.+\\.jsx?$': ['@swc/jest', {
      jsc: {
        parser: {
          jsx: true,
        },
        transform: {
          react: {
            runtime: 'automatic',
          },
        },
      },
    }],
  },
};
