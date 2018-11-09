/* global $ */
import Game from 'game';

export default function() {
    let gameContainer = document.querySelector('.game-container');
    let game = new Game(gameContainer);
    game.setupScene();
    game.run();
}
