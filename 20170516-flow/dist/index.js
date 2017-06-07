{
  function f(str) {
    str.length;
  }

  // Works!
  f('foo');

  // Error!
  f(123);
}

{
  function f(a, b) {
    a - b;
  }

  // Works!
  f(10, 2);

  // Error!
  f('foo', 'bar');
}

{
  function f(a, b) {
    a + b;
  }

  // Works!
  f('foo', 'bar');

  // Error!
  f(3, 12);
}

{
  function f(obj) {}

  // Works!
  f({});
  f({ one: 1, two: 2, three: 3 });
  f(() => {}); // ※関数もオブジェクトだから

  // Error!
  f(1);
  f('hello');
  f(null);
}