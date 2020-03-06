import "./styles/index.scss";
import Climber from "./climber";
import Background from "./background";
import Bird from "./bird";
import Controller from './controller';
import Peg from './peg';
import Light from './light';

let context, loop, canvas;
canvas = document.getElementById("gameScreen")
context = canvas.getContext("2d");

let controller = new Controller;
let climber = new Climber;
let background = new Background;

let peg1, peg2, peg3, peg4, peg5, peg6,
    peg7, peg8, peg9, peg10, peg11, peg12,
    leftLight, rightLight

let right_pegs = [peg1 = new Peg(climber, 480, 720), peg2 = new Peg(climber, 480, 600),
    peg3 = new Peg(climber, 480, 470), peg4 = new Peg(climber, 480, 360),
    peg5 = new Peg(climber, 480, 240), peg6 = new Peg(climber, 480, 120)];

let left_pegs = [peg1 = new Peg(climber, 380, 780), peg2 = new Peg(climber, 380, 660),
    peg3 = new Peg(climber, 380, 530), peg4 = new Peg(climber, 380, 400),
    peg5 = new Peg(climber, 380, 280), peg6 = new Peg(climber, 380, 160)];

let lights = [leftLight = new Light(climber, 355, 27)]

// let right_pegs = peg.populateRightPegs();
let bird = new Bird;
let birds = bird.populateBirds();

loop = function () {
    background.drawBackground(context);
    background.drawTower(context);

    // peg.pegPositionsRight().forEach((pos) =>
    // peg.drawRightPeg(context, pos[0], pos[1])
    // );
    // peg.pegPositionsLeft().forEach((pos) =>
    // peg.drawLeftPeg(context, pos[0], pos[1])
    // );
    lights.forEach((light) =>
        light.drawLight(context, light.x, light.y))
    lights.forEach((light) =>
        light.handleCollisions(climber)
    );

    right_pegs.forEach((right_peg) => 
    right_peg.drawRightPeg(context, right_peg.x, right_peg.y))
    right_pegs.forEach((right_peg) =>
        right_peg.handleCollisions(climber)
    );

    left_pegs.forEach((left_peg) =>
        left_peg.drawLeftPeg(context, left_peg.x, left_peg.y))
    left_pegs.forEach((left_peg) =>
        left_peg.handleCollisions(climber)
    );

    birds.forEach((bird) => 
    bird.drawBird(context));
    birds.forEach((bird) =>
    bird.handleCollisions(climber)
    );
    birds.forEach((bird) =>
    bird.handleFlight()
    );

    climber.drawClimber(context);
    climber.handleMoves();

    window.requestAnimationFrame(loop);

};

document.addEventListener("keydown", controller.keyListener);
document.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);