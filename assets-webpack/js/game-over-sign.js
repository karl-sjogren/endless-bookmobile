export default class GameOverSign {
  constructor(scene) {
    this.scene = scene;
    this.element = scene.createDOMElement('game-over-sign');
    this.element.textContent = 'Game over';
  }

  update(frameDelta) {
  }

  draw() {
  }
}