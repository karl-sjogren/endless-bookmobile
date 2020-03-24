import ObjectBase from './object-base';

export default class FpsCounter extends ObjectBase {
  constructor(scene) {
    super();
    this.scene = scene;
    this.width = 300;
    this.height = 32;
    this.element = scene.createDOMElement('fps-counter');
    this.element.style.right = '16px';
    this.element.style.bottom = '16px';
    this.element.style.width = this.width + 'px';
    this.element.style.height = this.height + 'px';
    
    this._times = [];
    this._fps = 0;
  }

  update(frameDelta, frameTime) {
    while(this._times.length > 0 && this._times[0] <= frameTime - 1000) {
      this._times.shift();
    }
    this._times.push(frameTime);
    this._fps = this._times.length;
  }

  draw() {
    this.element.textContent = this._fps;
  }
}