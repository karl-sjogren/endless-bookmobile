import Particle from "particle";

export default class ParticleCannon {
  constructor(scene) {
    this.scene = scene;
  }

  fire(x, y, count) {
    for(let i = 0; i < count; i++) {
      this.scene.addObject(new Particle(this.scene, x, y));
    }
  }

  update() {

  }

  draw() {

  }
}