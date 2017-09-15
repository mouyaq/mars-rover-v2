// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [[0,0]]
}
// ======================
// Field Size (square)
// ======================
var size = 10;
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  console.log("OLD direction: " + rover.direction);
  switch ( rover.direction ) {
    case "N":
      rover.direction = "W";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "W":
      rover.direction = "S";
      break;
  }
  console.log("NEW direction: " + rover.direction);
}

function turnRight(rover){
  console.log("turnRight was called!");
  console.log("OLD direction: " + rover.direction);
  switch(rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log("NEW direction: " + rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called");
  console.log("OLD x = " + rover.x + " " + "y = " + rover.y);
  switch (rover.direction) {
    case "N":
      //Mover North = y - 1
      if(rover.y > 0) {
        rover.y -= 1;
      }
      else {
        console.log("NO PUEDO MOVERME");
      }
      break;
    case "S":
      //Mover South = y + 1
      if(rover.y < size-1) {
        rover.y += 1;
      }
      else {
        console.log("NO PUEDO MOVERME");
      }
      break;
    case "E":
      //Mover East = x + 1
      if(rover.x < size-1) {
        rover.x += 1;
      }
      else {
        console.log("NO PUEDO MOVERME");
      }
      break;
    case "W":
    //Mover West = x - 1
      if(rover.x > 0) {
        rover.x -= 1;
      }
      else {
        console.log("NO PUEDO MOVERME");
      }
      break;
  }
  rover.travelLog.push([rover.x, rover.y]);
  console.log("NEW x = " + rover.x + " " + "y = " + rover.y);
}

function moveBackward(rover){
  console.log("moveBackward was called");
  console.log("OLD x = " + rover.x + " " + "y = " + rover.y);
  switch (rover.direction) {
    case "N":
      //Mover North = y + 1
      if(rover.y < size-1) {
        rover.y += 1;
      }
      else {
        console.log("NO PUEDO MOVERME");
      }
      break;
    case "S":
      //Mover South = y - 1
      if(rover.y > 0) {
        rover.y -= 1;
      }
      else {
        console.log("NO PUEDO MOVERME");
      }
      break;
    case "E":
      //Mover East = x - 1
      if(rover.x > 0) {
        rover.x -= 1;
      }
      else {
        console.log("NO PUEDO MOVERME");
      }
      break;
    case "W":
    //Mover West = x + 1
      if(rover.x < size-1) {
        rover.x += 1;
      }
      else {
        console.log("NO PUEDO MOVERME");
      }
      break;
  }
  rover.travelLog.push([rover.x, rover.y]);
  console.log("NEW x = " + rover.x + " " + "y = " + rover.y);
}

function commandList(commands) {
  for(var i=0; i < commands.length; i++) {
    switch(commands[i]) {
      case "b":
        moveBackward(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "f":
        moveForward(rover);
        break;
      default:
        console.log("USE b|f|l|r commands");
        break;
    }
  }
}

function tracking(rover) {
  for(var i=0; i < rover.travelLog.length; i++) {
    console.log(rover.travelLog[i]);
  }
}

commandList("rfrfflfflfrfrffffffflflffrfflfflffbbb");
tracking(rover);
