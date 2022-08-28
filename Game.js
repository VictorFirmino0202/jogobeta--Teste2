class Game {
    constructor() {
        this.resetTitle = createElement("h2")
        this.resetButton = createButton("");
        this.knife = false;
        this.ammoload = true;
    }

    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        });
    }

    update(state) {
        database.ref("/").update({
            gameState: state
        });
    }

    start() {
        form = new Form();
        form.display();

        player = new Player();
        playerCount = player.getCount() || 0;

        

        equipamentos = new Equipaments();
      


        hero1 = createSprite(width / 2, height);
        hero1.shapeColor = "blue";
        hero1.scale = 0.1;
        hero1.addImage(warriorStop);
        hero1.addAnimation("andando",warriorWalking);
        hero1.addAnimation("costas", warriorBack);

        hero1.scale = 0.01;
        hero1.addImage(assassinStop);
        //hero1.addAnimation("andando",assassinWalking);
        //hero1.addAnimation("costas", assassinBack);

        hero2 = createSprite(width / 2, height);
        hero2.shapeColor = "red";
        hero2.scale = 0.1;
        hero2.addImage(warriorStop);
        hero2.addAnimation("andando",warriorWalking);
        hero2.addAnimation("costas", warriorBack);

        hero2.scale = 0.01;
        hero2.addImage(assassinStop);
        //hero2.addAnimation("andando",assassinWalking);
        //hero2.addAnimation("costas", assassinBack);

        heros = [hero1, hero2];

        //console.log(equipamentos);

        

    }

    handleElements() {
        form.hide();
        form.titleImg.position(40, 50);
        form.titleImg.class("gameTitleAfterEffect");

        this.resetTitle.html("Reiniciar Jogo");
        this.resetTitle.class("resetText");
        this.resetTitle.position(width / 2 + 230, 30);

        this.resetButton.class("resetButton");
        this.resetButton.position(width / 2 + 280, 100);

    }

    play() {
        this.handleElements();
        this.handleResetButton();

        Player.getPlayersInfo();

        equipamentos.selectEquipament();


        if (allPlayers !== undefined) {

            var index = 0;
            for (var plr in allPlayers) {
                index += 1;
                var x = allPlayers[plr].positionX;
                var y = height - allPlayers[plr].positionY;

                heros[index - 1].position.x = x;
                heros[index - 1].position.y = y;

                if (index === player.index) {
                    // stroke(10);
                    // fill('black')
                    // ellipse(x, y, 25, 25);

                    // if (camera.position.x < width / 2 ||
                    //     camera.position.x > 20) {

                    //     camera.position.x = heros[index - 1].position.x;
                    // }

                    // if (camera.position.y < height ||
                    //     camera.position.y > 0) {

                    //     camera.position.y = heros[index - 1].position.y;
                    // }
                    // camera.zoom = 2;

                    if (player.characterSelected == 1 && equipamentos.index == 1) {
                        heros[index-1].changeImage(warriorStop);
                    } else if (player.characterSelected == 2 && equipamentos.index == 1) {
                        heros[index-1].changeImage(assassinStop);
                    } else if (player.characterSelected == 3 && equipamentos.index == 1) {
                         //carrega warrior com a arma
                    } else if (player.characterSelected == 4 && equipamentos.index == 1) {
                         //carrega warrior com a arma
                    } 

                    if (player.characterSelected == 1 && equipamentos.index == 2) {
                        heros[index-1].changeImage(warriorStop);
                    } else if (player.characterSelected == 2 && equipamentos.index == 2) {
                        heros[index-1].changeImage(assassinStop);
                    } else if (player.characterSelected == 3 && equipamentos.index == 2) {
                         //carrega warrior com a faca
                    } else if (player.characterSelected == 4 && equipamentos.index == 2) {
                         //carrega warrior com a faca
                    } 
                }
            }
            this.handlePlayerControls();
            drawSprites();
        }
       
        
    }

    setBank() {
        database.ref("/").set({
            gameState: 0,
            playerCount: 0,
            players: {},
        });
    }

    handlePlayerControls() {
        //camera.zoom = 2;
        if (keyIsDown(UP_ARROW)) {
            if (player.positionY != undefined) {
                player.positionY += Math.round((10 * height) / 1080);
                if (player.positionY > height) {
                    player.positionY = height;
                    
                }

                
                player.update();
               
            }
            
        }
        if (keyIsDown(RIGHT_ARROW)) {
            if (player.positionX != undefined) {
                player.positionX += Math.round((10 * width) / 1080);
                if (player.positionX > width) {
                    player.positionX = width;
                }

                player.update();
            }

        }


        if (keyIsDown(LEFT_ARROW)) {
            if (player.positionX != undefined) {
                player.positionX -= Math.round((10 * width) / 1080);
                if (player.positionX < 0) {
                    player.positionX = 0;
                }

                player.update();
            }
        }

        if (keyIsDown(DOWN_ARROW)) {
            if (player.positionY != undefined) {
                player.positionY -= Math.round((10 * height) / 1080);
                if (player.positionY < 0) {
                    player.positionY = 0;
                }

                player.update();
            }
        }

        if (equipamentos.ammogun == 1) {
            if (keyIsDown(32)) {
              //equipamentos.ammogun -=1;
               equipamentos.updateAmmogun(2, 0);
            }
            //console.log(equipamentos.ammogun);
        }
    }


    handleResetButton() {
        this.resetButton.mouseClicked(() => {
            database.ref("/").set({
                gameState: 0,
                playerCount: 0,
                players: {},
            });
            window.location.reload();
        })
    }



}



