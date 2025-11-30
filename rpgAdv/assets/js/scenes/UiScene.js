class UiScene extends Phaser.Scene {
    constructor() {
        super('Ui');
    }

    init() {
        // get a reference to the Game scene
        this.gameScene = this.scene.get('Game');
        this.score = 0;
    }

    create() {
        this.setupUiElements();
        this.setupEvents();
    }

    setupUiElements() {
        // create the score text game object
        this.scoreText = this.add.text(35, 8, 'Coins: 0', { font: '16px', fill: '#fff' });
        // create a coin icon next to the score text
        this.coinIcon = this.add.image(15, 15, 'items', 3);
    }

    setupEvents() {
        // listen for the updateScore event from the Game scene
        this.gameScene.events.on('updateScore', this.updateScore, this);
    }

    updateScore(score) {
        this.scoreText.setText('Coins: ' + score);
    }
}