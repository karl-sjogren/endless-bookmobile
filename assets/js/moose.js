import Collidable from 'collidable';

export default class Moose extends Collidable {
  constructor(scene, x, y) {
    super();
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.initialX = x;
    this.movingLeft = Math.random() > .5;
    this.width = 64;
    this.height = 58;
    this.element = scene.createDOMElement('moose');
    this.element.style.width = this.width + 'px';
    this.element.style.height = this.height + 'px';
  }

  update(frameDelta) {
    this.y += .3 * frameDelta;

    if(this.movingLeft) {
      this.x -= .1 * frameDelta;
    } else {
      this.x += .1 * frameDelta;
    }

    const maxMoveDistance = 60;
    if(this.x < this.initialX - maxMoveDistance) {
      this.x = this.initialX - maxMoveDistance;
      this.movingLeft = false;
    } else if(this.x > this.initialX + maxMoveDistance) {
      this.x = this.initialX + maxMoveDistance;
      this.movingLeft = true;
    }

    const roadPadding = 60;
    if(this.x > this.scene.width - this.width - roadPadding) {
      this.x = this.scene.width - this.width - roadPadding;
      this.movingLeft = true;
    } else if(this.x <= roadPadding) {
      this.x = roadPadding;
      this.movingLeft = false;
    }

    if(this.y > this.scene.height) {
      this._isAlive = false;
      this.scene.removeDOMElement(this.element);
    }
  }

  collide() {
    if(this.isAlive) {
      this.scene.setGameOver();
      this._isAlive = false;
    }
  }

  draw() {
    this.element.style.left = this.x + 'px';
    this.element.style.top = this.y + 'px';
  }
}