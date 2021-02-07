class Bob{
    constructor(x,y){
        var options={
            friction:1,
            restitution:0.7,
            density:1,
            isStatic:true
        }
        this.body=Bodies.circle(x,y,30,options);
        World.add(myworld,this.body)
        this.radius=30;
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y)
        fill("purple");
        rotate(angle)
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius)
        pop()
    }
}