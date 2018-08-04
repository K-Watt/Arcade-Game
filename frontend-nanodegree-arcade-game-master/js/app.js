
// Enemies our player must avoid
const Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    //x position starts off screen to show enemies gradually comming onto the borad
    this.x = -80;
    //y position this position is compared to Hero position for collision
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
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Hero = function(){
  this.sprite = 'images/char-horn-girl.png';
  this.x = 200;
  this.y = 400;
};

Hero.prototype.update = function(dt){
};
Hero.prototype.render = function(){
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Hero.prototype.handleInput = function(){
};


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
allEnemies.push(kodi,mariah,tyler,woody,atlas, pete); //push all enemies to the allEnemies array

//this will put the enemy in a 'lane' on the Y axis
kodi.y   = 60;
pete.y   = 60;
mariah.y = 145;
tyler.y  = 225;
woody.y  = 225;
atlas.y  = 145;
//set the x value of certain enemies for multiple enemies in one 'lane';
woody.x  = -200; // put woody behind tyler
pete.x   = -215; //pete behind kodi
atlas.x  = -245; //atlas behind mariah

//next we set the speed of the enemies for more variation
kodi.dt   = 2;
pete.dt   = 1.85;
mariah.dt = 1.75;
atlas.dt  = 1.50;
tyler.dt  = 3;
woody.dt  = 2.5;




//the player
const player = new Hero();





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
