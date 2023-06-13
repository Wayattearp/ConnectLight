export default class Bird {
    constructor(climber) {
        const { getRandomInt, getRandomArbitrary } = this;
        this.height = 42;
        this.width = 42;
        this.x = getRandomInt(-400, -50);
        this.y = getRandomInt(20, 750);
        this.x_velocity = getRandomArbitrary(1, 2.2);
        this.birdImage = new Image();
        this.birdImage.src = "./src/images/bird/frame-1.png";
        this.swift = document.createElement("audio");
        this.swift.src = "./src/sounds/swift.ogg";
    }

    isColliding(climber) {
        return (
            climber.x < this.x + this.width - 5 &&
            climber.x + (climber.width - 12) > this.x &&
            climber.y < this.y + this.height - 25 &&
            climber.y + climber.height > this.y + 20
        );
    }

    handleCollisions(climber) {
        if (this.isColliding(climber)) {
            this.swift.play();
            this.x_velocity > 0 ? (climber.x += 40) : (climber.x -= 40);
        }
    }

    drawBird(context) {
        context.drawImage(this.birdImage, this.x, this.y, this.width, this.height);
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    handleFlight() {
        if (this.x < -100) {
            this.x_velocity = this.getRandomArbitrary(2.9, 4.2);
            this.y = this.getRandomInt(20, 750);
            this.birdImage.src = "./src/images/bird/frame-1.png";
        } else if (this.x > 1040) {
            this.x_velocity = this.getRandomArbitrary(-2.9, -4.5);
            this.y = this.getRandomInt(20, 750);
            this.birdImage.src = "./src/images/bird/frame-1_flipped.png";
        }
        this.x += this.x_velocity;
    }

    populateBirds() {
        const birds = [];
        for (let i = 0; i < 15; i++) {
            const temp = `bird${i}`;
            birds.push(new Bird(temp));
        }
        return birds;
    }
}
