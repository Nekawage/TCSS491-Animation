const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./skeleton_walk.png");
ASSET_MANAGER.queueDownload("./capybara.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new SkeletonWalk(gameEngine, 0, 288));
	gameEngine.addEntity(new SkeletonWalk(gameEngine, -23, 288));
	gameEngine.addEntity(new SkeletonWalk(gameEngine, -56, 288));
	gameEngine.addEntity(new SkeletonWalk(gameEngine, -90, 288));
	gameEngine.addEntity(new SkeletonWalk(gameEngine, -100, 288));
	gameEngine.addEntity(new SkeletonWalk(gameEngine, -113, 288));
	gameEngine.addEntity(new SkeletonWalk(gameEngine, -135, 288));
	
	gameEngine.addEntity(new SkeletonWalk(gameEngine, -632, 288));
	gameEngine.addEntity(new SkeletonWalk(gameEngine, -430, 288));
	gameEngine.addEntity(new SkeletonWalk(gameEngine, -700, 288));
	
	gameEngine.addEntity(new Capybara(gameEngine, 275, 352));

	gameEngine.init(ctx);

	gameEngine.start();
});
