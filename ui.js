export class UI {
    update(ctx) {
        ctx.fillStyle = '#fff';
        ctx.font = '20px Arial';
        ctx.fillText('Use A/D or Arrow Keys to move', 20, 30);
        ctx.fillText('Press SPACE or W to jump', 20, 60);
    }
}
