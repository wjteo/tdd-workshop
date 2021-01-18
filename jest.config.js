module.exports = {
    testEnvironment: "node",
    // moduleNameMapper: {
    //     "^~(.*)$": "<rootDir>/dev$1",
    //     "^@routes(.*)$": "<rootDir>/dev/routes$1",
    //     "^@test(.*)$": "<rootDir>/test$1"
    // },
    // setupFiles: ['./test/global/init.js'], //runs once before every test file and runs on the same context as the test
    globalSetup: "./test/global/setup.js", //runs outside the context of a test and trigggered once before all test suites
    globalTeardown: "./test/global/teardown.js", //runs outside the context of test and triggered once after all test suites
};