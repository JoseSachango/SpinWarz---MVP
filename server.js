
var express = require("express");
var path = require("path");
var http = require("http");
var socketio = require("socket.io");
//var routes = require("./routes")

const axios = require("axios")

var app = express();

var server = http.createServer(app);

//var io = socketio.listen(server)
var io = socketio(server)


var PORT = process.env.PORT || 3013;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);




// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {



  server.listen(PORT,function(){
    console.log("Server up and running, listening on port:"+PORT)
})
});



//We don't need to write a get route like the one below because our middleware on line 15 renders all the files in the public folder.
/*
app.get("/",function(request,response){

    response.sendFile(path.join(__dirname,"./public/index.html"))
})*/


var playerData = {};
var number = 1

// Run when a client connects using the command -> var socketio = io();
// the argument socket is the particular client that connected.
io.on("connection",function(socket){

    
   

    

    playerData[socket.id] = {playerName:`player ${number}`,playerCount:0,playerRadius:2,playerCount2:0,playerRadius2:100,playerVelocity:60,playerAcceleration:60,playerScore:0,playerAngle:0}
    io.to(socket.id).emit("CurrentPlayerOutput", playerData[socket.id]);
    number += 1
    if(number > 4){
        number = 1
    }

    socket.on("player1Location",(message)=>{
        socket.broadcast.emit("player1LocationOutput",message)
    })
    socket.on("player2Location",(message)=>{
        socket.broadcast.emit("player2LocationOutput",message)
    })
    socket.on("player3Location",(message)=>{
        socket.broadcast.emit("player3LocationOutput",message)
    })
    socket.on("player4Location",(message)=>{
        socket.broadcast.emit("player4LocationOutput",message)
    })
    


    socket.on("PlayerInputAngle", (message)=>{
        for(const i in playerData){

            if(socket.id === i){

                playerData[i].playerAngle = message.angle

                io.emit("PlayerOutputAngle", playerData[i])
                

            }
          
            
        }
        
    })

    socket.on("Player1InputAngleConstant", (message)=>{
        for(const i in playerData){

            if(socket.id === i){

                playerData[i].playerAngle = message.angle

                //io.emit("PlayerOutputAngleConstant", playerData[i])
                socket.broadcast.emit("PlayerOutputAngleConstant", playerData[i])

            }
          
            
        }
    })
    socket.on("Player2InputAngleConstant", (message)=>{
        for(const i in playerData){

            if(socket.id === i){

                playerData[i].playerAngle = message.angle

                //io.emit("Player2OutputAngleConstant", playerData[i])
                socket.broadcast.emit("Player2OutputAngleConstant", playerData[i])
                

            }
          
            
        }
    })
    socket.on("Player3InputAngleConstant", (message)=>{
        for(const i in playerData){

            if(socket.id === i){

                playerData[i].playerAngle = message.angle

                //io.emit("Player3OutputAngleConstant", playerData[i])
                socket.broadcast.emit("Player3OutputAngleConstant", playerData[i])
                

            }
          
            
        }
    })
    socket.on("Player4InputAngleConstant", (message)=>{
        for(const i in playerData){

            if(socket.id === i){

                playerData[i].playerAngle = message.angle

                //io.emit("Player4OutputAngleConstant", playerData[i])
                socket.broadcast.emit("Player4OutputAngleConstant", playerData[i])
                

            }
          
            
        }
    })

    socket.on("PlayerInputBulletsWave", (message)=>{
        for(const i in playerData){

            if(socket.id === i){

                

                io.emit("PlayerOutputBulletsWave", playerData[i])
                

            }
          
            
        }
    })

    socket.on("PlayerInputBulletsStraight", (message)=>{
        for(const i in playerData){

            if(socket.id === i){

                

                io.emit("PlayerOutputBulletsStraight", playerData[i])
                

            }
          
            
        }
    })

    socket.on("PlayerInputNewCoordinates", (message)=>{

        

        for(const i in playerData){

            if(socket.id === i){

                playerData[i].newCoordinates = message
                
                io.emit("PlayerOutputNewCoordinates", playerData[i])
                

            }
          
            
        }
    })

    socket.on("PlayerInputResetCount", (message)=>{

        for(const i in playerData){

            if(socket.id === i){
                playerData[i].count = message.count
                playerData[i].bullet = message.count
                playerData[i].count2 = message.count2
                playerData[i].radius = message.radius

                io.emit("PlayerOutputResetCount", playerData[i])
            }
        }
    })

    socket.on("PlayerInputBullets", (message)=>{
        for(const i in playerData){

            if(socket.id === i){

                playerData[i].bullet = message.bullet
                playerData[i].bulletAngle = message.bulletAngle
                playerData[i].bulletVisible = message.bulletVisible

                io.emit("PlayerOutputBullets", playerData[i])
            }
        }
    })

    socket.on("PlayerInputVelocity", (message)=>{
        for(const i in playerData){

            if(socket.id === i){

              

                io.emit("PlayerOutputputResetCount", playerData[i])
            }
        }
    })

    socket.on("PlayerInputCount",(message)=>{

        for(const i in playerData){

            if(socket.id === i){

              

                io.emit("PlayerOutputCount", playerData[i])
            }
        }
    })

    

    socket.on("PlayerInputXY",(message)=>{
        for(const i in playerData){

            if(socket.id === i){

                playerData[i].x = message.x
                playerData[i].y = message.y

                io.emit("PlayerOutputXY", playerData[i])
            }
        }
    })



    io.emit("playerData", playerData)

    socket.on("disconnect",()=>{
        console.log("Player disconnected from the game: ",socket.id)
        io.emit("PlayerDisconnect", playerData[socket.id])
        delete playerData[socket.id]
        console.log("This is the current player information stored in playerData: ",playerData)
        
    })

    console.log("This is the socket id!!: ",socket.id)



   

    


    

    socket.on("player2Damage",function(message){
        //socket.broadcast.emit("player2Damage",message)
        io.emit("player2Damage",message)
    })

    socket.on("playerDamage",function(message){
        //socket.broadcast.emit("player2Damage",message)
        io.emit("playerDamage",message)
    })

    socket.on("player3Damage",function(message){
        //socket.broadcast.emit("player2Damage",message)
        io.emit("player3Damage",message)
    })

    socket.on("player4Damage",function(message){
        //socket.broadcast.emit("player2Damage",message)
        io.emit("player4Damage",message)
    })
    socket.on("playerScore",function(message){
        if(playerData[socket.id].playerScore>5){
            
            io.emit("playerScore",playerData[socket.id].playerScore)
            playerData[socket.id].playerScore = 0
            console.log("This is the player's score after the game is over: ",playerData[socket.id].playerScore)
        }
        playerData[socket.id].playerScore++
        io.emit("playerScore",playerData[socket.id].playerScore)

        
    })
    socket.on("player2Score",function(message){
        if(playerData[socket.id].playerScore>5){
            
            io.emit("player2Score",playerData[socket.id].playerScore)
            playerData[socket.id].playerScore = 0
        }
        playerData[socket.id].playerScore++
        io.emit("player2Score",playerData[socket.id].playerScore)
    })
    socket.on("player3Score",function(message){
        if(playerData[socket.id].playerScore>5){
          
            io.emit("player3Score",playerData[socket.id].playerScore)
            playerData[socket.id].playerScore = 0
        }
        playerData[socket.id].playerScore++
        io.emit("player3Score",playerData[socket.id].playerScore)
    })
    socket.on("player4Score",function(message){
        if(playerData[socket.id].playerScore>5){
            
            io.emit("player4Score",playerData[socket.id].playerScore)
            playerData[socket.id].playerScore = 0
        }
        playerData[socket.id].playerScore++
        io.emit("player4Score",playerData[socket.id].playerScore)
    })
    socket.on("resetPlayer1Health",function(message){
        io.emit("resetPlayer1Health",{})
    })
    socket.on("resetPlayer2Health",function(message){
        io.emit("resetPlayer2Health",{})
    })
    socket.on("resetPlayer3Health",function(message){
        io.emit("resetPlayer3Health",{})
    })
    socket.on("resetPlayer4Health",function(message){
        io.emit("resetPlayer4Health",{})
    })

 

})


