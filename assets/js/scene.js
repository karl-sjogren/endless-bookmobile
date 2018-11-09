import Controller from 'controller';
import GameOverSign from 'game-over-sign';

export default class Scene {
  constructor(gameContainer) {
    this.gameContainer = gameContainer;
    this.width = 800;
    this.height = 600;
    this._score = 0;
    this._objects = [];
    this._gameOver = false;
    this._controller = new Controller();
  }

  get objects() {
    return this._objects;
  }

  get controller() {
    return this._controller;
  }

  get score() {
    return this._score;
  }

  get gameOver() { 
    return this._gameOver;
  }

  addScore(score) {
    this._score += score;
  }

  addObject(obj) {
    this._objects.push(obj);
  }

  reset() {
    this._objects = [];
    this._gameOver = false;
    this._score = 0;

    this.gameContainer.classList.remove('game-over');

    let children = [...this.gameContainer.children];
    children.forEach(element => this.gameContainer.removeChild(element));
  }

  setGameOver() {
    this._gameOver = true;
    this.addObject(new GameOverSign(this));
    this.gameContainer.classList.add('game-over');
  }

  createDOMElement(className) {
    let element = document.createElement('div');
    element.classList.add('game-object');
    element.classList.add(className);
    this.gameContainer.appendChild(element);
    return element;
  }

  removeDOMElement(element) {
    let children = [...this.gameContainer.children];
    let hasChild = children.some(c => c === element);
    if(hasChild)
      this.gameContainer.removeChild(element);
  }
}