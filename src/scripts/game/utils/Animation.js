export default class Animation {
  constructor(max, step, interval) {
    this.max = max;
    this.step = step;
    this.interval = interval;
    this.time = 0;
    this.value = 0;
  }

  update(delta) {
    this.time += delta;
    if (this.time >= this.interval) {
      this.time = 0;
      this.value = this.value < this.max ? this.value + this.step : 0;      
    }
  }

  getValue() {
    return this.value;
  }
}
