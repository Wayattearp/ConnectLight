import "./styles/index.scss";
import Climber from "./climber";
import Background from "./background";
import Bird from "./bird";
import Controller from './controller';
import Peg from './peg';

let context, loop, canvas;
canvas = document.getElementById("gameScreen")
context = canvas.getContext("2d");

let controller = new Controller;
let climber = new Climber;
let background = new Background;
let peg = new Peg;
let bird = new Bird;
let birds = bird.populateBirds();

loop = function () {
    background.drawBackground(context);
    background.drawTower(context);

    peg.pegPositionsRight().forEach((pos) =>
    peg.drawRightPeg(context, pos[0], pos[1])
    );
    // peg.pegPositionsLeft().forEach((pos) =>
    // peg.drawLeftPeg(context, pos[0], pos[1])
    // );

    peg.handleCollisions(climber);

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