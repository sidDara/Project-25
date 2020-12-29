class Dustbin{
    constructor(x,y,width,height,base){
        var options = {
            isStatic: true
        }
        
          this.Body= Bodies.rectangle(x,y,width,height,options);
          World.add(world,this.Body);
          this.width = width
          this.height = height
          this.base = base
          this.image = loadImage("Dustbin Image.png")
            
    }

    display(){
        var position = this.Body.position;
        console.log(this.base)
        if(this.base){
            push()
            imageMode(CENTER)
            image(this.image, position.x, position.y, this.width, this.height*5)
            pop()
        } else{
            push()
            rectMode(CENTER);
            noStroke();
            fill (255)
            rect(position.x, position.y, this.width, this.height);
            pop()
        }
    }
}
