class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite Seu Nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./img/TITULO.png", "game title");
    this.greeting = createElement("h2");
    this.character1 = createImg("./img/guerreiro/Guerreiro.png");
    this.character2 = createImg("./img/assassina/Assassina-1.png");
    this.character3 = createImg("./img/Cientista.png");
    this.character4 = createImg("./img/Robo.png");
    this.characterSelected = undefined;
    this.characterSelectedImg1 = createImg("./img/guerreiro/Guerreiro.png");
    this.characterSelectedImg2 = createImg("./img/assassina/Assassina-1.png");
    this.characterSelectedImg3 = createImg("./img/Cientista.png");
    this.characterSelectedImg4 = createImg("./img/Robo.png");
  }

  setElementsPosition() {
    this.titleImg.position(300, 70);
    this.input.position(width / 2 - 110, height / 2);
    this.playButton.position(width / 2 - 90, height / 2 + 80);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
    this.character1.position(10, 10);
    this.character2.position(10, 120);
    this.character3.position(10, 230);
    this.character4.position(10, 340);

    this.characterSelectedImg1.position(150, 400);
    this.characterSelectedImg2.position(150, 400);
    this.characterSelectedImg3.position(150, 400);
    this.characterSelectedImg4.position(150, 400);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
    this.updateCharacterStyle();
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
    this.titleImg.hide();
    this.character1.hide();
    this.character2.hide();
    this.character3.hide();
    this.character4.hide();
    this.characterSelectedImg1.hide();
    this.characterSelectedImg2.hide();
    this.characterSelectedImg3.hide();
    this.characterSelectedImg4.hide();
  }

  handleMousePressed() {
    this.playButton.mouseClicked(() => {
      if (this.characterSelected == undefined) {
        swal({
          title: "Atenção",
          text: "Por favor selecione um personagem",
          confirmButtomText: "Ok"
        });
        return;
      }

      if (this.input.value() == "" || this.input.value() == undefined) {
        swal({
          title: "Atenção",
          text: "Por favor digite um nome de jogador",
          confirmButtomText: "Ok"
        });
        return;
      }

      this.input.hide();
      this.playButton.hide();
      var message = `
        Olá ${this.input.value()}
        </br>espere o outro jogador entrar...`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.character = this.characterSelected;
      player.addPlayer();
      player.updateCount(playerCount);

      equipamentos.selectEquipament();


    });

    this.character1.mouseClicked(() => {
      this.characterSelected = 1;
      this.updateCharacterStyle();
    })
    this.character2.mouseClicked(() => {
      this.characterSelected = 2;
      this.updateCharacterStyle();
    })
    this.character3.mouseClicked(() => {
      this.characterSelected = 3;
      this.updateCharacterStyle();
    })
    this.character4.mouseClicked(() => {
      this.characterSelected = 4;
      this.updateCharacterStyle();
    })
  }

  updateCharacterStyle() {
    this.character1.class("character");
    this.character2.class("character");
    this.character3.class("character");
    this.character4.class("character");

    this.characterSelectedImg1.class("characterAnimation");
    this.characterSelectedImg2.class("characterAnimation");
    this.characterSelectedImg3.class("characterAnimation");
    this.characterSelectedImg4.class("characterAnimation");

    this.characterSelectedImg1.hide();
    this.characterSelectedImg2.hide();
    this.characterSelectedImg3.hide();
    this.characterSelectedImg4.hide();

    if (this.characterSelected == 1) {
      this.character1.class("characterSelected");
      this.characterSelectedImg1.show();
    }

    if (this.characterSelected == 2) {
      this.character2.class("characterSelected");
      this.characterSelectedImg2.show();
    }

    if (this.characterSelected == 3) {
      this.character3.class("characterSelected");
      this.characterSelectedImg3.show();
    }

    if (this.characterSelected == 4) {
      this.character4.class("characterSelected");
      this.characterSelectedImg4.show();
    }

  }



  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}