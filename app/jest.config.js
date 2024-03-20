module.exports = {
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    preset: 'ts-jest/presets/js-with-ts',
    transformIgnorePatterns: ['/node_modules/(?!axios)'], // add other ES deps to exclude pattern if they cause trouble
};
