var s = [],
    food,
    dir = 1,
    dead,
    score,
    dimentionW,
    dimentionH;

function restart() {
    dead = false;
    score = 0;
    food = undefined;
    s = [];
    addPart(width/2 - (width/2)%10, height/2 - (height/2)%10);
    initFood();
}
function setup() {
    dimentionW = (windowWidth) - (windowWidth) % 10;
    dimentionH = (windowHeight) - (windowHeight) % 10;
    // console.log(dimentionW + " " + dimentionH);
    createCanvas(dimentionW, dimentionH);
    frameRate(15);
    background(51);
    restart();
}
function draw() {
    background(51);
    if (!dead) {
        // console.log("ALIVE")
        update();
        showScore();
    }
    else {
        // console.log("DEAD")
        fill(255);
        textAlign(CENTER, BOTTOM);
        textSize(50);
        text("YOU LOSE!", width/2, height/2);
        textAlign(CENTER, TOP);
        textSize(20);
        text("Score: " + score, width/2, height/2);
        text("To restart press \'r\'", width/2, 0);
    }
    show();
}
function keyPressed() {
    switch (keyCode) {
        case LEFT_ARROW:
            // console.log("LEFT");
            if (s.length > 1 && s[0].getX() - 10 != s[1].getX()) { dir = 0; }
            else if (s.length <= 1) { dir = 0; }
            break;
        case RIGHT_ARROW:
            // console.log("RIGHT");
            if (s.length > 1 && s[0].getX() + 10 != s[1].getX()) { dir = 1; }
            else if (s.length <= 1) { dir = 1; }
            break;
        case UP_ARROW:
            // console.log("UP");
            if (s.length > 1 && s[0].getY() - 10 != s[1].getY()) { dir = 2; }
            else if (s.length <= 1) { dir = 2; }
            break;
        case DOWN_ARROW:
            // console.log("DOWN");
            if (s.length > 1 && s[0].getY() + 10 != s[1].getY()) { dir = 3; }
            else if (s.length <= 1) { dir = 3; }
            break;
        case 82:
            restart();
            break;
        default:
            break;
    }
}
function addPart(x, y) {
    s.push(new Snake(x, y));
}
function update() {
    for (let i = s.length - 1; i > 0; i--) {
        s[i].setX(s[i - 1].getX());
        s[i].setY(s[i - 1].getY());
    }
    switch (dir) {
        case 0: // This is LEFT
            s[0].setX(s[0].getX() - 10);
            break;
        case 1: // This is RIGHT
            s[0].setX(s[0].getX() + 10);
            break;
        case 2: // This is UP
            s[0].setY(s[0].getY() - 10);
            break;
        case 3: // This is DOWN
            s[0].setY(s[0].getY() + 10);
            break;
    }
    checkCollision();
    checkFood();
    // show();
}
function checkCollision() {
    for (let i = 1; i < s.length; i++) {
        if (s[0].getX() == s[i].getX() &&
            s[0].getY() == s[i].getY()) {
            dead = true;
        }
    }
    if (s[0].getX() < 0 || s[0].getX() > width - 10 ||
        s[0].getY() < 0 || s[0].getY() > height - 10) {
        dead = true;
    }
    else { checkFood(); }
}
function initFood() {
    let x = int(random(0, (dimentionW - 20) / 10)) * 10;
    let y = int(random(0, (dimentionH - 20) / 10)) * 10;
    // console.log(x + " " + y);
    food = new Food(x, y);
}
function setFood() {
    let x = int(random(0, (dimentionW - 20) / 10)) * 10;
    let y = int(random(0, (dimentionH - 30) / 10)) * 10;
    food.setX(x);
    food.setY(y);
}
function checkFood() {
    if (s[0].getX() == food.getX() &&
        s[0].getY() == food.getY()) {
        score++;
        addPart(s[0].getX(), s[0].getY());
        setFood();
    }
}
function show() {
    s.forEach(body => {
        body.show()
    });
    food.show();
}
function showScore() {
    textAlign(CENTER);
    fill(255);
    textSize(20);
    text("Score: " + score, width/2, height-20);
}