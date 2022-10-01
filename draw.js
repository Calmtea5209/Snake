const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");
const size=10;
const rows=canvas.height/size;
const columns=canvas.width/size;
const time = 80;
var snake;
var cnt = 0;
function setup(){
    if(cnt>=1) clearInterval(routine);
    cnt++;
    snake= new Snake();
    fruit= new Fruit();
    fruit.Location();
    routine = setInterval(function(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();
        if(snake.eat(fruit)){
            fruit.Location();
        }
    },time-snake.total); //毫秒
}

window.addEventListener("keydown",function(evt){
    const direction=evt.key.replace("Arrow","");
    snake.changeDirection(direction);
});