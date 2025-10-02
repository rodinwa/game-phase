class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    }

    init() {
        this.scene.launch('Ui');
        this.score = 0;
    }        

    create() {
        this.createAudio();
        
        this.createChests();

        this.createWalls();

        this.createPlayer();

        this.addCollisions();

        this.createInput();
    }
    
    update() {
        this.player.update(this.cursors);
    }

    createAudio() {
        this.goldPickupAudio = this.sound.add('goldSound', { loop: false, volume: 0.2 });
    }

    createPlayer() {
        this.player = new Player(this, 32, 32, 'characters', 5);
    }

    createChests() {
        // create a chest group
        this.chests = this.physics.add.group();
        // create chest positions array
        this.chestPositions = [[100, 100], [200, 200], [300, 300], [400, 400], [600, 200], [700, 500]];
        // specify the maximum number of chests
        this.maxChests = 3;
        // spawn a chest
        for (let i = 0; i < this.maxChests; i++) {
            this.spawnChest();
        }
    }

    spawnChest() {
        const location = this.chestPositions[Math.floor(Math.random() * this.chestPositions.length)];

        let chest = this.chests.getFirstDead();

        if (!chest) {
            chest = new Chest(this, location[0], location[1], 'items', 0);
            // add the chest to the chests group
            this.chests.add(chest);
        } else {
            chest.setPosition(location[0], location[1]);
            chest.makeActive();
        }
        
    }

    createWalls() {
        this.wall = this.physics.add.image(500, 100, 'button1', 0);
        this.wall.setImmovable(true);
    }

    createInput() {
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    addCollisions() {
        this.physics.add.collider(this.player, this.wall);
        this.physics.add.overlap(this.player, this.chests, this.collectChest, null, this);
    }

    collectChest(player, chest) {
        // play gold pickup sound
        this.goldPickupAudio.play();
        // update the score
        this.score += chest.coins;
        // emit event to update the score
        this.events.emit('updateScore', this.score);
        // make chest game object inactive
        chest.makeInactive();
        // spawn a new chest
        this.time.delayedCall(1000, this.spawnChest, [], this);
    }
}
