export default class Mathh {
  constructor() {
    this.distance = 0;
    this.stone = false;
  }

  set stone(value) {
    this._stone = value;
  }

  get stone() {
    return this._stone;
  }

  set distance(value) {
    this._distance = value;
  }

  get distance() {
    return this._distance;
  }

  set attack(value) {
    this.defaultAttack = value;
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
