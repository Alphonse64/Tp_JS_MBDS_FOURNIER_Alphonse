let mousePos = {};

function traiteMouseDown(event) {
  //console.log("Souris clickée dans le canvas bouton " + event.button);
  //console.log("Clickée en x = " + mousePos.x + " y = " + mousePos.y);
  
}

function traiteMouseUp(event) {
    //console.log("Souris relâchée dans le canvas bouton " + event.button);

}


function traiteKeyDown(event) {
  switch (event.key) {
    case "ArrowLeft":
      monstre.vitesseX = -10;
      break;
    case "ArrowRight":
      monstre.vitesseX = 10;
      break;
    case "ArrowUp":
      monstre.vitesseY = -10;
      break;
    case "ArrowDown":
      monstre.vitesseY = 10;
      break;
  }
}

function traiteKeyUp(event) {
  switch (event.key) {
    case "ArrowLeft":
    case "ArrowRight":
      monstre.vitesseX = 0;
      break;
    case "ArrowUp":
    case "ArrowDown":
      monstre.vitesseY = 0;
      break;
  }
}
