class Box {
  constructor(x,y,width,height) {
    var options = {
        restitution : 0.4
    }
    this.visibility = 255
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  score(){
    if(this.visibility < 0 && this.visibility > -105){
      score++
    }
  }
  display(){
    var pos =this.body.position;
    if(this.body.speed < 3){
    push()
    translate(pos.x, pos.y)
    rotate(this.body.angle)
    rectMode(CENTER);
    fill("lime");
    rect(0, 0, this.width, this.height);
    pop()
    }
    else{
      World.remove(world, this.body)
      push()
      this.visibility = this.visibility-5
      pop()
    }
  }
};