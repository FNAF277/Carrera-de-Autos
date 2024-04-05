class Game {
  constructor() {}
  getState(){
    var gameStateRef=database.ref("gameState");
    gameStateRef.on("value",function(data){
      gameState=data.val();
    })
  }
  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount=player.getCount();
    player1=createSprite(width/2-350,height-100);
    player2=createSprite(width/2+300,height-100);
    player1.addImage(player1carImage);
    player2.addImage(player2carImage);
    player1.scale=0.1;
    player2.scale=0.1;
    players=[player1,player2];
  }
  update(state){
  database.ref("/").update({
    gameState:state
  })
  }
  play(){
    this.handleElements();
    Player.getPlayersInfo();
    if(allPlayers!=undefined){
      image(trackImage,0,-height*5,width,height*6);
      drawSprites();
    }
    var index=0;
    for(var plr in allPlayers){
      index=index+1;
      var x=allPlayers[plr].positionX;
      var y=height-allPlayers[plr].positionY;
      players[index-1].position.x = x; 
      players[index-1].position.y = y;
    }
    this.playerControl();
  }
  handleElements(){
    form.hide();
    form.titleImg.position(40,50);
    form.titleImg.class("gameTitleAfterEffect");
  }
  playerControl(){
    if(keyIsDown(87)){
      player.positionY=player.positionY+10;
      player.update();
    }
    if(keyIsDown(83)){
      player.positionY=player.positionY-10;
      player.update();
    }
    if(keyIsDown(68)){
      player.positionX=player.positionX+10;
      player.rotation=45;
      player.update();
    }
    if(keyIsDown(65)){
      player.positionX=player.positionX-10;
      player.rotation=45;
      player.update();
    }
  }
}
