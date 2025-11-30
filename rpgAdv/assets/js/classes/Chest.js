class Chest extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y, texture, frame, coins, id) {
        super(scene, x, y, texture, frame);

        this.scene = scene; // the scene this game object will be added to
        this.coins = coins; // the amount of coins the chest contains
        this.id = id;

        // Enable physics
        this.scene.physics.world.enable(this);

        // add the chest to the scene
        this.scene.add.existing(this);
        // scale the chest game object
        this.setScale(2);
    }
    
    makeActive() {
        this.setActive(true);
        this.setVisible(true);
        this.body.checkCollision.none = false;
    }

    makeInactive() {
        this.setActive(false);
        this.setVisible(false);
        this.body.checkCollision.none = true;
    }
}