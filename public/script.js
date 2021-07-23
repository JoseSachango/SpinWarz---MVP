//var Phaser = require("phaser") -> we used a cdn to connect the phaser library to our project, so we don't need to require anything here

//const { delete } = require("../routes");

//const API = require("./utils/API");

//import  {io}  from "socket.io-client";
//const {io}  = require("socket.io-client")

//import waveCollision  from "./waveBulletCollision"


// create a new scene
let gameScene = new Phaser.Scene("Game"); //-> gameScene is just a javascript object
//game state object
let gameState = {}


gameScene.init = function(){
   
   
   
      
}





//load assets
gameScene.preload = function(){
    this.load.image("background","assets/background.png")  //*this.* refers to the gameScene object
    this.load.image("player","assets/player.png")
    this.load.image("bullet","assets/bullet2.png")
};



// called once after preload ends
gameScene.create = function(){

    

   

    // -------------------------------------------
    gameState.socket = io()

    gameState.socket.on("playerData", (message)=>{
        //this.downFlag = false;
        
        for(const i in message){
            //console.log("This is message[i]: ",message[i])
            switch(message[i].playerName) {

                case "player 1":
                  if(!gameState.playerOne){
                      this.player = this.physics.add.sprite(50,50,"player",0)// placing player in the scene context so you can access it from different methods
                      gameState.playerOne = this.player
                      gameState.playerOneScore = 0
                      this.playerHealth = 100
                      this.player.visible = true
                      this.player.body.setCollideWorldBounds(true);
                      this.player.body.bounce.set(1)
                     
                      //gameState.colliderP1P2 = this.physics.add.collider(this.player,this.player2)
                      //gameState.colliderP1P3 = this.physics.add.collider(this.player,this.player3)
                      //gameState.colliderP1P4 = this.physics.add.collider(this.player,this.player4)
                      //this.player.angle = message[i].playerAngle
                      this.player.angle = 0
                      this.bullet2player = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
                        this.bullet2player.visible = false
                        this.bullet3player = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
                        this.bullet3player.visible = false
                        this.bullet4player = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
                        this.bullet4player.visible = false
                        this.bullet5player = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
                        this.bullet5player.visible = false
                        this.bullet6player = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
                        this.bullet6player.visible = false
                        this.velocityplayer = message[i].playerVelocity
                        this.accelerationplayer = message[i].playerAcceleration
                        this.countplayer = message[i].playerCount
                        this.count2player = message[i].playerCount2
                        this.radiusplayer = message[i].playerRadius
                        this.radius2player = message[i].playerRadius2
                  }
                   
                  //Add code here that is being updated constantly by another sockets inputs
                 
                    break;
                case "player 2":
                  if(!gameState.playerTwo){
                    
                      this.player2 = this.physics.add.sprite(520,50,"player",0)// placing player in the scene context so you can access it from different methods
                      gameState.playerTwo = this.player2
                      gameState.playerTwoScore = 0
                      this.player2Health = 100
                      this.player2.visible = true
                      this.player2.body.setCollideWorldBounds(true);
                      this.player2.body.bounce.set(1)
                      
                      //gameState.colliderP2P1 = this.physics.add.collider(this.player2,this.player)
                      //gameState.colliderP2P3 = this.physics.add.collider(this.player2,this.player3)
                      //gameState.colliderP2P4 = this.physics.add.collider(this.player2,this.player4)
                      //this.player2.angle = message[i].playerAngle
                      this.player2.angle = 0
                      this.bullet2player2 = this.physics.add.sprite(this.player2.x,this.player2.y,"bullet",0)
                        this.bullet2player2.visible = false
                        this.bullet3player2 = this.physics.add.sprite(this.player2.x,this.player2.y,"bullet",0)
                        this.bullet3player2.visible = false
                        this.bullet4player2 = this.physics.add.sprite(this.player2.x,this.player2.y,"bullet",0)
                        this.bullet4player2.visible = false
                        this.bullet5player2 = this.physics.add.sprite(this.player2.x,this.player2.y,"bullet",0)
                        this.bullet5player2.visible = false
                        this.bullet6player2 = this.physics.add.sprite(this.player2.x,this.player2.y,"bullet",0)
                        this.bullet6player2.visible = false
                        this.velocityplayer2 = message[i].playerVelocity
                        this.accelerationplayer2 = message[i].playerAcceleration
                        this.countplayer2 = message[i].playerCount
                        this.count2player2 = message[i].playerCount2
                        this.radiusplayer2 = message[i].playerRadius
                        this.radius2player2 = message[i].playerRadius2
                  }
                  //Add code here that is being updated constantly by another sockets inputs
                    break;
                case "player 3":
                  if(!gameState.playerThree){
                      this.player3 = this.physics.add.sprite(50,330,"player",0)// placing player in the scene context so you can access it from different methods
                      gameState.playerThree = this.player3
                      gameState.playerThreeScore = 0
                      this.player2Health = 100
                      this.player3.visible = true
                      this.player3.body.setCollideWorldBounds(true);
                      this.player3.body.bounce.set(1)
                   
                      //gameState.colliderP3P1 = this.physics.add.collider(this.player3,this.player2)
                      //gameState.colliderP3P2 = this.physics.add.collider(this.player3,this.player4)
                      //gameState.colliderP3P4  = this.physics.add.collider(this.player3,this.player)
                      //this.player3.angle = message[i].playerAngle
                      this.player3.angle = 0
                      this.bullet2player3 = this.physics.add.sprite(this.player3.x,this.player3.y,"bullet",0)
                        this.bullet2player3.visible = false
                        this.bullet3player3 = this.physics.add.sprite(this.player3.x,this.player3.y,"bullet",0)
                        this.bullet3player3.visible = false
                        this.bullet4player3 = this.physics.add.sprite(this.player3.x,this.player3.y,"bullet",0)
                        this.bullet4player3.visible = false
                        this.bullet5player3 = this.physics.add.sprite(this.player3.x,this.player3.y,"bullet",0)
                        this.bullet5player3.visible = false
                        this.bullet6player3 = this.physics.add.sprite(this.player3.x,this.player3.y,"bullet",0)
                        this.bullet6player3.visible = false
                        this.velocityplayer3 = message[i].playerVelocity
                        this.accelerationplayer3 = message[i].playerAcceleration
                        this.countplayer3 = message[i].playerCount
                        this.count2player3 = message[i].playerCount2
                        this.radiusplayer3 = message[i].playerRadius
                        this.radius2player3 = message[i].playerRadius2
                  }
                  //Add code here that is being updated constantly by another sockets inputs
                    break;
                case "player 4":
                  if(!gameState.playerFour){
                      this.player4 = this.physics.add.sprite(520,330,"player",0)// placing player in the scene context so you can access it from different methods
                      gameState.playerFour = this.player4
                      gameState.playerFourScore = 0
                      this.player4Health = 100
                      this.player4.visible = true
                      this.player4.body.setCollideWorldBounds(true);
                      this.player4.body.bounce.set(1)
                     
                      //gameState.colliderP4P1 = this.physics.add.collider(this.player4,this.player2)
                      //gameState.colliderP4P2  = this.physics.add.collider(this.player4,this.player3)
                      //gameState.colliderP4P3 =  this.physics.add.collider(this.player4,this.player)
                      //this.player4.angle = message[i].playerAngle
                      this.player4.angle = 0
                      this.bullet2player4 = this.physics.add.sprite(this.player4.x,this.player4.y,"bullet",0)
                        this.bullet2player4.visible = false
                        this.bullet3player4 = this.physics.add.sprite(this.player4.x,this.player4.y,"bullet",0)
                        this.bullet3player4.visible = false
                        this.bullet4player4 = this.physics.add.sprite(this.player4.x,this.player4.y,"bullet",0)
                        this.bullet4player4.visible = false
                        this.bullet5player4 = this.physics.add.sprite(this.player4.x,this.player4.y,"bullet",0)
                        this.bullet5player4.visible = false
                        this.bullet6player4 = this.physics.add.sprite(this.player4.x,this.player4.y,"bullet",0)
                        this.bullet6player4.visible = false
                        this.velocityplayer4 = message[i].playerVelocity
                        this.accelerationplayer4 = message[i].playerAcceleration
                        this.countplayer4 = message[i].playerCount
                        this.count2player4 = message[i].playerCount2
                        this.radiusplayer4 = message[i].playerRadius
                        this.radius2player4 = message[i].playerRadius2
                  }
                  //Add code here that is being updated constantly by another sockets inputs
                    break;
  
              default:
                  break;
            }

        }
    })

    //---------------------------------------------------------

    //-----------------------------------------------------------Player Disconnect
    gameState.socket.on("PlayerDisconnect",(message)=>{
        //console.log("Trying to delete a player from this list: ",message)
        
            switch(message.playerName){
                case "player 1":
                    this.player.visible = false
                    //this.physics.world.removeCollider(gameState.colliderP1P2)
                    //this.physics.world.removeCollider(gameState.colliderP1P3)
                    //this.physics.world.removeCollider(gameState.colliderP1P4)
                    //this.physics.world.removeCollider(gameState.colliderP2P1)
                    //this.physics.world.removeCollider(gameState.colliderP3P1)
                    //this.physics.world.removeCollider(gameState.colliderP4P1)
                    
                    break;
                case "player 2":
                    this.player2.visible = false
                    /*
                    this.physics.world.removeCollider(gameState.colliderP2P1)
                    this.physics.world.removeCollider(gameState.colliderP2P3)
                    this.physics.world.removeCollider(gameState.colliderP2P4)
                    this.physics.world.removeCollider(gameState.colliderP1P2)
                    this.physics.world.removeCollider(gameState.colliderP3P2)
                    this.physics.world.removeCollider(gameState.colliderP4P2)*/
                    break;
                case "player 3":
                    this.player3.visible = false
                    /*
                    this.physics.world.removeCollider(gameState.colliderP3P1)
                    this.physics.world.removeCollider(gameState.colliderP3P2)
                    this.physics.world.removeCollider(gameState.colliderP3P4)
                    this.physics.world.removeCollider(gameState.colliderP1P3)
                    this.physics.world.removeCollider(gameState.colliderP2P3)
                    this.physics.world.removeCollider(gameState.colliderP4P3)*/
                    break;
                case "player 4":
                    this.player4.visible = false
                    /*
                    this.physics.world.removeCollider(gameState.colliderP4P1)
                    this.physics.world.removeCollider(gameState.colliderP4P2)
                    this.physics.world.removeCollider(gameState.colliderP4P3)
                    this.physics.world.removeCollider(gameState.colliderP1P4)
                    this.physics.world.removeCollider(gameState.colliderP2P4)
                    this.physics.world.removeCollider(gameState.colliderP3P4)*/
                    break;
                default:
                    break;
            }
        
    })
    //-----------------------------------------------------------Player Disconnect end
    //-----------------------------------------------------------Player Damage
    gameState.socket.on("player2Damage",(message)=>{
        //console.log("Player 2 recieved damage")
        //console.log("This is player 2's health: ", this.player2Health)
        this.player2Health -=2
        if(this.player2Health<=0){
         
            //this.playerHealth = 100;
            //gameState.player2Health =100
            
            this.randomX = Math.floor((Math.random()*315)+1)
            this.randomY = Math.floor(((Math.random())*170)+1)

            //this.player = this.physics.add.sprite( this.randomX, this.randomY,"player",0)

            this.player2.x = this.randomX
            this.player2.y = this.randomY
            
            
        }
    })
    gameState.socket.on("playerDamage",(message)=>{
        this.playerHealth -=2
        if(this.playerHealth<=0){
        
            //this.playerHealth = 100;
            //gameState.player2Health =100
            
            this.randomX = Math.floor((Math.random()*315)+1)
            this.randomY = Math.floor(((Math.random())*170)+1)

            //this.player = this.physics.add.sprite( this.randomX, this.randomY,"player",0)

            this.player.x = this.randomX
            this.player.y = this.randomY
            
            
        }
    })
    gameState.socket.on("player3Damage",(message)=>{
        this.player3Health -=2
        if(this.player3Health<=0){
          
            //this.player3Health = 100;
            //gameState.player2Health =100
            
            this.randomX = Math.floor((Math.random()*315)+1)
            this.randomY = Math.floor(((Math.random())*170)+1)

            //this.player = this.physics.add.sprite( this.randomX, this.randomY,"player",0)

            this.player3.x = this.randomX
            this.player3.y = this.randomY
            
         
            
        }
    })
    gameState.socket.on("player4Damage",(message)=>{
        this.player4Health -=2
        if(this.player4Health<=0){
           
            //this.player4Health = 100;
            //gameState.player2Health =100
            
            this.randomX = Math.floor((Math.random()*315)+1)
            this.randomY = Math.floor(((Math.random())*170)+1)

            //this.player = this.physics.add.sprite( this.randomX, this.randomY,"player",0)

            this.player4.x = this.randomX
            this.player4.y = this.randomY
           
         
            
        }
    })
    //-----------------------------------------------------------Player Damage end
    //-----------------------------------------------------------Player Score
    gameState.socket.on("playerScore",(message)=>{
        if(message>5){
            alert("Game over. Player 1 wins!!")
            gameState.playerOneScore = 0
            //gameState.playerOne.x = 50
            //gameState.playerOne.y = 50
        }
        gameState.playerOneScore ++
    })
    gameState.socket.on("player2Score",(message)=>{
        if(message>5){
            alert("Game over. Player 2 wins!!")
            gameState.playerTwoScore = 0
            //gameState.playerOne.x = 520
            //gameState.playerOne.y = 50
        }
        gameState.playerTwoScore ++
    })
    gameState.socket.on("player3Score",(message)=>{
        if(message>5){
            alert("Game over. Player 3 wins!!")
            gameState.playerThreeScore = 0
            //gameState.playerOne.x = 50
            //gameState.playerOne.y = 330
        }
        gameState.playerThreeScore ++
    })
    gameState.socket.on("player4Score",(message)=>{
        if(message>5){
            alert("Game over. Player 4 wins!!")
            gameState.playerFourScore = 0
            //gameState.playerOne.x = 520
            //gameState.playerOne.y = 330
        }
        gameState.playerFourScore ++
    })
    //-----------------------------------------------------------Player Score end

    bg = this.add.sprite(0,0,"background")
    bg.setPosition(320,180)
   

    this.cursors = this.input.keyboard.createCursorKeys();

    gameState.socket.on("PlayerOutputAngle", (message)=>{
                
        switch(message.playerName){
            case "player 1":
                this.player.angle +=5
                break;
            case "player 2":
              this.player2.angle +=5
                break;
            case "player 3":
              this.player3.angle +=5
                break;
            case "player 4":
              this.player4.angle +=5
                break;
            default:
                break;
          

          
        }
    
    })      


//---------------------------------------------------------------------------Wave bullets and teleport start

gameState.socket.on("PlayerOutputBulletsWave", (message)=>{
                    
                        
    switch(message.playerName){
        case "player 1":
            this.bullet2player.visible = true
            this.bullet3player.visible = true
            this.bullet4player.visible = true
            this.bullet5player.visible = true
            this.bullet2player.x  =  ((Math.cos((Math.PI/180)*this.count2player)*this.radiusplayer)+this.player.x)
            this.bullet2player.y =  ((Math.sin((Math.PI/180)*this.count2player)*this.radiusplayer)+this.player.y)
            this.bullet3player.x  =  ((Math.cos((Math.PI/180)*(this.count2player+90))*this.radiusplayer)+this.player.x)
            this.bullet3player.y =  ((Math.sin((Math.PI/180)*(this.count2player+90))*this.radiusplayer)+this.player.y)
            this.bullet4player.x  =  ((Math.cos((Math.PI/180)*(this.count2player+180))*this.radiusplayer)+this.player.x)
            this.bullet4player.y =  ((Math.sin((Math.PI/180)*(this.count2player+180))*this.radiusplayer)+this.player.y)
            this.bullet5player.x  =  ((Math.cos((Math.PI/180)*(this.count2player+270))*this.radiusplayer)+this.player.x)
            this.bullet5player.y =  ((Math.sin((Math.PI/180)*(this.count2player+270))*this.radiusplayer)+this.player.y)
            this.count2player +=10
            this.radiusplayer += 2
            
            
            if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet2player.getBounds(),this.player2.getBounds())||
               Phaser.Geom.Intersects.RectangleToRectangle(this.bullet3player.getBounds(),this.player2.getBounds())||
               Phaser.Geom.Intersects.RectangleToRectangle(this.bullet4player.getBounds(),this.player2.getBounds())||
               Phaser.Geom.Intersects.RectangleToRectangle(this.bullet5player.getBounds(),this.player2.getBounds())||
               Phaser.Geom.Intersects.RectangleToRectangle(this.bullet6player.getBounds(),this.player2.getBounds())){

                
               
                gameState.socket.emit("player2Damage",{})
                

                
                
               
             
                

              
            }else if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet2player.getBounds(),this.player3.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet3player.getBounds(),this.player3.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet4player.getBounds(),this.player3.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet5player.getBounds(),this.player3.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet6player.getBounds(),this.player3.getBounds())){
             
               
                gameState.socket.emit("player3Damage",{})
                
                
               
            }else if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet2player.getBounds(),this.player4.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet3player.getBounds(),this.player4.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet4player.getBounds(),this.player4.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet5player.getBounds(),this.player4.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet6player.getBounds(),this.player4.getBounds())){
               
                gameState.socket.emit("player4Damage",{})
                
                
               
            }
            if(this.player2Health<=0){
               
                gameState.socket.emit("playerScore",{})
                gameState.socket.emit("resetPlayer2Health",{})
                this.player2Health=100
                
            }else if(this.player3Health<=0){
               
                gameState.socket.emit("playerScore",{})
                gameState.socket.emit("resetPlayer3Health",{})
                this.player3Health=100
            }else if(this.player4Health<=0){
               
                gameState.socket.emit("playerScore",{})
                gameState.socket.emit("resetPlayer4Health",{})
                this.player4Health=100
            }
            break;
        case "player 2":
            this.bullet2player2.visible = true
            this.bullet3player2.visible = true
            this.bullet4player2.visible = true
            this.bullet5player2.visible = true
            this.bullet2player2.x  =  ((Math.cos((Math.PI/180)*this.count2player2)*this.radiusplayer2)+this.player2.x)
            this.bullet2player2.y =  ((Math.sin((Math.PI/180)*this.count2player2)*this.radiusplayer2)+this.player2.y)
            this.bullet3player2.x  =  ((Math.cos((Math.PI/180)*(this.count2player2+90))*this.radiusplayer2)+this.player2.x)
            this.bullet3player2.y =  ((Math.sin((Math.PI/180)*(this.count2player2+90))*this.radiusplayer2)+this.player2.y)
            this.bullet4player2.x  =  ((Math.cos((Math.PI/180)*(this.count2player2+180))*this.radiusplayer2)+this.player2.x)
            this.bullet4player2.y =  ((Math.sin((Math.PI/180)*(this.count2player2+180))*this.radiusplayer2)+this.player2.y)
            this.bullet5player2.x  =  ((Math.cos((Math.PI/180)*(this.count2player2+270))*this.radiusplayer2)+this.player2.x)
            this.bullet5player2.y =  ((Math.sin((Math.PI/180)*(this.count2player2+270))*this.radiusplayer2)+this.player2.y)
            this.count2player2 +=10
            this.radiusplayer2 += 2
            
            if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet2player2.getBounds(),this.player.getBounds())||
               Phaser.Geom.Intersects.RectangleToRectangle(this.bullet3player2.getBounds(),this.player.getBounds())||
               Phaser.Geom.Intersects.RectangleToRectangle(this.bullet4player2.getBounds(),this.player.getBounds())||
               Phaser.Geom.Intersects.RectangleToRectangle(this.bullet5player2.getBounds(),this.player.getBounds())||
               Phaser.Geom.Intersects.RectangleToRectangle(this.bullet6player2.getBounds(),this.player.getBounds())){

               
                gameState.socket.emit("playerDamage",{})
                
                
               
                

              
            }else if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet2player2.getBounds(),this.player3.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet3player2.getBounds(),this.player3.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet4player2.getBounds(),this.player3.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet5player2.getBounds(),this.player3.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet6player2.getBounds(),this.player3.getBounds())){
               
                gameState.socket.emit("player3Damage",{})
                
                
               
            }else if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet2player2.getBounds(),this.player4.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet3player2.getBounds(),this.player4.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet4player2.getBounds(),this.player4.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet5player2.getBounds(),this.player4.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet6player2.getBounds(),this.player4.getBounds())){
               
                gameState.socket.emit("player4Damage",{})
                
                
               
            }
            if(this.playerHealth<=0){

               
                gameState.socket.emit("player2Score",{})
                gameState.socket.emit("resetPlayer1Health",{})
                this.playerHealth=100

            }else if(this.player3Health<=0){
               
                gameState.socket.emit("player2Score",{})
                gameState.socket.emit("resetPlayer3Health",{})
                this.player3Health=100

            }else if(this.player4Health<=0){
               
                gameState.socket.emit("player2Score",{})
                gameState.socket.emit("resetPlayer4Health",{})
                this.player4Health=100

            }
            break;
        case "player 3":
            this.bullet2player3.visible = true
            this.bullet3player3.visible = true
            this.bullet4player3.visible = true
            this.bullet5player3.visible = true
            this.bullet2player3.x  =  ((Math.cos((Math.PI/180)*this.count2player3)*this.radiusplayer3)+this.player3.x)
            this.bullet2player3.y =  ((Math.sin((Math.PI/180)*this.count2player3)*this.radiusplayer3)+this.player3.y)
            this.bullet3player3.x  =  ((Math.cos((Math.PI/180)*(this.count2player3+90))*this.radiusplayer3)+this.player3.x)
            this.bullet3player3.y =  ((Math.sin((Math.PI/180)*(this.count2player3+90))*this.radiusplayer3)+this.player3.y)
            this.bullet4player3.x  =  ((Math.cos((Math.PI/180)*(this.count2player3+180))*this.radiusplayer3)+this.player3.x)
            this.bullet4player3.y =  ((Math.sin((Math.PI/180)*(this.count2player3+180))*this.radiusplayer3)+this.player3.y)
            this.bullet5player3.x  =  ((Math.cos((Math.PI/180)*(this.count2player3+270))*this.radiusplayer3)+this.player3.x)
            this.bullet5player3.y =  ((Math.sin((Math.PI/180)*(this.count2player3+270))*this.radiusplayer3)+this.player3.y)
            this.count2player3 +=10
            this.radiusplayer3 += 2
            
            if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet2player3.getBounds(),this.player.getBounds())||
               Phaser.Geom.Intersects.RectangleToRectangle(this.bullet3player3.getBounds(),this.player.getBounds())||
               Phaser.Geom.Intersects.RectangleToRectangle(this.bullet4player3.getBounds(),this.player.getBounds())||
               Phaser.Geom.Intersects.RectangleToRectangle(this.bullet5player3.getBounds(),this.player.getBounds())||
               Phaser.Geom.Intersects.RectangleToRectangle(this.bullet6player3.getBounds(),this.player.getBounds())){

               
                
                gameState.socket.emit("playerDamage",{})
                
                
               
                

              
            }else if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet2player3.getBounds(),this.player2.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet3player3.getBounds(),this.player2.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet4player3.getBounds(),this.player2.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet5player3.getBounds(),this.player2.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet6player3.getBounds(),this.player2.getBounds())){
               
                gameState.socket.emit("player2Damage",{})
                
                
               
                
            }else if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet2player3.getBounds(),this.player4.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet3player3.getBounds(),this.player4.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet4player3.getBounds(),this.player4.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet5player3.getBounds(),this.player4.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet6player3.getBounds(),this.player4.getBounds())){
         
               
                gameState.socket.emit("player4Damage",{})//
                
                
               
            }
            if(this.playerHealth<=0){
               
                gameState.socket.emit("player3Score",{})
                gameState.socket.emit("resetPlayer1Health",{})
                this.playerHealth=100

            }else if(this.player2Health<=0){
               
                gameState.socket.emit("player3Score",{})
                gameState.socket.emit("resetPlayer2Health",{})
                this.player2Health=100

            }else if(this.player4Health<=0){
               
                gameState.socket.emit("player3Score",{})
                gameState.socket.emit("resetPlayer4Health",{})
                this.player4Health=100
            }
            break;

        case "player 4":
            this.bullet2player4.visible = true
            this.bullet3player4.visible = true
            this.bullet4player4.visible = true
            this.bullet5player4.visible = true
            this.bullet2player4.x  =  ((Math.cos((Math.PI/180)*this.count2player4)*this.radiusplayer4)+this.player4.x)
            this.bullet2player4.y =  ((Math.sin((Math.PI/180)*this.count2player4)*this.radiusplayer4)+this.player4.y)
            this.bullet3player4.x  =  ((Math.cos((Math.PI/180)*(this.count2player4+90))*this.radiusplayer4)+this.player4.x)
            this.bullet3player4.y =  ((Math.sin((Math.PI/180)*(this.count2player4+90))*this.radiusplayer4)+this.player4.y)
            this.bullet4player4.x  =  ((Math.cos((Math.PI/180)*(this.count2player4+180))*this.radiusplayer4)+this.player4.x)
            this.bullet4player4.y =  ((Math.sin((Math.PI/180)*(this.count2player4+180))*this.radiusplayer4)+this.player4.y)
            this.bullet5player4.x  =  ((Math.cos((Math.PI/180)*(this.count2player4+270))*this.radiusplayer4)+this.player4.x)
            this.bullet5player4.y =  ((Math.sin((Math.PI/180)*(this.count2player4+270))*this.radiusplayer4)+this.player4.y)
            this.count2player4 +=10
            this.radiusplayer4 += 2
            
            if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet2player4.getBounds(),this.player.getBounds())||
               Phaser.Geom.Intersects.RectangleToRectangle(this.bullet3player4.getBounds(),this.player.getBounds())||
               Phaser.Geom.Intersects.RectangleToRectangle(this.bullet4player4.getBounds(),this.player.getBounds())||
               Phaser.Geom.Intersects.RectangleToRectangle(this.bullet5player4.getBounds(),this.player.getBounds())||
               Phaser.Geom.Intersects.RectangleToRectangle(this.bullet6player4.getBounds(),this.player.getBounds())){

                
               
                gameState.socket.emit("playerDamage",{})
                
                
               
               
                

              
            }else if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet2player4.getBounds(),this.player2.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet3player4.getBounds(),this.player2.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet4player4.getBounds(),this.player2.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet5player4.getBounds(),this.player2.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet6player4.getBounds(),this.player2.getBounds())){
              
               
                gameState.socket.emit("player2Damage",{})
                
                
               
            }else if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet2player4.getBounds(),this.player3.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet3player4.getBounds(),this.player3.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet4player4.getBounds(),this.player3.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet5player4.getBounds(),this.player3.getBounds())||
                     Phaser.Geom.Intersects.RectangleToRectangle(this.bullet6player4.getBounds(),this.player3.getBounds())){
               
               
                gameState.socket.emit("player3Damage",{})
                
                
               
         
            }
            if(this.playerHealth<=0){

               
                gameState.socket.emit("player4Score",{})
                gameState.socket.emit("resetPlayer1Health",{})
                this.playerHealth=100

            }else if(this.player3Health<=0){
               
                gameState.socket.emit("player4Score",{})
                gameState.socket.emit("resetPlayer3Health",{})
                this.player3Health=100


            }else if(this.player2Health<=0){
               
                gameState.socket.emit("player4Score",{})
                gameState.socket.emit("resetPlayer2Health",{})
                this.player2Health=100

            }
            break;

        default:
            break;
      

      
    }


})


