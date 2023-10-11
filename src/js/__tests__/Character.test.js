import Character from '../Character';

test('Character ok', () => {
  const obj = new Character('name', 'Magician');
  expect(obj.name).toBe('name');
  expect(obj.type).toBe('Magician');
});

test('Character with error type', () => {
  expect(() => {
    const obj = new Character('name', 'SomeType');
    console.log(obj.name);
  }).toThrowError('Передан не подходящий тип');
});

test('Character with error name', () => {
  expect(() => {
    const obj = new Character('LongLongLongName', 'Magician');
    console.log(obj.name);
  }).toThrowError('Длина имени должна быть в диапазоне 2-10 символов');
});
