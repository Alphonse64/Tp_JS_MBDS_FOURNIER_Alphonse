window.onload = main;


let canvas;
let ctx;
let assets;


// ici on va stocker les objets graphiques du jeu, ennemis, etc.
let tableauDesBalles = [];

let score = 0;

// programme principal
function main() {
  console.log("Page et ressources prÃªtes Ã  l'emploi");
  // appelÃ©e quand la page et ses ressources sont prÃªtes.
  // On dit aussi que le DOM est ready (en fait un peu plus...)
  
  loadAssets(startGame);
  
 
  
}

function startGame(assetsLoaded) {
  canvas = document.querySelector("#myCanvas");
  ctx = canvas.getContext("2d");
  
  canvasLargeur = canvas.width;
  canvasHauteur = canvas.height;
  assets = assetsLoaded;

  

  // On récupère grace à la "selector API" un pointeur sur le canvas
  

  // on ajoute des écouteurs souris/clavier sur le canvas
  canvas.onmousedown = traiteMouseDown;
  canvas.onmouseup = traiteMouseUp;
  console.log(monstre.donneTonNom());
//canvas.addEventListener("mousedown", traiteMouseDown);
  //canvas.addEventListener("mousedown", traiteMouseDown2);

  // le canvas ne peut détecter les touches que si il a le focus (voir mooc)
  // c'est plus simple de mettre l'écouteur sur le document (la page)
  document.onkeydown = traiteKeyDown;
  document.onkeyup = traiteKeyUp;
  
  
  creerDesBalles(3);
  
  requestAnimationFrame(animationLoop);
}




function creerDesBalles(nb) {
  let tabCouleurs = ["red", "green"];
  let img;
  for (let i = 0; i < nb; i++) {

    let indexCouleur = Math.floor(Math.random() * tabCouleurs.length);
    let couleur = tabCouleurs[indexCouleur];
    let vx = -5 + Math.random() * 10;
    let vy = -5 + Math.random() * 10;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let r = Math.random() * 30;

    if(couleur=="red"){
    img = assets.mechant;
    }
    else if(couleur=="green"){
    img = assets.vaisseau1;
    }

    let b = new Balle(x, y, r, couleur, vx, vy, img);
  
    

    // on ajoute la balle au tableau
    
    tableauDesBalles.push(b);
  
  }
  
}


// animation à 60 images/s
function animationLoop() {
  // 1 on efface le canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
 
  // 2 On dessine les objets

  monstre.draw(ctx);


  updateBalles();

  // 3 on déplace les objets
  monstre.move();
  //deplacerLesBalles();

  //balleChercheurse.super.draw();

  // 4 on peut faire autre chose (par ex: detecter des collisions,
  // ou prendre en compte le clavier, la souris, la manette de jeu)
  traiteCollisionsJoueurAvecBords();


  // afficher le score

  drawScore();
 

  // 5 On demande au navigateur de rappeler la fonction
  // animationLoop dans 1/60ème de seconde
  requestAnimationFrame(animationLoop);
}

function traiteCollisionBalleAvecMonstre(b) {
  if (
    circRectsOverlap(
      monstre.x,
      monstre.y,
      monstre.l,
      monstre.h,
      b.x,
      b.y,
      b.rayon
    )
  ) {
    console.log("COLLISION....");
    // on cherche l'index de la balle dans le tableau des balles
    let index = tableauDesBalles.indexOf(b);

    // pour supprimer un élément : on utilise la méthode splice(index, nbElementsASupprimer) sur le tableau
    tableauDesBalles.splice(index, 1);

    
    
    if(b.couleur=="red"){
      console.log("WARNING!");
      document.location.reload();

      
    } 
    else if (b.couleur=="green"){
      console.log("GOOD GAME!");
      score += 10;
      creerDesBalles(3);
     
    }

    console.log(score);

    
  }

}

function updateBalles() {
  // utilisation d'un itérateur sur le tableau
  tableauDesBalles.forEach((b) => {
    b.draw(ctx);
    traiteCollisionsBalleAvecBords(b);
    traiteCollisionBalleAvecMonstre(b);

   
    b.move();
  });
}

function drawScore() {
  ctx.font = "60px Arial";
  ctx.couleur="red";
  ctx.fillText("Score: "+score, 8, 50);
}



