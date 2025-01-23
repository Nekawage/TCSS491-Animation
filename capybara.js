class Capybara {
    constructor(gameEngine, x, y) {
        this.game = gameEngine;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./capybara.png"), 0, 0, 64, 64, 8, 0.125, 64, 64);

        this.x = x;
        this.y = y;
        this.speed = 100;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x >= 560) this.x = 560;
    };

    draw(ctx) {
		if (this.x < 560) {
			this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 64, 64, false) 
		} else {
			this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y + 20, 64, 64, true)
		}
    };
}