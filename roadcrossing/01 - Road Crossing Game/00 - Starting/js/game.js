// create a new scene
let gameScene = new Phaser.Scene('Game');

// set the configuration of the game
let config = {
    type: Phaser.AUTO, // Phaser will use WebGL if available or Canvas
    width: 640,
    height: 360,
    scene: gameScene
};


// create a new game, pass the config
let game = new Phaser.Game(config);