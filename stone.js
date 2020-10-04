class Stone{
        constructor(bodyA, pointB){
            var options = {
                bodyA: bodyA,
                pointB: pointB,
                stiffness: 0.04,
                length: 10
            }
            this.stone = Constraint.create(options);
            World.add(world, this.stone);
        }
    
        fly(){
            this.chain.bodyA=null
        }

            attach(body){
                this.sling.bodyA = body;
            }
            

        display(){
            if(this.stone.bodyA){
            var pointA = this.stone.bodyA.position;
            var pointB = this.stone.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
        }
        
    }
    
