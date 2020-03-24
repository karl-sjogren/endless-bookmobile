import ObjectBase from './object-base';
import Collidable from './collidable';
import { box_collision } from './collision-helpers';

export default class Lorry extends ObjectBase {
  constructor(scene) {
    super();
    this.scene = scene;
    this.x = scene.width / 2;
    this.y = scene.height - 200;
    this.width = 65;
    this.height = 150;
    this.element = scene.createDOMElement('lorry');
    this.element.style.width = this.width + 'px';
    this.element.style.height = this.height + 'px';
  }

  update(frameDelta) {
    let difficultyMultiplier = this.scene.difficultyManager.lorrySpeedMultiplier;

    let controller = this.scene.controller;
    if(controller.keys.left) {
      this.x -= .5 * frameDelta * difficultyMultiplier;
    } else if(controller.keys.right) {
      this.x += .5 * frameDelta * difficultyMultiplier;
    }

    if(controller.keys.up) {
      this.y -= .3 * frameDelta * difficultyMultiplier;
    } else if(controller.keys.down) {
      this.y += .5 * frameDelta * difficultyMultiplier;
    }

    const roadPadding = 60;
    if(this.x > this.scene.width - this.width - roadPadding) {
      this.x = this.scene.width - this.width - roadPadding;
    } else if(this.x <= roadPadding) {
      this.x = roadPadding;
    }

    if(this.y > this.scene.height - this.height) {
      this.y = this.scene.height - this.height;
    } else if(this.y <= 0) {
      this.y = 0;
    }

    let collidables = this.scene.objects.filter(o => o instanceof Collidable);

    for(let i = 0; i < collidables.length; i++) {
      let collidable = collidables[i];
      if(collidable.isAlive) {
        let collided = box_collision(collidable, this);
        if(collided) {
          collidable.collide();
        }
      }
    }
  }

  draw() {
    this.element.style.left = this.x + 'px';
    this.element.style.top = this.y + 'px';
  }
}