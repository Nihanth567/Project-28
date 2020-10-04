class Mango{
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1 
        }
        
        this.body = Bodies.circle(x,y,5,options);
        this.width = 15;
        this.height = 15;

        World.add(world,this.body);


    }

    display(){
        push();
        ellipseMode(CENTER);
        fill("yellow");
        ellipse(this.body.position.x,this.body.postition.y,5);
        pop();
    }
}