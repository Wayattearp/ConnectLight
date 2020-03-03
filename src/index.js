import "./styles/index.scss";
import Climber from "./climber";

var context, controller, loop;

context = document.getElementById("gameScreen").getContext("2d");


controller = {

    left: false,
    right: false,
    up: false,
    keyListener: function (event) {

        var key_state = (event.type == "keydown") ? true : false;

        switch (event.keyCode) {

            case 37:// left key
                controller.left = key_state;
                break;
            case 38:// up key
                controller.up = key_state;
                break;
            case 39:// right key
                controller.right = key_state;
                break;

        }

    }

};

let climber = new Climber;
loop = function () {

    if (controller.up && climber.jumping == false) {

        climber.y_velocity -= 20;
        climber.jumping = true;

    }

    if (controller.left) {

        climber.x_velocity -= 0.5;

    }

    if (controller.right) {

        climber.x_velocity += 0.5;

    }

    climber.y_velocity += 1.5;// gravity
    climber.x += climber.x_velocity;
    climber.y += climber.y_velocity;
    climber.x_velocity *= 0.9;// friction
    climber.y_velocity *= 0.9;// friction

    // if climber is falling below floor line
    if (climber.y > 515) {

        climber.jumping = false;
        climber.y = 515;
        climber.y_velocity = 0;

    }

    // if climber is going off the left of the screen
    if (climber.x < 0) {

        climber.x = 0;

    } else if (climber.x > 770) {// if climber goes past right

        climber.x = 770;

    }


    // function drawPlayer() {
    //     const climberImage = new Image();
    //     climberImage.src = "./src/images/climber.png";
    //     context.drawImage(climberImage, climber.x, climber.y, climber.w, climber.h);
    // }

    context.fillStyle = "#202020";
    context.fillRect(0, 0, 800, 600);// x, y, width, height
    context.fillStyle = "#0f0";
    const climberImage = new Image();
    climberImage.src = "./src/images/craftpix-991117-free-fallen-angel-chibi-2d-game-sprites/Fallen_Angels_2/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_000.png";
    context.drawImage(climberImage, climber.x, climber.y, climber.width, climber.height);
    // call update when the browser is ready to draw again
    window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);