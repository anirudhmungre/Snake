class Snake {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        // this.color = color(random(0, 255), random(0, 255), random(0, 255));
    }
    setX(x) { this.x = x; }
    setY(y) { this.y = y; }
    getX() { return this.x; }
    getY() { return this.y; }
    show(){
        noStroke();
        fill(175, 23, 23);
        rect(this.x, this.y, 10, 10);
    }
}