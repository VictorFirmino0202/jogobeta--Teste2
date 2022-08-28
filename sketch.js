var database;
var hero1, hero2;
var assassinStop, assassinWalking, assassinBack;
var warriorStop, warriorWalking, warriorBack;
var groupWalls;
var form, player;
var playerCount;
var gameState;
var allPlayers;
var heros = [];
var knifeEquiped;
var allEquipaments;
var equipamentos;

function preload() {
  assassinStop = loadImage("img/assassina/AssassinaParada.png");
  assassinWalking = loadAnimation("img/assassina/AssassinaAndando.png", "img/assassina/AssassinaAndando1.png", "img/assassina/AssassinaAndando2.png");
  assassinBack = loadAnimation("img/assassina/AssassinaAtrasParado.png", "img/assassina/AssassinaAtras.png", "img/assassina/AssassinaAtras1.png");


  warriorStop = loadImage("img/guerreiro/Guerreiro.png");
  warriorWalking = loadAnimation("img/guerreiro/GuerreiroAndando.png", "img//guerreiro/GuerreiroAndando1.png", "img/guerreiro/GuerreiroAndando2.png");
  warriorBack = loadAnimation("img/guerreiro/GuerreiroAtras.png", "img/guerreiro/GuerreiroAtras1.png", "img/guerreiro/GuerreiroAtras2.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  //console.log(database);
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(51);

  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    buildWalls();
    game.play();
    ammoPoint = createSprite(width / 2, height / 2, 10, 10);
    ammoPoint.shapeColor = "purple";
  }

}

function buildWalls() {

  //console.log(`windowWidth: ${windowWidth} width: ${height}`)
  //Cubo das pontas
  wall1 = createSprite(60, 70, 30, 30);
  wall2 = createSprite(60, height - 70, 30, 30);
  wall3 = createSprite(width - 60, height - 70, 30, 30);
  wall4 = createSprite(width - 60, 70, 30, 30);

  //Paredes grandes centrais (meio/cima)
  wall5a = createSprite(width / 2, 70, 200, 30);
  wall5b = createSprite(width / 2 - 85, 100, 30, 80);
  wall5c = createSprite(width / 2 + 85, 100, 30, 80);

  //Paredes grandes centrais (meio/baixo)
  wall6a = createSprite(width / 2, height - 70, 200, 30);
  wall6b = createSprite(width / 2 - 85, height - 100, 30, 80);
  wall6c = createSprite(width / 2 + 85, height - 100, 30, 80);

  //Paredes grandes Lateral esquerda (cima)
  wall7a = createSprite(width / 2 - 300, 70, 150, 30);
  wall7b = createSprite(width / 2 - 240, 100, 30, 80);

  //Paredes grandes Lateral esquerda (baixo)
  wall8a = createSprite(width / 2 - 300, height - 70, 150, 30);
  wall8b = createSprite(width / 2 - 240, height - 100, 30, 80);

  //Paredes grandes Lateral direita (cima)
  wall9a = createSprite(width / 2 + 300, 70, 150, 30);
  wall9b = createSprite(width / 2 + 240, 100, 30, 80);

  //Paredes grandes Lateral direita (baixo)
  wall10a = createSprite(width / 2 + 300, height - 70, 150, 30);
  wall10b = createSprite(width / 2 + 240, height - 100, 30, 80);

  groupWalls = new Group();
  groupWalls.add(wall1, wall2, wall3, wall4, wall5a,
    wall5b, wall5c, wall6a, wall6b, wall6c, wall7a, wall7b,
    wall8a, wall8b, wall9a, wall9b, wall10a, wall10b);
  drawSprites();
}



