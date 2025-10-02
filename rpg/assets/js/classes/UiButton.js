class UiButton extends Phaser.GameObjects.Container {
    constructor(scene, x, y, key, hoverKey, text, targetCallback) {
        super(scene, x, y);
        this.scene = scene; // the scene this container will be added to
        this.x = x; // the x position of this container
        this.y = y; // the y position of this container
        this.key = key; // the background image of the button
        this.hoverKey = hoverKey; // the image that will be displayed when hovered
        this.text = text; // the text displayed on the button
        this.targetCallback = targetCallback; // the function to call when the button is clicked

        // create the Ui button
        this.createButton();
        this.scene.add.existing(this); // add this container to the phaser scene
        

        
    }
    createButton() {
        // create play game button
        this.button = this.scene.add.image(0, 0, 'button1');
        // make the button interactive
        this.button.setInteractive();
        // scale the button
        this.button.setScale(1.4);

        // create button text
        this.buttonText = this.scene.add.text(0, 0, this.text, { font: '26px', fill: '#fff' });
        // center the text on the button
        Phaser.Display.Align.In.Center(this.buttonText, this.button);

        // add the two game objects to the container
        this.add(this.button);
        this.add(this.buttonText);

        // listen for events
        this.button.on('pointerdown', () => {
            this.targetCallback();
        });

        this.button.on('pointerover', () => {
            this.button.setTexture(this.hoverKey);
        });

        this.button.on('pointerout', () => {
            this.button.setTexture(this.key);
        });
    }
}
