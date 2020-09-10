class chain {
   constructor(Body_1 , Body_2){
       var option = {
          bodyA: Body_1,
          bodyB: Body_2,
  
          length : 310,
          stiffness: 0,
       }
       this.chain = constraint.create(option);
       World.add(world, this.chain)
   }
     display(){
      var pointA = this.chain.bodyA.position;
      var pointB = this.chain.bodyB.position;
  
      strokeWeight(1);
      line (pointA.x, pointA.y, pointB.x, pointB.y);
     }
  
  }