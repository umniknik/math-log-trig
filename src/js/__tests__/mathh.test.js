import Mathh from '../mathh';

const mathh = new Mathh();

test('should set setstone', () => {
  mathh.setstone = true;

  expect(mathh.stone).toBe(true);
});

test('should set attack', () => {
  mathh.attack = 2;

  expect(mathh.distance).toBe(2);
});

test('should get attack stone=false', () => {
  mathh.defaultAttack = 100;
  mathh.setstone = false;
  mathh.attack = 2;

  expect(mathh.attack).toBe(90);
});

test('should get attack stone=true', () => {
  mathh.defaultAttack = 100;
  mathh.setstone = true;
  mathh.attack = 2;

  expect(mathh.attack).toBe(85);
});
