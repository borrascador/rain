export default class Animation {
  constructor(distance, interval) {
    this.distance = distance;
    this.interval = interval;
    this.time = 0;
    this.value = 0;
  }

  update(delta) {
    this.time += delta;
    if (this.time >= this.interval) {
      this.time = 0;
      this.value = this.value === 0 ? -(this.distance) : 0;
    }
  }

  getValue() {
    return this.value;
  }
}
