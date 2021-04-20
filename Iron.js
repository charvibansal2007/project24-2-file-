class Iron{
    constructor(x , y){
        var options = {
            restitution : 0.9 ,
            friction : 3 , 
            density : 30
        }
        this.body = Bodies.circle( x , y, 50 , options);
        World.add( world , this.body);
        this.r = 50;
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x , pos.y);
        rotate(angle);
        strokeWeight(5);
        stroke("white");
        fill("blue");
        ellipseMode(RADIUS);
        ellipse( 0 , 0 , this.r , this.r );
        pop();
    }
}
