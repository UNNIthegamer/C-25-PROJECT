class Paper{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            density:1.2,
            friction:0,
            restitution:0.3
        };
    this.x=x;
    this.y=y;
    this.r=r;
    this.body = Bodies.circle(this.x, this.y,(this.r-40)/2, options);
    this.image=loadImage("paper.png");
    this.image.scale=0.1;
    World.add(world, this.body);
    };
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight (3);
        stroke ("black");
        fill ("RED");
        imageMode (CENTER)
        image (this.image,this.r,this.r);
        pop();
    }
}