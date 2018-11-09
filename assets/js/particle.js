import ObjectBase from 'object-base';

export default class Particle extends ObjectBase {
  constructor(scene, x, y) {
    super();
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.life = Math.random() * 100 + 100;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.width = Math.random() * 16;
    this.height = this.width * 0.4;
    this.rotation = Math.random() * 360;
    this.rotationSpeed = Math.random() * 4;
    this.skew = Math.random() * 80 - 40;
    this.skewSpeed = this.rotationSpeed / 2;
    this.element = scene.createDOMElement('particle');
    this.element.style.width = this.width + 'px';
    this.element.style.height = this.height + 'px';
    this.element.style.backgroundColor = this.randomColor();
  }

  randomColor() {
    let rnd = Math.random();

    if(rnd > .66) {
      return 'red';
    } else if(rnd > .33) {
      return 'blue';
    } else {
      return 'green';
    }
  }

  update(frameDelta) {
    this.x -= this.speedX * frameDelta * .5;
    this.y -= this.speedY * frameDelta * .5;
    this.rotation += this.rotationSpeed * frameDelta;
    
    this.skew += this.skewSpeed * frameDelta;
    if(this.skew > 40) {
      this.skew = -40;
    }

    this.life -= frameDelta * .1;
    if(this.life < 0) {
      this._isAlive =false;
      this.scene.removeDOMElement(this.element);
    }
  }

  draw() {
    this.element.style.left = this.x + 'px';
    this.element.style.top = this.y + 'px';
    this.element.style.transform = `rotate(${this.rotation}deg) skew(${this.skew}deg,${this.skew}deg)`;
    this.element.style.opacity = this.life / 200;
  }
}