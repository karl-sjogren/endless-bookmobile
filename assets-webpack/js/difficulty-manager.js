export default class DifficultyManager {
  constructor() {
    this.difficulty = 1;
  }

  increaseDifficulty() {
    if(this.difficulty < 10) {
      this.difficulty++;
    }
  }

  reset() {
    this.difficulty = 1;
  }

  get spawnSpeedMultiplier() {
    return Math.log10(this.difficulty);
  }

  get lorrySpeedMultiplier() {
    let multiplier = Math.log(this.difficulty);
    if(multiplier < 1) {
      multiplier = 1;
    }
    return multiplier;
  }
}