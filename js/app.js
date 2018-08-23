// Enemies our player must avoid
//Location of enemy varies based on horizontal and vertical position
// Parts of the below section inspired from 
// source - https://matthewcranford.com/arcade-game-walkthrough-part-5-adding-enemies/
var Enemy = function() {
    // Variables applied to each of our instances go here,
    this.sprite = 'images/enemy-bug.png';
    this.x = (getRandomInt(3)*101);
    this.y = (getRandomInt(3)*83) + 58;
    //updates speed of enemy movement on screen
    this.speed = Math.floor(Math.random()*100)+100;
    this.moveHorizontal = 101;
    this.resetPosition = this.moveHorizontal;
};

// Get Random Integer function from MDN
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    //Reset enemy position once it crosses screen
    if (this.x > 500) {
        this.x = 0;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
// Parts of the below section inspired from 
// source - https://matthewcranford.com/arcade-game-walkthrough-part-4-heros-first-steps/
var Player = function () {
    this.sprite = 'images/char-princess-girl.png';
    this.moveHorizontal = 101;//Based on canvas column width
    this.moveVertical = 83;//Based on canvas row width
    this.startX = this.moveHorizontal * 2;//202
    this.startY = (this.moveVertical * 4) + 58;//390
    this.x = this.startX;
    this.y = this.startY;
    this.gameOver = false;
    //Resets player position to start point
    this.resetPlayer = function () {
        this.x = this.startX;
        this.y = this.startY;
    };
};
// Update the Player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function () {

};

// Draw the player on the screen, required method for game
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//Moves player based on keypress inputs
//and based on canvas's row and column width
//Keeps player inside canvas dimensions
Player.prototype.handleInput = function (dt) {
    switch (dt) {
        case "up":
            if (this.y > 0) {
                this.y -= this.moveVertical;
            }
            break;
        case "down":
            if (this.y < 380 ) {
                this.y += this.moveVertical;
            }
            break;
        case "left":
            
            if (this.x > 0) {
                this.x -= this.moveHorizontal;
            }
            break;
        case "right":
            
            if (this.x < 400) {
                this.x += this.moveHorizontal;
            }
            break;
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [new Enemy(), new Enemy(), new Enemy(), new Enemy()];
// Place the player object in a variable called player
let player = new Player();


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
