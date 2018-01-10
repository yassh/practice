const sum = require('./join')

test('joins "apple" and "banana" to be "applebanana"', () => {
  expect(sum('apple', 'banana')).toBe('applebanana')
})

// This test will fail.
test('joins "Na" and "Cl" to be "salt"', () => {
  expect(sum('Na', 'Cl')).toBe('salt')
})
