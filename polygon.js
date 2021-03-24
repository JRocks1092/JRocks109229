class polygon {
  constructor(x,y) {
   
    var options = {
      'restitution':0,
      'friction':2,
      'density':1
            
    }
    this.body = Bodies.circle(x,y,20, options);
    this.width = 40;
    this.height = 40;
    this.image = loadImage("polygon.png");
   
    World.add(world, this.body);
  }
  display(a,b,c){
    var pos =this.body.position;
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y, this.width, this.height);
    
    }
};
