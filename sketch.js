var canvas, bgImg;
var database, playerCount;
var gameState= 0; 
var form, game, player;

function setup(){
    database= firebase.database();
    canvas= createCanvas(500,500);
    game= new Game(); 
    game.getState();
    game.start();
}

function draw(){
    
}
