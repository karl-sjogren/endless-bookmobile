import Collidable from 'collidable';
import ParticleCannon from 'particle-cannon';

export default class Goodie extends Collidable {
  constructor(scene, x, y) {
    super();
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 32;
    this.element = scene.createDOMElement('goodie');
    this.element.style.width = this.width + 'px';
    this.element.style.height = this.height + 'px';
    this.particleCannon = new ParticleCannon(scene);
  }

  update(frameDelta) {
    this.y += .3 * frameDelta;

    const roadPadding = 60;
    if(this.x > this.scene.width - this.width - roadPadding) {
      this.x = this.scene.width - this.width - roadPadding;
    } else if(this.x <= roadPadding) {
      this.x = roadPadding;
    }

    if(this.y > this.scene.height) {
      this._isAlive = false;
      this.scene.removeDOMElement(this.element);
    }
  }

  collide() {
    if(this.isAlive) {
      this.scene.addScore(1000);
      this.particleCannon.fire(this.x + this.width / 2, this.y + this.width / 2, 40);
    }

    this._isAlive = false;
    this.scene.removeDOMElement(this.element);
  }

  draw() {
    this.element.style.left = this.x + 'px';
    this.element.style.top = this.y + 'px';
  }
}