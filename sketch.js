var canvas, brush;
var database;

function setup(){
    database= firebase.database();
    canvas= createCanvas(500,500);
    x= database.ref('position');
    x.on ("value", function (data){ 
        y= data.val(); 
    }, console.log("error"));
}

function draw(){
    brush= createSprite(250,250,50,50);
}

function update (pos){
    database.ref('position').set({
        x: ball.x,
        y: ball.y
    });
}

function mouseDragged(){
    brush.x= mouse.x;
    brush.y= mouse.y;
}