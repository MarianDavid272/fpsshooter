import { Game } from './game.js';
import { UI } from './ui.js';
import { Input } from './input.js';
import { Level } from './level.js';
import { Player } from './player.js';

const canvas = document.getElementById('gameCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

const game = new Game();
const ui = new UI();
const input = new Input();
const level = new Level();
const player = new Player(game);

function gameLoop() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update game state
    level.update(ctx);
    input.update(player);
    player.update();
    player.draw(ctx);
    ui.update(ctx);
    
    // Continue game loop
    requestAnimationFrame(gameLoop);
}

// Handle window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

gameLoop();
