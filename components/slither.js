class Slither {
    constructor(x, y) {
        fill(175, 23, 23);
        this.x = x;
        this.y = y;
        rect(this.x, this.y, 10, 10);
    }
    setX(x) { this.x = x; }
    setY(y) { this.y = y; }
    getX() { return this.x; }
    getY() { return this.y; }
    update() {

    }
    show() {
        fill(175, 23, 23);
        rect(this.x, this.y, 10, 10)
    }
}

// module.exports = Snake;