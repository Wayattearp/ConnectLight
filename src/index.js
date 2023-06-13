import "./styles/index.scss";
import Climber from "./climber";
import Background from "./background";
import Bird from "./bird";
import Controller from './controller';
import Peg from './peg';
import Light from './light';

const canvas = document.getElementById("gameScreen");
const context = canvas.getContext("2d");

const controller = new Controller();
const climber = new Climber();
const background = new Background();

const peg1 = new Peg(climber, 480, 720);
const peg2 = new Peg(climber, 480, 600);
const peg3 = new Peg(climber, 480, 470);
const peg4 = new Peg(climber, 480, 360);
const peg5 = new Peg(climber, 480, 240);
const peg6 = new Peg(climber, 480, 120);

const right_pegs = [peg1, peg2, peg3, peg4, peg5, peg6];

const peg7 = new Peg(climber, 380, 780);
const peg8 = new Peg(climber, 380, 660);
const peg9 = new Peg(climber, 380, 530);
const peg10 = new Peg(climber, 380, 400);
const peg11 = new Peg(climber, 380, 280);
const peg12 = new Peg(climber, 380, 160);

const left_pegs = [peg7, peg8, peg9, peg10, peg11, peg12];

const leftLight = new Light(climber, 355, 27);

const lights = [leftLight];

const bird = new Bird();
const birds = bird.populateBirds();

function draw() {
    background.drawBackground(context);
    background.drawTower(context);

    lights.forEach(light => light.drawLight(context, light.x, light.y));

    right_pegs.forEach(right_peg => right_peg.drawRightPeg(context, right_peg.x, right_peg.y));

    left_pegs.forEach(left_peg => left_peg.drawLeftPeg(context, left_peg.x, left_peg.y));

    birds.forEach(bird => bird.drawBird(context));

    climber.drawClimber(context);
}

function update() {
    lights.forEach(light => light.handleCollisions(climber));
    right_pegs.forEach(right_peg => right_peg.handleCollisions(climber));
    left_pegs.forEach(left_peg => left_peg.handleCollisions(climber));
    birds.forEach(bird => bird.handleCollisions(climber));
    birds.forEach(bird => bird.handleFlight());
    climber.handleMoves();
}

function loop() {
    draw();
    update();
    window.requestAnimationFrame(loop);
}

document.addEventListener("keydown", controller.keyListener);
document.addEventListener("keyup", controller.keyListener);

window.requestAnimationFrame(loop);
