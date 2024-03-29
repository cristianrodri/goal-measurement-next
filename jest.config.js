/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/src/components/$1'
  },
  setupFilesAfterEnv: ['./jest.setup.ts']
}
