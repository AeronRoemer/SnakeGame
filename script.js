let snakeImage1 = document.getElementById('snake1');
let snakeImage2 = document.getElementById('snake2');
let snakeImage3 = document.getElementById('snake3');

let snakeCoral = "https://github.com/AeronRoemer/SnakeGame/blob/master/SnakeCoral.png";

let snakeKnown = "https://github.com/AeronRoemer/SnakeGame/blob/master/SnakeKing.png";

let hiddenSnake = "https://github.com/AeronRoemer/SnakeGame/blob/master/SnakeHidden.png";

let startButton = document.getElementById('start');

let currentlyPlaying = true;

 let numSnakes = 3;
 let snake1;
 let snake2;
 let snake3;

const randomSnakeGenerator = () => {
let snake = Math.floor(Math.random() * numSnakes);
  if(snake === 0) {
 snake1 = snakeKnown;
 snake2 = snakeKnown;
 snake3 = snakeCoral;
} else if (snake === 1) {
 snake1 = snakeKnown;
 snake3 = snakeKnown;
 snake2 = snakeCoral;
} else {
 snake3 = snakeKnown;
 snake2 = snakeKnown;
 snake1 = snakeCoral;
}
}

const isCoral = function (snek){
  if (snek.src === snakeCoral){
    return true;
  } else {
    return false;
  }
}

const playSnakes = function (snek) {
  numSnakes --;
  if (isCoral(snek)){
    gameOver();
  } else if (numSnakes === 1){
    gameOver('win');
  }
}

const isClicked = function (image){
  if (image.src === hiddenSnake){
    return false;
  } else {
    return true;
  }
}

const gameOver = (status) => {
  if (status === 'win'){
    startButton.innerHTML = 'You win! Click to play again?';
  } else {
    startButton.innerHTML = 'Death by snakebite! Click to play again?';
  }
  currentlyPlaying = false;
}

snakeImage1.onclick = function(){
  if (!isClicked(snakeImage1) && currentlyPlaying === true){
    snakeImage1.src = snake1;
    playSnakes(snakeImage1);
  }
};

snakeImage2.onclick = function(){
  if (!isClicked(snakeImage2) && currentlyPlaying === true){
    snakeImage2.src = snake2;
    playSnakes(snakeImage2);
  }
};

snakeImage3.onclick = function(){
  if (!isClicked(snakeImage3) && currentlyPlaying === true){
    snakeImage3.src = snake3;
    playSnakes(snakeImage3);
  }
};

startButton.onclick = function startRound(){
  if (currentlyPlaying === false){
  snakeImage1.src = hiddenSnake;
  snakeImage2.src = hiddenSnake;
  snakeImage3.src = hiddenSnake;
  numSnakes = 3;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomSnakeGenerator();
  }
};

startRound();
