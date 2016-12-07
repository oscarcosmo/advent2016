var instructions = "L4, R2, R4, L5, L3, L1, R4, R5, R1, R3, L3, L2, L2, R5, R1, L1, L2, R2, R2, L5, R5, R5, L2, R1, R2, L2, L4, L1, R5, R2, R1, R1, L2, L3, R2, L5, L186, L5, L3, R3, L5, R4, R2, L5, R1, R4, L1, L3, R3, R1, L1, R4, R2, L1, L4, R5, L1, R50, L4, R3, R78, R4, R2, L4, R3, L4, R4, L1, R5, L4, R1, L2, R3, L2, R5, R5, L4, L1, L2, R185, L5, R2, R1, L3, R4, L5, R2, R4, L3, R4, L2, L5, R1, R2, L2, L1, L2, R2, L2, R1, L5, L3, L4, L3, L4, L2, L5, L5, R2, L3, L4, R4, R4, R5, L4, L2, R4, L5, R3, R1, L1, R3, L2, R2, R1, R5, L4, R5, L3, R2, R3, R1, R4, L4, R1, R3, L5, L1, L3, R2, R1, R4, L4, R3, L3, R3, R2, L3, L3, R4, L2, R4, L3, L4, R5, R1, L1, R5, R3, R1, R3, R4, L1, R4, R3, R1, L5, L5, L4, R4, R3, L2, R1, R5, L3, R4, R5, L4, L5, R2";

instructions = instructions.split(', ');

var coordinates = [];
var direction = 1;
var stepsX = 0;
var stepsY = 0;
var br = false;

for (var i = 0; i < instructions.length; i++ ) {
  var step = instructions[i];
  setDirection(step);
  var s = parseInt(step.slice(1));
  for(var inc = 0; inc < s; inc++) {
    takeStep();
    if(currentExists()) {
      console.log('Found', 'X: ' + stepsX, 'Y: ' + stepsY);
      br = true;
      break;
    } 
    coordinates.push({x:stepsX,y:stepsY});
  }
  if(br)
    break;
}
console.log('Results:', 'X: ' + stepsX, 'Y: ' + stepsY);
console.log('Added:', stepsX + stepsY);

function currentExists() {
  for (var i = 0; i < coordinates.length; i++) {
    var step = coordinates[i];
    if (step.x == stepsX && step.y == stepsY) {
      return true;
      break;
    }

  }
  return false;
}

function setDirection(step) {
  var d = step.slice(0, 1);
  if(d == 'L')
    turnLeft();
  else
    turnRight();
}

function takeStep(step) {
  switch (direction) {
    case 1: // North
      stepsY++;
      // console.log('Add steps north', s, stepsY);
      break;
    case 2: // East
      stepsX++;
      // console.log('Add steps east', s, stepsX);
      break;
    case 3: // South
      stepsY--;
      // console.log('Remove steps south', s, stepsY);
      break;
    case 4: // West
      stepsX--;
      // console.log('Remove steps west', s, stepsX);
      break;
  }
}

function turnLeft() {
  // console.log('Turning left');
  direction--;
  if(direction == 0) 
    direction = 4 // W
}
function turnRight() {
  // console.log('Turning right');
  direction++;
  if(direction > 4)
    direction = 1 // N
}