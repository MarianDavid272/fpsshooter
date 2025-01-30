export class Player {
    constructor(game) {
        this.game = game;
        this.width = 40;
        this.height = 60;
        this.x = 100;
        this.y = 100;
        this.speedX = 0;
        this.speedY = 0;
        this.maxSpeed = 5;
        this.jumpForce = -15;
        this.isOnGround = false;
    }

    moveLeft() {
        this.speedX = -this.maxSpeed;
    }

    moveRight() {
        this.speedX = this.maxSpeed;
    }

    jump() {
        if (this.isOnGround) {
            this.speedY = this.jumpForce;
            this.isOnGround = false;
        }
    }

    update() {
        // Apply gravity
        this.speedY += this.game.gravity;
        
        // Update position
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Ground collision
        if (this.y > this.game.groundLevel - this.height) {
            this.y = this.game.groundLevel - this.height;
            this.speedY = 0;
            this.isOnGround = true;
        }
        
        // Screen boundaries
        if (this.x < 0) this.x = 0;
        if (this.x > window.innerWidth - this.width) this.x = window.innerWidth - this.width;
        
        // Friction
        this.speedX *= 0.8;
    }

    draw(ctx) {
        ctx.fillStyle = '#FF4081';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
