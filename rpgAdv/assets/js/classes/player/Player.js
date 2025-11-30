class Player extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y, key, frame) {
        super(scene, x, y, key, frame);

        this.scene = scene; // the scene this game object will be added to

        // Enable physics
        this.scene.physics.world.enable(this);
        // set the player to be immovable when collided with
        this.setImmovable(true);

        // scale the player
        this.setScale(2);
        // add the player to the scene
        this.scene.add.existing(this);

    }
}