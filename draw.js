const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");
const size=10;
const rows=canvas.height/size;
const columns=canvas.width/size;
var snake;
function setup(){  
    snake= new Snake();
    fruit= new Fruit();
    fruit.Location();
    setInterval(function(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();
        if(snake.eat(fruit)){
            fruit.Location();
        }
    },50); //毫秒
}

window.addEventListener("keydown",function(evt){
    const direction=evt.key.replace("Arrow","");
    snake.changeDirection(direction);
});