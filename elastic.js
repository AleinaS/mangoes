class elastic{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 8
        }
        this.elastic = Constraint.create(options);
        World.add(world, this.elastic);
    }

    display(){
        if(this.elastic.bodyA){
      var pointA = this.elastic.bodyA.position;
      var pointB = this.pointB;
        strokeWeight(3);
        line(bodyA.x, bodyA.y, pointB.x, pointB.y);
        }
        
        
    }
    fly(){
        this.elastic.bodyA = null;
    }
    
}