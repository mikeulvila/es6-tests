var expect = require('chai').expect;

describe('template strings', function () {
  it('should be string', function () {
    var string = `abc`;

    expect(string).to.be.a('string');
  });

  it('can evaluate variables', function () {
    var bar = 'baz';
    var string = `foo${bar}`;

    expect(string).to.equal('foobaz');
  });

  it('can execute functions', function () {
    var string = `The date is: ${new Date()}`;
    var date = new Date();
    
    expect(string).to.equal('The date is: ' + date);
  });

  it('can evaluate expressions', function () {
    var x = 1;
    var y = 2;
    var sum = `The total is ${x + y}`;
    expect(sum).to.equal('The total is ' + (x+y));
  });

  it('can handle multiline strings', function () {
    var string = `Hello
World!`;

    expect(string).to.equal("Hello\n"+"World!");
  
  });
});
