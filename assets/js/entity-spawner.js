import ObjectBase from 'object-base';
import Goodie from 'goodie';
import Moose from 'moose';

export default class EntitySpawner extends ObjectBase {
  constructor(scene) {
    super();
    this.scene = scene;
    this.nextSpawn;
  }

  update(frameDelta, frameTime) {
    let difficultyMultiplier = this.scene.difficultyManager.spawnSpeedMultiplier;
    if(!this.nextSpawn) {
      this.nextSpawn = frameTime + (400 - (200 * difficultyMultiplier));
    }

    if(this.nextSpawn <= frameTime) {
      this.nextSpawn = frameTime + (400 - (200 * difficultyMultiplier));
      
      if(Math.random() > .3) {
        this.spawnGoodie();
      } else {
        this.spawnBadie();
      }
    }
  }

  spawnGoodie() {
    const roadPadding = 60;
    const totalWidth = this.scene.width - roadPadding * 2;

    let x = roadPadding + (Math.random() * totalWidth);
    let y = -200;
    
    this.scene.addObject(new Goodie(this.scene, x, y));
  }

  spawnBadie() {
    const roadPadding = 60;
    const totalWidth = this.scene.width - roadPadding * 2;

    let x = roadPadding + (Math.random() * totalWidth);
    let y = -200;
    
    this.scene.addObject(new Moose(this.scene, x, y));
  }

  draw() {
  }
}