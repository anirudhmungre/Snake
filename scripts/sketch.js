var dimention = 700,
    snake = [];

function setup() {
    createCanvas(dimention, dimention);
    background(51);
    create_snake(0, 0);
}
function resizeWindow() {
    resizeCanvas(dimention, dimention);
}
function draw() {
    // background(51);
}
function keyPressed() {
    switch (keyCode) {
        case RIGHT_ARROW:
            console.log("RIGHT");
            break;
        case LEFT_ARROW:
            console.log("LEFT");
            break;
        case UP_ARROW:
            console.log("UP");
            break;
        case DOWN_ARROW:
            console.log("DOWN");
            break;
        default:
            console.log("DEFAULT");
            break;
    }
}
function create_snake(x, y) {
    snake.push(new Slither(x, y));
}