module.exports = {
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
    coverageThreshold: {
        global: {
            statements: 80
        }
    },
    setupFiles: ['react-app-polyfill/jsdom'],
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.js'],
    testMatch: ['<rootDir>/tests/**/*.{test,spec}.{ts,tsx}'],
    testEnvironment: 'jsdom',
    testRunner: '<rootDir>/node_modules/jest-circus/runner.js',
    transform: {
        '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
        '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)':
            '<rootDir>/config/jest/fileTransform.js'
    },
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$'
    ],
    modulePaths: [],
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '@themes/(.*)': '<rootDir>/src/themes/$1',
        '@components/(.*)': '<rootDir>/src/components/$1',
        '@pages/(.*)': '<rootDir>/src/pages/$1'
    },
    moduleFileExtensions: [
        'web.js',
        'js',
        'web.ts',
        'ts',
        'web.tsx',
        'tsx',
        'json',
        'web.jsx',
        'jsx',
        'node'
    ],
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname'
    ]
};
