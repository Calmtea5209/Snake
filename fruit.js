function Fruit(){
    this.x;
    this.y;
    this.Location=function(){
        this.x=(Math.floor(Math.random()*rows))*size;
        this.y=(Math.floor(Math.random()*columns))*size;
    }
    this.draw=function(){
        ctx.fillStyle="#ffffff"
        ctx.fillRect(this.x,this.y,size,size);
    }
}