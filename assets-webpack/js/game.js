import Scene from './scene';
import Lorry from './lorry';
import Backdrop from './backdrop';
import Score from './score';
import FpsCounter from './fps-counter';
import EntitySpawner from './entity-spawner';

export default class Game {
  constructor(gameContainer) {
    this.lastFrameTime = performance.now();
    this.scene = new Scene(gameContainer);
  }

  setupScene() {
    this.scene.addObject(new Backdrop(this.scene));
    this.scene.addObject(new Score(this.scene));
    this.scene.addObject(new FpsCounter(this.scene));
    this.scene.addObject(new Lorry(this.scene));
    this.scene.addObject(new EntitySpawner(this.scene));
  }

  run() {
    let frameTime = performance.now();
    let frameDelta = frameTime - this.lastFrameTime;
    this.lastFrameTime = frameTime;

    if(!this.scene.gameOver) {
      for(let i = 0; i < this.scene.objects.length; i++) {
        let obj = this.scene.objects[i];
        if(obj.isAlive) {
          obj.update(frameDelta, frameTime);
        }
      }

      for(let i = 0; i < this.scene.objects.length; i++) {
        let obj = this.scene.objects[i];
        if(obj.isAlive) {
          obj.draw(frameDelta, frameTime);
        }
      }
    } else {
      // We are in game over
      if(this.scene.controller.keys.space || this.scene.controller.keys.enter) {
        this.scene.reset();
        this.setupScene();
      }
    }

    requestAnimationFrame(this.run.bind(this));
  }
}