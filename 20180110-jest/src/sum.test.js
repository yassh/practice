const sum = require('./sum')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

// This test will fail.
test('adds 10 + 10 to equal 1010', () => {
  expect(sum(1, 2)).toBe(1010)
})
