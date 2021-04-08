class Snow{
    constructor(x, y, radius){
        var options={
            restitution: 0.1,
            friction: 0.1,
            density: 0.1
        }

        this.body= Bodies.circle(x, y, 10, options)
        this.width= 10
        this.height= 10

        this.image= loadImage("snow4.webp")
        Matter.Body.setPosition(this.body, {x,y})
    }
     display(){
         push ()
         translate (this.body.position.x, this.body.position.y)
         image (this.image, this.body.position.x, this.body.position.y, 10, 10 )
         this.body.velocity.y= 3
         pop ()


     }
    
    
}