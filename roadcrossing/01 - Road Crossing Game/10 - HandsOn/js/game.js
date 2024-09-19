// create title scene
let titleScene = new Phaser.Scene('Title');
titleScene.preload = function () {
  this.load.image('titlebackground', 'assets/title-background.png');
}

titleScene.create = function() {
  let backgr = this.add.sprite(0,0, 'titlebackground');
  backgr.setOrigin(0,0);

  let text = this.add.text(100, 100, 'Welcome to Get Dem Jewels');

  this.input.on('pointerup', function (pointer) {
    this.scene.start('Game');
  }, this);
}

// create a new scene
let gameScene = new Phaser.Scene('Game');

// initialte scene parameters
gameScene.init = function(){
  // player speed
  this.playerSpeed = 3;

  // enemy speed
  this.enemyMinSpeed = 1.5;
  this.enemyMaxSpeed = 4.5;

  // boundaries
  this.enemyMinY = 80;
  this.enemyMaxY = 280;

  // game is just getting started we are not done
  this.isDone = false;
}

// load assets
gameScene.preload = function(){
  // load images
  this.load.image('background', 'assets/background.png');
  this.load.image('player', 'assets/player.png');
  this.load.image('enemy', 'assets/dragon.png');
  this.load.image('goal', 'assets/treasure.png');
};

// called once after the preload ends
gameScene.create = function() {
  // create bg sprite
  let bg = this.add.sprite(0, 0, 'background');

  // change the origin to the top-left corner
  bg.setOrigin(0,0);

  // create the player
  this.player = this.add.sprite(40, this.sys.game.config.height / 2, 'player');

  // we are reducing the width and height by 50%
  this.player.setScale(0.5);
  
  // create a goal
  this.goal = this.add.sprite(this.sys.game.config.width - 80, this.sys.game.config.height / 2, 'goal');
  this.goal.setScale(0.6);
  
  // create an enemy group
  this.enemies = this.add.group({
    key: 'enemy',
    repeat: 4,
    setXY: {
      x: 90,
      y: 100,
      stepX: 100,
      stepY: 20
    }
  });


  // setting the scale of all group elements
  Phaser.Actions.ScaleXY(this.enemies.getChildren(), -0.4, -0.4);
  
  // set flipX, and speed
  Phaser.Actions.Call(this.enemies.getChildren(), function name(enemy) {
    enemy.flipX = true;

    // set the velocity
    let dir = Math.random() < .05 ? 1 : -1;
    let speed = this.enemyMinSpeed + Math.random() * (this.enemyMaxSpeed - this.enemyMinSpeed);
    enemy.speed = dir * speed;

    }, this);
  console.log(this.enemies.getChildren());
  
  

  

  //console.log(this.enemy1);

};

// this is called up to 60 times per second
gameScene.update = function(){

  // don't continue if we are done
  if (this.isDone) return;

  // check for active input
  if (this.input.activePointer.isDown) {
    // player walks
    this.player.x += this.playerSpeed;
  }

  // treasure overlap check
  let playerRect = this.player.getBounds();
  let goalRect = this.goal.getBounds();

  if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect, goalRect)) {
    console.log('goal reached!');
    // end game
    
    return this.gameOver();
  }
  
  // get enemies
  let enemies = this.enemies.getChildren();
  let numEnemies = enemies.length;

  for (let index = 0; index < numEnemies; index++) {
    const element = numEnemies;
    // enemy1 movement 
    enemies[index].y += enemies[index].speed;
    
    // check we haven't passed min Y
    let conditionUp = enemies[index].speed < 0 && enemies[index].y <= this.enemyMinY;
    let conditionDown = enemies[index].speed > 0 && enemies[index].y >= this.enemyMaxY;
    
    // if we pass upper or lower limit, reverse
    if (conditionUp || conditionDown) {
      enemies[index].speed *= -1;
    }
    
    // enemy overlap check
    let enemyRect = enemies[index].getBounds();

    if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect, enemyRect)) {
      console.log('Game over!');
      
      return this.gameOver();
    }



  }






};

gameScene.gameOver = function () {
  
  //init game over
  this.isDone = true;

  // shake camera
  this.cameras.main.shake(500);

  // listen for event completion
  this.cameras.main.on('camerashakecomplete', function (camera, effect) {
    // fade to black
    this.cameras.main.fade(500);
  }, this);

  this.cameras.main.on('camerafadeoutcomplete', function (camera, effect) {
    // restart the Schene
    this.scene.restart();
  }, this);
  
}

// set the configuration of the game
let config = {
  type: Phaser.AUTO, // Phaser will use WebGL if available, if not it will use Canvas
  width: 640,
  height: 360,
  scene: [titleScene, gameScene]
};

// create a new game, pass the configuration
let game = new Phaser.Game(config);
