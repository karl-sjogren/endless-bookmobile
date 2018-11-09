import ObjectBase from 'object-base';

export default class Backdrop extends ObjectBase {
  constructor(scene) {
    super();
    this.scene = scene;
    this.y = scene.height - 200;
    this.element = scene.createDOMElement('backdrop');
    this.element.style.width = scene.width + 'px';
    this.element.style.height = scene.height + 'px';
    this.element.style.backgroundImage = 'url("/images/backdrop2.jpg")';
  }

  update(frameDelta) {
    this.y += .3 * frameDelta;
  }

  draw() {
    this.element.style.backgroundPositionY = this.y + 'px';
  }
}