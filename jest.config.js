const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Jest.config.js
const customConfig = {
  clearMocks: true,
  coverageDirectory: ".coverage",
  moduleNameMapper: {
    "^@/components(.*)$": "<rootDir>/src/components$1",
    "^@/hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@/lib(.*)$": "<rootDir>/src/lib$1",
    "^@/store(.*)$": "<rootDir>/src/store$1",
    "^@/utils(.*)$": "<rootDir>/src/utils$1",
  },
  setupFilesAfterEnv: ["./jest.setup.js"],
  testEnvironment: "jsdom",
};

module.exports = createJestConfig(customConfig);

