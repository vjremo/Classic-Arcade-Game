// Enemies our player must avoid
//Location of enemy varies based on horizontal and vertical position
var Enemy = function(xPosition, yPosition) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = xPosition;
    this.y = yPosition;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += 1;
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
var Player = function () {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 350;
};
// Update the Player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function (dt) {
};
// Draw the player on the screen, required method for game
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//Moves player based on keypress inputs
Player.prototype.handleInput = function (dt) {
    switch (dt) {
        case "up":
            if (this.y > -10) {
                this.y -= 30;
            }
            break;
        case "down":
            if (this.y < 380 ) {
                this.y += 30;
            }
            break;
        case "left":
            
            if (this.x > -10) {
                this.x -= 30;
            }
            break;
        case "right":
            
            if (this.x < 410) {
                this.x += 30;
            }
            break;
    }
};
// Now instantiate your objects.
var player = new Player();
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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
