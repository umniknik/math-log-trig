import Mathh from '../mathh';

const mathh = new Mathh();

test('should set setstone', () => {
  mathh.stone = true;

  expect(mathh._stone).toBe(true);
});

test('should get attack stone=false', () => {
  mathh.stone = false;
  mathh.attack = 100;
  mathh.distance = 2;

  expect(mathh.attack).toBe(90);
});

test('should get attack stone=true', () => {
  mathh.stone = true;
  mathh.attack = 100;
  mathh.distance = 2;

  expect(mathh.attack).toBe(85);
});
