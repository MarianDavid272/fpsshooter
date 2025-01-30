export class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        
        // Set canvas size to window size
        this.canvas.width = 800;
        this.canvas.height = 600;
        
        // Game properties
        this.player = {
            x: this.canvas.width / 2,
            y: this.canvas.height - 50,
            width: 50,
            height: 50,
            speed: 5
        };
        
        // Start the game loop
        this.gameLoop();
    }

    // Clear the entire canvas
    clearScreen() {
        this.ctx.fillStyle = '#87CEEB'; // Sky blue background
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // Draw the player
    drawPlayer() {
        this.ctx.fillStyle = '#FF0000'; // Red player
        this.ctx.fillRect(
            this.player.x, 
            this.player.y, 
            this.player.width, 
            this.player.height
        );
    }

    // Update game state
    update() {
        // Add game logic here
    }

    // Main game loop
    gameLoop() {
        // Clear the screen
        this.clearScreen();
        
        // Update game state
        this.update();
        
        // Draw everything
        this.drawPlayer();
        
        // Continue the loop
        requestAnimationFrame(() => this.gameLoop());
    }
}
