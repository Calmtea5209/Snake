function Snake(){
    this.x=0;
    this.y=0;
    this.xSpeed=size;
    this.ySpeed=0;
    this.total=0;
    this.tailx=[];
    this.taily=[];
    this.draw=function(){ 
        ctx.fillStyle="#00EC00";
        for(let i =0;i<this.tailx.length;i++){
            ctx.fillRect(this.tailx[i],this.taily[i],size,size);
        }
        ctx.fillRect(this.x,this.y,size,size);
    }
    this.update=function(){
        for (let i=0; i<this.tailx.length - 1; i++) {  //索引0的值變成索引1的值....
            this.tailx[i] = this.tailx[i+1];
            this.taily[i] = this.taily[i+1];
        }
      
        this.tailx[this.total-1]=this.x;  //儲存頭的座標
        this.taily[this.total-1]=this.y;
      

        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
        if(this.x>canvas.width-size){
            this.x=0;
        }
        if(this.y>canvas.height-size){
            this.y=0;
        }
        if(this.x<0){
            this.x=canvas.width-size;
        }
        if(this.y<0){
            this.y=canvas.height-size;
        }
        this.updateScore();
    }
    this.changeDirection=function(direction){
        switch(direction){
            case "Up":
                this.xSpeed=0;
                this.ySpeed=-size;
                break;
            case "Down":
                this.xSpeed=0;
                this.ySpeed=size;
                break;
            case "Left":
                this.xSpeed=-size;
                this.ySpeed=0;
                break;
            case "Right":
                this.xSpeed=size;
                this.ySpeed=0;
                break;
        }

    }
    this.eat=function(fruit){
        if(this.x==fruit.x&&this.y==fruit.y){
            this.total++;
            return true;
        }
        else{
            return false;
        }
    }
    this.hit=function(){
        for(let i=0;i<this.total;i++){
            if(this.x==this.tailx[i] && this.y==this.taily[i]){
                return true;
            }
        }
        return false;
    }
    this.updateScore=function(){
        document.getElementById('score_id').innerHTML = this.total
    }
}