//---------------------------------------------------------------------------Wave bullets and teleport end
//---------------------------------------------------------------------------Straight bullets and teleport start
/*
gameState.socket.on("PlayerOutputBulletsWave", (message)=>{
 
    switch(message.playerName){
        case "player 1":
            if(this.player2Health<=0){

                //this.player2Health = 100;
                //gameState.player2Health =100
                
                this.randomX = Math.floor((Math.random()*315)+1)
                this.randomY = Math.floor(((Math.random())*170)+1)
    
                //this.player = this.physics.add.sprite( this.randomX, this.randomY,"player",0)
    
                this.player2.x = this.randomX
                this.player2.y = this.randomY
            }
            break;
        default:
            break;

    }
}) */
//---------------------------------------------------------------------------Straight bullets and teleport end

//---------------------------------------------------------------------------New Coordinates after teleport start

gameState.socket.on("PlayerOutputNewCoordinates", (message)=>{
    switch(message.playerName){
        case "player 1":
            this.player.x = message.newCoordinates.x
            this.player.y = message.newCoordinates.y
            this.bullet2player.visible = false
            this.bullet3player.visible = false
            this.bullet4player.visible = false
            this.bullet5player.visible = false
            this.count2player = 0
            this.radiusplayer = 0
            break;
        case "player 2":
            this.player2.x = message.newCoordinates.x
            this.player2.y = message.newCoordinates.y
            this.bullet2player2.visible = false
            this.bullet3player2.visible = false
            this.bullet4player2.visible = false
            this.bullet5player2.visible = false
            this.count2player2 = 0
            this.radiusplayer2 = 0
            break;
        case "player 3":
            this.player3.x = message.newCoordinates.x
            this.player3.y = message.newCoordinates.y
            this.bullet2player3.visible = false
            this.bullet3player3.visible = false
            this.bullet4player3.visible = false
            this.bullet5player3.visible = false
            this.count2player3 = 0
            this.radiusplayer3 = 0
            break;
        case "player 4":
            this.player4.x = message.newCoordinates.x
            this.player4.y = message.newCoordinates.y
            this.bullet2player4.visible = false
            this.bullet3player4.visible = false
            this.bullet4player4.visible = false
            this.bullet5player4.visible = false
            this.count2player4 = 0
            this.radiusplayer4 = 0
            break;
        default:
            break;
    }
})
//---------------------------------------------------------------------------New Coordinates end

