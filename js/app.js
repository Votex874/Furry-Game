function Furry() {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
}

function Coin() {
    this.x = Math.floor(Math.random() * (10));
    this.y = Math.floor(Math.random() * (10));
}

function Game() {
    this.board = document.querySelectorAll("#board div");
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    this.index = function(x,y) {
        return x + (y * 10);
    };
    this.showFurry = function () {

        this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');
    };
    this.hideVisibleFurry = function () {
        var actuallDiv = document.querySelector(".furry");
        actuallDiv.classList.remove("furry");
    }
    this.showCoin = function () {
        this.board[ this.index(this.coin.x, this.coin.y)].classList.add("coin");
    }
    this.moveFurry = function () {
        this.gameOver();


        if(this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } else if(this.furry.direction === "down"){
            this.furry.y = this.furry.y + 1;
        }else if(this.furry.direction === "left"){
            this.furry.x = this.furry.x -1;
        }else{
            this.furry.y = this.furry.y - 1;
        }

        this.hideVisibleFurry();
        this.showFurry();
        this.checkCoinCollision()
        return this.gameOver();
    }

    this.turnFurry = function (event) {
        switch (event.which) {
            case 37:
                this.furry.direction = "left";
                break;
            case 39:
                this.furry.direction = "right";
                break;
            case 38:
                this.furry.direction = "up";
                break;
            case 40:
                this.furry.direction = "down";
        }
    };
    this.checkCoinCollision = function () {
        if(this.furry.x === this.coin.x && this.furry.y === this.coin.y){
            var actuallCoin = document.querySelector(".coin");
            actuallCoin.classList.remove("coin");

            this.score = this.score +1;
            var scoreHTML = document.querySelector("#score strong");
            scoreHTML.innerText = this.score;
            this.coin = new Coin();
            this.showCoin();
        }
    };
    this.gameOver = function () {
        if (this.furry.x < 0 || this.furry.y < 0 || this.furry.x > 9 || this.furry.y > 9) {
            clearInterval(this.idSetInterval);
            var endDiv = document.querySelector('#over');
            var endBox = document.createElement("div");
            var endText = document.createElement("div");
            endDiv.classList.remove("invisible");
            endDiv.appendChild(endBox);
            endDiv.appendChild(endText);
            endDiv.style.display = "flex";
            endDiv.style.justifyContent = "center";
            endDiv.style.alignItems = "center";
            endDiv.style.flexDirection = "column";
            endBox.innerText = "Game Over \n";
            endBox.style.fontSize = "50px";
            endBox.style.color = "white";
            endText.innerText = "You collected " + this.score+" points";
            endText.style.color = "white";
            endText.style.fontSize = "26px";

        }
    };

    this.startGame = function() {
        var self = this;
        this.idSetInterval = setInterval( function() {
            self.moveFurry();
        }, 250);
    };
}



var game1 = new Game();
game1.showFurry();
game1.showCoin();
game1.startGame();

document.addEventListener('keydown', function(event){
    game1.turnFurry(event);
});
