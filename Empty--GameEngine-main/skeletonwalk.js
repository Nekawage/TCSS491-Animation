class SkeletonWalk {
    constructor(gameEngine, x, y) {
        this.game = gameEngine;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./skeleton_walk.png"), 0, 0, 64, 64, 8, 0.1, 128, 128);

        this.x = x;
        this.y = y;
        this.speed = 200;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 1200) this.x = -64;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 128, 128);
    };
}