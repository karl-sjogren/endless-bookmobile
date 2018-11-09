/* global $ */

const VK_DOWN_ARROW = 40;
const VK_UP_ARROW = 38;
const VK_LEFT_ARROW = 37;
const VK_RIGHT_ARROW = 39;
const VK_ENTER = 13;
const VK_SPACE = 32;

export default class Controller {
  constructor(gameContainer) {
    this._keys = {
      up: false,
      down: false,
      right: false,
      left: false,
      enter: false,
      space: false
    };

    $(document).on('keydown', e => {
      switch(e.keyCode) {
        case VK_DOWN_ARROW:
          this._keys.down = true;
          break;
        case VK_UP_ARROW:
          this._keys.up = true;
          break;
        case VK_LEFT_ARROW:
          this._keys.left = true;
          break;
        case VK_RIGHT_ARROW:
          this._keys.right = true;
          break;
        case VK_ENTER:
          this._keys.enter = true;
          break;
        case VK_SPACE:
          this._keys.space = true;
          break;
      }
    });

    $(document).on('keyup', e => {
      switch(e.keyCode) {
        case VK_DOWN_ARROW:
          this._keys.down = false;
          break;
        case VK_UP_ARROW:
          this._keys.up = false;
          break;
        case VK_LEFT_ARROW:
          this._keys.left = false;
          break;
        case VK_RIGHT_ARROW:
          this._keys.right = false;
          break;
        case VK_ENTER:
          this._keys.enter = true;
          break;
        case VK_SPACE:
          this._keys.space = true;
          break;
      }
    });
  }

  get keys() {
    return this._keys;
  }
}