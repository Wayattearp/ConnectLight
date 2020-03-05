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


let bird1, bird2, bird3, bird4, bird5, 
    bird6, bird7, bird8, bird9, bird10;

let birds = [bird1 = new Bird, bird2 = new Bird, bird3 = new Bird,
    bird4 = new Bird, bird5 = new Bird, bird6 = new Bird,
    bird7 = new Bird, bird8 = new Bird, bird9 = new Bird,
    bird10 = new Bird]


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