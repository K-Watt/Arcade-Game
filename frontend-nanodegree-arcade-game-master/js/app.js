
// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    //x position
    //y position

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
    // If enemy is not passed boundry
      //move forward
      //increment x by speed * dt
    //else
      // reset pos to start
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


const Hero = function(){
  this.sprite = 'images/char-horn-girl.png';
  this.x = 0;
  this.y = 0;
}
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

const kodi   = new Enemy();
const mariah = new Enemy();
const tyler  = new Enemy();
const woody  = new Enemy();
const allEnemies = [];
allEnemies.push(kodi,mariah,tyler,woody);
const player = new Hero();
//psuedo
// Hero class
  // constructor
    //properties
      // x position
      // y position
      //sprite image

//methods
    //update position
            //check for collision here
                //did player x and y collide with enemy?
            //check for win here
              //did player x and y reach final tile?
    // render
        //draw player sprite on current x and y coord position
    // Handle keyboard input
      // update player's X and Y property according to handleInput
   // Reset Hero
     // set x & Y to starting x and Y

//New hero object

//Init all enemies Array
// for each enemy creat and push new enemy objject into above array