//---------------------------------------------------------------------------Reset Count

gameState.socket.on("PlayerOutputResetCount",(message)=>{
    //console.log("This is message.playerName inside playerOutputResetCount: ", message.playerName)
    switch(message.playerName){
        case "player 1":
            //console.log("This is message.count: ",message.count)
          
            this.countplayer = message.count
            this.count2player = message.count2
            this.radiusplayer = 0
            this.radiusplayer = message.radius
            this.bullet2player.visible = false
            this.bullet3player.visible = false
            this.bullet4player.visible = false
            this.bullet5player.visible = false
            break;
        case "player 2":
          
            this.countplayer2 = message.count
            this.count2player2 = message.count2
            this.radiusplayer2 = 0
            this.radiusplayer2 = message.radius
            this.bullet2player2.visible = false
            this.bullet3player2.visible = false
            this.bullet4player2.visible = false
            this.bullet5player2.visible = false
            break;
        case "player 3":
        
            this.countplayer3 = message.count
            this.count2player3 = message.count2
            this.radiusplayer3 = 0
            this.radiusplayer3 = message.radius
            this.bullet2player3.visible = false
            this.bullet3player3.visible = false
            this.bullet4player3.visible = false
            this.bullet5player3.visible = false
            break;
        case "player 4":
       
            this.countplayer4 = message.count
            this.count2player4 = message.count2
            this.radiusplayer4 = 0
            this.radiusplayer4 = message.radius
            this.bullet2player4.visible = false
            this.bullet3player4.visible = false
            this.bullet4player4.visible = false
            this.bullet5player4.visible = false
            break;
        default:
            break;
    }
})

