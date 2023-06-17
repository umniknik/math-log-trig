export default class Mathh {
  constructor() {
    this.distance = 0;
    this.stone = false;
  }

  set setstone(value) {
    this.stone = value;
  }

  set attack(value) {
    this.distance = value;
  }

  get attack() {
    if (this.stone === true) {
      this.defaultAttack -= this.defaultAttack * 0.1 * (this.distance - 1);
      this.defaultAttack -= Math.log2(this.distance) * 5;
    } else {
      this.defaultAttack -= this.defaultAttack * 0.1 * (this.distance - 1);
    }
    return Math.round(this.defaultAttack);
  }
}
