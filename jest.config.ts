import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(svg|png|jpg|jpeg|gif)$": "jest-transform-stub"
  },
  transformIgnorePatterns: [
    "/node_modules/(?!antd|@babel/runtime|rc-util|@ant-design/icons|rc-pagination|rc-picker)"
  ],
  testEnvironment: "jest-environment-jsdom",
  testMatch: ['**/*.test.js', '**/*.spec.js', '**/*.test.tsx'],
  setupFilesAfterEnv: ["./src/setupTests.ts"]
};

export default config;