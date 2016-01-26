var expect = require('chai').expect;

describe('arrow functions', function () {
  'use strict';

  it('is shorter to write', function () {
    var fn = () => {
      return 'Hello World';
    };

    expect(fn()).to.equal('Hello World');

  });

  it('one parameter can be written without parens', function () {
    var fn = name => {
      return `Hello ${name}`;
    };

  expect(fn('Mike')).to.equal('Hello Mike');
  });

  it('binds "this" to the function', function () {
    this.foo = 'bar';

    var fn = () => {
      return this.foo;
    };

    expect(fn()).to.equal('bar');
  });

  // let tests

  it('can declare a variable like var', function () {
    let foo = 'bar';

    expect(foo).to.equal('bar');
  });

  it('restricts scope to the block', function () {
    let foo = 'bar';

    if (true) {
      let foo = 'baz';
    }

    expect(foo).to.equal('bar');
  });

  describe('arrays', function () {
    it('can extract from arrays', function () {
      var foo, bar

      [foo, bar] = ['baz', 'qux'];

      expect
    });
  
  });







});
