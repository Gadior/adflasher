module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^react-router-dom$": "<rootDir>/__mocks__/react-router-dom.js",
    "\\.module\\.scss$": "identity-obj-proxy",
  },
  // setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    // Исключите lucide-react из игнорирования
    "node_modules/(?!lucide-react)",
    "node_modules/(?!react-router-dom)",
  ],
  // transform: {
  //   "^.+\\.(ts|tsx)$": "ts-jest",
  // },
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
};