//---------------------------------------------------------------------------Reset Count End

//---------------------------------------------------------------------------CurrentLocationXY


//---------------------------------------------------------------------------CurrentLocationXY end

//---------------------------------------------------------------------------XY

//---------------------------------------------------------------------------XY end


//-----------------------------------------------------------------Current player
gameState.socket.on("CurrentPlayerOutput",(message)=>{
    gameState.currentPlayer = message.playerName
})
//------------------------------------------------------------------Current player end


this.count = 0
   
    


}


gameScene.update = function(){

    //Add functionality: check the player angles frequently. there is the angles of the players on your screen and the actual angles of the players.
        gameState.socket.on("PlayerOutputAngleConstant",(message)=>{

        })

    //Method to keep accurate track of the players location in each client
    if(gameState.currentPlayer){
        //console.log("Current player is: ",gameState.currentPlayer)
  

        switch(gameState.currentPlayer){
            case "player 1":
                //console.log("Current players x location is : ",gameState.playerOne.x)
                gameState.socket.emit("player1Location",{
                    x: gameState.playerOne.x,
                    y: gameState.playerOne.y
                })
                gameState.socket.emit("Player1InputAngleConstant", {
                    angle: gameState.playerOne.angle
                })   
                break;
            case "player 2":
                //console.log("Current players x location is : ",gameState.playerTwo.x)
                gameState.socket.emit("player2Location",{
                    x: gameState.playerTwo.x,
                    y: gameState.playerTwo.y
                })
                gameState.socket.emit("Player2InputAngleConstant", {
                    angle: gameState.playerTwo.angle
                })   
                break;
            case "player 3":
                //console.log("Current players x location is : ",gameState.playerThree.x)
                gameState.socket.emit("player3Location",{
                    x: gameState.playerThree.x,
                    y: gameState.playerThree.y
                })
                gameState.socket.emit("Player3InputAngleConstant", {
                    angle: gameState.playerThree.angle
                })   
                break;
            case "player 4":
                //console.log("Current players x location is : ",gameState.playerFour.x)
                gameState.socket.emit("player4Location",{
                    x: gameState.playerFour.x,
                    y: gameState.playerFour.y
                })
                gameState.socket.emit("Player4InputAngleConstant", {
                    angle: gameState.playerFour.angle
                })   
                break;
            default:
                break;
        }
    }

        gameState.socket.on("player1LocationOutput",(message)=>{
            gameState.playerOne.x = message.x
            gameState.playerOne.y = message.y
        })
        gameState.socket.on("player2LocationOutput",(message)=>{
            gameState.playerTwo.x = message.x
            gameState.playerTwo.y = message.y
        })
        gameState.socket.on("player3LocationOutput",(message)=>{
            gameState.playerThree.x = message.x
            gameState.playerThree.y = message.y
        })
        gameState.socket.on("player4LocationOutput",(message)=>{
            gameState.playerFour.x = message.x
            gameState.playerFour.y = message.y
        })
        gameState.socket.on("PlayerOutputAngleConstant",(message)=>{
            
            gameState.playerOne.angle = message.playerAngle
        })
        gameState.socket.on("Player2OutputAngleConstant",(message)=>{
            gameState.playerTwo.angle = message.playerAngle
        })
        gameState.socket.on("Player3OutputAngleConstant",(message)=>{
            gameState.playerThree.angle = message.playerAngle
        })
        gameState.socket.on("Player4OutputAngleConstant",(message)=>{
            gameState.playerFour.angle = message.playerAngle
        })
        gameState.socket.on("resetPlayer1Health",(message)=>{
            this.playerHealth = 100
        })
        gameState.socket.on("resetPlayer2Health",(message)=>{
            this.player2Health = 100
        })
        gameState.socket.on("resetPlayer3Health",(message)=>{
            this.player3Health = 100
        })
        gameState.socket.on("resetPlayer4Health",(message)=>{
            this.player4Health = 100
        })
   
        //gameState.socket.emit("PlayerInputCurrentLocation",{})

      


    
   

    if(this.cursors.space.isDown){

       //if the space bar is down for longer than 2 seconds start spinning else fire bullet
       

        //start rotating
        //if count greater than __ change the angle and then reset the count
        this.count += 1

 

        if(this.count > 12){
             
            /*
            var playerDataAngle = {
                angleIncrease: 5
            }*/
            gameState.socket.emit("PlayerInputAngle", {
                angle: gameState.currentPlayer.angle
            })   

            
        }

        //Conditional statement that causes a bullet to spin around the player 

        if(this.count>50&&this.count<120){

                //Create trigger for wave bullets
                
                    

                gameState.socket.emit("PlayerInputBulletsWave", {} )



            
            //----------------------------------------------------------------
    
            //--------------------------------------------------------------
            
           

        };

        
        


        //Conditional statement that causes the player to disappear when 
        if(this.count===120){

           
            /*
            const newCoordinates = {
                x: Math.floor((Math.random()*315)+1),
                y: Math.floor(((Math.random())*170)+1)
            }*/

            gameState.socket.emit("PlayerInputNewCoordinates",  {
                x: Math.floor((Math.random()*315)+1),
                y: Math.floor(((Math.random())*170)+1)
            })

       

         
           
            
        }



        this.downFlag = true
    }else{

       

        if(this.downFlag){

            //gameState.socket.emit("PlayerInputBulletsStraight", {} )

            //reset this.count 
            this.count = 0
            this.downFlag = false;
         
            

            gameState.socket.emit("PlayerInputResetCount", {
                count: 0,
                count2: 0,
                radius: 1
            })
            
          

        
           

            


            //if the spacebar is clicked once fire bullets
            // the durations of 1 click is approximately 133 miliseconds
            if(this.cursors.space.duration<150){

                //this.bullet = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
                //this.bullet.angle = this.player.angle + 90

               


                gameState.socket.emit("PlayerInputBullets", {
                    bullet: null,
                    bulletAngle: 90,
                    bulletVisible: true

                })

                //--------------Start editing in the section below
                gameState.socket.on("PlayerOutputBullets", (message)=>{
                    //console.log("The playerOutputsBullets is working. Heres the message: ",message)
                    
                    switch(message.playerName){
                        case "player 1":
                            this.bulletplayer = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
                            this.bulletplayer.angle = this.player.angle + message.bulletAngle
                            this.bulletplayer.visible = message.bulletVisible
                            if(gameState.currentPlayer === "player 1"){
                                this.player.setVelocityX(Math.cos((Math.PI/180)*this.player.angle)*this.velocityplayer)
                                this.player.setVelocityY(Math.sin((Math.PI/180)*this.player.angle)*this.velocityplayer)
                            }
                            
                            this.bulletplayer.setVelocityX(Math.cos((Math.PI/180)*this.player.angle)*500)
                            this.bulletplayer.setVelocityY(Math.sin((Math.PI/180)*this.player.angle)*500)

                            //console.log("Do the straight bullets exist?: ",this.bulletplayer.getBounds())
                            //console.log("Does player two exist as a rectangle?: ",gameState.playerTwo.getBounds())
                            //console.log("Final test truthyness: ",Phaser.Geom.Intersects.RectangleToRectangle(this.bulletplayer.getBounds(),gameState.playerTwo.getBounds()))

                            if(gameState.playerTwo){
                                if(Phaser.Geom.Intersects.RectangleToRectangle(this.bulletplayer.getBounds(),gameState.playerTwo.getBounds())){

                                    gameState.socket.emit("player2Damage",{})
               
                                }
                                if(this.player2Health<=0){
                    
                                    //this.player2Health = 100;
                                    //gameState.player2Health =100
                                    
                                    this.randomX = Math.floor((Math.random()*315)+1)
                                    this.randomY = Math.floor(((Math.random())*170)+1)
                        
                                    //this.player = this.physics.add.sprite( this.randomX, this.randomY,"player",0)
                        
                                    this.player2.x = this.randomX
                                    this.player2.y = this.randomY
                                }

                            }
                          
                            
                            break;
                        case "player 2":
                            this.bulletplayer2 = this.physics.add.sprite(this.player2.x,this.player2.y,"bullet",0)
                            this.bulletplayer2.angle = this.player2.angle + message.bulletAngle
                            this.bulletplayer2.visible = message.bulletVisible
                            if(gameState.currentPlayer==="player 2"){
                                this.player2.setVelocityX(Math.cos((Math.PI/180)*this.player2.angle)*this.velocityplayer2)
                                this.player2.setVelocityY(Math.sin((Math.PI/180)*this.player2.angle)*this.velocityplayer2)
                            }
                            
                            this.bulletplayer2.setVelocityX(Math.cos((Math.PI/180)*this.player2.angle)*500)
                            this.bulletplayer2.setVelocityY(Math.sin((Math.PI/180)*this.player2.angle)*500)
                            
                           
            
                            break;
                        case "player 3":
                            this.bulletplayer3 = this.physics.add.sprite(this.player3.x,this.player3.y,"bullet",0)
                            this.bulletplayer3.angle = this.player3.angle + message.bulletAngle
                            this.bulletplayer3.visible = message.bulletVisible
                            if(gameState.currentPlayer==="player 3"){
                                this.player3.setVelocityX(Math.cos((Math.PI/180)*this.player3.angle)*this.velocityplayer3)
                                this.player3.setVelocityY(Math.sin((Math.PI/180)*this.player3.angle)*this.velocityplayer3)
                            }
                     
                            this.bulletplayer3.setVelocityX(Math.cos((Math.PI/180)*this.player3.angle)*500)
                            this.bulletplayer3.setVelocityY(Math.sin((Math.PI/180)*this.player3.angle)*500)
            
                            break;
                        case "player 4":
                            this.bulletplayer4 = this.physics.add.sprite(this.player4.x,this.player4.y,"bullet",0)
                            this.bulletplayer4.angle = this.player4.angle + message.bulletAngle
                            this.bulletplayer4.visible = message.bulletVisible
                            if(gameState.currentPlayer==="player 4"){
                                this.player4.setVelocityX(Math.cos((Math.PI/180)*this.player4.angle)*this.velocityplayer4)
                                this.player4.setVelocityY(Math.sin((Math.PI/180)*this.player4.angle)*this.velocityplayer4)
                            }
                            
                            this.bulletplayer4.setVelocityX(Math.cos((Math.PI/180)*this.player4.angle)*500)
                            this.bulletplayer4.setVelocityY(Math.sin((Math.PI/180)*this.player4.angle)*500)
            
                            break;
                        default:
                            break;
                    }
                })
               
          

              // this.player.setAccelerationX(Math.cos((Math.PI/180)*this.player.angle)*this.velocity)

          

   
                
                
                //console.log("this.velocity other than 150:",this.velocity)
              

            
              

            }

         

            


            //----------------------------
        

           
        }

    }

    //-----------------------
    if(this.bulletplayer){
        //console.log("Working")
        //console.log("bullet bounds: ",this.bulletplayer.getBounds())
        if(gameState.playerTwo){
            if(Phaser.Geom.Intersects.RectangleToRectangle(this.bulletplayer.getBounds(),gameState.playerTwo.getBounds())){
    
               
                gameState.socket.emit("player2Damage",{})
  
              
            }
            if(this.player2Health<=0){
    
              
          
                gameState.socket.emit("playerScore",{})
                gameState.socket.emit("resetPlayer2Health",{})
                this.player2Health=100
            }

        }else if(gameState.playerThree){
            if(Phaser.Geom.Intersects.RectangleToRectangle(this.bulletplayer.getBounds(),gameState.playerThree.getBounds())){
    
               
                gameState.socket.emit("player3Damage",{})
  
              
            }
            if(this.player3Health<=0){
    
          
                gameState.socket.emit("playerScore",{})
                gameState.socket.emit("resetPlayer3Health",{})
                this.player3Health=100
            }
        }else if(gameState.playerFour){
            if(Phaser.Geom.Intersects.RectangleToRectangle(this.bulletplayer.getBounds(),gameState.playerFour.getBounds())){
    
               
                gameState.socket.emit("player4Damage",{})
  
              
            }
            if(this.player4Health<=0){
    
            
                gameState.socket.emit("playerScore",{})
                gameState.socket.emit("resetPlayer4Health",{})
                this.player4Health=100
            }
        }

    }else if(this.bulletplayer2){
          //console.log("Working")
        //console.log("bullet bounds: ",this.bulletplayer.getBounds())
        if(gameState.playerOne){
            if(Phaser.Geom.Intersects.RectangleToRectangle(this.bulletplayer2.getBounds(),gameState.playerOne.getBounds())){
    
               
                gameState.socket.emit("playerDamage",{})
  
              
            }
            if(this.playerHealth<=0){
    
           
                gameState.socket.emit("player2Score",{})
                this.playerHealth=100
            }

        }else if(gameState.playerThree){
            if(Phaser.Geom.Intersects.RectangleToRectangle(this.bulletplayer2.getBounds(),gameState.playerThree.getBounds())){
    
               
                gameState.socket.emit("player3Damage",{})
  
              
            }
            if(this.player3Health<=0){
    
             
                gameState.socket.emit("player2Score",{})
                gameState.socket.emit("resetPlayer3Health",{})
                this.player3Health=100
            }
        }else if(gameState.playerFour){
            if(Phaser.Geom.Intersects.RectangleToRectangle(this.bulletplayer2.getBounds(),gameState.playerFour.getBounds())){
    
               
                gameState.socket.emit("player4Damage",{})
  
              
            }
            if(this.player4Health<=0){
    
             
                gameState.socket.emit("player2Score",{})
                gameState.socket.emit("resetPlayer4Health",{})
                this.player4Health=100
            }
        }

    }else if(this.bulletplayer3){
            //console.log("Working")
        //console.log("bullet bounds: ",this.bulletplayer.getBounds())
        if(gameState.playerTwo){
            if(Phaser.Geom.Intersects.RectangleToRectangle(this.bulletplayer3.getBounds(),gameState.playerTwo.getBounds())){
    
               
                gameState.socket.emit("player2Damage",{})
  
              
            }
            if(this.player2Health<=0){
    
          
                gameState.socket.emit("player3Score",{})
                gameState.socket.emit("resetPlayer2Health",{})
                this.player2Health=100
            }

        }else if(gameState.playerThree){
            if(Phaser.Geom.Intersects.RectangleToRectangle(this.bulletplayer3.getBounds(),gameState.playerOne.getBounds())){
    
               
                gameState.socket.emit("playerDamage",{})
  
              
            }
            if(this.playerHealth<=0){
    
           
                gameState.socket.emit("player3Score",{})
                gameState.socket.emit("resetPlayer1Health",{})
                this.playerHealth=100
            }
        }else if(gameState.playerFour){
            if(Phaser.Geom.Intersects.RectangleToRectangle(this.bulletplayer3.getBounds(),gameState.playerFour.getBounds())){
    
               
                gameState.socket.emit("player4Damage",{})
  
              
            }
            if(this.player4Health<=0){
    
  
                gameState.socket.emit("player3Score",{})
                gameState.socket.emit("resetPlayer4Health",{})
                this.player4Health=100
            }
        }

    }else if(this.bulletplayer4){
            //console.log("Working")
        //console.log("bullet bounds: ",this.bulletplayer.getBounds())
        if(gameState.playerTwo){
            if(Phaser.Geom.Intersects.RectangleToRectangle(this.bulletplayer4.getBounds(),gameState.playerTwo.getBounds())){
    
               
                gameState.socket.emit("player2Damage",{})
  
              
            }
            if(this.player2Health<=0){
    
            
                gameState.socket.emit("player4Score",{})
                gameState.socket.emit("resetPlayer2Health",{})
                this.player2Health=100
            }

        }else if(gameState.playerThree){
            if(Phaser.Geom.Intersects.RectangleToRectangle(this.bulletplayer4.getBounds(),gameState.playerThree.getBounds())){
    
               
                gameState.socket.emit("player3Damage",{})
  
              
            }
            if(this.player3Health<=0){
    
         
                gameState.socket.emit("player4Score",{})
                gameState.socket.emit("resetPlayer3Health",{})
                this.player3Health=100
            }
        }else if(gameState.playerOne){
            if(Phaser.Geom.Intersects.RectangleToRectangle(this.bulletplayer4.getBounds(),gameState.playerOne.getBounds())){
    
               
                gameState.socket.emit("playerDamage",{})
  
              
            }
            if(this.playerHealth<=0){
    
              
                gameState.socket.emit("player4Score",{})
                gameState.socket.emit("resetPlayer1Health",{})
                this.playerHealth=100
            }
        }

    }
    //----------------------------------------


};


//game configuration
var config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    scene: gameScene,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {
                y:0
            }
        }
    }
};


//create a new game, pass the configuration (config)

class Game extends Phaser.Game {
    constructor(){
        super(config)
        
    }
}


var game = new Game()
//var game = new Phaser.Game(config);



