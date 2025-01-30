export class Input {
    constructor() {
        this.keys = {};
        this.isJumping = false;
        
        window.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
        });
        
        window.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
            if (e.code === 'Space') {
                this.isJumping = false;
            }
        });
    }

    update(player) {
        if (this.keys['ArrowLeft'] || this.keys['KeyA']) {
            player.moveLeft();
        }
        if (this.keys['ArrowRight'] || this.keys['KeyD']) {
            player.moveRight();
        }
        if ((this.keys['Space'] || this.keys['KeyW']) && !this.isJumping && player.isOnGround) {
            player.jump();
            this.isJumping = true;
        }
    }
}
