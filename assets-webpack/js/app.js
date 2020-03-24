/* global $ */
import Game from './game';
import _ from './../styles/main.less';

let gameContainer = document.querySelector('.game-container');
let game = new Game(gameContainer);
game.setupScene();
game.run();