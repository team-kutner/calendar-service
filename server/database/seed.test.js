const seed = require('./seed.js');

beforeAll(() => {
  return seed();
});

// test('database should have 100 listings', () => {
//   expect(listings(''))
// })