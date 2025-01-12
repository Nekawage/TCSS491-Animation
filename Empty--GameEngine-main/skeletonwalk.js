class SkeletonWalk {
    constructor(gameEngine) {
        this.game = gameEngine;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./skeleton_walk.png"), 0, 0, 64, 64, 8, 0.1);

        this.x = 0;
        this.y = 352;
        this.speed = 50;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}