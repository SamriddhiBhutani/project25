class Paper {
    constructor (x,y) {
        var option = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.4,
            density: 1
        }
        this.body = Bodies.circle(x,y,70,option);
        this.radius = 70;
        this.image = loadImage ("paper.png");
        World.add(world,this.body);
    }
    display () {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius);
    }
}