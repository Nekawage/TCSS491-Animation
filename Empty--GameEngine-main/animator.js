class Animator {
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration, xScale, yScale) {
        Object.assign(this, {spritesheet, xStart, yStart, width, height, frameCount, frameDuration, xScale, yScale});

        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    };

    drawFrame(tick, ctx, x, y, xScale, yScale, flip) {
        this.elapsedTime += tick;
        if (this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;
        const frame = this.currentFrame();
		
		ctx.save();
		
		if (flip) {
			ctx.translate(x + xScale / 2, y + yScale / 2); // Move to the center of the sprite
			ctx.scale(-1, -1); // Flip horizontally
			x = -xScale / 2; // Adjust x to account for the flip
			y = -yScale / 2; // Adjust y to account for the flip
		}

        ctx.drawImage(this.spritesheet,
            this.xStart + this.width * frame, this.yStart,
            this.width, this.height,
            x, y,
            xScale, yScale);
		
		ctx.restore();
    };

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    };

    isDone() {
        return (this.elapsedTime >= this.totalTime());
    };
}