class Roof{
    constructor(x,y,height){
        var options={
            friction:0.5,
            restitution:0.6,
            density:1,
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,330,height,options)
        World.add(myworld,this.body)
        this.width=330;
        this.height=height;
    }
    display(){
        var angle=this.body.angle;
        push()
       translate(this.body.position.x,this.body.position.y)
       rotate(angle)
       rectMode(CENTER)
       rect(0,0,this.width,this.height);
       pop()
    }
}