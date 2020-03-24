import ObjectBase from './object-base';

export default class Score extends ObjectBase {
  constructor(scene) {
    super();
    this.scene = scene;
    this.width = 300;
    this.height = 32;
    this.element = scene.createDOMElement('score');
    this.element.style.right = '16px';
    this.element.style.top = '16px';
    this.element.style.width = this.width + 'px';
    this.element.style.height = this.height + 'px';
  }

  update(frameDelta) {

  }

  draw() {
    this.element.textContent = this.scene.score.toLocaleString();
  }
}