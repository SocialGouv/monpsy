module.exports = {
  globalSetup: "<rootDir>jest/api-setup.js",
  globalTeardown: "<rootDir>jest/api-teardown.js",
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  testMatch: ["**/*.spec.ts"],
  moduleDirectories: ["<rootDir>", "node_modules"],
};

jest.setTimeout(30000);
