var CV = new fabric.Canvas("myCanvas");
var block_width = 30;
var block_height = 30;
var player_x = 10;
var player_y = 10;
var player_object = "";
var block_object = ""

function player_update(){
    fabric.Image.fromURL("player.png", function(img){
    player_object = img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:block_height,left:block_width
    });
    CV.add(player_object);


    });
}

function new_image(get_image){
fabric.Image.fromURL(get_image, function(img){
block_object = img;

    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set({
        top:block_height,left:block_width
    });
    CV.add(block_object);    
});
}

window.addEventListener("keydown", controls);

function controls(e){
     keypressed = e.keyCode;
     console.log(keypressed);

    if(e.ShiftKey && keypressed == "80"){
        console.log(block_height);
        console.log(block_width);
        block_height = block_height + 10;
        block_width = block_width + 10;
        document.getElementById("current_height").innerHTML = block_height;
        document.getElementById("current_width").innerHTML = block_width;
    }

   if(e.ShiftKey && keypressed == "27"){
       console.log(block_height);
       console.log(block_width);
       block_height = block_height - 10;
       block_width = block_width - 10;
       document.getElementById("current_height").innerHTML = block_height;
       document.getElementById("current_width").innerHTML = block_width;
   }

   if(keypressed == "37"){
     left();
     console.log("left has been pressed");
    }

    if(keypressed == "38"){
        Up();
        console.log("up has been pressed");
    }

    if(keypressed == "39"){
       right();
       console.log("right has been pressed");
    }

    if(keypressed == "40"){
      Down();
      console.log("down has been pressed");
    }

    if(keypressed == "87"){
       new_image("wall.jpg");
       console.log("you pressed w and you placed a brick")
    }

    if(keypressed == "71"){
        new_image("ground.png");
        console.log("you pressed g and you placed a grass block")
     }

     if(keypressed == "76"){
        new_image("light_green.png");
        console.log("you pressed l and you placed a light green block")
     }

     if(keypressed == "84"){
        new_image("trunk.jpg");
        console.log("you pressed t and you placed a trunk")
     }

     if(keypressed == "82"){
        new_image("roof.jpg");
        console.log("you pressed r and you placed a netherrack")
     }

     if(keypressed == "89"){
        new_image("yellow_wall.png");
        console.log("you pressed y and you placed a yellow brick")
     }

     if(keypressed == "68"){
        new_image("dark_green.png");
        console.log("you pressed d and you placed a drak green block")
     }

     if(keypressed == "85"){
        new_image("unique.png");
        console.log("you pressed u and you placed a unique block")
     }

     if(keypressed == "67"){
        new_image("cloud.png");
        console.log("you pressed c and you placed a cloud block")
      }
}

function Up(){
   if(player_y >= 0){
     player_y = player_y - block_height;
     console.log("player y is" + player_y + "player x is" + player_x);
     CV.remove(player_object);
     player_update();
   }
}

function Down(){
   if(player_y <= 500){
      player_y = player_y + block_height;
      console.log("player y is" + player_y + "player x is" + player_x);
      CV.remove(player_object);
      player_update();
   }
}

function right(){
   if(player_x <= 700){
      player_x = player_x - block_width;
      console.log("player y is" + player_y + "player x is" + player_x);
      CV.remove(player_object);
      player_update();
   }
}

function left(){
   if(player_x >= 0){
      player_x = player_x + block_width;
      console.log("player y is" + player_y + "player x is" + player_x);
      CV.remove(player_object);
      player_update();
   }
}

