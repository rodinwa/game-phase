class Player extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        this.scene = scene; // the scene this game object will be added to
        this.velocity = 360; // player movement speed
        
        // Enable physics
        this.scene.physics.world.enable(this);
        // set the player to be immovable when collided with
        this.setImmovable(false);

        // scale the player
        this.setScale(2);
        // collide with world bounds
        this.setCollideWorldBounds(true);
        // add the player to the scene
        this.scene.add.existing(this);
    }

        update(cursors) {
        this.body.setVelocity(0);

        if (cursors.left.isDown) {
            this.body.setVelocityX(-this.velocity);
        } else if (cursors.right.isDown) {
            this.body.setVelocityX(this.velocity);
        } else {
            this.body.setVelocityX(0);
        }

        if (cursors.up.isDown) {
            this.body.setVelocityY(-this.velocity);
        } else if (cursors.down.isDown) {
            this.body.setVelocityY(this.velocity);
        } else {
            this.body.setVelocityY(0);
        }
    }
}