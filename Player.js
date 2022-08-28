class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.character = null;
    this.positionX = 0;
    this.positionY = 0;
    this.life = 10;
    //this.ammogun = 1;
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2;
      this.positionY = height - 700;
    } else {
      this.positionX = width / 2;
      this.positionY = height - 20;
    }

    database.ref(playerIndex).set({
      name: this.name,
      character: this.character,
      positionX: this.positionX,
      positionY: this.positionY,
      life: this.life = 10,
      //ammogun: this.ammogun = 1,
    });
  }

  static getPlayersInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", (data) => {
      allPlayers = data.val();
    })
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      positionX: this.positionX,
      positionY: this.positionY,
      character: this.character,
      life: this.life = 10,
      //ammogun: this.ammogun = 1,
    })
  }

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }
}
