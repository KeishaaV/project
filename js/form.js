class Form{
    constructor (){

    }

    display(){
     var title= createElement ('h2');
     title.html("Car Racing Game"); 
     title.position(130, 0);

     var input= createInput("Name");
     input.position(130, 160);

     var button= createButton("Submit");
     button.position(250, 200);

     button.mousePressed(function(){
         input.hide();
         button.hide();
         playerCount++;
         var name= input.value();
         player.update(name);
         player.updateCount(playerCount);
         var greet= createElement ('h3');
         greet.html("Welcome, "+ name);
         greet.position(130,150);
     });
    }
}