let monstre = {
    x: 100,
    y: 100,
    l: 80,
    h : 40,
    angle:0,
    vitesseX :0,
    vitesseY: 0,
    donneTonNom: function(){
    return "Je m'appelle Paul, je suis x= " + this.x + " y= " + this.y;
    },
    draw: function (ctx) {
    //bonne pratique: sauver le context courant
    //couleur courante, taille du trait etc avant
    //de dessiner ou de modifier qqch dans le contexte
    ctx.save();
    
    ctx.translate(this.x - 400, this.y - 10);
    //ctx.rotate(0.2);

  

    
    ctx.fillRect(400, 10, 100, 100);
    
    // nez
    ctx.fillStyle = "red";
    ctx.fillRect(445, 20, 10, 45);
    // yeux
    ctx.fillStyle ="white"
    ctx.fillRect(410, 30, 30, 25);
    ctx.fillStyle ="blue"
    ctx.fillRect(420, 40, 10, 10);
    ctx.fillStyle ="white"
    ctx.fillRect(460, 30, 30, 25);
    ctx.fillStyle ="blue"
    ctx.fillRect(470, 40, 10, 10);
    // bouche
    ctx.fillStyle = "red";
    ctx.fillRect(420, 70, 70, 30);
     // dents
    ctx.fillStyle = "white";
    ctx.fillRect(420, 70, 10, 30);
    ctx.fillStyle = "white";
    ctx.fillRect(440, 70, 10, 30);
    ctx.fillStyle = "white";
    ctx.fillRect(460, 70, 10, 30);
    ctx.fillStyle = "white";
    ctx.fillRect(480, 70, 10, 30);
    

     
    /*//corps
    ctx.fillStyle = "black";
    ctx.fillRect(440, 210, 120, 100);

    // bras
    ctx.fillStyle = "black";
    ctx.fillRect(480, 250, 140, 10);
    ctx.fillStyle = "black";
    ctx.fillRect(380, 250, 140, 10);

    // jambes
    ctx.fillStyle = "red";
    ctx.fillRect(450, 310, 10, 70);
    ctx.fillStyle = "red";
    ctx.fillRect(530, 310, 10, 70);
    
 
    ctx.beginPath(); 
    //cx, cy, rayon, angle depart, angle arrivée en radian, 
    //sens inverse des aiguille d'une montre car y sens inverse
    ctx.arc(483, 40, 2, 0, Math.PI*2, true);
    ctx.fillStyle = "white";
    ctx.fill(); 
    ctx.lineWidth = 1;
    //on donne l'ordre d'affihcier le chemin
    ctx.stroke(); //en fil de fer
    //ctx.fillStyle = "white"; -- en forme pleine
    //ctx.fill(); */

   
    
    ctx.restore();
    },
    move: function(){
    this.x += this.vitesseX;
    this.y += this.vitesseY;
    },
   };