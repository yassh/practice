// @flow

const strLength = (str) => str.length;
strLength('foo');
strLength(123);

const subtract = (a, b) => a - b;
subtract(10, 2);
subtract('foo', 'bar');

const add = (a: string, b: string) => a + b;
add(10, 2);
add('foo', 'bar');
