var s = [],
    food,
    dir,
    dead,
    score,
    w,
    h
    paused;
function reset() {
    w = (window.innerWidth) - (window.innerWidth) % 10;
    h = (window.innerHeight) - (window.innerHeight) % 10;
    dead = false;
    paused = false;
    score = 0;
    food = undefined;
    s = [];
    addPart(w / 2 - (w / 2) % 10, h / 2 - (h / 2) % 10);
    addPart(w / 2 - (w / 2) % 10, h / 2 - (h / 2) % 10);
    addPart(w / 2 - (w / 2) % 10, h / 2 - (h / 2) % 10);
}
describe("Add part", function () {
    beforeEach(() => reset());
    it("Makes snake longer by 1", function () {
        // reset();
        let initLen = s.length
        addPart(0, 0);
        assert.equal(s.length, initLen + 1);
    });
});
describe("Check collision", function () {
    beforeEach(() => reset());
    it("Sets a snake to dead if collision of snake occurs", function () {
        addPart(0, 0);
        addPart(0, 0);
        checkCollision();
        assert.isTrue(dead);
    });
    it("Sets a snake to dead if passes boundry", function () {
        addPart(-20, 0);
        checkCollision();
        assert.isTrue(dead);
    });
});
describe("Check food", function () {
    beforeEach(() => reset());
    it("Adds 1 to score if head collision with food", function () {
        let initScore = score;
        s[0].setX(0);
        s[0].setY(0);
        food = new Food(0, 0);
        checkFood();
        assert.equal(score, initScore+1);
    });
    it("Adds 1 to snake length if head collision with food", function () {
        let initLen = s.length;
        s[0].setX(0);
        s[0].setY(0);
        food = new Food(0, 0);
        checkFood();
        assert.equal(s.length, initLen+1);
    });
});
describe("New Point", function () {
    beforeEach(() => reset());
    function pointsTest(x) {
        it(`${x} adds ${x} to score`, function () {
            let initScore = score;
            newPoint(x);
            assert.equal(score, initScore + x)
        });
    }
    for (let i = 0; i < 6; i++){
        pointsTest(i);
    }
});
describe("Pause", function () {
    beforeEach(() => reset());
    it("Sets 'paused' to true if false", function () {
        paused = false;
        pause();
        assert.isTrue(paused);
    });
    it("Sets 'paused' to false if true", function () {
        paused = true;
        assert.isTrue(paused);
    });
});