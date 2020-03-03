// import Climber from "./climber";

// let climber = new Climber;
// window.addEventListener("keydown", climber.controller.keyListener);
// window.addEventListener("keyup", climber.controller.keyListener);

// export default class Controller {
//     constructor() {    
//         this.controller = {
//                 left: false,
//                 right: false,
//                 up: false,
//                 keyListener: function (event) {

//                     var key_state = (event.type == "keydown") ? true : false;

//                     switch (event.keyCode) {

//                         case 37:// left key
//                             controller.left = key_state;
//                             break;
//                         case 38:// up key
//                             controller.up = key_state;
//                             break;
//                         case 39:// right key
//                             controller.right = key_state;
//                             break;

//                     }

//                 }

//              }

//         }

        
//         handleMoves() {
//         if (climber.controller.up && climber.jumping == false) {

//             climber.y_velocity -= 20;
//             climber.jumping = true;

//         }

//         if (climber.controller.left) {

//             climber.x_velocity -= 0.5;

//         }

//         if (climber.controller.right) {

//             climber.x_velocity += 0.5;

//         }

//         climber.y_velocity += 1.5;// gravity
//         climber.x += climber.x_velocity;
//         climber.y += climber.y_velocity;
//         climber.x_velocity *= 0.9;// friction
//         climber.y_velocity *= 0.9;// friction

//         // if climber is falling below floor line
//         if (climber.y > 515) {

//             climber.jumping = false;
//             climber.y = 515;
//             climber.y_velocity = 0;

//         }

//         // if climber is going off the left of the screen
//         if (climber.x < 0) {

//             climber.x = 0;

//         } else if (climber.x > 770) {// if climber goes past right

//             climber.x = 770;

//         }
//     }

// }

