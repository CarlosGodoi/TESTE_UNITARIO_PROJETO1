const { queryString } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provide', () => {
    const obj = {
      name: 'Fabio',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Fabio&profession=developer');
  });

  it('should create a valid query string even when an array is passed value', () => {
    const obj = {
      name: 'Fabio',
      abilities: ['JS', 'TDD'],
    };
    console.log(queryString(obj));

    expect(queryString(obj)).toBe('name=Fabio&abilities=JS,TDD');
  });

  it('should throw an error when an object is passed value', () => {
    const obj = {
      name: 'Fabio',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };

    console.log(queryString(obj));

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

// describe('Query string to object', () => {});
