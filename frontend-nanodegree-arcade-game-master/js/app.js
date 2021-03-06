
// Enemies our player must avoid
const Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    //x position starts off screen to show enemies gradually comming onto the borad
    this.x = -101;
    //y position this position is compared to hero position for collision
    this.y = 0;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //this.x = this.x * dt;
    this.x = this.x + this.dt;
    if (this.x > 500){
      this.x = -110;
    }
    //collision testing

      let enemyFrontBumper  = this.x + 38;
      let enemyRearBumper   = this.x -42;
      let enemyMiddleBumper = this.x;
      let enemyY = this.y;
      // this creates a 'no go' zone for the player, prior to this the player
      //could jump ontop of an enemy after the collision point was passed, this
      //makes an imaginary hit box keeping the player from going on the enemy period
      check();
      function check(){
        if((enemyFrontBumper>= player.x)&&(player.x >= enemyRearBumper) &&(player.y === enemyY)){
          player.x = 202;
          player.y = 395;

        }
      }
      playerWin();
      function playerWin(){
        if(player.y === -20){
          { setTimeout(function() {
              player.x = 202;
              player.y = 395;
            }, 1000);
          }
        }
      }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const hero = function(){
  this.sprite = 'images/char-horn-girl.png';
  this.step = 101;
  this.jump = 83;
  this.startX = this.step * 2;
  this.startY = (this.jump * 4) + 63 ;
  this.x = this.startX;
  this.y = this.startY;
};

hero.prototype.update = function(dt){
};
hero.prototype.render = function(){
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
hero.prototype.handleInput = function(e){
  //for reff handleInput function starts on line 100 atm;
  //the switch is also configured to keep the player from going off screen.
  switch(e) {
    case 'left'                                  :
      this.x = this.x > 0 ? this.x -= this.step  : this.x;
      break;
    case 'up'                                    :
      this.y = this.y > 0 ? this.y -= this.jump  : this.y; //replace 0 with this.jump to block player from entering water. (optional)
      break;
    case 'right'                                 :
      this.x = this.x < 400 ? this.x += this.step: this.x;
      break;
    case 'down'                                  :
      this.y = this.y < this.startY ? this.y += this.jump: this.y;
      break;
    }
    console.log(player); // used to check player position for collison testing.
};
/*
the following are the x and y values of the player after each move(only going up):
starting position x = 202 y = 395;
1 up: 202, 312;
1st lane: 202, 229;
2nd lane: 202, 146;
3rd lane: 202, 63;
water : 202, -20;
*/

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

//these are all of the enemies
const kodi       = new Enemy();
const mariah     = new Enemy();
const tyler      = new Enemy();
const woody      = new Enemy();
const atlas      = new Enemy();
const pete       = new Enemy();
const allEnemies = [];
allEnemies.push(kodi,mariah,tyler,woody,atlas,pete); //push all enemies to the allEnemies array

//this will put the enemy in a 'lane' on the Y axis
kodi.y   = 63;
//kodi.x = 202;
pete.y   = 63;
mariah.y = 146;
tyler.y  = 229;
woody.y  = 229;
atlas.y  = 146;
//set the x value of certain enemies for multiple enemies in one 'lane';
woody.x  = -200; // put woody behind tyler
pete.x   = -215; //pete behind kodi
atlas.x  = -245; //atlas behind mariah

//next we set the speed of the enemies for more variation
//note: how can we make these speeds random? Along with number of enemies?
kodi.dt   = 3;
pete.dt   = 1;
mariah.dt = 1.75;
atlas.dt  = 1.50;
//tyler.dt  = 3;
woody.dt  = 2.5;


//the player
const player = new hero();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
