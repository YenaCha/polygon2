class Block{
  constructor(x, y, width, height) {
      var options = {
                   
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("block.png");
    }
    display(){
      var angle = this.body.angle;
      var pos= this.body.position;
      if (this.body.speed > 5){
        push ()
        World.remove(world, this.body);
        this.visibility = this.visibility-5
        tint (255, this.visibility)
        pop ()
      }
      else{
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        stroke ("brown")
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
      
    }
}