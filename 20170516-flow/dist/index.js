{
  const f = str => str.length;

  // Works!
  f('foo');

  // Error!
  f(123);
}

{
  const f = (a, b) => a - b;

  // Works!
  f(10, 2);

  // Error!
  f('foo', 'bar');
}

{
  const f = (a, b) => a + b;

  // Works!
  f('foo', 'bar');

  // Error!
  f(3, 12);
}

{
  const f = obj => obj;

  // Works!
  f({});
  f({ one: 1, two: 2, three: 3 });
  f(() => {}); // ※関数はオブジェクトだからOK？

  // Error!
  f(1);
  f('hello');
  f(null);
  f([1, 2, 3]); // ※配列もオブジェクトだけど、なぜかNG
}