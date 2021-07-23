// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/player", function(req, res) {
    db.player.findAll({})
      .then(function(dbPlayer) {
        res.json(dbPlayer);
      });
  });

  // Get route for returning posts of a specific category
  app.get("/api/player/:id", function(req, res) {
    db.player.findAll({
      where: {
        socketId: req.params.id
      }
    })
      .then(function(dbFindAll) {
        console.log("The findAll method worked and this is the result: ",dbFindAll)
        res.json(dbFindAll)
      })
      .catch(err=>console.log("There was an error with the findAll method: ",err))
      
  });

  // Get route for retrieving a single post
  /*app.get("/api/posts/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });*/

  // POST route for saving a new post
  app.post("/api/player", function(req, res) {
    console.log("The post request has hit the routes folder: ");
    db.player.create({
      name: req.body.name,
      socketId: req.body.socketId,
      x: req.body.x,
      y: req.body.y,
      angleIncrease: req.body.angleIncrease,
      bullet: null,
      bulletAngle: 90,
      bulletVisible: false,
      health: req.body.health,
      active: req.body.active

    })
      .then(function(dbPlayer) {
        res.json(JSON.stringify(dbPlayer));
        //console.log("This is the response in the routes folder after the post request successfully runs: ",dbPlayer)
      })
      .catch(err=>console.log("There was an error in the api routes folder: ",err))
  });

  // DELETE route for deleting posts
  app.delete("/api/player/:id", function(req, res) {
    db.player.destroy({
      where: {
        socketId: req.params.id
      }
    })
      .then(function(dbPlayer) {
        res.json(JSON.stringify(dbPlayer));
      })
      .catch(err=>console.log("There was an error in the delete action in the api routes folder: ",err));
  });

  // PUT route for updating posts
  app.put("/api/player/:id", function(req, res) {
    db.player.update(req.body,
      {
        where: {
          socketId: req.params.id
        }
      })
      .then(function(dbPlayerUpdate) {
        res.json(dbPlayerUpdate);
      })
      .catch(err=>{
        console.log("There was something wrong with the update action: ",err)
      });
  });
  app.put("/api/player/location/:id", function(req, res) {
    db.player.update(req.body,
      {
        where: {
          name: req.params.id
        }
      })
      .then(function(dbPlayerUpdate) {
        res.json(dbPlayerUpdate);
      })
      .catch(err=>{
        console.log("There was something wrong with the update action: ",err)
      });
  });
};
