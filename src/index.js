import "./styles/index.scss";
import Climber from "./climber";
import Background from "./background";
import Bird from "./bird";
import Controller from './controller';

let context, loop, canvas;
canvas = document.getElementById("gameScreen")
context = canvas.getContext("2d");

let controller = new Controller;
let climber = new Climber;
let background = new Background;

let bird1, bird2, bird3, bird4, bird5, bird6, bird7
let birds = [bird1 = new Bird, bird2 = new Bird, bird3 = new Bird,
bird4 = new Bird, bird5 = new Bird, bird6 = new Bird, bird7 = new Bird];

    
loop = function () {
    climber.handleMoves();
   
    background.drawBackground(context);
    birds.forEach((bird) => 
        bird.drawBird(context));
    birds.forEach((bird) =>
        bird.handleCollisions(climber)
        );
    birds.forEach((bird) =>
        bird.handleFlight()
    );
    background.drawTower(context);
    climber.drawClimber(context);
    window.requestAnimationFrame(loop);

};

document.addEventListener("keydown", controller.keyListener);
document.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);