//do not enter translate commands, may cause x problemo



class Block {
  constructor(x,y,width,height,fill) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.fill = fill;
    this.Visiblity = 255;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;

    if(this.body.speed < 3) {
      rectMode(CENTER);
      fill(this.fill);
      rect(pos.x, pos.y, this.width, this.height);
    }
    else {
      World.remove(world,this.body);
      push();
 
      this.Visiblity = this.Visiblity - 5; 
      tint(255,this.Visiblity);
      //fill(this.fill)
      //rect(pos.x,pos.y,this.width,this.height);
      pop();
    }
  }
};