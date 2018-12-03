// Enemies our player must avoid
var Enemy = function (x, y, velocity) {
    // Variables applied to each of our instances go here,
    // x is horizontal axis position, y is vertical axis position
    // and velocity is the velocity of the enemy bots
    this.x = x;
    this.y = y;
    this.velocity = velocity;

    // The image/sprite for our enemies, this uses
    // a helper I've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.velocity * dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player class with update(), render() and
// a handleInput() method.
var Player = function (x, y) {
    // Variables applied to our player instance,
    // x is horizontal axis position, y is vertical axis position
    this.x = x;
    this.y = y;

    // The image/sprite for our player, this uses
    // a helper I've provided to easily load images
    this.sprite = 'images/char-boy.png';
};

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function () {
    // If x is less than 0 or to the left of canvas
    if (this.x < 0) {
        this.x = 0;
    }

    // If x is to the right of canvas
    if (this.x > 400) {
        this.x = 400;
    }

    // If y is at the top of canvas
    if (this.y < 0) {
        this.y = 380;
        this.x = 200;
    }

    // If y is below the canvas
    if (this.y > 380) {
        this.y = 380;
    }
};

// Draw the player on the screen, required method for game
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Handler for keyboard inputs, ie. arrow buttons
Player.prototype.handleInput = function (key) {
    switch (key) {
        case 'up':
            this.y -= 80;
            break;
        case 'right':
            this.x += 100;
            break;
        case 'down':
            this.y += 80;
            break;
        case 'left':
            this.x -= 100;
            break;
    }
};

// Instantiating objects.
// Placing all enemy objects in an array called allEnemies
// Placing the player object in a variable called player
var allEnemies = [];
var player = new Player(200, 380);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
