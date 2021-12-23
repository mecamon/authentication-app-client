module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue',
  ],
  moduleNameMapper: {
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
  },

}