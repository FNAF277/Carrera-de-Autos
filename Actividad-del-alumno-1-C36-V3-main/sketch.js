var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState;
var playerIndex;
var player1carImage;
var player2carImage;
var player1;
var player2;
var trackImage;
var allPlayers;
var players=[];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  player1carImage = loadImage("./assets/car1.png");
  player2carImage = loadImage("./assets/car2.png");
  trackImage = loadImage("./assets/track.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if(playerCount==2){
    game.update(1);
  }
  if(gameState==1){
    game.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
