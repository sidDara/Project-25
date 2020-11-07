class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        
          this.Body= Bodies.rectangle(x,y,width,height,options);
          World.add(world,this.Body);
          this.width = width
          this.height = height
            
    }

    display(){
        var position = this.Body.position;
        rectMode(CENTER);
        noStroke();
        fill (255)
        rect(position.x, position.y, this.width, this.height);
    }
}
