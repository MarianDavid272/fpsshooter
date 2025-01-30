export class Level {
    constructor() {
        this.platforms = [
            { x: 0, y: window.innerHeight - 100, width: window.innerWidth, height: 100 }
        ];
    }

    update(ctx) {
        // Draw background
        ctx.fillStyle = '#87CEEB';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        
        // Draw platforms
        ctx.fillStyle = '#558B2F';
        this.platforms.forEach(platform => {
            ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
        });
    }
}
