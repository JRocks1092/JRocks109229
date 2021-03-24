class Box {
  constructor(x, y) {

    this.body = Bodies.rectangle(x, y, 30, 40);
    this.width = 30;
    this.height = 40;
    this.visiblty = 255;
    this.Red = Math.round(random(0, 255));
    this.Green = Math.round(random(0, 255));
    this.Blue = Math.round(random(0, 255));
    this.remove1 = false;

    this.image = loadImage("block.png");
    World.add(world, this.body);
  }
  display() {

    var pos = this.body.position;
    
    if (this.body.speed < 3 && !this.remove1) {

      push();
      tint(this.Red, this.Green, this.Blue);
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
      pop();

    }else if (this.body.speed > 7) {
      
      this.remove1 = true;

    }

    if (this.remove1) {

      World.remove(world, this.body);

      push();
      
      this.visiblty = this.visiblty - 5;
      tint(this.Red, this.Green, this.Blue, this.visiblty);
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);

      pop();
    }

  }
};
