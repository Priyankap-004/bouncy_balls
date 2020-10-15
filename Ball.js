class Box {
    constructor(x,y,w,h){
        var ball_options ={
            restitution: 1.0
        }
        this.w = w;
        this.h = h;
    
        this.body = Bodies.rectangle(x,y,this.w,this.h,ball_options);
        World.add(world,this.body);
    }

    display(){
        var loc = this.body.position;
        rectMode(CENTER);
        rect(loc.x, loc.y, this.w, this.h);
    
    }
}