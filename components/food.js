class Food{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    setX(x) { this.x = x; }
    setY(y) { this.y = y; }
    getX() { return this.x; }
    getY() { return this.y; }
    show(){
        fill(255);
        rect(this.x, this.y, 10, 10);
    }
}