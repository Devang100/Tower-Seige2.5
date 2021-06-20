class Block{
  constructor(x, y, width, height) {
      var options = {
        restitution :0,
        friction :1,       
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/bottle.png")
      World.add(world, this.body);
      this.Visibility = 255;
    }
    display(){
      if(this.body.speed<5){
         var angle = this.body.angle;
         push();
         translate(this.body.position.x, this.body.position.y);
         rotate(angle);
         imageMode(CENTER);
         image(this.image,0,0,80,80);
        //rect(0,0,this.width,this.height);
         pop(); 
      }
      else{
         World.remove(world,this.body);
         push();
         this.Visibility-=2;
         tint(255,this.Visibility);                                                       
         imageMode(CENTER);
         image(this.image,this.body.position.x,this.body.position.y,80,80);
         //rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
      }
      
    }
}

